"use client";

import { useState } from "react";
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, CalendarDays, Check,
  ChevronDown, CircleHelp, Command, FolderKanban, LayoutDashboard,
  MoreHorizontal, Palette, Plus, Search, Settings, Sparkles, WandSparkles,
  Clock3, Image as ImageIcon, Layers3, ArrowRight, Zap, Ellipsis
} from "lucide-react";

const navigation = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "AI Studio", icon: WandSparkles, badge: "NEW" },
  { label: "Projects", icon: FolderKanban },
  { label: "Brand library", icon: Palette },
  { label: "Campaigns", icon: CalendarDays },
  { label: "Activity", icon: Activity },
];

const projects = [
  { name: "The November Edit", category: "PRODUCT LAUNCH", count: "06 designs", status: "In progress", style: "editorial", initials: "N° 04", title: "LESS, BUT BETTER.", sub: "A new perspective on everyday essentials" },
  { name: "Good Things Daily", category: "SOCIAL CAMPAIGN", count: "08 designs", status: "In review", style: "citrus", initials: "GTD", title: "A LITTLE MORE JOY.", sub: "Made for your everyday moments" },
  { name: "Sunday at the Bakery", category: "SEASONAL CAMPAIGN", count: "04 designs", status: "Planning", style: "bakery", initials: "SUNDAY", title: "FRESH FROM THE OVEN.", sub: "Slow mornings. Warm pastries." },
  { name: "Studio North", category: "BRAND PRESENTATION", count: "12 slides", status: "Completed", style: "architecture", initials: "SN / 01", title: "FORM FOLLOWS FEELING.", sub: "A study in thoughtful spaces" },
];

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [brief, setBrief] = useState("");
  const [mode, setMode] = useState("Copilot");

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" onClick={(e) => e.preventDefault()}>
          <span className="brand-symbol"><span /></span>
          <span className="brand-name">creative<span>manager</span></span>
        </a>
        <div className="workspace-switch">
          <div className="workspace-avatar">S</div>
          <div className="workspace-copy"><strong>Studio workspace</strong><small>Free plan</small></div>
          <ChevronDown size={15} />
        </div>
        <div className="side-label">WORKSPACE</div>
        <nav className="side-nav">
          {navigation.map((item) => {
            const Icon = item.icon;
            return <button key={item.label} onClick={() => setActive(item.label)} className={active === item.label ? "nav-item selected" : "nav-item"}>
              <Icon size={17} strokeWidth={1.8} /><span>{item.label}</span>{item.badge && <em>{item.badge}</em>}
            </button>;
          })}
        </nav>
        <div className="side-label tools-label">PREFERENCES</div>
        <nav className="side-nav">
          <button onClick={() => setActive("Settings")} className={active === "Settings" ? "nav-item selected" : "nav-item"}><Settings size={17} strokeWidth={1.8}/><span>Settings</span></button>
          <button onClick={() => setActive("Help centre")} className="nav-item"><CircleHelp size={17} strokeWidth={1.8}/><span>Help centre</span></button>
        </nav>
        <div className="sidebar-bottom">
          <div className="plan-card">
            <div className="plan-icon"><Zap size={15}/></div>
            <strong>Your creative team,</strong>
            <strong>without the overhead.</strong>
            <p>Bring your ideas to life with a little help from AI.</p>
            <button onClick={() => setActive("AI Studio")}>Explore AI Studio <ArrowUpRight size={13}/></button>
          </div>
          <div className="profile-row"><div className="profile-avatar">CM</div><div><strong>Creative workspace</strong><small>Demo account</small></div><MoreHorizontal size={17}/></div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumbs"><span>Workspace</span><span className="crumb-slash">/</span><strong>{active}</strong></div>
          <div className="topbar-right">
            <div className="search-box"><Search size={15}/><span>Search anything</span><kbd>⌘ K</kbd></div>
            <button className="icon-button" aria-label="Notifications"><Bell size={17}/><i /></button>
            <div className="top-avatar">CM</div>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div><div className="overline"><span className="live-dot"/> YOUR CREATIVE HQ</div><h1>Make room for <span>great ideas.</span></h1><p>Your creative work, moving in the right direction.</p></div>
            <div className="date-chip"><CalendarDays size={15}/> Monday, November 16</div>
          </section>

          <section className="command-hero">
            <div className="hero-copy">
              <div className="hero-kicker"><Sparkles size={14}/> YOUR AI CREATIVE PARTNER</div>
              <h2>Big idea?<br/><span>Let’s make it happen.</span></h2>
              <p>Tell your creative manager what you need. Get a plan, organize the work, and bring every design together.</p>
              <div className="hero-input-wrap">
                <textarea value={brief} onChange={(e) => setBrief(e.target.value)} placeholder="Describe what you want to create..." rows={2}/>
                <div className="hero-input-footer"><span><Command size={12}/> Be as detailed as you like</span><button onClick={() => setActive("AI Studio")} disabled={!brief.trim()}>Start creating <ArrowUpRight size={15}/></button></div>
              </div>
              <div className="mode-switch"><span>ASSISTANCE MODE</span><button className={mode === "Copilot" ? "mode-active" : ""} onClick={() => setMode("Copilot")}>Copilot</button><button className={mode === "Autopilot" ? "mode-active" : ""} onClick={() => setMode("Autopilot")}>Autopilot</button><span className="mode-hint">{mode === "Copilot" ? "You stay in control" : "AI handles approved tasks"}</span></div>
            </div>
            <div className="hero-art" aria-label="Abstract creative composition">
              <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
              <div className="art-glow"/>
              <div className="art-card art-card-back"><div className="mini-top"><span>CREATIVE DIRECTION</span><span>01 / 03</span></div><div className="mini-shape shape-a"/><div className="mini-lines"><i/><i/><i/></div></div>
              <div className="art-card art-card-front"><div className="mini-top"><span>THE MOODBOARD</span><span>✳</span></div><div className="mood-grid"><div className="mood-photo mood-one"/><div className="mood-photo mood-two"/><div className="mood-photo mood-three"/><div className="mood-photo mood-four"/></div><div className="mood-caption"><strong>Ideas in motion.</strong><span>Curated by your AI</span></div></div>
              <div className="floating-note"><span className="note-check"><Check size={12}/></span><div><strong>Creative direction</strong><small>Taking shape</small></div></div>
              <div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✦</div>
            </div>
          </section>

          <section className="metrics-row">
            <div className="metric-card"><div className="metric-head"><span>ACTIVE PROJECTS</span><FolderKanban size={16}/></div><div className="metric-value">04 <span className="metric-change"><ArrowUpRight size={12}/> +2</span></div><div className="metric-foot">Projects in your workspace</div></div>
            <div className="metric-card"><div className="metric-head"><span>DESIGNS IN PLAY</span><ImageIcon size={16}/></div><div className="metric-value">30</div><div className="metric-foot">Across all sample projects</div></div>
            <div className="metric-card"><div className="metric-head"><span>COMPLETED TASKS</span><Check size={16}/></div><div className="metric-value">12 <span className="metric-change"><ArrowUpRight size={12}/> +18%</span></div><div className="metric-foot">Illustrative workspace activity</div></div>
            <div className="metric-card"><div className="metric-head"><span>TIME ORGANIZED</span><Clock3 size={16}/></div><div className="metric-value">6.5<span className="metric-unit"> hrs</span></div><div className="metric-foot">Estimated time saved</div></div>
          </section>

          <section className="projects-section">
            <div className="section-title-row"><div><div className="overline muted-overline">YOUR WORK, AT A GLANCE</div><h3>Recent projects <span className="count-pill">04</span></h3></div><button className="text-action" onClick={() => setActive("Projects")}>View all projects <ArrowRight size={15}/></button></div>
            <div className="project-grid">
              {projects.map((project) => <article className="project-card" key={project.name}>
                <div className={"project-art " + project.style}>
                  <div className="project-art-top"><span>{project.category}</span><button aria-label="Project options"><Ellipsis size={17}/></button></div>
                  <div className="project-art-content"><span className="project-index">{project.initials}</span><strong>{project.title}</strong><small>{project.sub}</small></div>
                  <div className="project-art-footer"><span>CREATIVE MANAGER STUDIO</span><span>↗</span></div>
                </div>
                <div className="project-info"><div><h4>{project.name}</h4><p>{project.count} <span>·</span> {project.status}</p></div><button className="project-open" aria-label={"Open " + project.name}><ArrowUpRight size={16}/></button></div>
              </article>)}
            </div>
          </section>

          <section className="bottom-grid">
            <div className="activity-panel">
              <div className="panel-heading"><div><div className="overline muted-overline">LATEST UPDATES</div><h3>Activity feed</h3></div><button className="subtle-link" onClick={() => setActive("Activity")}>See all <ArrowRight size={14}/></button></div>
              <div className="feed-item"><div className="feed-icon feed-purple"><Layers3 size={15}/></div><div className="feed-copy"><strong>Project workspace created</strong><p>November product launch <span>· Sample</span></p></div><time>2h ago</time></div>
              <div className="feed-item"><div className="feed-icon feed-orange"><Sparkles size={15}/></div><div className="feed-copy"><strong>Creative brief drafted</strong><p>Weekly social content <span>· Sample</span></p></div><time>Yesterday</time></div>
              <div className="feed-item"><div className="feed-icon feed-green"><Check size={15}/></div><div className="feed-copy"><strong>Design review completed</strong><p>Brand presentation <span>· Sample</span></p></div><time>Nov 12</time></div>
            </div>
            <div className="integration-panel"><div className="integration-top"><div className="canva-mark">C</div><span className="integration-status"><i/> NOT CONNECTED</span></div><div className="overline muted-overline">YOUR DESIGN WORKFLOW</div><h3>Bring your Canva<br/>workspace together.</h3><p>Connect Canva to give your creative manager access to the designs and brand assets you choose to share.</p><button onClick={() => setActive("Settings")}>Explore connection <ArrowUpRight size={14}/></button></div>
          </section>
          <footer className="page-footer"><span>CREATIVE MANAGER <b>·</b> YOUR CREATIVE DEPARTMENT, MANAGED BY AI.</span><span>EARLY ACCESS PREVIEW · SAMPLE DATA</span></footer>
        </div>
      </main>
    </div>
  );
}
