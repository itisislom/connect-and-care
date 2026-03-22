// ─── DATA STORE ───────────────────────────────────────────────────────────────
const DB = {
    posts: [
        {
            id: 1,
            author: 'Marcus Chen',
            initials: 'MC',
            time: '2 hours ago',
            category: 'Career',
            title: 'Struggling with burnout after a major project launch',
            body: 'I just finished a 6-month product launch and I feel completely drained. I love my job, but I find it hard to even open my laptop lately. Has anyone else navigated this feeling of "post-success" depletion? Looking for small habits that helped you reclaim your energy.',
            tags: ['Burnout', 'Work-Life Balance', 'Mental Health'],
            replies: 12, likes: 24, urgency: 'Low',
            image: null, emoji: '😮‍💨',
            postedBy: { name: 'Marcus Chen', since: 'Jan 2023', posts: 7, helpRate: 91 }
        },
        {
            id: 2,
            author: 'Elena Rodriguez',
            initials: 'ER',
            time: '5 hours ago',
            category: 'Education',
            title: 'Helping an elderly neighbor navigate online banking safely',
            body: 'My neighbor is being targeted by suspicious emails. I want to help her set up secure banking and teach her how to spot phishing, but I am not sure how to explain it without scaring her off from technology entirely. Any tips on teaching tech to seniors?',
            tags: ['Online Safety', 'Senior Help', 'Banking'],
            replies: 8, likes: 15, urgency: 'Medium',
            image: null, emoji: '👴',
            postedBy: { name: 'Elena Rodriguez', since: 'Mar 2023', posts: 15, helpRate: 88 }
        },
        {
            id: 3,
            author: 'Julian Vance',
            initials: 'JV',
            time: 'Yesterday',
            category: 'Social',
            title: 'Relocating to a new city alone and feeling isolated',
            body: 'Just moved to Seattle for work. I don\'t know anyone here and the "Seattle Freeze" is real. I\'m an introvert, so going to bars isn\'t my thing. Are there any community groups or hobby-based meetups people recommend for finding genuine connection?',
            tags: ['Loneliness', 'New City', 'Social'],
            replies: 31, likes: 42, urgency: 'Low',
            image: null, emoji: '🏙️',
            postedBy: { name: 'Julian Vance', since: 'Feb 2024', posts: 3, helpRate: 75 }
        },
        {
            id: 4,
            author: 'Priya Sharma',
            initials: 'PS',
            time: '1 day ago',
            category: 'Lifestyle',
            title: 'Balancing a startup while being a new parent',
            body: 'The sleep deprivation is catching up. I\'m trying to keep my team motivated while barely keeping my eyes open during standups. If there are any "founder parents" out there, how did you survive the first year?',
            tags: ['Parenting', 'Startup Life', 'Work-Life Balance'],
            replies: 19, likes: 28, urgency: 'Medium',
            image: null, emoji: '👶',
            postedBy: { name: 'Priya Sharma', since: 'Nov 2023', posts: 9, helpRate: 82 }
        },
        {
            id: 5,
            author: 'Marcus Rivera',
            initials: 'MR',
            time: '6 hours ago',
            category: 'Home Maintenance',
            title: 'Kitchen sink pipe burst – I\'m in over my head!',
            body: 'Woke up this morning to a huge puddle in my kitchen. It looks like the pipe under the sink has finally given up. I\'ve tried putting a bucket under it, but it\'s filling up faster than I can empty it if I use any water in the house.\n\nI\'m relatively new to home ownership and honestly, I\'m a bit panicky. I\'ve turned off the main water valve for now, but I\'m not sure what the next steps are.',
            tags: ['#Plumbing', '#Emergency', '#Tools Needed', '#DIY Help', '#HomeRepair'],
            replies: 3, likes: 8, urgency: 'High',
            image: null, emoji: '🔧',
            location: 'Seattle, WA',
            postedBy: { name: 'Marcus Rivera', since: 'Jan 2023', posts: 12, helpRate: 84 },
            comments: [
                {
                    id: 1, author: 'Elena Rodriguez', initials: 'ER', time: '2 hours ago',
                    text: 'I had the exact same issue last month! It\'s likely the washer inside the P-trap has worn out. Before calling a plumber, try tightening the slip nut by hand. If that doesn\'t work, you can get a replacement kit for under $10 at any hardware store. Happy to help if you need a walkthrough!',
                    helpful: 24, liked: false,
                    reply: { author: 'Marcus Rivera', initials: 'MR', time: '1 hour ago', text: 'Thanks Elena! I tried tightening it but it seems the plastic is actually cracked. I\'ll head to the store to see if I can find that P-trap kit you mentioned. Wish me luck!', helpful: 5 }
                },
                {
                    id: 2, author: 'David Chen', initials: 'DC', time: '5 hours ago',
                    text: 'Make sure you turn off the main water valve before you start unscrewing anything! Better safe than sorry. Also, keep that bucket handy while you work.',
                    helpful: 18, liked: false,
                    reply: null
                }
            ]
        }
    ],

    helpRequests: [
        {
            id: 101, title: 'Help with Groceries for Senior', urgent: true,
            desc: 'Our neighbor Mrs. Gable needs help picking up weekly groceries from the local market as her car is in the shop.',
            tags: ['Driving', 'Shopping'], time: '45 mins', location: 'Oakwood Heights',
            emoji: '🛒', color: '#fef3c7', authorInitials: 'AK'
        },
        {
            id: 102, title: 'Basic Resume Review for Career', urgent: false,
            desc: 'I am looking for someone to look over my first resume for junior developer roles. Just need some polish!',
            tags: ['Tech', 'Writing'], time: '30 mins', location: 'Remote',
            emoji: '📄', color: '#e0f2fe', authorInitials: 'SL'
        },
        {
            id: 103, title: 'Moving Heavy Furniture – 2 People', urgent: false,
            desc: 'Need help moving a sofa and two dressers from the first floor to the second. Should be very quick.',
            tags: ['Lifting'], time: '20 mins', location: 'Downtown',
            emoji: '📦', color: '#f3e8ff', authorInitials: 'JD'
        },
        {
            id: 104, title: 'Leaking Faucet in Community', urgent: true,
            desc: 'The kitchen faucet at our local community center is leaking badly. Looking for someone with basic plumbing.',
            tags: ['Plumbing', 'Repair'], time: '1 hour', location: 'Greenwood Center',
            emoji: '🚰', color: '#dcfce7', authorInitials: 'TB'
        },
        {
            id: 105, title: 'Language Exchange –', urgent: false,
            desc: 'I want to practice my English conversation skills. I can help you with Spanish in return!',
            tags: ['Spanish', 'Teaching'], time: '1 hour', location: 'Video Call',
            emoji: '🌍', color: '#fef9c3', authorInitials: 'MG'
        },
        {
            id: 106, title: 'Dog Walking for Post-Op Recovery', urgent: false,
            desc: 'Recovering from knee surgery and can\'t walk my golden retriever for the next two weeks. Any help appreciated!',
            tags: ['Pets', 'Walking'], time: '30 mins', location: 'Park Side',
            emoji: '🐕', color: '#ffe4e6', authorInitials: 'RW'
        }
    ],

    myPosts: [],
    comments: {}
};

// ─── ROUTER ───────────────────────────────────────────────────────────────────
let currentPage = 'feed';
let currentPostId = null;

function navigate(page, data = {}) {
    currentPage = page;
    if (data.postId) currentPostId = data.postId;
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function icon(name, size = 16) {
    const icons = {
        home: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        heart: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
        'heart-filled': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
        ask: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="3"/></svg>`,
        posts: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        search: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
        share: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
        message: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        filter: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
        grid: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
        list: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
        clock: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
        pin: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
        arrow: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
        back: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
        save: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
        thumbup: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`,
        info: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
        impact: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
        shield: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        send: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
        plus: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
        camera: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
        alert: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
        check: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
        user: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        bell: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    };
    return icons[name] || '';
}

function showToast(msg, type = '') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = `toast ${type}`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function renderNavbar() {
    return `
  <nav class="navbar">
    <a class="logo" href="#" onclick="navigate('feed');return false;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      Connect &amp; Care
    </a>
    <div class="nav-links">
      <a class="nav-link ${currentPage === 'feed' ? 'active' : ''}" href="#" onclick="navigate('feed');return false;">${icon('home', 15)} <span>Home</span></a>
      <a class="nav-link ${currentPage === 'help' ? 'active' : ''}" href="#" onclick="navigate('help');return false;">${icon('heart', 15)} <span>Help Others</span></a>
      <a class="nav-link ${currentPage === 'ask' ? 'active' : ''}" href="#" onclick="navigate('ask');return false;">${icon('ask', 15)} <span>Ask for Help</span></a>
      <a class="nav-link ${currentPage === 'myposts' ? 'active' : ''}" href="#" onclick="navigate('myposts');return false;">${icon('posts', 15)} <span>My Posts</span></a>
    </div>
    <div class="nav-right">
      <button class="nav-icon-btn" title="Search" onclick="focusSearch()">${icon('search', 16)}</button>
      <div class="avatar" title="Profile">YO</div>
    </div>
  </nav>`;
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function renderFooter() {
    return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="logo" href="#" onclick="navigate('feed');return false;" style="font-size:1rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Connect &amp; Care
          </a>
          <p>A safe space for community support and empathetic connections. Together we can solve anything.</p>
        </div>
        <div class="footer-col">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Safety Center</a></li>
            <li><a href="#">Stories</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-emergency">
          ${icon('info', 14)}
          <p>Need immediate professional help? Please <a href="#">contact your local emergency services</a>.</p>
        </div>
      </div>
      <div class="footer-bottom">© 2024 Connect &amp; Care. Built with empathy for the community.</div>
    </div>
  </footer>`;
}

// ─── FEED PAGE ────────────────────────────────────────────────────────────────
let activeFeedTab = 'All';
const feedTabs = ['All', 'Mental Health', 'Career', 'Social', 'Education', 'Lifestyle'];

function renderFeed() {
    const filtered = activeFeedTab === 'All' ? DB.posts : DB.posts.filter(p => p.category === activeFeedTab || p.tags.some(t => t.toLowerCase().includes(activeFeedTab.toLowerCase())));

    return `
  <div class="container">
    <div class="page-layout">
      <div>
        <div class="page-header">
          <div class="header-row">
            <div>
              <h1>Community Feed</h1>
              <p>Real problems from real people. Your empathy can make a difference.</p>
            </div>
            <button class="btn-secondary" style="display:flex;align-items:center;gap:6px;font-size:0.82rem;" onclick="showToast('Filters coming soon!', '')">
              ${icon('filter', 14)} Refine Feed
            </button>
          </div>
          <div class="tabs" style="margin-top:1rem;">
            ${feedTabs.map(t => `<button class="tab ${activeFeedTab === t ? 'active' : ''}" onclick="setFeedTab('${t}')">${t}</button>`).join('')}
          </div>
        </div>
        <div id="feed-cards">
          ${filtered.length ? filtered.map(renderFeedCard).join('') : `<div class="empty-state"><p>No posts in this category yet.</p></div>`}
          <div style="text-align:center;padding:1rem;color:var(--text-muted);font-size:0.85rem;cursor:pointer;" onclick="showToast('Loading more posts...', '')">
            Showing ${filtered.length} of 128 posts &rsaquo;
          </div>
        </div>
      </div>
      <aside class="sidebar">
        <div class="sidebar-card">
          <h3>${icon('impact', 14)} Community Impact</h3>
          <div class="impact-stats">
            <div class="impact-stat"><div class="value">1,284</div><div class="label">Solved Today</div></div>
            <div class="impact-stat"><div class="value">420k</div><div class="label">Acts of Care</div></div>
          </div>
          <p class="impact-desc">Our community has grown by <strong>12%</strong> this week. Thank you for being part of the change.</p>
        </div>
        <div class="sidebar-card">
          <h3>${icon('shield', 14)} Safety First</h3>
          <ul class="safety-list">
            <li>Keep interactions respectful and empathetic.</li>
            <li>Never share personal financial information.</li>
            <li>Report any suspicious or harmful content immediately.</li>
          </ul>
          <a class="safety-link" href="#" onclick="showToast('Guidelines page coming soon!', '');return false;">Read full guidelines</a>
        </div>
        <div class="sidebar-card cta-card">
          <h2>Need urgent advice?</h2>
          <p>Join our verified mentorship program to get direct guidance from community leaders.</p>
          <button class="btn-cta" onclick="showToast('Mentorship program coming soon!', '')">Learn More</button>
        </div>
      </aside>
    </div>
  </div>
  <button class="fab" onclick="navigate('ask')" title="Ask for Help">${icon('plus', 22)}</button>
  `;
}

function renderFeedCard(post) {
    return `
  <div class="feed-card" onclick="navigate('post', {postId: ${post.id}})">
    <div class="card-header">
      <div class="card-avatar-placeholder">${post.initials}</div>
      <div class="card-meta">
        <div class="card-author">${post.author}</div>
        <div class="card-time">${icon('clock', 11)} ${post.time} &bull; <span class="card-category">${post.category}</span></div>
      </div>
      <button class="share-btn" onclick="event.stopPropagation();sharePost(${post.id})">${icon('share', 14)}</button>
    </div>
    <div class="card-title">${post.title}</div>
    <div class="card-body">${post.body.split('\n')[0]}</div>
    <div class="tags">${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="card-footer">
      <span class="card-stat">${icon('message', 13)} ${post.replies} replies</span>
      <span class="card-stat">${icon('heart', 13)} ${post.likes}</span>
      <button class="btn-offer" onclick="event.stopPropagation();navigate('post', {postId: ${post.id}})">Offer Help</button>
    </div>
  </div>`;
}

function setFeedTab(tab) {
    activeFeedTab = tab;
    renderApp();
}

function sharePost(id) {
    showToast('Link copied to clipboard!', 'success');
}

// ─── HELP OTHERS PAGE ─────────────────────────────────────────────────────────
let helpView = 'grid';
let helpSearch = '';
let helpFilter = 'All Requests';

function renderHelp() {
    const filters = ['All Requests', 'Urgent', 'Local', 'Advice', 'Financial', 'Skills'];
    let cards = DB.helpRequests.filter(r => {
        if (helpSearch && !r.title.toLowerCase().includes(helpSearch.toLowerCase()) && !r.desc.toLowerCase().includes(helpSearch.toLowerCase())) return false;
        if (helpFilter === 'Urgent' && !r.urgent) return false;
        if (helpFilter === 'Local' && r.location === 'Remote') return false;
        return true;
    });

    return `
  <div class="container">
    <div class="help-header">
      <div class="header-row" style="align-items:flex-start;">
        <div>
          <h1>Find a way to help</h1>
          <p>Showing ${cards.length} community requests matching your interests.</p>
        </div>
        <div class="help-stats">
          <div class="help-stat"><div class="val">84</div><div class="lbl">Requests Near You</div></div>
          <div class="help-stat" style="margin-left:1.5rem;"><div class="val">1,204</div><div class="lbl">Active Helpers</div></div>
        </div>
      </div>
    </div>
    <div class="search-bar">
      <div class="search-input-wrap">
        ${icon('search', 16)}
        <input class="search-input" type="text" placeholder="Search help requests (e.g. 'plumbing', 'advice')" value="${helpSearch}" oninput="helpSearch=this.value;renderHelpCards()" id="help-search">
      </div>
      <div class="view-btns">
        <button class="view-btn ${helpView === 'grid' ? 'active' : ''}" onclick="helpView='grid';renderHelpCards()">${icon('grid', 14)} Grid</button>
        <button class="view-btn ${helpView === 'list' ? 'active' : ''}" onclick="helpView='list';renderHelpCards()">${icon('list', 14)} List</button>
      </div>
      <button class="btn-secondary" style="font-size:0.82rem;display:flex;align-items:center;gap:5px;" onclick="showToast('Advanced filters coming soon!', '')">
        ${icon('filter', 14)} Advanced
      </button>
    </div>
    <div class="tabs">
      ${filters.map(f => `<button class="tab ${helpFilter === f ? 'active' : ''}" onclick="helpFilter='${f}';renderHelpCards()">${f}</button>`).join('')}
    </div>
    <div id="help-cards-container">
      ${renderHelpCardsHTML(cards)}
    </div>
    ${cards.length === 0 ? '' : renderHelpEmpty()}
  </div>
  <button class="fab" onclick="navigate('ask')" title="Ask for Help">${icon('plus', 22)}</button>
  `;
}

function renderHelpCardsHTML(cards) {
    if (!cards.length) {
        return `<div class="empty-state">
      ${icon('search', 40)}
      <h3>Can't find what you're looking for?</h3>
      <p>Try adjusting your filters or expanding your search area. New requests are posted every hour!</p>
      <div class="empty-actions">
        <button class="btn-secondary" onclick="helpFilter='All Requests';helpSearch='';renderHelpCards()">Reset Filters</button>
        <button class="btn-primary" onclick="showToast('Alert set for Local requests!', 'success')">Set Alert for "Local"</button>
      </div>
    </div>`;
    }
    return `<div class="${helpView === 'grid' ? 'grid-view' : 'list-view'}" style="margin-top:1rem;">
    ${cards.map((r, i) => renderHelpCard(r, i)).join('')}
  </div>`;
}

function renderHelpEmpty() {
    return `
  <div class="empty-state" style="margin-top:2rem;">
    ${icon('search', 36)}
    <h3>Can't find what you're looking for?</h3>
    <p>Try adjusting your filters or expanding your search area. New requests are posted every hour!</p>
    <div class="empty-actions">
      <button class="btn-secondary" onclick="helpFilter='All Requests';helpSearch='';renderHelpCards()">Reset Filters</button>
      <button class="btn-primary" onclick="showToast('Alert set!', 'success')">Set Alert for "Local"</button>
    </div>
  </div>`;
}

function renderHelpCard(r, i) {
    const delay = `animation-delay:${i * 0.07}s`;
    return `
  <div class="help-card" style="${delay}" onclick="navigate('post', {postId: ${r.id}})">
    ${r.urgent ? '<span class="urgent-badge">Urgent</span>' : ''}
    <div class="help-card-img-placeholder" style="background:${r.color};font-size:3rem;">${r.emoji}</div>
    <div class="help-card-body">
      <div class="help-card-title-row">
        <div class="help-card-title">${r.title}</div>
        <div class="card-avatar-placeholder" style="width:28px;height:28px;font-size:0.7rem;">${r.authorInitials}</div>
      </div>
      <div class="help-card-desc">${r.desc}</div>
      <div class="help-card-tags">${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="help-card-meta">
        <span>${icon('clock', 12)} ${r.time}</span>
        <span>${icon('pin', 12)} ${r.location}</span>
        <a class="link-details" href="#" onclick="event.stopPropagation();navigate('post',{postId:${r.id}});return false;">Details ${icon('arrow', 12)}</a>
      </div>
    </div>
  </div>`;
}

function renderHelpCards() {
    const filters = ['All Requests', 'Urgent', 'Local', 'Advice', 'Financial', 'Skills'];
    let cards = DB.helpRequests.filter(r => {
        if (helpSearch && !r.title.toLowerCase().includes(helpSearch.toLowerCase()) && !r.desc.toLowerCase().includes(helpSearch.toLowerCase())) return false;
        if (helpFilter === 'Urgent' && !r.urgent) return false;
        if (helpFilter === 'Local' && r.location === 'Remote') return false;
        return true;
    });
    const el = document.getElementById('help-cards-container');
    if (el) el.innerHTML = renderHelpCardsHTML(cards);
    // update tabs
    document.querySelectorAll('.tabs .tab').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === helpFilter);
    });
    // update view btns
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.toggle('active', (helpView === 'grid' && btn.textContent.trim().startsWith('Grid')) || (helpView === 'list' && btn.textContent.trim().startsWith('List')));
    });
}

function focusSearch() {
    const s = document.getElementById('help-search');
    if (s) { s.focus(); return; }
    navigate('help');
    setTimeout(() => { const s2 = document.getElementById('help-search'); if (s2) s2.focus(); }, 100);
}

// ─── POST DETAIL ──────────────────────────────────────────────────────────────
function renderPost() {
    const post = DB.posts.find(p => p.id === currentPostId) ||
        DB.helpRequests.find(r => r.id === currentPostId);
    if (!post) return `<div class="container" style="padding:3rem;text-align:center;"><h2>Post not found</h2></div>`;

    const isFullPost = !!post.body;
    const comments = post.comments || [];

    return `
  <div class="container">
    <div class="page-layout">
      <div>
        <div class="breadcrumb" style="margin-top:1.5rem;">
          <a href="#" onclick="history.go(-1);return false;">${icon('back', 12)} Back</a>
          <span class="breadcrumb-sep">›</span>
          <span class="tag" style="cursor:default;">${post.category || 'Help Request'}</span>
          ${post.location ? `${icon('pin', 11)} <span>${post.location}</span>` : ''}
          <span style="margin-left:auto;color:var(--text-muted);font-size:0.78rem;">${icon('clock', 11)} Posted ${post.time || '6 hours ago'}</span>
        </div>

        <h1 class="post-title">${post.title}</h1>

        <div style="font-size:5rem;margin:1.5rem 0;text-align:center;background:var(--primary-light);border-radius:var(--radius);padding:2rem;">${post.emoji || '💬'}</div>

        <div class="post-body">
          <h2 class="post-section-title">The Situation</h2>
          ${(post.body || post.desc || '').split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="tags" style="margin-top:1rem;">
          ${(post.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <!-- Comments -->
        <div class="comments-section">
          <div class="comments-header">
            <div class="comments-title">Community Advice <span style="background:var(--primary);color:white;padding:2px 8px;border-radius:10px;font-size:0.78rem;margin-left:6px;">${comments.length}</span></div>
            <div class="comments-sort">Sort by: <strong>Most Helpful</strong> ${icon('arrow', 12)}</div>
          </div>

          <div class="comment-input-area">
            <div class="comment-input-row">
              <div class="card-avatar-placeholder" style="width:34px;height:34px;font-size:0.8rem;">YO</div>
              <textarea class="comment-textarea" id="comment-input" placeholder="Share your advice or offer support..."></textarea>
            </div>
            <div class="comment-actions-row">
              <button class="btn-post" onclick="submitComment(${post.id})">${icon('send', 14)} Post Advice</button>
            </div>
          </div>

          <div id="comments-list">
            ${comments.map(renderComment).join('')}
          </div>
          ${comments.length > 0 ? `<div style="text-align:center;padding:1rem;"><button class="btn-secondary" onclick="showToast('All advice loaded!', '')">Load More Advice</button></div>` : ''}
        </div>
      </div>

      <aside class="sidebar">
        <div class="sidebar-card post-sidebar-top">
          <button class="btn-offer" onclick="showToast('Thanks for offering to help! 💙', 'success')" style="width:100%;padding:14px;border-radius:10px;font-size:0.95rem;display:flex;align-items:center;justify-content:center;gap:8px;">
            ${icon('heart', 17)} Offer Help
          </button>
          <div class="save-share">
            <button onclick="showToast('Post saved!', 'success')">${icon('save', 14)} Save</button>
            <button onclick="showToast('Link copied!', 'success')">${icon('share', 14)} Share</button>
          </div>
          <div class="urgency-row">
            <span>Urgency Level:</span>
            <span class="urgency-badge">${post.urgency || 'Medium'}</span>
          </div>
        </div>

        <div class="sidebar-card" style="text-align:center;">
          <h3 style="justify-content:center;">Posted By</h3>
          ${post.postedBy ? `
          <div class="poster-avatar">${post.postedBy.name.split(' ').map(n => n[0]).join('')}</div>
          <div class="poster-name">${post.postedBy.name}</div>
          <div class="poster-since">Member since ${post.postedBy.since}</div>
          <div class="poster-stats">
            <div class="poster-stat"><div class="val">${post.postedBy.posts}</div><div class="lbl">Posts</div></div>
            <div class="poster-stat"><div class="val">${post.postedBy.helpRate}%</div><div class="lbl">Helpful Rate</div></div>
          </div>
          <button class="btn-view-profile" onclick="showToast('Profile page coming soon!', '')">View Profile</button>
          ` : '<p style="font-size:0.85rem;color:var(--text-muted);">Anonymous</p>'}
        </div>

        <div class="sidebar-card" style="background:#fffbeb;border-color:#fde68a;">
          <h3 style="color:#92400e;">${icon('shield', 14)} Safety First</h3>
          <p style="font-size:0.8rem;color:#78350f;line-height:1.6;">Always meet in public places for local help. Check our <a href="#" style="color:var(--primary);">Community Safety Guidelines</a> for more tips on staying safe.</p>
        </div>

        <div class="sidebar-card">
          <div class="similar-title">Similar Requests</div>
          <div class="similar-item" onclick="showToast('Loading post...', '')">
            <div class="similar-item-title">No hot water in bathroom</div>
            <div class="similar-item-meta"><span>2d ago</span><span>by Janice K.</span></div>
          </div>
          <div class="similar-item" onclick="showToast('Loading post...', '')">
            <div class="similar-item-title">Sewer smell coming from drain</div>
            <div class="similar-item-meta"><span>4d ago</span><span>by Phil H.</span></div>
          </div>
        </div>
      </aside>
    </div>
  </div>`;
}

function renderComment(c) {
    return `
  <div class="comment">
    <div class="comment-avatar">${c.initials}</div>
    <div class="comment-content">
      <div class="comment-author-row">
        <span class="comment-author">${c.author}</span>
        <span class="comment-time">•${c.time}</span>
      </div>
      <div class="comment-text">${c.text}</div>
      <div class="comment-footer">
        <button class="comment-helpful ${c.liked ? 'liked' : ''}" onclick="likeComment(${c.id})" id="like-${c.id}">
          ${icon('thumbup', 13)} <span id="like-count-${c.id}">${c.helpful}</span> Helpful
        </button>
        <button class="comment-reply-btn" onclick="showToast('Reply feature coming soon!', '')">
          ${icon('message', 13)} Reply
        </button>
      </div>
      ${c.reply ? `
      <div class="reply">
        <div class="comment-avatar" style="background:linear-gradient(135deg,var(--primary),#1a9ab8);">${c.reply.initials}</div>
        <div class="comment-content">
          <div class="comment-author-row">
            <span class="comment-author">${c.reply.author}</span>
            <span class="comment-time">•${c.reply.time}</span>
          </div>
          <div class="comment-text">${c.reply.text}</div>
          <div class="comment-footer">
            <button class="comment-helpful">${icon('thumbup', 13)} ${c.reply.helpful} Helpful</button>
          </div>
        </div>
      </div>` : ''}
    </div>
  </div>`;
}

function likeComment(id) {
    const post = DB.posts.find(p => p.id === currentPostId);
    if (!post || !post.comments) return;
    const comment = post.comments.find(c => c.id === id);
    if (!comment) return;
    comment.liked = !comment.liked;
    comment.helpful += comment.liked ? 1 : -1;
    const btn = document.getElementById(`like-${id}`);
    const countEl = document.getElementById(`like-count-${id}`);
    if (btn) btn.classList.toggle('liked', comment.liked);
    if (countEl) countEl.textContent = comment.helpful;
}

function submitComment(postId) {
    const input = document.getElementById('comment-input');
    if (!input || !input.value.trim()) { showToast('Please write something first!', 'error'); return; }

    const post = DB.posts.find(p => p.id === postId);
    if (!post) return;
    if (!post.comments) post.comments = [];

    const newComment = {
        id: Date.now(),
        author: 'You',
        initials: 'YO',
        time: 'Just now',
        text: input.value.trim(),
        helpful: 0, liked: false, reply: null
    };
    post.comments.unshift(newComment);
    post.replies++;
    input.value = '';

    const list = document.getElementById('comments-list');
    if (list) list.innerHTML = post.comments.map(renderComment).join('');
    showToast('Your advice has been posted! 💙', 'success');
}

// ─── ASK FOR HELP ─────────────────────────────────────────────────────────────
let askForm = { title: '', urgency: 'Low', desc: '', category: 'General', anon: false, images: [] };
let charCount = 0;
let showError = false;

function renderAsk() {
    const categories = ['General', 'Medical', 'Home', 'Groceries', 'Transport', 'Emotional', 'Advice', 'Financial'];

    return `
  <div class="container">
    <div class="page-layout">
      <div>
        <div class="ask-header">
          <a class="back-link" href="#" onclick="navigate('feed');return false;">${icon('back', 14)} Back to Home Feed</a>
          <h1>Ask for Help</h1>
          <p>Explain your situation clearly so the community can best support you.</p>
        </div>
        <div class="form-card">
          <div class="form-group">
            <label class="form-label">Title of your request <span class="char-count" id="char-counter">0/80</span></label>
            <input class="form-input" type="text" placeholder="e.g., Need help with grocery shopping this weekend" maxlength="80" oninput="updateCharCount(this)" id="ask-title">
          </div>
          <div class="form-group">
            <label class="form-label">Urgency Level</label>
            <div class="urgency-options">
              ${['Low', 'Medium', 'High'].map(u => `
              <div class="urgency-option ${askForm.urgency === u ? (u === 'High' ? 'selected-high' : 'selected') : ''}" onclick="setUrgency('${u}')">
                <div class="urgency-dot" style="background:${u === 'Low' ? '#16a34a' : u === 'Medium' ? '#f59e0b' : '#dc2626'}"></div>
                <div class="urgency-name">${u}</div>
                <div class="urgency-desc">${u === 'Low' ? 'General support' : u === 'Medium' ? 'Needed within 48h' : 'Urgent assistance'}</div>
              </div>`).join('')}
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Describe what you need</label>
            <textarea class="form-textarea" id="ask-desc" placeholder="Tell your story. Be as specific as possible about the help you're looking for..."></textarea>
            <div class="form-tip">💡 Tip: Mentioning location or specific times helps others coordinate.</div>
          </div>
          <div class="form-group">
            <label class="form-label">Add Photos (Optional)</label>
            <label class="upload-area" for="photo-upload" onclick="handlePhotoClick()">
              <div class="upload-icon">${icon('camera', 32)}</div>
              <div class="upload-title">Click to upload photos</div>
              <div class="upload-hint">PNG, JPG up to 10MB each</div>
            </label>
            <input type="file" id="photo-upload" class="upload-input" accept="image/*" multiple onchange="handlePhotos(this)">
            <div class="preview-imgs" id="preview-imgs"></div>
          </div>
          <div class="form-group">
            <label class="form-label">Categories</label>
            <div class="cat-chips">
              ${categories.map(c => `<button class="cat-chip ${askForm.category === c ? 'selected' : ''}" onclick="setCategory('${c}')">${c}</button>`).join('')}
            </div>
          </div>
          <div class="form-group">
            <label class="anon-checkbox">
              <input type="checkbox" id="anon-check" onchange="askForm.anon=this.checked" ${askForm.anon ? 'checked' : ''}>
              <div class="anon-label">
                <strong>Post as Anonymous</strong>
                <p>Your name and profile photo will be hidden from everyone except moderators.</p>
              </div>
            </label>
          </div>
          ${showError ? `<div class="error-msg">${icon('alert', 16)} Please fill in both the title and description to continue.</div>` : ''}
          <div class="form-actions">
            <button class="btn-cancel" onclick="navigate('feed')">Cancel</button>
            <button class="btn-submit" onclick="submitPost()">Post Request</button>
          </div>
        </div>
      </div>
      <aside class="sidebar">
        <div class="sidebar-card">
          <h3>${icon('bell', 14)} Helpful Tips</h3>
          <ul class="tips-list">
            <li><div class="tip-icon">${icon('heart', 12)}</div>Share why this help is meaningful to you.</li>
            <li><div class="tip-icon">${icon('camera', 12)}</div>Posts with photos get 3x more responses.</li>
            <li><div class="tip-icon">${icon('check', 12)}</div>Be specific about what you need.</li>
            <li><div class="tip-icon">${icon('shield', 12)}</div>Your safety is our top priority.</li>
          </ul>
          <div style="background:var(--bg);border-radius:var(--radius-sm);padding:0.75rem;margin-top:1rem;display:flex;align-items:flex-start;gap:8px;font-size:0.8rem;color:var(--text-muted);">
            ${icon('info', 14)} You can always edit or delete your request later from your profile.
          </div>
        </div>
        <div class="sidebar-card community-power-card">
          <h3>Community Power</h3>
          <p>Over 1,200 members are active right now. You are never alone in this journey.</p>
          <div class="community-avatars">
            ${['AK', 'JD', 'MG', 'SL', '+9k'].map(a => `<div class="c-av">${a}</div>`).join('')}
          </div>
        </div>
      </aside>
    </div>
  </div>`;
}

function updateCharCount(el) {
    const c = document.getElementById('char-counter');
    if (c) c.textContent = `${el.value.length}/80`;
}

function setUrgency(u) {
    askForm.urgency = u;
    document.querySelectorAll('.urgency-option').forEach((el, i) => {
        const levels = ['Low', 'Medium', 'High'];
        el.className = 'urgency-option';
        if (levels[i] === u) el.classList.add(u === 'High' ? 'selected-high' : 'selected');
    });
}

function setCategory(c) {
    askForm.category = c;
    document.querySelectorAll('.cat-chip').forEach(el => {
        el.classList.toggle('selected', el.textContent === c);
    });
}

function handlePhotoClick() {
    document.getElementById('photo-upload').click();
}

function handlePhotos(input) {
    const preview = document.getElementById('preview-imgs');
    if (!preview) return;
    Array.from(input.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = e => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'preview-img';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}

function submitPost() {
    const title = document.getElementById('ask-title')?.value?.trim();
    const desc = document.getElementById('ask-desc')?.value?.trim();
    showError = false;

    if (!title || !desc) {
        showError = true;
        document.querySelector('.error-msg') ? null : renderApp();
        const err = document.querySelector('.error-msg');
        if (err) { err.style.display = 'flex'; err.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        if (!document.querySelector('.error-msg')) renderApp();
        return;
    }

    const newPost = {
        id: Date.now(),
        author: askForm.anon ? 'Anonymous' : 'You',
        initials: askForm.anon ? 'AN' : 'YO',
        time: 'Just now',
        category: askForm.category,
        title, body: desc,
        tags: [askForm.category, askForm.urgency + ' urgency'],
        replies: 0, likes: 0,
        urgency: askForm.urgency,
        image: null, emoji: '✋',
        postedBy: { name: askForm.anon ? 'Anonymous' : 'You', since: '2024', posts: 1, helpRate: 100 }
    };

    DB.posts.unshift(newPost);
    DB.myPosts.unshift(newPost);
    askForm = { title: '', urgency: 'Low', desc: '', category: 'General', anon: false, images: [] };
    showError = false;

    showToast('Your request has been posted! 🎉', 'success');
    setTimeout(() => navigate('feed'), 400);
}

// ─── MY POSTS ─────────────────────────────────────────────────────────────────
function renderMyPosts() {
    return `
  <div class="container">
    <div class="page-layout full">
      <div class="ask-header">
        <h1>My Posts</h1>
        <p>Track your requests and the help you've given.</p>
      </div>
      ${DB.myPosts.length === 0 ? `
      <div class="empty-state" style="padding:5rem 2rem;">
        ${icon('posts', 48)}
        <h3>No posts yet</h3>
        <p>Share your first challenge with the community and get the support you need.</p>
        <div class="empty-actions">
          <button class="btn-primary" onclick="navigate('ask')">Ask for Help</button>
        </div>
      </div>` : `
      <div>${DB.myPosts.map(renderFeedCard).join('')}</div>`}
    </div>
  </div>`;
}

// ─── MAIN RENDER ──────────────────────────────────────────────────────────────
function renderApp() {
    const app = document.getElementById('app');
    let content = '';

    switch (currentPage) {
        case 'feed': content = renderFeed(); break;
        case 'help': content = renderHelp(); break;
        case 'post': content = renderPost(); break;
        case 'ask': content = renderAsk(); break;
        case 'myposts': content = renderMyPosts(); break;
        default: content = renderFeed();
    }

    app.innerHTML = renderNavbar() + `<main>${content}</main>` + renderFooter();
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderApp();
});