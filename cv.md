---
layout: main
title: CV | Ben Court
description: CV for Ben Court, Cardiff based front end developer
---

<div class="tui-grid tui-grid--cv">
<section class="tui-panel">
  <h2 class="tui-panel__title"><span aria-hidden="true">[1] </span>Intro</h2>

I am a front-end engineer with over fifteen years of professional experience in web development. While my background spans the full stack, my core expertise and interests are firmly rooted in front-end development, with a particular focus on mobile-first design, accessibility, performance optimisation, and progressive web applications.

My interest in technology began early, with my first introduction to web development from learning HTML and CSS to customise my MySpace profile. What started as a hobby evolved into a passion, which I continued to develop alongside studying and pursuing a career in music.

Following a period as a professional musician, I transitioned into software development, dedicating significant personal time to advancing my technical skills. This commitment led to my first role as a junior developer and has since developed into a long-term, focused career in front-end engineering.
</section>

<section class="tui-panel">
  <h2 class="tui-panel__title"><span aria-hidden="true">[2] </span>Skills</h2>

My primary expertise lies in HTML, CSS, and JavaScript, with additional exposure to a range of supporting languages and technologies.

I have contributed across a wide range of environments and team structures, including serving as a sole front-end developer, collaborating within agency teams, working in in-house product organisations, and supporting fully remote startups. This breadth of experience has enabled me to adapt quickly, communicate effectively across disciplines, and deliver high-quality user experiences in diverse contexts.

I have extensive experience working with modern frameworks, tools, and libraries, including:

<ul class="skills" role="list">
  <li>Next.js</li>
  <li>React</li>
  <li>GraphQL</li>
  <li>TypeScript</li>
  <li>Jest</li>
  <li>Playwright</li>
  <li>Styled Components</li>
  <li>Material UI (MUI)</li>
</ul>
</section>
</div>

<section class="tui-panel tui-panel--active">
  <h2 class="tui-panel__title"><span aria-hidden="true">[3] </span>History</h2>

<div class="jobs">
{%- for job in jobs -%}
  <details class="job"{% if forloop.first %} open{% endif %}>
    <summary>
      <span class="job__title">
        {{ job.role }}, <span class="job__org">{{ job.company }}</span>
      </span>
      <span class="job__dates">
        <time datetime="{{ job.start.datetime }}">
          {{ job.start.month }}
          <span>{{ job.start.year }}</span>
        </time>
        to
        <time datetime="{{ job.end.datetime }}">
          {%- if job.end.month -%}
            {{ job.end.month }}
            <span>{{ job.end.year }}</span>
          {%- else -%}
            {{ job.end.label }}
          {%- endif -%}
        </time>
      </span>
    </summary>
    {%- if job.url -%}
    <div class="job__company">
      <a href="{{ job.url }}" rel="noreferrer noopener">{{ job.company }} <span aria-hidden="true">↗</span></a>
    </div>
    {%- endif -%}
    <ul class="skills" role="list">
      {%- for skill in job.skills -%}
      <li>{{ skill }}</li>
      {%- endfor -%}
    </ul>
    {%- for paragraph in job.description -%}
    <p>{{ paragraph }}</p>
    {%- endfor -%}
  </details>
{%- endfor -%}
</div>
</section>
