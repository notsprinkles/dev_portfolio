import { getVisitorId } from './getVisitorId';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function send(payload) {
  const url = `${API}/api/events`;
  const body = JSON.stringify(payload);
 
  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' });
    navigator.sendBeacon(url, blob);
    return;
  }
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true
  }).catch(() => {});
}

export function trackEvent(type, meta = {}) {
  const visitorId = getVisitorId();
  send({
    type,
    page: window.location.pathname,
    visitorId,
    meta
  });
}


export function withUtm(href, { source = 'portfolio', medium = 'link', campaign = 'portfolio' } = {}) {
  try {
    const u = new URL(href, window.location.origin);
    if (u.origin === window.location.origin) return href; 
    u.searchParams.set('utm_source', source);
    u.searchParams.set('utm_medium', medium);
    u.searchParams.set('utm_campaign', campaign);
    return u.toString();
  } catch {
    return href;
  }
}

export function trackOutbound(href, label) {
  trackEvent('outbound_click', { href, label });
}
