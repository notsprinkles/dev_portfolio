export function getVisitorId() {
  const KEY = 'visitor_id';
  const found = document.cookie.split('; ').find(r => r.startsWith(KEY + '='));
  if (found) return found.split('=')[1];
  const id = (crypto?.randomUUID?.() || Math.random().toString(36).slice(2)) + Date.now().toString(36);
  document.cookie = `${KEY}=${id}; path=/; max-age=${60*60*24*365}`;
  return id;
}
