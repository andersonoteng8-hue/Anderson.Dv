(() => {
  'use strict';

  const EMAIL = 'andersonoteng8@gmail.com';
  const PHONE = '+233535166873';
  const PHONE_DIGITS = '233535166873';
  const STORAGE_KEY = 'anderson-dev-portfolio-v4';

  const defaultProjects = [
    {
      id: 'trebestate-limited', name: 'TREBESTATE LTD', category: 'Real estate & construction',
      description: 'A company website for a Ghanaian real estate, construction and property investment business.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Font Awesome', 'FormSubmit'], imageFit: 'cover',
      image: './projects/trebestate/cover.jpg', logo: './projects/trebestate/logo.png',
      liveUrl: 'https://trebestatelimited.com/', liveLabel: 'Company website', repoUrl: '',
      story: 'This company website introduces TREBESTATE LTD and organizes its real estate and construction services in one clear, responsive experience. The site describes the company as working across property development, building construction and property investment in Ghana.\n\nVisitors can explore renovation, property management, brokerage and consultancy services, read about investment opportunities focused on long-term value, and reach the company through an enquiry form or WhatsApp link.',
      highlights: ['Property development', 'Construction', 'Renovation', 'Property management', 'Brokerage', 'Investment enquiries'],
      gallery: [],
    },
    {
      id: 'ashanti-prime-tv', name: 'Ashanti Prime TV', category: 'Media & entertainment',
      description: 'A broadcast website for Ashanti Prime TV, bringing its programming, news, schedule and station story together.',
      stack: ['HTML', 'CSS', 'JavaScript'], image: './projects/ashanti-prime/cover.png', imageFit: 'contain', logo: './projects/ashanti-prime/logo.png',
      liveUrl: 'https://www.ashantiprimetv.com/', liveLabel: 'Company website', repoUrl: '',
      story: 'Ashanti Prime TV is presented in the supplied project as a Ghanaian television station based in Ahinsan Estate, Kumasi. The site is organized around the station’s live TV area, programme lineup, news, daily schedule, about story and contact information.\n\nIts stated mission is to bring news, entertainment, education, sports, business, culture and community programming to viewers. The layout helps visitors discover what is on and find the shows they want to watch. A live video embed slot is included in the project files and can be connected to the station’s stream ID.',
      highlights: ['Live TV section', 'Programme discovery', 'News', 'Daily schedule', 'Station story', 'Contact'],
      gallery: [
        { image: './projects/ashanti-prime/gallery-2.jpg', label: 'My Worship My Sacrifice', alt: 'My Worship My Sacrifice programme artwork', url: 'https://www.youtube.com/watch?v=rjTq5h2olwI' },
        { image: './projects/ashanti-prime/gallery-3.jpg', label: 'Campus Experience', alt: 'Campus Experience programme artwork', url: 'https://www.youtube.com/watch?v=OmZ5Mh1SVPU' },
        { image: './projects/ashanti-prime/gallery-5.jpg', label: 'Prime Sport', alt: 'Prime Sport programme artwork', url: 'https://www.youtube.com/watch?v=KkI7keRvcy4' },
        { image: './projects/ashanti-prime/gallery-7.jpg', label: 'Groove Time', alt: 'Groove Time programme artwork', url: 'https://www.youtube.com/watch?v=ddJFLpp7_hI' },
      ],
    },
    {
      id: 'acquah-ice-water', name: 'Acquah Ice Natural Mineral Water', category: 'Brand & commerce',
      description: 'A product website for a Ghanaian bottled and sachet water brand based in Mampong, Ashanti Region.',
      stack: ['HTML', 'CSS', 'JavaScript', 'ES Modules'], imageFit: 'cover',
      image: './projects/acquah-ice/bottles.jpeg', logo: './projects/acquah-ice/logo.jpeg',
      liveUrl: '', liveLabel: 'Live website', repoUrl: '',
      story: 'The Acquah Ice site introduces a bottled and sachet water company that describes itself as based in Mampong, Ashanti Region. Its story connects the brand’s mission and vision with practical information for homes, offices, schools, events and businesses.\n\nThe product area covers sachets, several bottle sizes, and bulk or corporate orders. Supporting sections explain the production process, quality approach and delivery options, then guide visitors to reviews, FAQs and contact details.',
      highlights: ['Bottled water', 'Sachet water', 'Bulk & corporate orders', 'Product gallery', 'Production process', 'Delivery information'],
      gallery: [
        { image: './projects/acquah-ice/sachet.jpeg', label: 'Sachet water', alt: 'Acquah Ice sachet water product image', url: '' },
        { image: './projects/acquah-ice/corporate-pack.jpeg', label: 'Product range', alt: 'Acquah Ice product image from its website', url: '' },
      ],
    },
    {
      id: 'earth-dreams-entertainment', name: 'Earth Dreams Entertainment', category: 'Media & entertainment',
      description: 'A cinematic website for a Ghana-based movie production company with a growing library of Ghanaian films.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Service Worker', 'PWA'], imageFit: 'cover',
      image: './projects/earth-dreams/love-brewed-still.jpeg', logo: './projects/earth-dreams/logo.png',
      liveUrl: 'https://earthdreamsentertainment.com/', liveLabel: 'Company website', repoUrl: '',
      story: 'Earth Dreams Entertainment is described in the supplied site as a Ghana-based movie production company headquartered in Sunyani. Its story focuses on immersive films with meaningful social and human themes, talent development, and visual media that can educate and inspire.\n\nThe website presents the company’s productions, a YouTube streaming area and links to its social channels. The supplied project names Kayayo, The Rich Poor Son, Tears by the Window, Day of Reckoning and My Twin Husbands among its notable films.',
      highlights: ['Film production', 'Movie library', 'YouTube streaming', 'Talent development', 'Social channels'],
      gallery: [
        { image: './projects/earth-dreams/love-brewed-poster.jpeg', label: 'Love Brewed in a Bus', alt: 'Earth Dreams Entertainment poster for Love Brewed in a Bus', url: '' },
        { image: './projects/earth-dreams/tears-by-the-window.jpeg', label: 'Tears by the Window', alt: 'Earth Dreams Entertainment poster for Tears by the Window', url: '' },
        { image: './projects/earth-dreams/sisters-at-war.jpeg', label: 'Sisters at War', alt: 'Earth Dreams Entertainment poster for Sisters at War', url: 'https://www.youtube.com/watch?v=6CaGKcjB3lM' },
        { image: './projects/earth-dreams/the-chase.jpeg', label: 'The Chase', alt: 'Earth Dreams Entertainment poster for The Chase', url: '' },
        { image: './projects/earth-dreams/weight-of-sacrifice.jpeg', label: 'The Weight of Sacrifice', alt: 'Earth Dreams Entertainment poster for The Weight of Sacrifice', url: '' },
      ],
    },
  ];

  const defaultTimeline = [
    { id: 'career-placeholder', type: 'Experience', title: 'Add a role or project', organization: 'Your organization', period: 'Year — Year', description: 'Use Manage portfolio to add professional experience, achievements, certifications or education.' },
  ];

  const defaultSocials = [
    { id: 'github', label: 'GitHub', url: '' },
    { id: 'linkedin', label: 'LinkedIn', url: '' },
    { id: 'instagram', label: 'Instagram', url: '' },
    { id: 'x', label: 'X', url: '' },
    { id: 'youtube', label: 'YouTube', url: '' },
    { id: 'tiktok', label: 'TikTok', url: '' },
    { id: 'facebook', label: 'Facebook', url: '' },
  ];

  const socialPlaceholders = {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    instagram: 'https://instagram.com/your-handle',
    x: 'https://x.com/your-handle',
    youtube: 'https://youtube.com/@your-channel',
    tiktok: 'https://tiktok.com/@your-handle',
    facebook: 'https://facebook.com/your-page',
  };

  const categories = ['All work'];
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const clone = (value) => JSON.parse(JSON.stringify(value));
  let portfolio = loadPortfolio();
  let activeFilter = 'All work';
  let managerOpen = false;
  let editor = null;
  let toastTimer;

  function loadPortfolio() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      return {
        projects: Array.isArray(saved?.projects) ? saved.projects : clone(defaultProjects),
        timeline: Array.isArray(saved?.timeline) ? saved.timeline : clone(defaultTimeline),
        socials: Array.isArray(saved?.socials) ? saved.socials : clone(defaultSocials),
      };
    } catch {
      return { projects: clone(defaultProjects), timeline: clone(defaultTimeline), socials: clone(defaultSocials) };
    }
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolio));
      return true;
    } catch {
      return false;
    }
  }

  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  }

  function externalURL(value) {
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
    } catch {
      return '';
    }
  }

  function imageSource(value) {
    const input = String(value || '');
    if (/^https?:\/\//i.test(input)) return externalURL(input) || './projects/project-placeholder.svg';
    if (/^(?:\.\/|[a-zA-Z0-9_-])[a-zA-Z0-9_./-]*$/.test(input) && !/(^|\/)\.\.(\/|$)/.test(input)) return input;
    return './projects/project-placeholder.svg';
  }

  function makeId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }

  function icon(name, size = 15) {
    const paths = {
      arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
      external: '<path d="M14 3h7v7m0-7L10 14"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>',
      plus: '<path d="M12 5v14m-7-7h14"/>',
      edit: '<path d="m15 5 4 4M4 20l4.5-1 10.3-10.3a2.1 2.1 0 0 0-3-3L5.5 16 4 20Z"/>',
      trash: '<path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"/>',
      download: '<path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 17v4h14v-4"/>',
      upload: '<path d="M12 16V4m-5 5 5-5 5 5"/><path d="M5 17v4h14v-4"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
      moon: '<path d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z"/>',
    };
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
  }

  function showToast(message) {
    const toast = $('#toast');
    toast.innerHTML = `${icon('check', 16)}<span>${escapeHTML(message)}</span>`;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 3600);
  }

  function saveWithMessage(message) {
    persist();
    showToast(message);
  }

  function renderSocials() {
    const hero = $('#heroSocials');
    const footer = $('#contactSocials');
    const links = (portfolio.socials || defaultSocials).map((social) => {
      const url = externalURL(social.url);
      return url
        ? `<a href="${escapeHTML(url)}" target="_blank" rel="noreferrer" aria-label="${escapeHTML(social.label)}">${escapeHTML(social.label)}${icon('external', 12)}</a>`
        : `<button type="button" data-action="edit-social" aria-label="Add your ${escapeHTML(social.label)} link">${escapeHTML(social.label)}<span class="social-pending">+</span></button>`;
    }).join('');
    if (hero) hero.innerHTML = links;
    if (footer) footer.innerHTML = links;
  }

  function observeReveals(scope = document) {
    const nodes = $$('.reveal:not(.in-view)', scope);
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
  }

  function renderFilters() {
    const uniqueCategories = [...new Set([...categories.slice(1), ...portfolio.projects.map((project) => project.category).filter(Boolean)])];
    const filters = ['All work', ...uniqueCategories];
    if (!filters.includes(activeFilter)) activeFilter = 'All work';
    $('#projectFilters').innerHTML = filters.map((category) => `<button type="button" data-filter="${escapeHTML(category)}" class="${activeFilter === category ? 'selected' : ''}" aria-pressed="${activeFilter === category}">${escapeHTML(category)}</button>`).join('');
  }

  function projectCard(project, index) {
    const liveUrl = externalURL(project.liveUrl);
    const repoUrl = externalURL(project.repoUrl);
    const stack = Array.isArray(project.stack) ? project.stack : String(project.stack || '').split(',').map((item) => item.trim()).filter(Boolean);
    const highlights = Array.isArray(project.highlights) ? project.highlights : [];
    const gallery = Array.isArray(project.gallery) ? project.gallery : [];
    const image = imageSource(project.image);
    const logo = imageSource(project.logo);
    const imageFitClass = project.imageFit === 'contain' ? ' project-cover-contain' : '';
    const story = String(project.story || '').trim();
    const details = story || gallery.length || highlights.length ? `<details class="project-story"><summary>Explore the project <span>+</span></summary><div class="project-story-body">${story ? `<p>${escapeHTML(story)}</p>` : ''}${highlights.length ? `<div class="project-highlights">${highlights.map((item) => `<span>${escapeHTML(item)}</span>`).join('')}</div>` : ''}${gallery.length ? `<div class="project-gallery">${gallery.map((item) => { const url = externalURL(item.url); const media = `<img src="${escapeHTML(imageSource(item.image))}" alt="${escapeHTML(item.alt || item.label || project.name)}" loading="lazy" /><span>${escapeHTML(item.label || 'Project image')}</span>`; return url ? `<a href="${escapeHTML(url)}" target="_blank" rel="noreferrer" aria-label="${escapeHTML(item.label || 'Open project media')}" class="project-gallery-item">${media}</a>` : `<div class="project-gallery-item">${media}</div>`; }).join('')}</div>` : ''}</div></details>` : '';
    return `<article class="project-card reveal" style="--delay:${(index % 3) * 80}ms">
      <div class="project-image"><img class="project-cover${imageFitClass}" src="${escapeHTML(image)}" alt="${escapeHTML(project.name)} project cover" loading="lazy" />${project.logo ? `<img class="project-logo" src="${escapeHTML(logo)}" alt="${escapeHTML(project.name)} logo" loading="lazy" />` : ''}<span class="project-number">${String(index + 1).padStart(2, '0')}</span><button class="project-edit icon-button" type="button" data-action="edit-project" data-id="${escapeHTML(project.id)}" aria-label="Edit ${escapeHTML(project.name)}" title="Edit project">${icon('edit', 15)}</button></div>
      <div class="project-content"><div class="project-category">${escapeHTML(project.category || 'Portfolio project')}</div><h3>${escapeHTML(project.name || 'Untitled project')}</h3><p>${escapeHTML(project.description || 'Add a project description in the portfolio editor.')}</p>
        <div class="project-stack">${stack.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
        <div class="project-links">${liveUrl ? `<a href="${escapeHTML(liveUrl)}" target="_blank" rel="noreferrer">${escapeHTML(project.liveLabel || 'Live site')} ${icon('external', 14)}</a>` : `<button type="button" data-action="edit-link" data-id="${escapeHTML(project.id)}" data-field="liveUrl">Add live link ${icon('arrow', 14)}</button>`}${repoUrl ? `<a href="${escapeHTML(repoUrl)}" target="_blank" rel="noreferrer">Source code ${icon('external', 14)}</a>` : `<button type="button" data-action="edit-link" data-id="${escapeHTML(project.id)}" data-field="repoUrl">Add source link ${icon('arrow', 14)}</button>`}</div>
        ${details}
      </div></article>`;
  }

  function renderProjects() {
    renderFilters();
    const filtered = portfolio.projects.filter((project) => activeFilter === 'All work' || project.category === activeFilter);
    $('#projectCount').textContent = `${String(filtered.length).padStart(2, '0')} PROJECTS`;
    $('#projectGrid').innerHTML = `${filtered.map(projectCard).join('')}<button class="add-project-card reveal" type="button" data-action="new-project"><span class="add-project-icon">${icon('plus', 22)}</span><strong>Your next project</strong><span>Add a new project to the gallery</span><span class="inline-link">Create project ${icon('arrow', 14)}</span></button>`;
    observeReveals($('#projectGrid'));
  }

  function renderTimeline() {
    const timeline = $('#timeline');
    if (!portfolio.timeline.length) {
      timeline.innerHTML = `<div class="empty-timeline"><p>Add your professional experience, education, certifications or achievements here.</p><button class="inline-link" type="button" data-action="new-timeline">${icon('plus', 15)} Add your first entry</button></div>`;
      return;
    }
    timeline.innerHTML = portfolio.timeline.map((item, index) => `<article class="timeline-item reveal"><div class="timeline-pin"><span>${String(index + 1).padStart(2, '0')}</span></div><div class="timeline-copy"><div class="timeline-meta"><span>${escapeHTML(item.type)}</span><span>${escapeHTML(item.period)}</span></div><h3>${escapeHTML(item.title)}</h3><div class="timeline-org">${escapeHTML(item.organization)}</div><p>${escapeHTML(item.description)}</p><button type="button" class="timeline-edit" data-action="edit-timeline" data-id="${escapeHTML(item.id)}">${icon('edit', 13)} Edit entry</button></div></article>`).join('');
    observeReveals(timeline);
  }

  function projectEditor(item = null) {
    const project = item || { id: makeId(), name: '', category: 'Other', description: '', stack: [], image: '', imageFit: 'cover', logo: '', liveUrl: '', liveLabel: '', repoUrl: '', story: '', highlights: [], gallery: [] };
    const stack = Array.isArray(project.stack) ? project.stack.join(', ') : project.stack || '';
    const highlights = Array.isArray(project.highlights) ? project.highlights.join(', ') : project.highlights || '';
    const gallery = Array.isArray(project.gallery) ? project.gallery.map((item) => [item.image || '', item.label || '', item.url || ''].join(' | ')).join('\n') : project.gallery || '';
    return `<form id="editorForm" class="editor-form" data-editor="project">
      <div class="manager-list-head"><h4>${item ? 'Project details' : 'New project'}</h4><button type="button" class="icon-button" data-action="close-editor" aria-label="Close editor">×</button></div>
      <input type="hidden" name="id" value="${escapeHTML(project.id)}" />
      <div class="form-grid"><label class="field"><span>Project name</span><input name="name" required value="${escapeHTML(project.name)}" placeholder="Project name" /></label><label class="field"><span>Category</span><input name="category" value="${escapeHTML(project.category)}" placeholder="e.g. Web application" /></label><label class="field field-wide"><span>Short description</span><textarea name="description" rows="3" placeholder="What does this project do?">${escapeHTML(project.description)}</textarea></label><label class="field"><span>Technology stack (comma separated)</span><input name="stack" value="${escapeHTML(stack)}" placeholder="HTML, CSS, JavaScript" /></label><label class="field"><span>Cover image path or URL</span><input name="image" value="${escapeHTML(project.image)}" placeholder="./projects/my-project.svg" /></label><label class="field"><span>Image fit</span><select name="imageFit"><option value="cover"${project.imageFit !== 'contain' ? ' selected' : ''}>Fill frame</option><option value="contain"${project.imageFit === 'contain' ? ' selected' : ''}>Show full image</option></select></label><label class="field"><span>Logo path or URL (optional)</span><input name="logo" value="${escapeHTML(project.logo || '')}" placeholder="./images/project-logo.png" /></label><label class="field"><span>Live website or channel URL</span><input name="liveUrl" type="url" value="${escapeHTML(project.liveUrl)}" placeholder="https://" /></label><label class="field"><span>Live link label</span><input name="liveLabel" value="${escapeHTML(project.liveLabel || '')}" placeholder="Live site or Official channel" /></label><label class="field"><span>Source code URL</span><input name="repoUrl" type="url" value="${escapeHTML(project.repoUrl)}" placeholder="https://github.com/..." /></label><label class="field field-wide"><span>Project story</span><textarea name="story" rows="5" placeholder="Background, goals, features and outcome">${escapeHTML(project.story || '')}</textarea></label><label class="field field-wide"><span>Highlights (comma separated)</span><input name="highlights" value="${escapeHTML(highlights)}" placeholder="Live stream, programme schedule, video gallery" /></label><label class="field field-wide"><span>Project gallery (one per line: image path | caption | optional URL)</span><textarea name="gallery" rows="4" placeholder="./projects/my-project/screenshot.jpg | Homepage | https://example.com">${escapeHTML(gallery)}</textarea></label></div>
      <div class="editor-actions"><button class="button button-primary" type="submit">${icon('check', 15)} Save details</button><button class="button button-quiet" type="button" data-action="close-editor">Cancel</button></div>
    </form>`;
  }

  function timelineEditor(item = null) {
    const entry = item || { id: makeId(), type: 'Experience', title: '', organization: '', period: '', description: '' };
    const types = ['Experience', 'Education', 'Certification', 'Achievement', 'Project'];
    return `<form id="editorForm" class="editor-form" data-editor="timeline"><div class="manager-list-head"><h4>${item ? 'Experience & milestones' : 'New timeline entry'}</h4><button type="button" class="icon-button" data-action="close-editor" aria-label="Close editor">×</button></div><input type="hidden" name="id" value="${escapeHTML(entry.id)}" /><div class="form-grid"><label class="field"><span>Entry type</span><select name="type">${types.map((type) => `<option${entry.type === type ? ' selected' : ''}>${type}</option>`).join('')}</select></label><label class="field"><span>Role, course or achievement</span><input name="title" required value="${escapeHTML(entry.title)}" placeholder="Entry title" /></label><label class="field"><span>Organization or institution</span><input name="organization" value="${escapeHTML(entry.organization)}" placeholder="Organization" /></label><label class="field"><span>Period</span><input name="period" value="${escapeHTML(entry.period)}" placeholder="2024 — Present" /></label><label class="field field-wide"><span>Description</span><textarea name="description" rows="3" placeholder="A short description">${escapeHTML(entry.description)}</textarea></label></div><div class="editor-actions"><button class="button button-primary" type="submit">${icon('check', 15)} Save details</button><button class="button button-quiet" type="button" data-action="close-editor">Cancel</button></div></form>`;
  }

  function renderManager() {
    if (!managerOpen) {
      $('#managerMount').innerHTML = '';
      $('#manageToggle').innerHTML = `${icon('edit', 15)} Manage portfolio`;
      return;
    }
    $('#manageToggle').innerHTML = `${icon('edit', 15)} Close editor`;
    const projects = portfolio.projects.map((project) => `<div class="manager-row"><span>${escapeHTML(project.name)}</span><div><button type="button" data-action="edit-project" data-id="${escapeHTML(project.id)}" aria-label="Edit ${escapeHTML(project.name)}">${icon('edit', 15)}</button><button type="button" data-action="remove-project" data-id="${escapeHTML(project.id)}" aria-label="Remove ${escapeHTML(project.name)}">${icon('trash', 15)}</button></div></div>`).join('');
    const timeline = portfolio.timeline.map((item) => `<div class="manager-row"><span>${escapeHTML(item.title)}</span><div><button type="button" data-action="edit-timeline" data-id="${escapeHTML(item.id)}" aria-label="Edit ${escapeHTML(item.title)}">${icon('edit', 15)}</button><button type="button" data-action="remove-timeline" data-id="${escapeHTML(item.id)}" aria-label="Remove ${escapeHTML(item.title)}">${icon('trash', 15)}</button></div></div>`).join('');
    const socials = portfolio.socials.map((social) => `<label class="field"><span>${escapeHTML(social.label)}</span><input data-social-id="${escapeHTML(social.id)}" type="url" placeholder="${escapeHTML(socialPlaceholders[social.id] || 'https://your-profile')}" value="${escapeHTML(social.url)}" /></label>`).join('');
    let editorMarkup = '';
    if (editor?.type === 'project') editorMarkup = projectEditor(editor.item);
    if (editor?.type === 'timeline') editorMarkup = timelineEditor(editor.item);
    $('#managerMount').innerHTML = `<div class="manager-panel reveal in-view" id="portfolio-manager"><div class="manager-heading"><div><span class="eyebrow">PORTFOLIO EDITOR</span><h3>Keep your story current.</h3><p>Edits save in this browser. Export your data and update <code>script.js</code> when you want those changes in the project files.</p></div><div class="manager-tools"><button class="button button-outline" type="button" data-action="export">${icon('download', 15)} Export data</button><button class="button button-outline" type="button" data-action="import">${icon('upload', 15)} Import data</button><input id="importFile" type="file" accept="application/json,.json" hidden /><button class="button button-quiet" type="button" data-action="reset">Reset</button></div></div>
      <div class="manager-columns"><div class="manager-list"><div class="manager-list-head"><h4>Projects <span>${portfolio.projects.length}</span></h4><button class="inline-link" type="button" data-action="new-project">${icon('plus', 15)} Add</button></div>${projects || '<p class="manager-empty">No projects yet.</p>'}</div><div class="manager-list"><div class="manager-list-head"><h4>Experience & milestones <span>${portfolio.timeline.length}</span></h4><button class="inline-link" type="button" data-action="new-timeline">${icon('plus', 15)} Add</button></div>${timeline || '<p class="manager-empty">No entries yet.</p>'}</div></div>
      <div class="social-editor"><div class="manager-list-head"><div><h4>Social profile links</h4><p class="social-editor-hint">Add your real profile URLs to turn these names into live links.</p></div><span class="mono-label">GITHUB · LINKEDIN · INSTAGRAM · X · YOUTUBE · TIKTOK · FACEBOOK</span></div><div class="social-fields">${socials}</div></div>${editorMarkup}</div>`;
  }

  function openManager() {
    managerOpen = true;
    renderManager();
    window.setTimeout(() => $('#portfolio-manager')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 40);
  }

  function startProjectEditor(item = null, focusField = '') {
    editor = { type: 'project', item: item ? { ...item, stack: Array.isArray(item.stack) ? item.stack : String(item.stack || '').split(',').map((value) => value.trim()).filter(Boolean) } : null };
    openManager();
    window.setTimeout(() => {
      const field = focusField ? $(`[name="${focusField}"]`, $('#editorForm')) : $('[name="name"]', $('#editorForm'));
      field?.focus();
    }, 100);
  }

  function startTimelineEditor(item = null) {
    editor = { type: 'timeline', item: item ? { ...item } : null };
    openManager();
    window.setTimeout(() => $('[name="title"]', $('#editorForm'))?.focus(), 100);
  }

  function closeEditor() {
    editor = null;
    renderManager();
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(portfolio, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'anderson-dev-portfolio-data.json';
    link.click();
    URL.revokeObjectURL(url);
    showToast('Portfolio data exported.');
  }

  async function importData(file) {
    try {
      const data = JSON.parse(await file.text());
      if (!Array.isArray(data.projects) || !Array.isArray(data.timeline) || !Array.isArray(data.socials)) throw new Error('Invalid file');
      portfolio = { projects: data.projects, timeline: data.timeline, socials: data.socials };
      persist();
      editor = null;
      renderEverything();
      showToast('Portfolio data imported into this browser.');
    } catch {
      showToast('That file could not be imported. Choose an exported portfolio JSON file.');
    }
  }

  function resetData() {
    if (!window.confirm('Reset this browser copy to the original starter portfolio?')) return;
    portfolio = { projects: clone(defaultProjects), timeline: clone(defaultTimeline), socials: clone(defaultSocials) };
    editor = null;
    persist();
    renderEverything();
    showToast('Starter portfolio restored in this browser.');
  }

  function handleManagerClick(event) {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const id = button.dataset.id;
    const action = button.dataset.action;
    if (action === 'new-project') startProjectEditor();
    if (action === 'edit-project') startProjectEditor(portfolio.projects.find((project) => project.id === id));
    if (action === 'edit-link') startProjectEditor(portfolio.projects.find((project) => project.id === id), button.dataset.field);
    if (action === 'new-timeline') startTimelineEditor();
    if (action === 'edit-timeline') startTimelineEditor(portfolio.timeline.find((item) => item.id === id));
    if (action === 'close-editor') closeEditor();
    if (action === 'remove-project') {
      const project = portfolio.projects.find((item) => item.id === id);
      if (project && window.confirm(`Remove “${project.name}” from this browser's portfolio?`)) {
        portfolio.projects = portfolio.projects.filter((item) => item.id !== id);
        persist(); renderProjects(); renderManager(); showToast('Project removed.');
      }
    }
    if (action === 'remove-timeline') {
      const item = portfolio.timeline.find((entry) => entry.id === id);
      if (item && window.confirm(`Remove “${item.title}” from the timeline?`)) {
        portfolio.timeline = portfolio.timeline.filter((entry) => entry.id !== id);
        persist(); renderTimeline(); renderManager(); showToast('Timeline entry removed.');
      }
    }
    if (action === 'export') exportData();
    if (action === 'import') $('#importFile')?.click();
    if (action === 'reset') resetData();
    if (action === 'edit-social') openManager();
  }

  function handleEditorSubmit(event) {
    if (!event.target.matches('#editorForm')) return;
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.target).entries());
    if (event.target.dataset.editor === 'project') {
      const project = {
        id: values.id || makeId(), name: values.name.trim(), category: values.category.trim() || 'Other', description: values.description.trim(),
        stack: values.stack.split(',').map((value) => value.trim()).filter(Boolean), image: values.image.trim(), imageFit: values.imageFit === 'contain' ? 'contain' : 'cover', logo: values.logo.trim(),
        liveUrl: externalURL(values.liveUrl) || '', liveLabel: values.liveLabel.trim(), repoUrl: externalURL(values.repoUrl) || '', story: values.story.trim(),
        highlights: values.highlights.split(',').map((value) => value.trim()).filter(Boolean),
        gallery: values.gallery.split(/\r?\n/).map((line) => line.split('|').map((value) => value.trim())).filter((parts) => parts[0]).map(([image, label, url]) => ({ image, label: label || 'Project image', alt: label || values.name.trim(), url: externalURL(url) || '' })),
      };
      const exists = portfolio.projects.some((item) => item.id === project.id);
      portfolio.projects = exists ? portfolio.projects.map((item) => item.id === project.id ? project : item) : [...portfolio.projects, project];
      persist(); editor = null; renderProjects(); renderManager();
      showToast(exists ? 'Project details saved in this browser.' : 'Project added in this browser.');
    } else {
      const entry = { id: values.id || makeId(), type: values.type, title: values.title.trim(), organization: values.organization.trim(), period: values.period.trim(), description: values.description.trim() };
      const exists = portfolio.timeline.some((item) => item.id === entry.id);
      portfolio.timeline = exists ? portfolio.timeline.map((item) => item.id === entry.id ? entry : item) : [entry, ...portfolio.timeline];
      persist(); editor = null; renderTimeline(); renderManager();
      showToast(exists ? 'Timeline entry saved.' : 'Timeline entry added.');
    }
  }

  function renderEverything() {
    renderSocials();
    renderProjects();
    renderTimeline();
    renderManager();
    observeReveals();
  }

  document.addEventListener('click', (event) => {
    const filter = event.target.closest('[data-filter]');
    if (filter) {
      activeFilter = filter.dataset.filter;
      renderProjects();
      return;
    }

    const action = event.target.closest('[data-action]');
    if (action && (action.closest('#projectGrid') || action.closest('#timeline'))) {
      handleManagerClick(event);
      return;
    }

    if (event.target.closest('#manageToggle')) {
      managerOpen = !managerOpen;
      editor = null;
      renderManager();
      if (managerOpen) $('#portfolio-manager')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const socialEdit = event.target.closest('[data-action="edit-social"]');
    if (socialEdit) { openManager(); return; }

    if (event.target.closest('#addTimelineTop')) { startTimelineEditor(); return; }
    if (event.target.closest('#managerMount')) handleManagerClick(event);
  });

  document.addEventListener('submit', handleEditorSubmit);

  document.addEventListener('input', (event) => {
    const input = event.target.closest('[data-social-id]');
    if (!input) return;
    const social = portfolio.socials.find((item) => item.id === input.dataset.socialId);
    if (social) {
      social.url = input.value.trim();
      persist();
      renderSocials();
    }
  });

  document.addEventListener('change', (event) => {
    if (event.target.id === 'importFile' && event.target.files?.[0]) importData(event.target.files[0]);
  });

  $('#contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const from = form.get('email');
    const subject = form.get('subject') || 'Portfolio enquiry';
    const message = form.get('message');
    const body = `Hello Anderson,\n\n${message}\n\nFrom: ${name}\nReply to: ${from}`;
    const status = $('#formStatus');
    status.textContent = 'Your email app should open with your message ready. If it does not, email me directly or use WhatsApp.';
    status.hidden = false;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  const menuButton = $('.menu-toggle');
  const nav = $('.main-nav');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.querySelector('.menu-glyph').textContent = open ? '×' : '☰';
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      menuButton.querySelector('.menu-glyph').textContent = '☰';
    }
  });

  const themeButton = $('.theme-toggle');
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const next = theme === 'dark' ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${next} theme`);
    themeButton.title = `Switch to ${next} theme`;
    themeButton.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon', 18);
    try { localStorage.setItem('anderson-theme', theme); } catch { /* Local file storage can be restricted by the browser. */ }
  }
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('anderson-theme') || 'dark'; } catch { /* Use the default theme. */ }
  setTheme(savedTheme);
  themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

  if ('IntersectionObserver' in window) {
    const sections = $$('main section[id]');
    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      $$('.main-nav a').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }), { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  $('#year').textContent = new Date().getFullYear();
  renderEverything();
})();
