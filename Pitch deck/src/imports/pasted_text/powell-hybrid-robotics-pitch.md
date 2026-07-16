Powell Industries: Internal Hybrid Robotics Pitch Deck
Slide 1: Strategic Vision & Executive Summary
Powell Industries Q1 2026: Record Backlog & Data Center Boom ...Powell Industries: A Focus On Controlling Costs Helps Propel ...Powell Industries | HomepagePowell Industries | About
Objective: Establish an Internal Hybrid Robotics Division to eliminate manufacturing choke points and secure our $1.6 billion backlog. [1]
The Core Proposition:
The Problem: Rigid third-party automation in Ohio failed to handle "engineered-to-order" customization, specifically failing in multi-robot synchronization tasks like holding and welding [User Context].
The Opportunity: By bringing "the brains" (software and grippers) in-house while buying "the muscle" (heavy-duty industrial arms), Powell can gain total control over production agility. [2]
Alignment: Directly supports Powell's 2026 goal to expand manufacturing capacity and leverage digital technologies to improve profitability. [3]
CEO Script: "We have a record backlog, but our throughput is constrained by traditional, rigid automation. Yesterday we discussed the friction in Ohio. I’m proposing we stop buying 'black boxes' from third parties and start building an internal hybrid division that owns the IP and scales across our global footprint."
Slide 2: The "Ohio" Bottleneck: Why Third Parties Fail
The trial at the Ohio facility exposed the limitations of traditional integrators for Powell's custom-engineered business model [User Context].
Failure Point
Impact on Powell
Rigid Code
Inability to adapt to variance in heavy steel parts without costly change orders.
Multi-Agent Conflict
Robots cannot "talk" in real-time, leading to the holding vs. welding misalignment seen in Ohio [User Context].
Vendor Lock-In
Powell pays for the solution but does not own the software intelligence (IP).
Capacity Choke
Every minor adjustment requires an outside contractor, delaying a $400M+ data center mega-order.

Strategy: Transition from "Sequential Loops" to "Coordinated Kinematics."
[Rich media excluded from paste]
Slide 3: The Hybrid Model: "Buy the Muscle, Build the Brains"
Automation, Expansions Dominate U.S. Warehouse Project SpaceJake with Powell Industries at the 2023 Automation Fair ...Powell Industries | Homepage
We avoid the high R&D cost of hardware while maintaining 100% control over the software logic that defines our unique manufacturing process.
Buy the Muscle: Purchase bare-metal articulated arms from ABB or FANUC.
Cost: Approx. $70,000–$120,000 per heavy-payload arm.
Reliability: 80,000+ hours of certified hardware uptime. [4, 5]
Build the Brains & Hands: Use an internal team to develop proprietary automation software and custom end-effectors (grippers).
IP Ownership: Powell owns the code, allowing for instant recalibration as switchgear designs change.
Architecture: Use ROS 2 (Robot Operating System) for a modern, open-architecture control solution. [6]
CEO Script: "We don't need to reinvent the arm; we need to own the handshake. By building the software internally, we ensure the robots adapt to our engineering, not the other way around."
Slide 4: Solving the Synchronization Problem (ROS 2 + Vision)
This slide directly answers why the robots in Ohio couldn't "hold and weld" together. We replace "dumb" timers with Event-Driven Choreography.
Unified Brain (MoveIt 2): Treats multiple robots as a single kinematic system. Instead of Robot A and Robot B moving independently, they follow a single coordinated plan.
Force-Torque Feedback: Sensors in the robots' wrists allow them to "feel" if a part slips. If the holding robot senses a shift, the welding robot dynamically adjusts its path in milliseconds [User Context].
3D Machine Vision: Real-time spatial awareness identifies variance in custom-engineered parts, correcting the robots' path without human intervention.
Technical Advantage: This replicates the "human" ability to hold and weld simultaneously, but with the precision of industrial automation.
Slide 5: Capital Request & ROI Strategy
Powell’s current cash position of $501 million allows for strategic investment in capacity expansion. [1]
Phase 2 Budget Allocation (Estimated):
Personnel (3-Person Team): Approx. $400,000 (Based on Houston salaries for a Robotics Architect, Controls Engineer, and Vision Specialist).
Hardware (1 Heavy-Duty Cell): Approx. $120,000 for the arm + $80,000 for custom sensors and grippers.
R&D Sandbox Setup: Approx. $250,000 for dedicated space and simulation software.
Total Initial Pilot Cost: $850,000 - $1.0M. [4, 5, 7, 8]
The ROI Calculus:
Throughput: Reducing weld cycle time by 30% on custom switchgear.
Labor: Redirecting high-skill welders from repetitive tasks to complex custom assembly.
Scale: Software written for the pilot can be deployed globally to Houston facilities at zero additional software cost.
CEO Script: "This isn't a $10M gamble. It's a $1M pilot to solve the specific coordination issues we're facing. With a $1.6B backlog, even a 1% increase in throughput pays for this division in months."
Slide 6: 12-Month Execution Roadmap
We follow a risk-mitigated approach to ensure we don't repeat the Ohio project's rigid mistakes.
Months 1-3: The 90-Day Audit & Recruit
Audit the Ohio plant’s third-party bottlenecks.
Hire the core Houston-based robotics team. [7]
Months 4-8: The "Hold & Weld" Sandbox
Build a prototype cell in our Mosley Facility R&D bay.
Develop the ROS 2 software logic to flawlessly coordinate holding and welding.
Months 9-12: Factory Floor Deployment
Integrate the first internal cell into the North Canton production line.
Begin training internal maintenance teams on the new open-architecture system.
Next Step: Approval for the Phase 1 hiring and audit process.

[1] https://powellindustriesinc.gcs-web.com
[2] https://umbrex.com
[3] https://powellindustriesinc.gcs-web.com
[4] https://www.evsint.com
[5] https://www.evsrobot.com
[6] https://www.powellind.com
[7] https://www.ziprecruiter.com
[8] https://www.glassdoor.com





So more ideas:

I want to help the powell family, I’m not trying to snake our people and go against the culture here of protecting jobs. I want to bring in a “force multiplier” so that one person can do 10 ppl’s work.

Additionally, I’m not trying to cause a drastic shift in anything, so all I would ask for is a small team to develop some type of POC that can be possibly implemented in a new factory that wouldn’t affect the current floors

We want to build something that helps the people and we absolutely don’t want to interrupt operations in the midst of such large orders but I do want to be able to eliminate backlog and deliver orders faster to customers because as we both know customer satisfaction will always be the number one priority for any company.

I come from a RE background, I understand shareholders/stakeholders have to see value in something and also understand that company culture cannot be affected by something of this sort. I believe you and Marshall were the best people to bring this up to, because ya’ll understand the broader vision of the business really well.

I have ppl that will back me such as Ajay and Bryce who have experience in Multi Agent systems and robotics



Bryce: 
Respect the culture first. Powell has 75+ years of doing things a certain way. That's not just inertia, it's an identity, and it makes the company a hard ship to turn. Any innovation effort has to account for this from day one.
You're not alone in seeing this. Make it clear that these opportunities aren't just one intern's idea. Mention others who believe in this too. Framing it that way turns a personal pitch into a shared observation, and it's much harder to dismiss a pattern that multiple people see than one person's enthusiasm.
Build your continuity story. Powell operates like a family, so lean into that. Mention mentors, and identify who you'd pass the torch to if you have to step away to finish school. Leadership won't greenlight something new without project continuity. They need to know the effort survives your absence. Make the plan explicit: you hand off, you graduate, you come back. Powell also likes to build from within when possible, so position yourself as homegrown talent they're investing in, not an outsider pushing change.
Start small and prove it. Propose a small strike team focused on a single station, or small team. One station/team, prove it out. 
Expect a long discovery phase. Before pitching anything, nail down the timeline. How long is discovery? What are the milestones? Vague timelines kill credibility. It doesn't have to be exact to the day.
The new-shop play. If Powell ever builds a new shop, push for it to be designed from the ground up as robotics and AI first. Get it operational, fully pressure test it, and only then migrate the original shops. Retrofitting culture is harder than building it fresh.
The alternative play. If a new shop isn't in the cards, shift focus from transport around the shop to just stations. The floor is messy, and cleaning that up means changing culture. Slower, but it's a real opening.
Know your stakeholders. Brent Hess runs EDH, and EDH is the cash cow: switchgear, dominated by data center orders. He will need convincing, and nothing moves without him. 
Bret Cope is a CFO so he thinks in numbers ROI. Come to him with quantified efficiency gains and safety gains, not Just vision statements. The math needs to math. 
  
