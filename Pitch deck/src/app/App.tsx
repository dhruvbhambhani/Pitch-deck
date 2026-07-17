import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Users, TrendingUp, Target, AlertTriangle, CheckCircle } from "lucide-react";

// ─── Slide header ──────────────────────────────────────────────────────────────
function SlideHeader({ tag, slide }: { tag: string; slide: string }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <span
        className="text-xs tracking-[0.22em] uppercase"
        style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}
      >
        {tag}
      </span>
      <span
        className="text-xs tracking-widest"
        style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}
      >
        {slide}
      </span>
    </div>
  );
}

// ─── Slide 1: Cover ────────────────────────────────────────────────────────────
function CoverSlide() {
  return (
    <div className="relative w-full h-full flex overflow-hidden">
      {/* Left panel */}
      <div className="flex-1 flex flex-col justify-between p-16 z-10">
        <div>
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8" style={{ background: "var(--accent)" }} />
            <p
              className="text-xs tracking-[0.28em] uppercase"
              style={{ color: "var(--accent)", fontFamily: "DM Sans, sans-serif" }}
            >
              Powell Industries · Internal Initiative
            </p>
          </div>
          <h1
            className="text-6xl font-semibold leading-[1.06] mb-6"
            style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
          >
            Hybrid<br />
            Robotics<br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Division</em>
          </h1>
          <p
            className="text-lg font-light leading-relaxed max-w-md mt-8"
            style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}
          >
            A force-multiplier strategy to eliminate manufacturing choke points —
            without disrupting operations or threatening the culture that makes Powell what it is.
          </p>
        </div>

        <div className="flex items-end gap-12 border-t pt-8" style={{ borderColor: "var(--border)" }}>
          <div>
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "DM Sans, sans-serif" }}>Proposed By</p>
            <p className="text-base font-medium" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>Strategic Initiatives Team</p>
            <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>Cross-functional team alignment</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "DM Sans, sans-serif" }}>Audience</p>
            <p className="text-base font-medium" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>Executive Leadership</p>
            <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>Q3 2026 Strategy Review</p>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-[400px] relative flex-shrink-0" style={{ background: "var(--card)" }}>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, transparent 38%, var(--accent) 38%, var(--accent) 42%, transparent 42%)",
            opacity: 0.12,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[14rem] font-bold leading-none select-none"
            style={{ fontFamily: "Playfair Display, serif", color: "var(--accent)", opacity: 0.05 }}
          >
            PI
          </span>
        </div>
        <div className="absolute bottom-16 left-0 right-0 flex flex-col gap-8 px-12">
          {[
            { value: "$1.8B", label: "Current Backlog" },
            { value: "75+", label: "Years of Powell Culture" },
            { value: "$545M", label: "Cash Position to Deploy" },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 pl-4" style={{ borderColor: "var(--accent)" }}>
              <p className="text-3xl font-semibold" style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}>
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest mt-0.5" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Slide 2: The Ohio Problem ─────────────────────────────────────────────────
function OhioSlide() {
  const failures = [
    {
      label: "Rigid Code",
      impact: "Third-party software can't adapt to variance in heavy steel parts without costly change orders — every Powell job is custom-engineered.",
    },
    {
      label: "Multi-Agent Conflict",
      impact: "Robots can't communicate in real time. The holding and welding robots in Ohio ran sequential loops instead of coordinated kinematics — causing misalignment.",
    },
    {
      label: "Vendor Lock-In",
      impact: "Powell pays for the solution but owns none of the software intelligence. The IP belongs to the integrator. We have zero recalibration autonomy.",
    },
    {
      label: "Capacity Choke",
      impact: "Every minor adjustment requires an outside contractor. With a $400M+ data center mega-order now booked, that delay is not acceptable.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-20 py-16">
      <SlideHeader tag="The Ohio Problem" slide="02 / 08" />
      <h2
        className="text-5xl font-semibold leading-tight mb-4 max-w-2xl"
        style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
      >
        Third-party automation fails our business model by design.
      </h2>
      <p className="text-base mb-12 max-w-xl" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
        The Ohio trial wasn't a bad vendor. It was proof that rigid, off-the-shelf automation is structurally incompatible with engineered-to-order manufacturing.
      </p>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {failures.map((f) => (
          <div
            key={f.label}
            className="p-7 rounded-sm flex gap-5"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <AlertTriangle size={18} className="flex-shrink-0 mt-1" style={{ color: "var(--accent)" }} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
              >
                {f.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
                {f.impact}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-5 p-5 flex items-center gap-4 rounded-sm"
        style={{ background: "rgba(196,150,58,0.07)", border: "1px solid rgba(196,150,58,0.2)" }}
      >
        <ArrowRight size={14} style={{ color: "var(--accent)" }} className="flex-shrink-0" />
        <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>
          Strategy shift: move from <em>"Sequential Loops"</em> to <em>"Coordinated Kinematics"</em> — robots that think together, not one after another.
        </p>
      </div>
    </div>
  );
}

// ─── Slide 3: Philosophy — Force Multiplier, Not Job Eliminator ────────────────
function PhilosophySlide() {
  return (
    <div className="w-full h-full flex px-20 py-16 gap-16">
      <div className="flex-1 flex flex-col">
        <SlideHeader tag="Our Philosophy" slide="03 / 08" />
        <h2
          className="text-5xl font-semibold leading-tight mb-8"
          style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
        >
          We're not here to replace people. We're here to make one person do the work of ten.
        </h2>
        <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
          Powell has 75+ years of culture built on protecting its people. That's not inertia — that's identity, and any initiative that doesn't account for it from day one is dead on arrival.
        </p>
        <p className="text-base leading-relaxed mb-12 max-w-lg" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
          This proposal is a <strong style={{ color: "var(--foreground)" }}>force multiplier</strong>, not a workforce reducer. Skilled welders stop doing repetitive tasks and move to the complex, custom work only they can do. The robot handles the repetition. The human handles the craft.
        </p>
        <div className="flex flex-col gap-4">
          {[
            { icon: Shield, text: "No disruption to current floors or active orders" },
            { icon: Users, text: "High-skill welders redirected to higher-value work" },
            { icon: Zap, text: "One trained operator oversees multiple robot cells" },
            { icon: Target, text: "POC in a new facility only — not retrofitted into existing culture" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: "rgba(196,150,58,0.1)" }}>
                <Icon size={15} style={{ color: "var(--accent)" }} />
              </div>
              <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pull quote */}
      <div className="w-72 flex-shrink-0 flex flex-col gap-6">
        <div
          className="flex-1 rounded-sm p-8 flex flex-col justify-between"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div>
            <div className="text-4xl mb-6" style={{ color: "var(--accent)", fontFamily: "Playfair Display, serif", lineHeight: 1 }}>"</div>
            <p className="text-base italic leading-relaxed" style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}>
              We don't need to reinvent the arm. We need to own the handshake. By building the software internally, we ensure the robots adapt to our engineering — not the other way around.
            </p>
          </div>
          <p className="text-xs mt-8 tracking-widest uppercase" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            Core thesis
          </p>
        </div>
        <div
          className="rounded-sm p-6"
          style={{ background: "rgba(196,150,58,0.08)", border: "1px solid rgba(196,150,58,0.2)" }}
        >
          <p className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}>
            Culture First
          </p>
          <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>
            "Respect the culture first. Any innovation effort has to account for this from day one. Powell's 75+ years isn't inertia — it's identity."
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 4: The Hybrid Model ─────────────────────────────────────────────────
function HybridModelSlide() {
  return (
    <div className="w-full h-full flex flex-col px-20 py-16">
      <SlideHeader tag="The Hybrid Model" slide="04 / 08" />
      <h2
        className="text-5xl font-semibold leading-tight mb-4"
        style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
      >
        Buy the Muscle. Build the Brains.
      </h2>
      <p className="text-base mb-12 max-w-xl" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
        We avoid the enormous R&D cost of building robotics hardware while keeping 100% control over the software intelligence that defines our unique manufacturing process.
      </p>

      <div className="flex gap-px flex-1" style={{ background: "var(--border)" }}>
        {/* Buy the Muscle */}
        <div className="flex-1 flex flex-col p-10" style={{ background: "var(--background)" }}>
          <p className="text-xs tracking-[0.22em] uppercase mb-6" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            Purchase from ABB / FANUC
          </p>
          <h3 className="text-3xl font-semibold mb-6" style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}>
            The Muscle
          </h3>
          <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            Bare-metal heavy-payload articulated arms from proven industrial suppliers. World-class hardware at commodity pricing — no proprietary black boxes.
          </p>
          <div className="flex flex-col gap-3 mt-auto">
            {[
              "$70K–$120K per heavy-payload arm",
              "80,000+ hours certified uptime",
              "No R&D risk — proven hardware",
              "Commodity pricing scales down over time",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={13} style={{ color: "var(--accent)" }} className="flex-shrink-0" />
                <span className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Build the Brains */}
        <div className="flex-1 flex flex-col p-10" style={{ background: "var(--card)" }}>
          <p className="text-xs tracking-[0.22em] uppercase mb-6" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}>
            Built internally — Powell owns the IP
          </p>
          <h3 className="text-3xl font-semibold mb-6" style={{ fontFamily: "Playfair Display, serif", color: "var(--accent)" }}>
            The Brains & Hands
          </h3>
          <p className="text-sm leading-relaxed mb-8" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            Proprietary control software and custom end-effectors (grippers). Built by our internal team on ROS 2 — an open-architecture standard Powell will fully own and can recalibrate at will.
          </p>
          <div className="flex flex-col gap-3 mt-auto">
            {[
              "ROS 2 open-architecture (no vendor lock-in)",
              "Instant recalibration as switchgear designs change",
              "Custom grippers designed for our exact parts",
              "IP is Powell's — forever",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={13} style={{ color: "var(--accent)" }} className="flex-shrink-0" />
                <span className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The advantage */}
        <div className="w-56 flex flex-col p-8" style={{ background: "var(--secondary)" }}>
          <p className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            The Result
          </p>
          <div className="flex flex-col gap-6 mt-auto">
            {[
              { val: "100%", label: "IP Ownership" },
              { val: "$0", label: "Software cost to scale globally" },
              { val: "∞", label: "Recalibration autonomy" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold" style={{ fontFamily: "Playfair Display, serif", color: "var(--accent)" }}>{s.val}</p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 5: Technical Solution ───────────────────────────────────────────────
function TechnicalSlide() {
  const capabilities = [
    {
      number: "01",
      title: "Unified Brain (MoveIt 2)",
      body: "Treats multiple robots as a single kinematic system. Robot A and Robot B don't move independently — they execute a single coordinated plan. This directly solves the Ohio hold-and-weld failure.",
    },
    {
      number: "02",
      title: "Force-Torque Feedback (Micro-Adjustments)",
      body: "Sensors in the robots' wrists let them \"feel\" in real time. If the holding robot senses a part shift, the welding robot dynamically adjusts its path in milliseconds — no human intervention required.",
    },
    {
      number: "03",
      title: "3D Machine Vision",
      body: "Spatial awareness identifies variance in custom-engineered steel parts and corrects robot paths without stopping the line. This is how we handle engineered-to-order variance at scale.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-20 py-16">
      <SlideHeader tag="The Technical Solution" slide="05 / 08" />
      <h2
        className="text-5xl font-semibold leading-tight mb-4 max-w-2xl"
        style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
      >
        Event-driven choreography. Not dumb timers.
      </h2>
      <p className="text-base mb-12 max-w-xl" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
        This is why Ohio failed: the robots ran on sequential loops, not shared awareness. ROS 2 replaces timers with real-time sensor events — robots that react to each other, not just to a clock.
      </p>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {capabilities.map((c) => (
          <div
            key={c.number}
            className="flex flex-col p-8 rounded-sm"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <span className="text-xs tracking-[0.2em] mb-6" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}>
              {c.number}
            </span>
            <h3
              className="text-xl font-semibold mb-4 leading-snug"
              style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
            >
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-5 p-5 flex items-center gap-4 rounded-sm"
        style={{ background: "rgba(196,150,58,0.07)", border: "1px solid rgba(196,150,58,0.2)" }}
      >
        <TrendingUp size={14} style={{ color: "var(--accent)" }} className="flex-shrink-0" />
        <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>
          Technical advantage: this system replicates the human ability to hold and weld simultaneously, but with the precision and repeatability of industrial automation — a capability no off-the-shelf integrator has been able to deliver for engineered-to-order manufacturing.
        </p>
      </div>
    </div>
  );
}

// ─── Slide 6: Capital & ROI ────────────────────────────────────────────────────
function CapitalSlide() {
  return (
    <div className="w-full h-full flex px-20 py-16 gap-14">
      <div className="flex-1 flex flex-col">
        <SlideHeader tag="Capital & ROI" slide="06 / 08" />
        <h2
          className="text-5xl font-semibold leading-tight mb-6"
          style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
        >
          A $1M pilot against a $1.8B backlog.
        </h2>
        <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
          Powell's cash position is $545M. This isn't a $10M gamble — it's a focused pilot to solve a specific coordination problem. Even a 1% throughput gain against our current backlog pays for this division in months.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          <p className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>Phase 2 Budget Breakdown</p>
          {[
            { label: "Personnel (Robotics Architect, Controls Eng., Vision Specialist)", value: "$400K", pct: 47 },
            { label: "Hardware — 1 heavy-duty arm + sensors + grippers", value: "$200K", pct: 24 },
            { label: "R&D Sandbox — dedicated space + simulation software", value: "$250K", pct: 29 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>{item.label}</span>
                <span className="text-sm font-medium" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>{item.value}</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "var(--secondary)" }}>
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: "var(--accent)" }} />
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="text-sm font-medium" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>Total Pilot Investment</span>
            <span className="text-xl font-semibold" style={{ fontFamily: "Playfair Display, serif", color: "var(--accent)" }}>$850K–$1.0M</span>
          </div>
        </div>
      </div>

      <div className="w-72 flex-shrink-0 flex flex-col gap-5">
        <div
          className="rounded-sm p-7"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <p className="text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}>ROI Calculus</p>
          {[
            { metric: "Weld cycle time reduction", value: "30%" },
            { metric: "Software cost to scale globally", value: "$0" },
            { metric: "Estimated payback period", value: "< 12 mo" },
            { metric: "Backlog against pilot cost", value: "2,118×" },
          ].map((r) => (
            <div key={r.metric} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid var(--border)" }}>
              <span className="text-xs" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>{r.metric}</span>
              <span className="text-base font-semibold" style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}>{r.value}</span>
            </div>
          ))}
        </div>
        <div
          className="rounded-sm p-6"
          style={{ background: "rgba(196,150,58,0.08)", border: "1px solid rgba(196,150,58,0.2)" }}
        >
          <p className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}>
            For Bret Cope (CFO)
          </p>
          <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>
            Safety gains: reduced repetitive-strain incidents in welding. Efficiency gains: 30% faster cycle times, quantified per order. The math needs to math — and it does.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Slide 7: Roadmap ──────────────────────────────────────────────────────────
function RoadmapSlide() {
  const phases = [
    {
      label: "Months 1–3",
      name: "90-Day Audit & Recruit",
      color: "var(--accent)",
      items: [
        "Audit Ohio plant third-party bottlenecks",
        "Define exact milestones for discovery phase",
        "Hire core Houston robotics team (3 people)",
        "Establish continuity plan & mentorship structure",
      ],
    },
    {
      label: "Months 4–8",
      name: "\"Hold & Weld\" Sandbox",
      color: "#7EC8B0",
      items: [
        "Build prototype cell in Mosley Facility R&D bay",
        "Develop ROS 2 coordination logic",
        "One station. Prove hold-and-weld coordination.",
        "Validate with internal team — no outside contractors",
      ],
    },
    {
      label: "Months 9–12",
      name: "Factory Floor Deployment",
      color: "#A89EC8",
      items: [
        "Integrate first internal cell into North Canton line",
        "Train internal maintenance teams on open-architecture system",
        "Begin scoping new-shop robotics-first design",
        "Document playbook for global replication",
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-20 py-16">
      <SlideHeader tag="12-Month Roadmap" slide="07 / 08" />
      <h2
        className="text-5xl font-semibold leading-tight mb-4"
        style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
      >
        One station. Proven out. Then scale.
      </h2>
      <p className="text-base mb-10 max-w-xl" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
        Risk-mitigated approach. Milestones are explicit — vague timelines kill credibility. No big-bang rollout, no retrofitting culture.
      </p>

      <div className="flex gap-0 mb-8 rounded-sm overflow-hidden" style={{ height: "5px" }}>
        {phases.map((p) => <div key={p.name} className="flex-1" style={{ background: p.color }} />)}
      </div>

      <div className="grid grid-cols-3 gap-5 flex-1">
        {phases.map((p) => (
          <div
            key={p.name}
            className="flex flex-col p-8 rounded-sm"
            style={{ background: "var(--card)", border: "1px solid var(--border)", borderTop: `2px solid ${p.color}` }}
          >
            <div className="mb-5">
              <p className="text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "DM Sans, sans-serif", color: p.color }}>
                {p.label}
              </p>
              <h3 className="text-xl font-semibold leading-snug" style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}>
                {p.name}
              </h3>
            </div>
            <ul className="flex flex-col gap-3 flex-1">
              {p.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: p.color }} />
                  <span className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide 8: The Ask + Stakeholders ──────────────────────────────────────────
function AskSlide() {
  return (
    <div className="w-full h-full flex px-20 py-16 gap-14">
      <div className="flex-1 flex flex-col">
        <SlideHeader tag="The Ask & Alignment" slide="08 / 08" />
        <h2
          className="text-5xl font-semibold leading-tight mb-8"
          style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
        >
          Small team. One station. No disruption.
        </h2>
        <div className="flex flex-col gap-4 flex-1">
          {[
            {
              label: "Phase 1 Approval",
              detail: "Greenlight the 90-day audit and hiring process for the 3-person core team. Total Phase 1 cost is minimal — this is the only decision needed today.",
              owner: "CEO / Board",
            },
            {
              label: "Dedicated R&D Space",
              detail: "Access to one bay in the Mosley Facility for sandbox development. No existing production line is touched.",
              owner: "Ops Leadership",
            },
            {
              label: "EDH Stakeholder Buy-In",
              detail: "Brent Hess runs EDH — the cash cow. Switchgear and data center orders are his domain. Nothing moves without his read on throughput risk and upside. We need him at the table.",
              owner: "Brent Hess / EDH",
            },
            {
              label: "Continuity Commitment",
              detail: "A named mentor and a handoff plan in place from day one. Leadership won't greenlight something new without project continuity. Plan: hand off → graduate → come back. Powell builds from within.",
              owner: "Team Lead",
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex gap-5 p-6 rounded-sm items-start"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-3xl font-semibold leading-none flex-shrink-0 w-6"
                style={{ fontFamily: "Playfair Display, serif", color: "var(--accent)", opacity: 0.4 }}
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-semibold" style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}>
                    {item.label}
                  </h4>
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full ml-4 flex-shrink-0"
                    style={{ fontFamily: "DM Sans, sans-serif", background: "rgba(196,150,58,0.12)", color: "var(--accent)" }}
                  >
                    {item.owner}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Bryce's notes */}
      <div className="w-68 flex-shrink-0 flex flex-col gap-4" style={{ width: "260px" }}>
        <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}>
          Key Framing Notes
        </p>
        {[
          {
            point: "Shared observation",
            note: "Frame this as a shared observation across the team, not a single person's idea. A pattern multiple people see is much harder to dismiss than one person's enthusiasm.",
          },
          {
            point: "New-shop play",
            note: "If Powell ever builds a new shop, push for robotics-first design from day one. Prove it there. Only then migrate original shops — retrofitting culture is the hard path.",
          },
          {
            point: "Alternative play",
            note: "If no new shop, focus on stations only — not transport across the floor. The floor is messy. Stations are the real opening.",
          },
          {
            point: "CFO language",
            note: "Bret Cope thinks in numbers. Quantified efficiency + safety gains only. No vision statements without math behind them.",
          },
        ].map((n) => (
          <div
            key={n.point}
            className="p-5 rounded-sm"
            style={{ background: "rgba(196,150,58,0.06)", border: "1px solid rgba(196,150,58,0.15)" }}
          >
            <p className="text-xs font-semibold mb-1" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}>{n.point}</p>
            <p className="text-xs leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>{n.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Slide registry ────────────────────────────────────────────────────────────
const SLIDES = [
  { id: "cover", Component: CoverSlide },
  { id: "ohio", Component: OhioSlide },
  { id: "philosophy", Component: PhilosophySlide },
  { id: "hybrid", Component: HybridModelSlide },
  { id: "technical", Component: TechnicalSlide },
  { id: "capital", Component: CapitalSlide },
  { id: "roadmap", Component: RoadmapSlide },
  { id: "ask", Component: AskSlide },
];

// ─── App shell ─────────────────────────────────────────────────────────────────
export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);

  const navigate = useCallback(
    (dir: "next" | "prev") => {
      if (animating) return;
      const next = dir === "next" ? current + 1 : current - 1;
      if (next < 0 || next >= SLIDES.length) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 220);
    },
    [animating, current]
  );

  const goTo = useCallback(
    (i: number) => {
      if (i === current || animating) return;
      setDirection(i > current ? "next" : "prev");
      setAnimating(true);
      setTimeout(() => {
        setCurrent(i);
        setAnimating(false);
      }, 220);
    },
    [animating, current]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") navigate("next");
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") navigate("prev");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  const { Component: CurrentSlide } = SLIDES[current];

  return (
    <div
      className="w-full h-screen overflow-hidden relative flex flex-col"
      style={{ background: "var(--background)" }}
    >
      <div
        className="flex-1 relative"
        style={{
          opacity: animating ? 0 : 1,
          transform: animating
            ? `translateY(${direction === "next" ? "10px" : "-10px"})`
            : "translateY(0)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
        }}
      >
        <CurrentSlide />
      </div>

      {/* Nav bar */}
      <div
        className="flex items-center justify-between px-20 py-4 flex-shrink-0"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "28px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === current ? "var(--accent)" : "var(--border)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.25s ease",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("prev")}
            disabled={current === 0}
            className="w-8 h-8 flex items-center justify-center rounded-sm transition-colors duration-150"
            style={{
              background: current === 0 ? "transparent" : "var(--card)",
              border: "1px solid var(--border)",
              color: current === 0 ? "var(--border)" : "var(--foreground)",
              cursor: current === 0 ? "not-allowed" : "pointer",
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={() => navigate("next")}
            disabled={current === SLIDES.length - 1}
            className="w-8 h-8 flex items-center justify-center rounded-sm transition-colors duration-150"
            style={{
              background: current === SLIDES.length - 1 ? "transparent" : "var(--card)",
              border: "1px solid var(--border)",
              color: current === SLIDES.length - 1 ? "var(--border)" : "var(--foreground)",
              cursor: current === SLIDES.length - 1 ? "not-allowed" : "pointer",
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
