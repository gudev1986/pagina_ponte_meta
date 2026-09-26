const META_PIXEL_ID = '1657454195700990';
const CONSENT_KEY = 'pp_cookie_consent';
let consent = null;
try { consent = localStorage.getItem(CONSENT_KEY); } catch { /* Continue when storage is unavailable. */ }

function loadMetaPixel() {
  if (window.fbq) {
    window.fbq('consent', 'grant');
    return;
  }
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
}

const cookieBox = document.getElementById('cookieBox');
cookieBox.hidden = consent === 'accepted' || consent === 'rejected';
if (consent === 'accepted') loadMetaPixel();

function saveConsent(value) {
  consent = value;
  try { localStorage.setItem(CONSENT_KEY, value); } catch { /* Keep this session's choice in memory. */ }
  cookieBox.hidden = true;
  if (value === 'accepted') loadMetaPixel();
  else if (window.fbq) window.fbq('consent', 'revoke');
  document.getElementById('privacySettings').focus({ preventScroll: true });
}
document.getElementById('acceptCookies').addEventListener('click', () => saveConsent('accepted'));
document.getElementById('rejectCookies').addEventListener('click', () => saveConsent('rejected'));
document.getElementById('privacySettings').addEventListener('click', () => {
  cookieBox.hidden = false;
  document.getElementById('rejectCookies').focus({ preventScroll: true });
});
document.querySelectorAll('.join-link').forEach(link => {
  link.addEventListener('click', () => {
    if (consent === 'accepted' && window.fbq) {
      const detail = { placement: link.dataset.position };
      window.fbq('trackCustom', 'JoinGroupClick', detail);
      window.fbq('track', 'Lead', detail);
    }
  });
});
