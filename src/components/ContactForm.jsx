import { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/ContactPage.css';

const FORM_ENDPOINT = 'https://formspree.io/f/mblaqnlo';

const INITIAL = { name: '', email: '', subject: '', message: '', company: '' /* visible */ , website: '' /* honeypot */ };

export default function ContactForm() {
  const [data, setData] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverMsg, setServerMsg] = useState('');
  const liveRef = useRef(null);

  
  const emailOk = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()), [data.email]);
  const nameOk = useMemo(() => data.name.trim().length >= 2, [data.name]);
  const msgOk  = useMemo(() => data.message.trim().length >= 10, [data.message]);

  useEffect(() => {
    if (!liveRef.current) return;
    if (status === 'success') liveRef.current.focus();
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(d => ({ ...d, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!nameOk) next.name = 'Please enter at least 2 characters.';
    if (!emailOk) next.email = 'Please enter a valid email.';
    if (!msgOk) next.message = 'Message should be 10+ characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    setServerMsg('');
    if (!validate()) return;

    if (data.website) {
      setStatus('success');
      setData(INITIAL);
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.currentTarget),
      });

      if (res.ok) {
        setStatus('success');
        setData(INITIAL);
        setServerMsg('Thanks! Your message has been sent.');
      } else {
        const json = await res.json().catch(() => ({}));
        setStatus('error');
        setServerMsg(json?.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setServerMsg('Network error. Check your connection and try again.');
    }
  };

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {/* ARIA live region for status updates */}
      <p
        ref={liveRef}
        className="sr-only"
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
      >
        {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent!' : status === 'error' ? 'Error.' : ''}
      </p>

      <div className="hp">
        <label>Website (leave this empty)</label>
        <input type="text" name="website" value={data.website} onChange={handleChange} autoComplete="off" />
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name" name="name" type="text" autoComplete="name" required
            value={data.name} onChange={handleChange}
            aria-invalid={!!errors.name} aria-describedby="name-err"
          />
          {errors.name && <div className="err" id="name-err">{errors.name}</div>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email" autoComplete="email" required
            value={data.email} onChange={handleChange}
            aria-invalid={!!errors.email} aria-describedby="email-err"
          />
          {errors.email && <div className="err" id="email-err">{errors.email}</div>}
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="company">Company (optional)</label>
          <input
            id="company" name="company" type="text" autoComplete="organization"
            value={data.company} onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="subject">Subject (optional)</label>
          <input
            id="subject" name="subject" type="text"
            value={data.subject} onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message" name="message" rows={6} required
          value={data.message} onChange={handleChange}
          aria-invalid={!!errors.message} aria-describedby="message-err"
          placeholder="Tell me about your project, goals, timeline…"
        />
        {errors.message && <div className="err" id="message-err">{errors.message}</div>}
      </div>

      {serverMsg && (
        <div className={`banner ${status === 'success' ? 'ok' : 'bad'}`}>
          {serverMsg}
        </div>
      )}

      <div className="actions">
        <button
          className="btn primary"
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        <button
          className="btn"
          type="button"
          onClick={() => setData(INITIAL)}
          disabled={status === 'sending'}
          title="Clear form"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
