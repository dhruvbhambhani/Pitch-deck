import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Users, TrendingUp, Target, AlertTriangle, CheckCircle, GraduationCap } from "lucide-react";

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
            Robotics/AI<br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Division</em>
          </h1>
          <p
            className="text-lg font-light leading-relaxed max-w-md mt-8"
            style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}
          >
            A force-multiplier strategy to eliminate manufacturing choke points,
            without disrupting operations or threatening the culture that makes Powell what it is.
          </p>
        </div>

        <div className="flex items-start gap-12 border-t pt-8" style={{ borderColor: "var(--border)" }}>
          <div>
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "DM Sans, sans-serif" }}>Proposed By</p>
            <p className="text-base font-medium" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>Dhruv Bhambhani</p>
            <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>R&D SWE Intern</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--muted-foreground)", fontFamily: "DM Sans, sans-serif" }}>Audience</p>
            <p className="text-base font-medium" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>Brett Cope</p>
            <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>CEO</p>
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
            { value: "$400M", label: "Data Center Contract" },
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
      impact: "Robots can't communicate in real time. Holding and welding robots should be using coordinated kinematics, not sequential loops — the mismatch causes misalignment.",
    },
    {
      label: "Vendor Lock-In",
      impact: "Powell pays for the solution but owns none of the software intelligence. The IP belongs to the integrator. We have zero recalibration autonomy.",
    },
    {
      label: "Capacity Choke",
      impact: "Every minor adjustment requires an outside contractor. With a $400M+ data center mega-order on the line, that delay is not acceptable.",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-20 py-16">
      <SlideHeader tag="Third Parties" slide="02 / 08" />
      <h2
        className="text-5xl font-semibold leading-tight mb-4 max-w-2xl"
        style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
      >
        Third-party automation fails our business model by design.
      </h2>
      <p className="text-base mb-12 max-w-xl" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
        "Sequential Loops" to "Coordinated Kinematics"
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
          Robots that think together, not one after another.
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
            { icon: Target, text: "POC first, no disruptions to current factories" },
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
              We don't need to reinvent the arm. We need to own the handshake. By building the software internally, we ensure the robots adapt to our engineering.
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
      body: "Treats multiple robots as a single kinematic system. Robot A and Robot B don't move independently — they execute a single coordinated plan. This directly solves the hold-and-weld failure from the pilot.",
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
        Event-driven choreography.
      </h2>
      <p className="text-base mb-12 max-w-xl" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
        Robots need shared awareness for proper coordination. ROS 2 replaces timers with real-time sensor events — robots that react to each other, not just to a clock.
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

// ─── Slide 6: Not a Solo Pitch ──────────────────────────────────────────────────
function CapitalSlide() {
  return (
    <div className="w-full h-full flex px-20 py-16 gap-14">
      <div className="flex-1 flex flex-col">
        <SlideHeader tag="Not a Solo Pitch" slide="06 / 08" />
        <h2
          className="text-5xl font-semibold leading-tight mb-6"
          style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}
        >
          I'm not alone in seeing this.
        </h2>
        <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
          This isn't one intern's idea. Others across the floor and the mentorship chain have flagged the same coordination gap independently. A pattern multiple people already see is much harder to dismiss than one person's enthusiasm.
        </p>
        <p className="text-base leading-relaxed mb-12 max-w-lg" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
          Powell operates like a family, and this proposal is built with that in mind. There's a clear <strong style={{ color: "var(--foreground)" }}>continuity plan</strong>: a mentor who knows the full technical picture and can carry it forward if I step away to finish school. I hand off, I graduate, I come back — the effort survives my absence.
        </p>

        <div className="flex flex-col gap-4">
          {[
            { icon: Users, text: "Others on the floor and in the mentorship chain see the same pattern" },
            { icon: Shield, text: "Named mentor ready to carry the initiative if I step away" },
            { icon: GraduationCap, text: "Explicit plan: I hand off, I graduate, I come back" },
            { icon: Target, text: "Homegrown talent Powell is investing in, not an outsider pushing change" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: "rgba(0,177,85,0.1)" }}>
                <Icon size={15} style={{ color: "var(--accent)" }} />
              </div>
              <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-72 flex-shrink-0 flex flex-col gap-6">
        <div
          className="flex-1 rounded-sm p-8 flex flex-col justify-between"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div>
            <div className="text-4xl mb-6" style={{ color: "var(--accent)", fontFamily: "Playfair Display, serif", lineHeight: 1 }}>"</div>
            <p className="text-base italic leading-relaxed" style={{ fontFamily: "Playfair Display, serif", color: "var(--foreground)" }}>
              This is a shared observation, not a personal pitch — and it's built to outlast any one person's schedule.
            </p>
          </div>
          <p className="text-xs mt-8 tracking-widest uppercase" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--muted-foreground)" }}>
            The pattern
          </p>
        </div>
        <div
          className="rounded-sm p-6"
          style={{ background: "rgba(0,177,85,0.08)", border: "1px solid rgba(0,177,85,0.2)" }}
        >
          <p className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--accent)" }}>
            Continuity, Not a Gamble
          </p>
          <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--foreground)" }}>
            This isn't a bet on one person finishing what they start. It's a pattern multiple people already see, with a hand-off plan that protects it either way.
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
        "Audit pilot plant third-party bottlenecks",
        "Research possible applications",
        "Define exact milestones for discovery phase",
        "Establish continuity plan",
      ],
    },
    {
      label: "Months 4–12",
      name: "Proof of Concept (Applications Chosen)",
      color: "#7EC8B0",
      items: [
        "Build prototype cell",
        "Develop ROS 2 coordination logic",
        "One station. Prove hold-and-weld coordination end-to-end.",
        "Validate with internal team — no outside contractors",
        "Train internal team on the open-architecture system",
        "Document playbook for next-phase scale-up",
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

      <div className="grid grid-cols-2 gap-5 flex-1">
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
          Small team. No disruption.
        </h2>
        <div className="flex flex-col gap-4 flex-1">
          {[
            {
              label: "Phase 1 Approval",
              detail: "Greenlight the 90-day audit and hiring process for the small core team. Total Phase 1 cost is minimal. I'm willing to hold a follow-up meeting with you, Bryce, and anyone else who might have insight here, to get a better idea of applications.",
              owner: "CEO / Board",
            },
            {
              label: "Continuity Commitment",
              detail: "A named mentor and a handoff plan in place from day one. Leadership won't greenlight something new without project continuity. Plan: hand off → graduate → come back. Powell builds from within.",
              owner: "R&D",
            },
            {
              label: "Trust",
              detail: "I want to do this for the Powell family. I have no personal interest in this — I genuinely want to make an impact on this company, and to come back and join the Powell family for good.",
              owner: "Dhruv Bhambhani",
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
// Slides are laid out on a fixed canvas and scaled to fit the viewport, so the
// deck renders identically on any screen size instead of clipping on short ones.
const DESIGN_WIDTH = 1600;
const DESIGN_HEIGHT = 900;

function useFitScale() {
  const [scale, setScale] = useState(() =>
    Math.min(window.innerWidth / DESIGN_WIDTH, window.innerHeight / DESIGN_HEIGHT)
  );
  useEffect(() => {
    const update = () =>
      setScale(Math.min(window.innerWidth / DESIGN_WIDTH, window.innerHeight / DESIGN_HEIGHT));
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

export default function App() {
  const [current, setCurrent] = useState(() => {
    const p = new URLSearchParams(window.location.search).get("slide");
    const i = p ? parseInt(p, 10) : 0;
    return Number.isFinite(i) && i >= 0 && i < SLIDES.length ? i : 0;
  });
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
  const scale = useFitScale();

  return (
    <div
      className="w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "var(--background)" }}
    >
      <div
        className="overflow-hidden relative flex flex-col flex-shrink-0"
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          background: "var(--background)",
        }}
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
    </div>
  );
}
