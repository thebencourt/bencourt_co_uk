---
layout: main
---

<section class="tui-panel tui-panel--active">
  <h2 class="tui-panel__title"><span class="visually-hidden">About</span><span aria-hidden="true">[1] Status</span></h2>
  <div class="tui-hero">
    <img
      src="/avatar.png"
      alt="Pixel art portrait of Ben Court"
      width="96"
      height="96"
      fetchpriority="high"
      class="tui-avatar"
    >
    <div class="tui-hero__body">
      <div class="tui-status">
        <span class="tui-status__badge"><span aria-hidden="true">●</span> ONLINE</span>
        <span class="tui-status__sep" aria-hidden="true">|</span>
        <span class="tui-status__loc"><span aria-hidden="true">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span> Cardiff, Wales</span>
      </div>
      <p class="tui-lead">
        Senior front end developer, working at <a href="https://uw.co.uk" rel="noreferrer noopener">Utility Warehouse</a> <span aria-hidden="true">👨‍💻</span>
      </p>
      <p class="tui-sub">
        <span aria-hidden="true">💻</span> Consumer of <strong>APIs</strong> and <strong class="tui-highlight">IPAs</strong> <span aria-hidden="true">🍺</span>
      </p>
    </div>
  </div>
</section>

<div class="tui-grid">
  <section class="tui-panel">
    <h2 class="tui-panel__title"><span class="visually-hidden">Links</span><span aria-hidden="true">[2] Remotes</span></h2>
    <div class="tui-tree-root" aria-hidden="true">remotes/origin</div>
    <ul class="tui-tree" role="list">
      <li><a href="https://github.com/thebencourt" rel="noreferrer noopener">Github <span aria-hidden="true">↗</span></a></li>
      <li><a href="https://www.linkedin.com/in/ben-court-96163a103/" rel="noreferrer noopener">LinkedIn <span aria-hidden="true">↗</span></a></li>
    </ul>
  </section>

  <section class="tui-panel tui-panel--cta">
    <h2 class="tui-panel__title"><span class="visually-hidden">CV</span><span aria-hidden="true">[3] Changelog</span></h2>
    <p class="tui-meta">15+ years experience (2011&ndash;Present)</p>
    <p class="tui-muted">{{ jobs.size }} roles across product teams, agencies &amp; startups.</p>
    <a href="/cv" class="tui-btn">
      <span>git log --cv</span>
      <span aria-hidden="true">&rarr;</span>
    </a>
  </section>
</div>
