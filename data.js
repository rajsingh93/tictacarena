// ============================================================
// TicTacArena — Dummy Data
// ============================================================

const PLAYERS = [
  { id: 1, name: 'ShadowX_Pro', level: 47, rank: 'Diamond', xp: 65, coins: 12450, avatar: '👑', wins: 342, losses: 89, draws: 24, score: 4250, online: true },
  { id: 2, name: 'QueenB_Fire', level: 52, rank: 'Master', xp: 78, coins: 18200, avatar: '🔥', wins: 421, losses: 102, draws: 31, score: 5100, online: true },
  { id: 3, name: 'NightOwl99', level: 38, rank: 'Gold', xp: 42, coins: 7800, avatar: '🦉', wins: 198, losses: 145, draws: 42, score: 2890, online: false },
  { id: 4, name: 'ZephyrStorm', level: 61, rank: 'Legend', xp: 88, coins: 34500, avatar: '⚡', wins: 678, losses: 201, draws: 55, score: 7200, online: true },
  { id: 5, name: 'ArcticFox', level: 29, rank: 'Silver', xp: 35, coins: 4200, avatar: '🦊', wins: 112, losses: 189, draws: 28, score: 1540, online: false },
  { id: 6, name: 'CosmicDust', level: 44, rank: 'Platinum', xp: 55, coins: 9100, avatar: '🌌', wins: 276, losses: 134, draws: 38, score: 3420, online: true },
  { id: 7, name: 'PhoenixRise', level: 55, rank: 'Master', xp: 71, coins: 21000, avatar: '🐦', wins: 389, losses: 156, draws: 61, score: 4780, online: true },
  { id: 8, name: 'VoidWalker', level: 67, rank: 'Legend', xp: 92, coins: 45200, avatar: '🌑', wins: 712, losses: 178, draws: 43, score: 8100, online: false },
  { id: 9, name: 'StarGazer', level: 22, rank: 'Bronze', xp: 28, coins: 1800, avatar: '⭐', wins: 67, losses: 201, draws: 19, score: 890, online: true },
  { id: 10, name: 'IronFist99', level: 48, rank: 'Diamond', xp: 60, coins: 13400, avatar: '🥊', wins: 356, losses: 124, draws: 47, score: 4380, online: true },
  { id: 11, name: 'CrystalEye', level: 35, rank: 'Gold', xp: 48, coins: 6700, avatar: '💎', wins: 178, losses: 167, draws: 35, score: 2650, online: false },
  { id: 12, name: 'BlazeTail', level: 41, rank: 'Platinum', xp: 52, coins: 8900, avatar: '🔴', wins: 234, losses: 148, draws: 52, score: 3180, online: true },
];

const MY_PLAYER = PLAYERS[0];

const FRIENDS = [
  { ...PLAYERS[1], status: 'friend', lastSeen: '2m ago' },
  { ...PLAYERS[2], status: 'friend', lastSeen: 'Online' },
  { ...PLAYERS[3], status: 'friend', lastSeen: '5h ago' },
  { ...PLAYERS[5], status: 'friend', lastSeen: 'Online' },
  { ...PLAYERS[6], status: 'friend', lastSeen: 'Online' },
  { ...PLAYERS[8], status: 'friend', lastSeen: '1d ago' },
];

const FRIEND_REQUESTS = [
  { ...PLAYERS[4], status: 'pending_in' },
  { ...PLAYERS[9], status: 'pending_in' },
];

const BLOCKED_USERS = [
  { ...PLAYERS[10], status: 'blocked' },
];

const CHAT_MESSAGES = {
  2: [
    { id: 1, from: 2, text: 'GG! That last move was clutch 🔥', time: '10:24 AM', read: true },
    { id: 2, from: 1, text: "Thanks! You played well too", time: '10:25 AM', read: true },
    { id: 3, from: 2, text: 'Rematch tonight?', time: '10:26 AM', read: true },
    { id: 4, from: 1, text: "Sure, I'll be online around 8pm", time: '10:27 AM', read: true },
    { id: 5, from: 2, text: 'Perfect! See you then 👊', time: '10:28 AM', read: false },
  ],
  3: [
    { id: 1, from: 3, text: 'Hey, want to play?', time: 'Yesterday', read: true },
    { id: 2, from: 1, text: "Can't right now, busy!", time: 'Yesterday', read: true },
    { id: 3, from: 3, text: 'No problem', time: 'Yesterday', read: false },
  ],
};

const WORLD_CHAT = [
  { player: PLAYERS[3], message: 'Just hit Legend rank! LFG 🔥🔥🔥', time: '1m ago' },
  { player: PLAYERS[6], message: 'Anyone up for a ranked match?', time: '2m ago' },
  { player: PLAYERS[1], message: 'GG that last tournament was insane', time: '3m ago' },
  { player: PLAYERS[8], message: 'Who else uses the corner strategy?', time: '5m ago' },
  { player: PLAYERS[0], message: 'The new ghost skin is 🔥', time: '7m ago' },
  { player: PLAYERS[5], message: 'Weekly reset soon... grind time!', time: '9m ago' },
  { player: PLAYERS[11], message: 'Looking for friends to add, DM me', time: '11m ago' },
  { player: PLAYERS[9], message: 'New season when?', time: '14m ago' },
  { player: PLAYERS[2], message: 'Training mode helped me a lot tbh', time: '17m ago' },
  { player: PLAYERS[4], message: 'Finally got the Dragon frame!', time: '20m ago' },
  { player: PLAYERS[7], message: 'Top of the leaderboard baby 😎', time: '22m ago' },
  { player: PLAYERS[10], message: 'This game is so addicting omg', time: '25m ago' },
];

const LEADERBOARD = PLAYERS.sort((a, b) => b.score - a.score).map((p, i) => ({
  ...p,
  globalRank: i + 1,
}));

const SHOP_ITEMS = [
  { id: 1, name: 'Shadow Knight', type: 'Avatar', emoji: '🦸', price: 1200, rarity: 'Epic', owned: false },
  { id: 2, name: 'Dragon Frame', type: 'Frame', emoji: '🐉', price: 800, rarity: 'Rare', owned: true },
  { id: 3, name: 'Galaxy Skin', type: 'Board Skin', emoji: '🌌', price: 2500, rarity: 'Legendary', owned: false },
  { id: 4, name: 'Fire Effect', type: 'Effect', emoji: '🔥', price: 600, rarity: 'Rare', owned: false },
  { id: 5, name: 'Neon Crown', type: 'Avatar', emoji: '👑', price: 1800, rarity: 'Epic', owned: false },
  { id: 6, name: 'Ice Crystal', type: 'Board Skin', emoji: '❄️', price: 1100, rarity: 'Rare', owned: true },
  { id: 7, name: 'Lightning X', type: 'Effect', emoji: '⚡', price: 900, rarity: 'Epic', owned: false },
  { id: 8, name: 'Golden Ring', type: 'Frame', emoji: '💍', price: 3000, rarity: 'Legendary', owned: false },
  { id: 9, name: 'Ghost Avatar', type: 'Avatar', emoji: '👻', price: 400, rarity: 'Common', owned: false },
  { id: 10, name: 'Rainbow Trail', type: 'Effect', emoji: '🌈', price: 750, rarity: 'Rare', owned: false },
  { id: 11, name: 'Stealth Skin', type: 'Board Skin', emoji: '🎭', price: 1400, rarity: 'Epic', owned: true },
  { id: 12, name: 'Basic Frame', type: 'Frame', emoji: '⬛', price: 100, rarity: 'Common', owned: true },
];

const VAULT_ITEMS = SHOP_ITEMS.filter(i => i.owned);

const NOTIFICATIONS = [
  { id: 1, type: 'friend_request', icon: '👥', title: 'New Friend Request', sub: 'ArcticFox wants to be friends', time: '2m', unread: true },
  { id: 2, type: 'match_invite', icon: '🎮', title: 'Match Invite', sub: 'QueenB_Fire challenged you to a ranked match', time: '15m', unread: true },
  { id: 3, type: 'reward', icon: '🎁', title: 'Daily Reward Ready', sub: 'Claim your 200 coins!', time: '1h', unread: true },
  { id: 4, type: 'achievement', icon: '🏆', title: 'Achievement Unlocked', sub: 'Win Streak: Won 5 matches in a row', time: '3h', unread: false },
  { id: 5, type: 'mail', icon: '📬', title: 'New Mail from Admin', sub: 'Season 7 is starting soon!', time: '5h', unread: false },
  { id: 6, type: 'friend_request', icon: '👥', title: 'Friend Request Accepted', sub: 'CosmicDust accepted your request', time: '1d', unread: false },
  { id: 7, type: 'reward', icon: '💎', title: 'Rank Up Bonus', sub: 'Congrats on reaching Diamond!', time: '2d', unread: false },
  { id: 8, type: 'match_invite', icon: '🎮', title: 'Tournament Starting', sub: 'Weekly tournament begins in 30 minutes', time: '2d', unread: false },
];

const MAILS = [
  { id: 1, from: 'Admin', subject: '🎉 Season 7 Launch!', preview: 'Season 7 is here with new maps and skins...', body: 'Season 7 is officially live! We have added 15 new skins, 3 new board layouts, and a brand new Grandmaster rank tier. Login daily for bonus rewards throughout the season.', reward: { coins: 500, item: null }, date: '1h ago', read: false, deleted: false },
  { id: 2, from: 'System', subject: '🏆 Diamond League Reward', preview: 'Congratulations on reaching Diamond!', body: 'You have successfully reached Diamond rank. As a reward, we are gifting you 1,000 coins and the exclusive Diamond Frame!', reward: { coins: 1000, item: 'Diamond Frame' }, date: '3h ago', read: false, deleted: false },
  { id: 3, from: 'Admin', subject: '🔥 Weekend Event Active', preview: 'Double XP this weekend!', body: 'Double XP event is live all weekend. Play ranked matches to earn 2x XP and climb the leaderboard faster. Bonus coin drops available on every win!', reward: { coins: 200, item: null }, date: '1d ago', read: true, deleted: false },
  { id: 4, from: 'System', subject: '🎁 Daily Login Streak', preview: '7-day login streak bonus!', body: 'You have logged in for 7 consecutive days. Here is your streak bonus reward!', reward: { coins: 750, item: 'Fire Effect' }, date: '2d ago', read: true, deleted: false },
  { id: 5, from: 'Admin', subject: '📢 New Skins Available', preview: 'Check out the latest shop items...', body: 'We have added 8 amazing new skins to the shop including the legendary Galaxy Skin. Visit the shop to browse all new items.', reward: null, date: '3d ago', read: true, deleted: false },
];

const ACHIEVEMENTS = [
  { id: 1, name: 'First Blood', icon: '⚔️', desc: 'Win your first match', progress: 100, unlocked: true, xp: 50 },
  { id: 2, name: 'Win Streak', icon: '🔥', desc: 'Win 5 in a row', progress: 100, unlocked: true, xp: 200 },
  { id: 3, name: 'Centurion', icon: '💯', desc: 'Play 100 matches', progress: 100, unlocked: true, xp: 500 },
  { id: 4, name: 'Socialite', icon: '👥', desc: 'Add 10 friends', progress: 80, unlocked: false, xp: 150 },
  { id: 5, name: 'Diamond Club', icon: '💎', desc: 'Reach Diamond rank', progress: 100, unlocked: true, xp: 1000 },
  { id: 6, name: 'Shop Till Drop', icon: '🛍️', desc: 'Buy 5 items', progress: 60, unlocked: false, xp: 200 },
  { id: 7, name: 'Chat Master', icon: '💬', desc: 'Send 50 world chat msgs', progress: 40, unlocked: false, xp: 100 },
  { id: 8, name: 'Comeback Kid', icon: '↩️', desc: 'Win after losing 3 in a row', progress: 100, unlocked: true, xp: 300 },
  { id: 9, name: 'Legendary', icon: '👑', desc: 'Reach Legend rank', progress: 72, unlocked: false, xp: 2000 },
  { id: 10, name: 'Vault Rich', icon: '🏦', desc: 'Own 10 items', progress: 40, unlocked: false, xp: 300 },
  { id: 11, name: 'Night Owl', icon: '🦉', desc: 'Win a match after midnight', progress: 100, unlocked: true, xp: 150 },
  { id: 12, name: 'Perfect Game', icon: '🎯', desc: 'Win without opponent scoring', progress: 100, unlocked: true, xp: 250 },
];

const MATCH_HISTORY = [
  { id: 1, opponent: PLAYERS[1], result: 'win', duration: '2:34', mode: 'Ranked', xp: 120, coins: 80, date: '10 min ago' },
  { id: 2, opponent: PLAYERS[3], result: 'loss', duration: '1:58', mode: 'Ranked', xp: 30, coins: 10, date: '2h ago' },
  { id: 3, opponent: PLAYERS[5], result: 'draw', duration: '3:01', mode: 'Ranked', xp: 60, coins: 40, date: '3h ago' },
  { id: 4, opponent: PLAYERS[7], result: 'loss', duration: '1:22', mode: 'Ranked', xp: 30, coins: 10, date: '1d ago' },
  { id: 5, opponent: PLAYERS[2], result: 'win', duration: '2:47', mode: 'Friends', xp: 80, coins: 50, date: '1d ago' },
  { id: 6, opponent: PLAYERS[9], result: 'win', duration: '2:15', mode: 'Ranked', xp: 120, coins: 80, date: '2d ago' },
  { id: 7, opponent: PLAYERS[4], result: 'win', duration: '1:44', mode: 'Training', xp: 40, coins: 20, date: '3d ago' },
  { id: 8, opponent: PLAYERS[11], result: 'loss', duration: '2:08', mode: 'Ranked', xp: 30, coins: 10, date: '4d ago' },
];

const TOPUP_PACKAGES = [
  { id: 1, coins: 1000, price: '$0.99', bonus: null, popular: false, tag: null },
  { id: 2, coins: 2500, price: '$1.99', bonus: 250, popular: false, tag: null },
  { id: 3, coins: 5500, price: '$3.99', bonus: 500, popular: true, tag: 'Most Popular' },
  { id: 4, coins: 12000, price: '$7.99', bonus: 2000, popular: false, tag: null },
  { id: 5, coins: 25000, price: '$14.99', bonus: 5000, popular: false, tag: 'Best Value' },
  { id: 6, coins: 60000, price: '$29.99', bonus: 15000, popular: false, tag: 'Whale Pack' },
];

const ADMIN_STATS = {
  totalUsers: 142867,
  activeToday: 18420,
  matchesToday: 47200,
  revenue: '$12,450',
  newUsers: 342,
  bannedUsers: 127,
};

