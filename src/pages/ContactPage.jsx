import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';

function copyEmail() {
  const email = 'j.laraia@icloud.com'; 
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  } else {
    const ta = document.createElement('textarea');
    ta.value = email;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert('Email copied to clipboard!');
  }
}

export default function ContactPage() {
  return (
    <section className="contact-page">
      <header className="contact-head">
        <h1>Contact</h1>
        <p>Project in mind? Let’s chat. I usually reply within 24 hours.</p>
      </header>

      <div className="contact-grid">
        <aside className="contact-info">
          <article className="info-card">
            <h3>Email</h3>
            <p>
              <a className="link" href="mailto:j.laraia@icloud.com">
                j.laraia@icloud.com
              </a>
            </p>
            <button className="btn-small" onClick={copyEmail} type="button">
              Copy
            </button>
          </article>

          <article className="info-card">
            <h3>GitHub</h3>
            <p>See my code and contributions.</p>
            <a
              className="btn"
              href="https://github.com/notsprinkles"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open GitHub ↗
            </a>
          </article>

          <article className="info-card">
            <h3>LinkedIn</h3>
            <p>Let’s connect professionally.</p>
            <a
              className="btn"
              href="https://www.linkedin.com/in/janeen-laraia-89a11b358/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open LinkedIn ↗
            </a>
          </article>
        </aside>

        <div className="contact-form-wrap">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

