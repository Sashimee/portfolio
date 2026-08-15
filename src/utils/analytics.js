import { Cookies } from 'quasar'

// Google Analytics 4, loaded lazily and only once the visitor has opted in.
// Replaces the former vue-gtag dependency (Vue 2 only).
export const GA_ID = 'G-QLPDSF7Y6S'
export const CONSENT_COOKIE = 'accepted_tracking_cookies'

let scriptLoaded = false

function gtag() {
  // GA requires the raw `arguments` object here, not an array.
  window.dataLayer.push(arguments)
}

export function hasTrackingConsent() {
  return Cookies.get(CONSENT_COOKIE) === true
}

/** Cookie domain GA writes to, so we can clean up after ourselves. */
function cookieDomain() {
  const { hostname } = window.location
  if (hostname === 'localhost' || /^[\d.]+$/.test(hostname)) return undefined
  return '.' + hostname.split('.').slice(-2).join('.')
}

/** Injects gtag.js once. No-op without consent, or on the server. */
export function loadAnalytics() {
  if (scriptLoaded || typeof window === 'undefined' || !hasTrackingConsent()) return

  window.dataLayer = window.dataLayer || []
  gtag('js', new Date())
  // Page views are sent explicitly by the router hook, not on script load.
  gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  scriptLoaded = true
}

export function trackPageview(path) {
  if (!hasTrackingConsent()) return
  loadAnalytics()
  gtag('event', 'page_view', { page_path: path, page_location: window.location.href })
}

export function trackEvent(name, params = {}) {
  if (!hasTrackingConsent()) return
  loadAnalytics()
  gtag('event', name, params)
}

/** Opt-out: stop collection and drop the cookies GA already set. */
export function clearAnalytics() {
  if (typeof window === 'undefined') return

  window[`ga-disable-${GA_ID}`] = true

  const domain = cookieDomain()
  const options = domain ? { domain, path: '/' } : { path: '/' }
  for (const name of ['_ga', '_gid', `_ga_${GA_ID.replace('G-', '')}`]) {
    Cookies.remove(name, options)
    Cookies.remove(name)
  }
}
