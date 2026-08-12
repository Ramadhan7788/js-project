const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {

    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      panel.setAttribute('hidden', 'true');
    });


    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');

   
    const targetPanelId = button.getAttribute('aria-controls');
    const targetPanel = document.getElementById(targetPanelId);

    targetPanel.classList.add('active');
    targetPanel.removeAttribute('hidden');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('[DEBUG] DOM selesai dimuat.');

  const cookieBanner = document.getElementById('cookie-ban');
  const acceptBtn = document.getElementById('accept-btn');
  const closeBtn = document.getElementById('close-btn');

  console.log('[DEBUG] Elemen yang ditemukan:', { cookieBanner, acceptBtn, closeBtn });

  const hasConsented = localStorage.getItem('cookieConsent');
  console.log('[DEBUG] Status cookieConsent di localStorage:', hasConsented);

  if (!hasConsented) {
    console.log('[DEBUG] Pengguna belum menyetujui. Menampilkan banner...');
    cookieBanner.classList.remove('hidden');
  } else {
    console.log('[DEBUG] Pengguna sudah pernah menyetujui. Banner tetap tersembunyi.');
  }

  const acceptCookies = () => {
    console.log('[DEBUG] Tombol Accept diklik.');
    localStorage.setItem('cookieConsent', 'true');
    console.log('[DEBUG] Status berhasil disimpan ke localStorage.');
    
    cookieBanner.classList.add('hidden');
    console.log('[DEBUG] Banner disembunyikan.');
  };

  if (acceptBtn) {
    acceptBtn.addEventListener('click', acceptCookies);
  } else {
    console.warn('[DEBUG] Warning: acceptBtn tidak ditemukan!');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      console.log('[DEBUG] Tombol Close diklik. Menutup banner tanpa menyimpan consent.');
      cookieBanner.classList.add('hidden');
    });
  } else {
    console.warn('[DEBUG] Warning: closeBtn tidak ditemukan!');
  }
});

const messageInput = document.getElementById('message');
const charCountDisplay = document.getElementById('char-count');
const counterInfo = document.getElementById('counter-info');
const maxLength = messageInput.getAttribute('maxlength');

messageInput.addEventListener('input', () => {
  const currentLength = messageInput.value.length;
  
  charCountDisplay.textContent = currentLength;

  if (currentLength >= maxLength) {
    messageInput.classList.add('limit-reached');
    counterInfo.classList.add('limit-reached');
  } else {
    messageInput.classList.remove('limit-reached');
    counterInfo.classList.remove('limit-reached');
  }
});