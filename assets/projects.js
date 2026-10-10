(() => {
  'use strict';
  const data = window.PROJECTS;
  const cards = document.querySelector('#cards');
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const sort = document.querySelector('#sort');
  const empty = document.querySelector('#empty');
  const viewButtons = document.querySelectorAll('[data-view]');
  function setView(view) {
    cards.classList.toggle('tile-view', view === 'tile');
    viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
    try { localStorage.setItem('projects-view', view); } catch (_) {}
  }
  let savedView = 'list';
  try { if (localStorage.getItem('projects-view') === 'tile') savedView = 'tile'; } catch (_) {}
  setView(savedView);
  viewButtons.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  if (!Array.isArray(data)) {
    document.querySelector('#count').textContent = '一覧データを読み込めなかった。ページを再読み込みして確認。';
    return;
  }
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    return node;
  };
  const link = (text, url, className) => {
    const node = element('a', className, text);
    node.href = url;
    node.target = '_blank';
    node.rel = 'noopener noreferrer';
    return node;
  };
  [...new Set(data.map(p => p.category))].sort((a,b) => a.localeCompare(b,'ja')).forEach(value => {
    const option = element('option', '', value);
    option.value = value;
    category.append(option);
  });
  const state = new URLSearchParams(location.search);
  search.value = state.get('q') || '';
  if ([...category.options].some(o => o.value === state.get('category'))) category.value = state.get('category');
  if (state.get('sort') === 'name') sort.value = 'name';
  function render() {
    const query = search.value.normalize('NFKC').toLocaleLowerCase().trim();
    const terms = query.split(/\s+/).filter(Boolean);
    const filtered = data.filter(p => (!category.value || p.category === category.value) && terms.every(term => [p.name,p.url,p.summary,p.description,p.category,...p.tags].join(' ').normalize('NFKC').toLocaleLowerCase().includes(term)));
    filtered.sort(sort.value === 'name' ? (a,b) => a.name.localeCompare(b.name,'ja') : (a,b) => b.addedAt.localeCompare(a.addedAt) || a.name.localeCompare(b.name,'ja'));
    cards.replaceChildren();
    filtered.forEach(p => {
      const card = element('details', 'project-item', '');
      const heading = element('summary', 'project-heading', '');
      const overview = element('div', 'project-overview', '');
      overview.append(element('span','category',p.category), element('h2','',p.name), element('p','summary',p.summary));
      heading.append(overview, element('span','project-toggle',''));
      const body = element('div', 'project-body', '');
      const description = element('div', 'description', '');
      // Explicit newlines take priority; older one-line records split at Japanese sentence ends.
      const paragraphs = p.description.includes('\n')
        ? p.description.split(/\n+/)
        : p.description.match(/[^。]+。|[^。]+$/g) || [];
      paragraphs.filter(text => text.trim()).forEach(text => description.append(element('p', '', text.trim())));
      body.append(element('span','repo',new URL(p.url).pathname.slice(1)), description);
      const bottom = element('div','card-bottom','');
      bottom.append(link('GitHubで見る ↗',p.url,'external'),element('span','date',`確認 ${p.checkedAt}`));
      body.append(bottom);
      const sources = element('details','','');
      sources.append(element('summary','','説明の出典'));
      const list = element('ul','','');
      p.sources.forEach(source => {const item = element('li','','');item.append(link(source.label,source.url,''));list.append(item);});
      sources.append(list);body.append(sources);card.append(heading,body);cards.append(card);
    });
    document.querySelector('#count').textContent = `${filtered.length} / ${data.length} PROJECTS`;
    empty.hidden = filtered.length > 0;
    document.querySelector('#empty-title').textContent = data.length ? '一致するプロジェクトがない。' : 'コレクションは、ここから。';
    document.querySelector('#empty-text').textContent = data.length ? 'キーワードや分類を変えて検索。' : '気になったプロジェクトを、少しずつ追加していく。';
  }
  function update() {
    const params = new URLSearchParams();
    if (search.value.trim()) params.set('q',search.value.trim());
    if (category.value) params.set('category',category.value);
    if (sort.value === 'name') params.set('sort','name');
    try {history.replaceState(null,'',location.pathname + (params.size ? '?' + params : '') + location.hash);} catch (_) {}
    render();
  }
  search.addEventListener('input',update);category.addEventListener('change',update);sort.addEventListener('change',update);render();
})();
