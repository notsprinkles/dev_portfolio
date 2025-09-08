import { useTheme } from '../context/ThemeContext.jsx';

import '../styles/ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      style={styles.button}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

const styles = {
  button: {
    background: 'transparent',
    border: '1px solid #444',
    color: 'inherit',
    padding: '0.4rem 0.6rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  }
};

export default ThemeToggle;
