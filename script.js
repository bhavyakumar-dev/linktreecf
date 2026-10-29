// Version Switching Logic
const btnV1 = document.getElementById('btnV1');
const btnV2 = document.getElementById('btnV2');
const viewV1 = document.getElementById('viewV1');
const viewV2 = document.getElementById('viewV2');
const v1ThemeBtn = document.getElementById('v1ThemeBtn');
const v1ThemeIcon = document.getElementById('v1ThemeIcon');
const masterCopyBtn = document.getElementById('masterCopyBtn');
const toast = document.getElementById('toast');

function showToast(msg = 'Link copied to clipboard!') {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function switchVersion(ver, updateHistory = true) {
  if (ver === 'v2') {
    btnV2.classList.add('active');
    btnV2.setAttribute('aria-selected', 'true');
    btnV1.classList.remove('active');
    btnV1.setAttribute('aria-selected', 'false');

    viewV2.classList.add('active');
    viewV1.classList.remove('active');

    document.body.classList.remove('theme-v1');
    document.body.classList.add('theme-v2');
    v1ThemeBtn.style.display = 'none';

    localStorage.setItem('linktree_version', 'v2');
    if (updateHistory) {
      history.replaceState(null, '', '#v2');
    }
  } else {
    btnV1.classList.add('active');
    btnV1.setAttribute('aria-selected', 'true');
    btnV2.classList.remove('active');
    btnV2.setAttribute('aria-selected', 'false');

    viewV1.classList.add('active');
    viewV2.classList.remove('active');

    document.body.classList.remove('theme-v2');
    document.body.classList.add('theme-v1');
    v1ThemeBtn.style.display = 'grid';

    localStorage.setItem('linktree_version', 'v1');
    if (updateHistory) {
      history.replaceState(null, '', '#v1');
    }
  }
}

btnV1.addEventListener('click', () => switchVersion('v1'));
btnV2.addEventListener('click', () => switchVersion('v2'));

// URL param / hash or localStorage initial state
const urlParams = new URLSearchParams(window.location.search);
const hash = window.location.hash.toLowerCase();
const savedVer = localStorage.getItem('linktree_version');

if (urlParams.get('v') === '2' || hash === '#v2' || (!urlParams.get('v') && !hash && savedVer === 'v2')) {
  switchVersion('v2', false);
} else {
  switchVersion('v1', false);
}

// V1 Theme (Dark / Light)
const savedV1Theme = localStorage.getItem('v1_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function setV1Theme(t) {
  document.documentElement.setAttribute('data-v1-theme', t);
  localStorage.setItem('v1_theme', t);
  if (t === 'dark') {
    v1ThemeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  } else {
    v1ThemeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
  }
}

setV1Theme(savedV1Theme);

v1ThemeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-v1-theme') || 'light';
  setV1Theme(current === 'dark' ? 'light' : 'dark');
});

// Copy Master URL
masterCopyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href.split('#')[0]).then(() => {
    showToast();
  });
});

window.triggerShare = async function() {
  const url = window.location.href;
  if (navigator.share) {
    try {
      await navigator.share({ title: 'Bhavya Kumar — Links', url });
      return;
    } catch(e) {}
  }
  navigator.clipboard.writeText(url).then(() => {
    showToast();
  });
};

// V2 Spotlight Hover
document.querySelectorAll('.v2-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
});

// QR Modal
const v2QrBtn = document.getElementById('v2QrBtn');
const qrModal = document.getElementById('qrModal');
const closeModal = document.getElementById('closeModal');
const qrImg = document.getElementById('qrImg');

if (v2QrBtn) {
  v2QrBtn.addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${url}`;
    qrModal.classList.add('open');
  });
}

if (closeModal) {
  closeModal.addEventListener('click', () => qrModal.classList.remove('open'));
}

if (qrModal) {
  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) qrModal.classList.remove('open');
  });
}
