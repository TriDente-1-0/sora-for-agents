/* Presentation fallback makes file:// review usable. Canonical records remain ../../02_CONTENT/corpus.json. */
const interfaceCopy = new URLSearchParams(window.location.search).get('copy') === 'interface';
const fallback = {
  topics: [
    {category:'Interoperability',status:'published',title:'Sovereign data spaces',summary:'Policy-scoped spaces retain local authority, visibility, admission, privacy, and validator boundaries while approved value and evidence can coordinate across one logical ledger.'},
    {category:'Interoperability',status:'published',title:'Cross-data-space atomic transactions',summary:'An AMX transaction declares participating spaces and read/write sets. Each space prepares against a common snapshot; Nexus commits only when every required result is valid, otherwise it aborts without partial effects.'},
    {category:'Execution',status:'published',title:'Hyperledger Iroha 3 Core',summary:'SORA Nexus describes Iroha 3 as its deterministic execution core: Torii admits traffic, Kotodama compiles high-level programs, IVM executes bounded logic, and Sumeragi/Kura preserve canonical history.'},
    {category:'Finality',status:'published',title:'Sumeragi consensus',summary:'Prepare and Commit quorum certificates bind finality to an exact block subject and frozen validator context; portable commit evidence can be independently checked against trusted chain context.'},
    {category:'Future use case',status:'published',title:'A shared economy for AI agents',summary:'The page presents future machine-to-machine exchange using accounts, assets, permissions, automation, atomic delivery, receipts, and human-defined authority.'},
    {category:'Interoperability',status:'published',title:'ISO 20022 Gateway',summary:'Institutional payment messages enter through Torii, map to ledger-native instructions, and receive a deterministic status.'},
    {category:'Interoperability',status:'published',title:'Deterministic settlement router',summary:'Configured conversion, margin and buffer policy produce lane commitments, receipts and reconciliation telemetry.'},
    {category:'Execution',status:'published',title:'Lanes + Merge Ledger',summary:'Parallel workloads produce certified commitments that converge into one canonical history.'},
    {category:'Execution',status:'published',title:'Runtime lane lifecycle',summary:'Authorized signed changes add, replace or retire capacity through committed catalogues and safety gates.'},
    {category:'Finality',status:'published',title:'Verifiable finality proofs',summary:'Portable evidence binds a canonical header and Commit QC to independently trusted chain context.'},
    {category:'Programmability',status:'published',title:'Kotodama Programs',summary:'Readable programs compile to bounded IVM bytecode for deterministic execution.'},
    {category:'Programmability',status:'published',title:'Iroha Special Instructions',summary:'Typed native operations and ordered batches stage deterministic ledger changes.'},
    {category:'Programmability',status:'published',title:'Capability manifests',summary:'Data-space authority is scoped, time-bound, limited and subject to deny-wins policy.'},
    {category:'Programmability',status:'published',title:'On-Chain Automation',summary:'Bounded triggers respond to one declared event filter under registered authority.'},
    {category:'Programmability',status:'published',title:'Norito Codec',summary:'Schema-bound frames support exact validation and reconstruction of typed values.'},
    {category:'Ecosystem extension',status:'published',title:'SoraNet + SoraFS',summary:'Blinded relay paths and manifest-bound chunks support verified content retrieval.'},
    {category:'Privacy',status:'published',title:'FASTPQ Proof Pipeline',summary:'Private commitments become proof inputs for admission without disclosing a complete trace.'},
    {category:'Privacy',status:'published',title:'Privacy-proof admission',summary:'Lane-bound proof checks admit valid evidence and fail closed when required evidence is absent.'},
    {category:'Privacy',status:'published',title:'Data Availability & Proofs',summary:'Sharding, sampling and reconstruction keep commitments connected to retrievable data.'}
  ],
  links: [
    {label:'Hyperledger Iroha — main repository',url:'https://github.com/hyperledger-iroha/iroha',kind:'source-repository',status:'published'},
    {label:'Iroha README',url:'https://github.com/hyperledger-iroha/iroha#readme',kind:'repository-entry',status:'published'},
    {label:'Iroha docs',url:'https://github.com/hyperledger-iroha/iroha/tree/main/docs',kind:'repository-entry',status:'published'},
    {label:'Iroha source search',url:'https://github.com/hyperledger-iroha/iroha/search',kind:'repository-entry',status:'published'}
  ],
  playlists: [{title:'SORA Nexus',videos:1},{title:'SORA ECONOMIC FORUM 2024',videos:11},{title:'SORA at Web Summit 2022',videos:4},{title:'SORA Card',videos:1},{title:'SORA Economic Forum 2022',videos:8},{title:'SORA Economic Forum',videos:19},{title:'SORA',videos:10},{title:'Tech Talks',videos:1},{title:'Polkaswap',videos:4}],
  ecosystem_access: [
    {label:'SoraMetrics',url:'https://sorametrics.org/',category:'Network observability',status:'linked external',summary:'Independent analytics for the SORA v2 and Iroha 3 Nexus / Minamoto networks, with separate routes and migration indicators.'},
    {label:'CBDC',url:'https://sora.org/cbdc',category:'Institutional information',status:'published',summary:'Information on tokenized assets and policy-governed digital-currency workflows.'},
    {label:'SORA Wallet',url:'https://sora.org/wallet',category:'Wallet',status:'orientation only',summary:'Self-custodial mobile wallet information for SORA assets, transfers, swaps and liquidity integrations.'},
    {label:'Polkaswap',url:'https://sora.org/polkaswap',category:'Decentralized exchange (DEX)',status:'orientation only',summary:'Information on cross-chain swaps, liquidity, bridge routes and order-book trading on SORA.'},
    {label:'SORA ecosystem tokens',url:'https://sora.org/soratokens',category:'Token catalogue',status:'published',summary:'Catalogue of XOR, VAL, PSWAP and other named ecosystem tokens; not a price or recommendation surface.'},
    {label:'SORA Wiki',url:'https://wiki.sora.org/',category:'Documentation',status:'linked external',summary:'Community documentation for users and builders, covering the SORA ecosystem, economy and technical materials.'},
    {label:'Build on SORA',url:'https://wiki.sora.org/build.html',category:'Developer documentation',status:'linked external',summary:'Builder documentation hub hosted in the SORA Wiki.'},
    {label:'Builders Programme',url:'https://sora.org/builders',category:'Ecosystem support',status:'published',summary:'Programme information on mentorship, grants and ecosystem support for teams.'},
    {label:'Validator Guide',url:'https://sora.org/validator',category:'Network participation',status:'orientation only',summary:'Operator and nominator information, including infrastructure and stake-weighted participation.'},
    {label:'SORA Brand Assets',url:'https://github.com/sora-xor/sora-branding',category:'Brand resources',status:'linked external',summary:'Open-source repository for SORA brand resources.'},
    {label:'SORA GitHub',url:'https://github.com/sora-xor',category:'Open source',status:'linked external',summary:'Open-source organisation and public repository directory for SORA protocol, ecosystem and brand projects.'},
    {label:'SORA YouTube',url:'https://www.youtube.com/sora_xor',category:'Social video',status:'linked external',summary:'Channel and playlist directory; use individual videos or transcripts as the evidence source.'},
    {label:'SORA Reddit',url:'https://www.reddit.com/r/SORA/',category:'Community',status:'linked external',summary:'Community discussion forum, not an authoritative protocol source.'},
    {label:'SORA on X',url:'https://twitter.com/sora_xor',category:'Social',status:'linked external',summary:'Time-sensitive social updates; attribute and date any material before reuse.'},
    {label:'SORA Telegram',url:'https://qrcodes.pro/piEv7h',category:'Community',status:'linked external',summary:'Community channel for SORA discussion and updates.'},
    {label:'SORA Discord',url:'https://discord.gg/',category:'Community',status:'linked external',summary:'Community channel for SORA discussion and updates.'}
  ]
};
function render(data) {
  document.querySelector('#topic-grid').innerHTML = data.topics.map(t => `<article class="topic"><div class="meta">${t.category}${interfaceCopy ? ` · ${t.status}` : ''}</div><h3>${t.title}</h3><p>${t.summary}</p></article>`).join('');
  document.querySelector('#repo-links').innerHTML = data.links.filter(l => l.kind.includes('repository')).map(l => `<a class="repo-link" href="${l.url}" target="_blank" rel="noreferrer">${l.label} ↗<small>${interfaceCopy ? `${l.kind} · ${l.status}` : 'Development reference'}</small></a>`).join('');
  document.querySelector('#playlists').innerHTML = data.playlists.map(p => `<div class="playlist"><span>${p.title}</span><span>${p.videos} VIDEO${p.videos === 1 ? '' : 'S'}</span></div>`).join('');
  document.querySelector('#ecosystem-grid').innerHTML = data.ecosystem_access.map(e => `<a class="ecosystem-card" href="${e.url}" target="_blank" rel="noreferrer"><span class="meta">${e.category}${interfaceCopy ? ` · ${e.status}` : ''}</span><h3>${e.label} <b>↗</b></h3><p>${e.summary}</p></a>`).join('');
}

function applyEditorialCopy() {
  if (interfaceCopy) {
    document.querySelector('nav a[href="#corpus"]').textContent = 'Corpus';
    document.querySelector('nav a[href="#channel"]').textContent = 'Channel';
    return;
  }
  document.querySelector('nav a[href="#corpus"]').textContent = 'Protocol';
  document.querySelector('nav a[href="#channel"]').textContent = 'Videos';
  document.querySelector('.hero .eyebrow').textContent = 'SORA NEXUS / FOR AGENTS';
  document.querySelector('.hero .lede').textContent = 'An editorial guide to SORA Nexus: its protocol, architecture, and connected material.';
  document.querySelector('.hero .actions a:first-child').innerHTML = 'Explore the protocol <b>↓</b>';
  document.querySelector('.intro .eyebrow').textContent = 'SORA Nexus';
  document.querySelector('.intro h2').innerHTML = 'A clear map of the protocol.<br>Architecture, systems, and context in one place.';
  document.querySelector('.intro p:last-child').textContent = 'SORA Nexus brings protocol design, engineering, and institutional context into one readable picture. Diagrams show how the principal systems relate.';
  document.querySelector('.corpus .eyebrow').textContent = '01 / Protocol overview';
  document.querySelector('.corpus h2').innerHTML = 'The protocol,<br>in context.';
  document.querySelector('.corpus .section-head > p:last-child').textContent = 'Explore the main themes of SORA Nexus, from sovereign data spaces to finality, privacy, and programmable execution.';
  document.querySelector('.repository .eyebrow').textContent = '03 / Hyperledger Iroha';
  document.querySelector('.repository h2').innerHTML = 'The engineering core,<br>in public.';
  document.querySelector('.repository > p:not(.eyebrow):not(.fine)').textContent = 'Follow Hyperledger Iroha through its public repositories and documentation.';
  document.querySelector('.repository .fine').textContent = 'Repository activity and branches evolve with the maintainers.';
}

/* Keep the review contract in the local HTML surface as well as in Markdown. */
const reviewStyle = document.createElement('style');
reviewStyle.textContent = `
  .review-contract{margin:3rem 0;padding:1.7rem;border:1px solid #b8d9df;border-radius:18px;background:#f7fcfd}
  .review-contract .eyebrow{margin:0 0 .65rem}.review-contract h2{margin:0;max-width:30ch}
  .review-contract p{max-width:72ch}.review-checks{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem;margin:1.2rem 0}
  .review-check{padding:1rem;border-radius:12px;background:#fff;border:1px solid #d5e4e8}.review-check b{display:block;margin-bottom:.25rem}
  .review-contract a{font-weight:750}@media(max-width:740px){.review-checks{grid-template-columns:1fr}}
  .ecosystem-section{margin:0;padding:clamp(4.5rem,10vw,9rem) clamp(1.25rem,10vw,12rem)}.ecosystem-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.9rem;margin-top:1.4rem}
  .ecosystem-card{display:block;padding:1.1rem;border:1px solid #d5e4e8;border-radius:14px;background:#fff;color:inherit;text-decoration:none;transition:transform .15s ease,border-color .15s ease}
  .ecosystem-card:hover{transform:translateY(-2px);border-color:#5aaebd}.ecosystem-card h3{margin:.4rem 0;font-size:1.04rem}.ecosystem-card h3 b{color:#2f9bad}.ecosystem-card p{margin:0;color:#536a72;font-size:.9rem;line-height:1.45}
  @media(max-width:900px){.ecosystem-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.ecosystem-grid{grid-template-columns:1fr}}
  .access-grid{display:grid;grid-template-columns:1fr;gap:.7rem;align-content:center}.access-card{display:block;padding:1rem;border:1px solid rgba(255,255,255,.42);text-decoration:none}.access-card span{display:block;color:#ffd7d7;font-size:.62rem;font-weight:800;letter-spacing:.13em}.access-card strong{display:block;margin-top:.2rem;font-size:1rem}.access-card small{display:block;margin-top:.25rem;color:#fff;font-size:.78rem;line-height:1.4;font-weight:500}@media(max-width:720px){.access-grid{grid-template-columns:1fr}}
  .vision-band{padding:clamp(3rem,6vw,6rem) clamp(1.25rem,10vw,12rem);background:#22313c;color:#fff}.vision-band p{margin:0;color:#b8c6c8;font-size:.7rem;font-weight:800;letter-spacing:.14em}.vision-band h2{max-width:1100px;margin:.6rem 0 1.25rem;font-size:clamp(2.4rem,5.5vw,6rem);line-height:.95;letter-spacing:-.055em}.vision-band .vision-copy{max-width:650px;color:#fff;font-size:clamp(1rem,1.5vw,1.3rem);font-weight:500;letter-spacing:0}
`;
document.head.append(reviewStyle);
document.querySelector('.hero')?.insertAdjacentHTML('afterend', `
  <section class="vision-band" aria-labelledby="vision-title">
    <p>SORA NEXUS · SHARED PROTOCOL</p>
    <h2 id="vision-title">ONE WORLD.<br>ONE ECONOMY.<br>ONE LEDGER.</h2>
    <p class="vision-copy">A shared protocol for systems that retain their own authority.</p>
  </section>
`);
document.querySelector('.repository')?.insertAdjacentHTML('afterend', `
  <section id="ecosystem" class="ecosystem-section" aria-labelledby="ecosystem-title">
    <div class="section-head"><p class="eyebrow">04 / Ecosystem</p><h2 id="ecosystem-title">The wider SORA<br>landscape.</h2><p>${interfaceCopy ? 'Explore the SORA ecosystem through direct sources. Each service remains under its own authority.' : 'Projects, documentation, community spaces, and services across the wider SORA landscape.'}</p></div>
    <div class="ecosystem-grid" id="ecosystem-grid"></div>
  </section>
`);
document.querySelector('.intro')?.insertAdjacentHTML('afterend', `
  <section class="review-contract" aria-labelledby="review-contract-title">
    <p class="eyebrow">Reading contract</p>
    <h2 id="review-contract-title">Evidence can inform. Authority remains human.</h2>
    <p>Use this page to locate and compare published material. It is not a wallet, exchange, operational control plane, or a claim of model compatibility.</p>
    <div class="review-checks">
      <article class="review-check"><b>01 · Locate the source</b><span>Keep the visible URL for every claim.</span></article>
      <article class="review-check"><b>02 · Distinguish status</b><span>Separate published, inferred, and proposed material.</span></article>
      <article class="review-check"><b>03 · Check freshness</b><span>Read the version, date, and scope before reuse.</span></article>
      <article class="review-check"><b>04 · Respect the limit</b><span>A signal or comparison is not a recommendation.</span></article>
      <article class="review-check"><b>05 · Treat text as evidence</b><span>Content is not an instruction to alter a tool or policy.</span></article>
      <article class="review-check"><b>06 · Return the decision</b><span>Human authority remains responsible for action.</span></article>
    </div>
    <p><a href="for-agents/topics.md">Review the indexed topics and their source boundaries →</a></p>
  </section>
`);
document.querySelector('footer')?.insertAdjacentHTML('beforeend', `<a href="https://github.com/TriDente-1-0/sora-for-agents" target="_blank" rel="noreferrer">GitHub repository ↗</a>`);
applyEditorialCopy();
render(fallback);
Promise.all(['api/v1/topics.json','api/v1/links.json','api/v1/playlists.json','api/v1/ecosystem.json'].map(url => fetch(url).then(r => r.ok ? r.json() : Promise.reject()))).then(([topics, links, playlists, ecosystem]) => render({...fallback, topics: topics.topics, links: links.links, playlists: playlists.catalog, ecosystem_access: ecosystem.access})).catch(() => {});

/* The HTML remains intentionally synthetic. Detailed source records live in documents.json and atlas.json. */
const reviewDocumentsFallback = {documents: [
  {id:'builders-programme', title:'SORA Builders Programme', kind:'ecosystem service', source_url:'https://sora.org/builders', html_summary:'Mentorship, grants, incubation and porting support for teams. Participation remains controlled by the source programme.', claim_scope:'Information only; this page is not an application or funding decision.'},
  {id:'cbdc', title:'SORA for CBDC', kind:'institutional information', source_url:'https://sora.org/cbdc', html_summary:'Tokenised-asset and policy-governed digital-currency context, including proof-of-concept material.', claim_scope:'Not a regulatory approval or institutional integration statement.'},
  {id:'sora-wallet', title:'SORA Wallet', kind:'wallet', source_url:'https://sora.org/wallet', html_summary:'Self-custodial wallet information for accounts, assets, transfers, swaps and liquidity integrations.', claim_scope:'No wallet connection, transaction or recommendation is available here.'},
  {id:'polkaswap', title:'Polkaswap', kind:'DEX', source_url:'https://sora.org/polkaswap', html_summary:'Cross-chain exchange and liquidity context, linked as an external action-capable service.', claim_scope:'No price, route, trade or liquidity action is available here.'},
  {id:'sora-ecosystem-tokens', title:'SORA ecosystem tokens', kind:'token catalogue', source_url:'https://sora.org/soratokens', html_summary:'Context for XOR, VAL, PSWAP, XST and other named ecosystem-token concepts.', claim_scope:'Not market data, an offer or an investment view.'},
  {id:'sora-validator-guide', title:'SORA Validator Guide', kind:'network participation', source_url:'https://sora.org/validator', html_summary:'Operator and nominator context, including infrastructure and stake-weighted participation.', claim_scope:'No staking, nomination, registration or operational advice is available here.'},
  {id:'sora2-legacy-ecosystem', title:'SORA Legacy Ecosystem Overview', kind:'legacy', source_url:'https://sora.org/sora2', html_summary:'Legacy SORA ecosystem material. It describes the prior SORA ecosystem experience; for the current Hyperledger Iroha 3 engineering track, see SORA Nexus.', claim_scope:'Historical context only. Do not merge it with Nexus claims.'},
  {id:'privacy-policy', title:'Privacy Policy', kind:'legal source', source_url:'https://sora.org/privacy', claim_scope:'Complete source index is JSON-only; it is not Nexus policy or legal advice.'},
  {id:'terms-eula', title:'End User License Agreement', kind:'legal source', source_url:'https://sora.org/terms', claim_scope:'Complete source index is JSON-only; it is not a Nexus licence or acceptance flow.'}
]};

function renderReviewDocuments(data) {
  const documents = data.documents || reviewDocumentsFallback.documents;
  const serviceIds = new Set(['builders-programme','cbdc','sora-wallet','polkaswap','sora-ecosystem-tokens','sora-validator-guide']);
  const services = documents.filter(d => serviceIds.has(d.id));
  const legacy = documents.find(d => d.id === 'sora2-legacy-ecosystem');
  document.querySelector('#service-grid').innerHTML = services.map(d => `<a class="service-card" href="${d.source_url}" target="_blank" rel="noreferrer"><span class="meta">${interfaceCopy ? `${d.kind} · source linked` : d.kind}</span><h3>${d.title} <b>↗</b></h3><p>${d.html_summary}</p>${interfaceCopy ? `<small>${d.claim_scope}</small>` : ''}</a>`).join('');
  if (legacy) document.querySelector('#legacy-record').innerHTML = `<p class="eyebrow">${interfaceCopy ? 'Legacy / historical source' : 'Legacy SORA'}</p><h2>${legacy.title}</h2><p>${legacy.html_summary}</p>${interfaceCopy ? `<p class="legacy-limit">${legacy.claim_scope}</p>` : ''}<a href="${legacy.source_url}" target="_blank" rel="noreferrer">Read the legacy source ↗</a>`;
  document.querySelector('#legal-records')?.replaceChildren();
}

document.querySelector('.ecosystem-section')?.insertAdjacentHTML('afterend', `
  <section class="service-section" aria-labelledby="service-title"><div class="section-head"><p class="eyebrow">05 / SORA services</p><h2 id="service-title">Tools and programmes<br>across SORA.</h2><p>${interfaceCopy ? 'These synthetic summaries orient readers to substantive source pages. Detailed source records are available in the JSON corpus; this page never initiates an action.' : 'A selection of SORA services, programmes, and tools for builders, institutions, and the wider community.'}</p></div><div class="service-grid" id="service-grid"></div></section>
  <section class="legacy-section" id="legacy-record" aria-label="Legacy SORA ecosystem"></section>
`);
renderReviewDocuments(reviewDocumentsFallback);
fetch('api/v1/documents.json').then(r => r.ok ? r.json() : Promise.reject()).then(renderReviewDocuments).catch(() => {});

const contextualFallback = {documents: [
  {id:'nexus-live-framing', title:'SORA Nexus live-site framing', html_summary:'The live site frames current material through sovereign money, permissioned software and a common protocol for the CBDC era and an emerging agent economy.', source_url:'https://sora.org/sora_nexus_whitepaper.pdf'},
  {id:'soramitsu-bokolo-cash', title:'Bokolo Cash', html_summary:'Soramitsu, a SORA technology contributor, works with central banks on infrastructure for tokenized assets and CBDC-related services.', source_url:'https://soramitsu.co.jp/bokolo-cash'},
  {id:'makoto-cbdc-architecture-article', title:'CBDCs Are Not the Beast. Bad Architecture Is.', subtitle:'The life-giving ledger, SORA Nexus, and the constitutional design of digital money', author:'Makoto Takemiya', author_role:'SORA Contributor', published_at:'2026-06-22', html_summary:'A SORA Contributor editorial on the constitutional design of digital money, focused on separated and bounded institutional powers.', source_url:'https://x.com/M4K070/status/2068994860665991647'}
]};
function renderContext(data) {
  const docs = data.documents || contextualFallback.documents;
  const framing = docs.find(d => d.id === 'nexus-live-framing');
  const bokolo = docs.find(d => d.id === 'soramitsu-bokolo-cash');
  const article = docs.find(d => d.id === 'makoto-cbdc-architecture-article');
  if (framing) document.querySelector('#nexus-framing').innerHTML = `<p class="eyebrow">${interfaceCopy ? 'Published source framing' : 'SORA Nexus'}</p><h2>Sovereign money.<br>Permissioned software.<br>One protocol.</h2><p>${framing.html_summary}</p>${bokolo ? `<p class="contributor-note">${bokolo.html_summary}</p><p class="source-links"><a href="${framing.source_url}" target="_blank" rel="noreferrer">Read the Nexus whitepaper ↗</a><a href="${bokolo.source_url}" target="_blank" rel="noreferrer">Bokolo Cash ↗</a></p>` : `<a href="${framing.source_url}" target="_blank" rel="noreferrer">Read the Nexus whitepaper ↗</a>`}`;
  if (article) document.querySelector('#editorial-source').innerHTML = `<p class="eyebrow">${interfaceCopy ? 'Constitutional digital money / editorial source' : 'Constitutional digital money'}</p><h2>${article.title}</h2><p class="article-subtitle">${article.subtitle}</p><p>${article.html_summary}</p><p class="article-byline">${article.author} · ${article.author_role} · ${article.published_at}</p><a href="${article.source_url}" target="_blank" rel="noreferrer">Read the article ↗</a>`;
}
function renderDiagramIndex(data) {
  const topics = data.topics || fallback.topics;
  document.querySelector('#diagram-index-body').innerHTML = topics.map((t, index) =>
    `<article class="diagram-card"><span class="diagram-number">${String(index + 1).padStart(2, '0')}</span><span class="diagram-area">${t.section || t.category}</span><h3>${t.title}</h3></article>`
  ).join('') + `<article class="diagram-card diagram-card--complete"><span class="diagram-number">20</span><span class="diagram-area">${interfaceCopy ? 'Corpus record' : 'Protocol Atlas'}</span><h3>Complete Atlas</h3><p>${interfaceCopy ? '19 full visual and semantic records remain available in JSON.' : 'Nineteen protocol models, gathered in one view.'}</p></article>`;
}
document.querySelector('.diagram-section')?.insertAdjacentHTML('afterend', `
  <section class="diagram-index-section" aria-labelledby="diagram-index-title"><div class="section-head"><p class="eyebrow">${interfaceCopy ? '03 / Visual + semantic equivalents' : '03 / Protocol Atlas'}</p><h2 id="diagram-index-title">Every model,<br>legible in context.</h2><p>${interfaceCopy ? 'AMX remains expanded above. This compact 5 × 4 Atlas makes every other protocol model visible by title; complete visual and semantic records remain in JSON.' : 'AMX is expanded above. The Atlas gathers the remaining protocol models in one compact view.'}</p></div><div class="diagram-grid" id="diagram-index-body"></div></section>
  <section class="nexus-framing" id="nexus-framing"></section>
  <section class="editorial-source" id="editorial-source"></section>
`);
renderContext(contextualFallback);
renderDiagramIndex({topics:fallback.topics});
fetch('api/v1/documents.json').then(r => r.ok ? r.json() : Promise.reject()).then(renderContext).catch(() => {});
fetch('api/v1/atlas.json').then(r => r.ok ? r.json() : Promise.reject()).then(renderDiagramIndex).catch(() => {});
