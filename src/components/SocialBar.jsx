import { social } from '../data/social';
import '../styles/SocialBar.css';

function SocialBar() {
  return (
    <ul className="social-bar" aria-label="Social links">
      {social.map((s) => (
        <li key={s.href}>
          <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label} ↗</a>
        </li>
      ))}
    </ul>
  );
}

export default SocialBar;
