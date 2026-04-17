// ============================================================
// TicTacArena — Main JavaScript
// Shared utilities, navigation injection, routing
// ============================================================

// === Navigation HTML ===
const NAV_HTML = `
<nav class="bottom-nav" id="bottom-nav">
  <a href="index.html" class="nav-item" data-page="home">
    <div class="nav-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    </div>
    <span class="nav-label">Home</span>
  </a>
  <a href="match.html" class="nav-item" data-page="match">
    <div class="nav-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    </div>
    <span class="nav-label">Match</span>
  </a>
  <a href="leaderboard.html" class="nav-item" data-page="leaderboard">
    <div class="nav-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    </div>
    <span class="nav-label">Ranks</span>
  </a>
  <a href="world-chat.html" class="nav-item" data-page="world-chat">
    <div class="nav-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    </div>
    <span class="nav-label">World</span>
  </a>
  <a href="shop.html" class="nav-item" data-page="shop">
    <div class="nav-icon-wrap">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    </div>
    <span class="nav-label">Shop</span>
  </a>
</nav>
`;

// === Drawer HTML ===
const DRAWER_HTML = `
<div class="drawer-overlay" id="drawer-overlay" onclick="closeDrawer()"></div>
<div class="drawer" id="side-drawer">
  <div class="drawer-header">
    <div class="drawer-user">
      <div class="avatar avatar-md" style="background:linear-gradient(135deg,#7C3AED,#9333EA);color:white;font-size:1.2rem;">👑</div>
      <div>
        <div style="font-weight:700;font-size:0.95rem;">ShadowX_Pro</div>
        <div style="font-size:0.75rem;color:var(--text-secondary);">💎 Diamond · Lv.47</div>
      </div>
    </div>
    <div class="coin-display">
      <div class="coin-icon">₵</div>
      <span>12,450</span>
    </div>
  </div>
  <nav class="drawer-nav">
    <a href="index.html" class="drawer-nav-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      Home
    </a>
    <a href="profile.html" class="drawer-nav-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      Profile
    </a>
    <a href="vault.html" class="drawer-nav-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      Vault
    </a>
    <a href="achievements.html" class="drawer-nav-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
      Achievements
    </a>
    <a href="friends-list.html" class="drawer-nav-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      Friends
    </a>
    <a href="history.html" class="drawer-nav-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      Match History
    </a>
    <div class="drawer-divider"></div>
    <a href="settings.html" class="drawer-nav-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      Settings
    </a>
    <a href="mailto:support@tictacarena.com" class="drawer-nav-item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      Contact
    </a>
    <div class="drawer-divider"></div>
    <a href="auth/login.html" class="drawer-nav-item drawer-logout">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      Logout
    </a>
  </nav>
</div>
`;

// === Toast HTML ===
const TOAST_CONTAINER_HTML = `<div class="toast-container" id="toast-container"></div>`;

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navSlot = document.getElementById('nav-slot');
  if (navSlot) {
    navSlot.innerHTML = NAV_HTML;
    setActiveNav();
  }

  // Inject drawer (only on pages with header-icon-btn#menu-btn)
  const drawerSlot = document.getElementById('drawer-slot');
  if (drawerSlot) {
    drawerSlot.innerHTML = DRAWER_HTML;
  }

  // Toast container
  document.body.insertAdjacentHTML('beforeend', TOAST_CONTAINER_HTML);

  // Set active nav item
  setActiveNav();

  // Animate page in
  const pageEl = document.querySelector('.page-content') || document.querySelector('.app-container');
  if (pageEl) pageEl.classList.add('fade-in');
});

// === Set Active Navigation ===
function setActiveNav(pageOverride) {
  const path = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
    const page = item.dataset.page;
    const matchPage = pageOverride !== undefined ? pageOverride : null;
    if (
      (matchPage && page === matchPage) ||
      (!matchPage && (
        (page === 'home' && (path === '/' || path.endsWith('index.html'))) ||
        (page === 'match' && path.includes('match') && !path.includes('world')) ||
        (page === 'leaderboard' && path.includes('leaderboard')) ||
        (page === 'world-chat' && path.includes('world-chat')) ||
        (page === 'shop' && path.includes('shop'))
      ))
    ) {
      item.classList.add('active');
    }
  });
}

// === Drawer Controls ===
function openDrawer() {
  document.getElementById('drawer-overlay')?.classList.add('open');
  document.getElementById('side-drawer')?.classList.add('open');
}

function closeDrawer() {
  document.getElementById('drawer-overlay')?.classList.remove('open');
  document.getElementById('side-drawer')?.classList.remove('open');
}

// === Toast System ===
function showToast(message, type = '', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type ? 'toast-' + type : ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// === Modal Controls ===
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// === Popup (Bottom Sheet) Controls ===
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// === Back Button with History ===
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
}

// === Banner Slider ===
function initBannerSlider(trackId, dotContainerId) {
  const track = document.getElementById(trackId);
  const dotContainer = document.getElementById(dotContainerId);
  if (!track) return;
  
  const slides = track.children;
  const total = slides.length;
  let current = 0;
  
  function goTo(i) {
    current = (i + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll(`#${dotContainerId} .banner-dot`).forEach((d, idx) => {
      d.classList.toggle('active', idx === current);
    });
  }
  
  // Auto-advance
  setInterval(() => goTo(current + 1), 3500);
  
  // Dot clicks
  if (dotContainer) {
    dotContainer.querySelectorAll('.banner-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => goTo(i));
    });
  }
  
  goTo(0);
}

// === Tab Switcher ===
function initTabs(tabBarId, contentPrefix) {
  const tabBar = document.getElementById(tabBarId);
  if (!tabBar) return;
  
  tabBar.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      
      // Update tab buttons
      tabBar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Show/hide content
      document.querySelectorAll(`[data-content]`).forEach(el => {
        el.classList.toggle('hidden', el.dataset.content !== tab);
      });
    });
  });
}

// === XP Bar Animation ===
function animateXPBar(barId, percent) {
  const bar = document.getElementById(barId);
  if (bar) {
    bar.style.setProperty('--xp-width', percent + '%');
  }
}

// === Countdown Timer ===
function startCountdown(elementId, seconds, onEnd) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  let remaining = seconds;
  el.textContent = remaining;
  
  const interval = setInterval(() => {
    remaining--;
    el.textContent = remaining;
    
    if (remaining <= 5) el.style.color = 'var(--danger)';
    if (remaining <= 0) {
      clearInterval(interval);
      if (onEnd) onEnd();
    }
  }, 1000);
  
  return interval;
}

// === Game Board ===
class TicTacToe {
  constructor(boardId, currentPlayer = 'X') {
    this.board = Array(9).fill(null);
    this.currentPlayer = currentPlayer;
    this.boardEl = document.getElementById(boardId);
    this.gameOver = false;
    this.winPatterns = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    if (this.boardEl) this.renderBoard();
  }
  
  renderBoard() {
    this.boardEl.innerHTML = '';
    this.board.forEach((cell, i) => {
      const cellEl = document.createElement('div');
      cellEl.className = 'game-cell';
      if (cell) {
        cellEl.classList.add(cell.toLowerCase());
        cellEl.textContent = cell === 'X' ? '✕' : '○';
      }
      cellEl.addEventListener('click', () => this.play(i));
      this.boardEl.appendChild(cellEl);
    });
  }
  
  play(index) {
    if (this.gameOver || this.board[index]) return;
    this.board[index] = this.currentPlayer;
    this.renderBoard();
    
    const winner = this.checkWinner();
    if (winner) {
      this.gameOver = true;
      this.highlightWinning(winner.pattern);
      setTimeout(() => {
        if (typeof onGameEnd === 'function') onGameEnd(winner.player);
      }, 600);
      return;
    }
    
    if (this.board.every(c => c !== null)) {
      this.gameOver = true;
      setTimeout(() => {
        if (typeof onGameEnd === 'function') onGameEnd('draw');
      }, 300);
      return;
    }
    
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.updateTurn();
  }
  
  checkWinner() {
    for (const pattern of this.winPatterns) {
      const [a,b,c] = pattern;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return { player: this.board[a], pattern };
      }
    }
    return null;
  }
  
  highlightWinning(pattern) {
    const cells = this.boardEl.children;
    pattern.forEach(i => cells[i]?.classList.add('winning-cell'));
  }
  
  updateTurn() {
    const turnEls = document.querySelectorAll('.turn-indicator');
    turnEls.forEach(el => el.textContent = `${this.currentPlayer}'s Turn`);
    
    const players = document.querySelectorAll('.game-player');
    players.forEach((p, i) => {
      p.classList.toggle('active-player',
        (i === 0 && this.currentPlayer === 'X') ||
        (i === 1 && this.currentPlayer === 'O')
      );
    });
  }
}

// === Confirm Dialog ===
function showConfirm(message, onConfirm, onCancel) {
  // Remove any existing confirm dialog
  const existing = document.getElementById('_confirm_dialog');
  if (existing) existing.remove();

  const dialog = document.createElement('div');
  dialog.id = '_confirm_dialog';
  dialog.style.cssText = `
    position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.5);animation:fadeIn .2s ease;padding:20px;
  `;
  dialog.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:24px;max-width:300px;width:100%;box-shadow:0 20px 40px rgba(0,0,0,.2);animation:scaleIn .2s ease;">
      <div style="font-weight:800;font-size:1rem;color:#111827;margin-bottom:8px;text-align:center;">Confirm</div>
      <p style="font-size:.9rem;color:#6B7280;text-align:center;line-height:1.5;margin-bottom:20px;">${message}</p>
      <div style="display:flex;gap:10px;">
        <button id="_confirm_cancel" style="flex:1;padding:11px;border-radius:12px;border:1.5px solid #E5E7EB;background:#F9FAFB;font-weight:700;font-size:.88rem;cursor:pointer;">Cancel</button>
        <button id="_confirm_ok" style="flex:1;padding:11px;border-radius:12px;border:none;background:#7C3AED;color:#fff;font-weight:700;font-size:.88rem;cursor:pointer;">Confirm</button>
      </div>
    </div>
  `;
  document.body.appendChild(dialog);

  document.getElementById('_confirm_cancel').onclick = () => {
    dialog.remove();
    if (onCancel) onCancel();
  };
  document.getElementById('_confirm_ok').onclick = () => {
    dialog.remove();
    if (onConfirm) onConfirm();
  };
  dialog.addEventListener('click', e => { if (e.target === dialog) { dialog.remove(); if (onCancel) onCancel(); } });
}

// === Copy to Clipboard ===
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard!', 'success');
  });
}

// === Format numbers ===
function formatNum(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n.toString();
}

// === Relative time ===
function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// === Prevent scroll when modal open ===
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDrawer();
    document.querySelectorAll('.popup-overlay.show, .modal-overlay.show').forEach(el => {
      el.classList.remove('show');
      document.body.style.overflow = '';
    });
  }
});

