import { useState } from 'react';
import '../styles/ContactPage.css';

const INITIAL = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',  
  website: ''   
};

function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.website) {
      setError('Spam detected');
      return;
    }

    try {
      setError(null);
      setSuccess(null);
      setLoading(true);

      const res = await fetch('https://formspree.io/f/mblaqnlo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          company: form.company
        })
      });

      if (res.ok) {
        setSuccess('Message sent successfully!');
        setForm(INITIAL); 
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && <div className="banner error">{error}</div>}
      {success && <div className="banner success">{success}</div>}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="honeypot">
        <label htmlFor="website">Website (leave empty)</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          autoComplete="off"
          tabIndex="-1"
        />
      </div>

      <button type="submit" className="btn primary" disabled={loading}>
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
