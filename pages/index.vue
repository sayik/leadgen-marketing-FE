<script setup lang="ts">
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CircleDot, Clock3, Headset, MessageSquareText, Phone, UserRound, UsersRound, Workflow } from 'lucide-vue-next'
const config = useRuntimeConfig()
const email = computed(() => String(config.public.contactEmail))
const phone = computed(() => String(config.public.contactPhone))
const emailHref = computed(() => `mailto:${email.value}`)
const phoneHref = computed(() => `tel:${phone.value.replace(/[^+\d]/g, '')}`)
useSeoMeta({
  title: 'Leadgen | Lead Management & Customer Follow-up Software',
  description: 'Turn every enquiry into an opportunity. Leadgen helps sales and service teams manage leads through customer profiles, track conversations, and stay on top of every follow-up.',
  ogTitle: 'Leadgen — Every enquiry is a potential sale',
  ogDescription: 'One clear place to manage leads, customer profiles, conversations and follow-ups.',
  ogType: 'website',
  keywords: 'lead management software, lead tracking, customer profiles, enquiry management, sales follow-up, customer relationship management, sales pipeline, customer communication tracking'
})
const steps = [
  { n: '01', title: 'Capture the enquiry', text: 'Bring customer enquiries and conversations into one organised place, whatever the starting point.', icon: MessageSquareText },
  { n: '02', title: 'Build the customer picture', text: 'Keep contact details, conversation history, needs and important context together in a useful customer profile.', icon: UserRound },
  { n: '03', title: 'Follow through', text: 'Record what happens next, assign responsibility and set reminders so the next step does not get lost.', icon: Clock3 }
]
const capabilities = [
  { title: 'Customer profiles', text: 'A useful history for every customer, not scattered notes and disconnected contact lists.', icon: UserRound },
  { title: 'Enquiry tracking', text: 'See what came in, what the customer needs and where each opportunity stands.', icon: CircleDot },
  { title: 'Follow-up reminders', text: 'Make the next action visible, assignable and easier to complete on time.', icon: Clock3 },
  { title: 'Team handoffs', text: 'Get enquiries to the right person or team without losing the context.', icon: Workflow },
  { title: 'Sales and service', text: 'Keep sales opportunities and ongoing customer requests moving in one workflow.', icon: Headset },
  { title: 'Conversation history', text: 'Give your team the context to continue a conversation instead of starting over.', icon: Phone }
]
</script>
<template>
  <div>
    <SiteHeader />
    <main>
      <section class="hero">
        <div class="hero-grain"></div>
        <div class="hero-inner container">
          <div class="hero-copy">
            <p class="eyebrow">A clearer way to manage customer relationships</p>
            <h1 class="display">Every enquiry<br/><em>is an opportunity.</em></h1>
            <p class="hero-lede">Capture every lead. Understand every customer. Keep every conversation moving.</p>
            <div class="hero-actions"><a class="btn btn-primary" href="#contact">Talk to our team <ArrowUpRight :size="16"/></a><a class="hero-secondary" href="#what-we-do">Discover Leadgen <ArrowDown :size="15"/></a></div>
            <a class="scroll-cue" href="#what-we-do" aria-label="Scroll to what we do"><ArrowDown :size="16"/></a>
          </div>
          <div class="hero-visual" aria-label="Illustration of a lead management dashboard">
            <div class="visual-top"><div><span class="live-dot"></span> YOUR CUSTOMER OVERVIEW</div><span>LEADGEN / 01</span></div>
            <div class="visual-heading"><div><small>GOOD MORNING</small><strong>Know every customer.</strong></div><span class="avatar-stack"><i>AR</i><i>MK</i><i>+4</i></span></div>
            <div class="visual-stats"><div><small>OPEN ENQUIRIES</small><b>24</b><span>Ready for a next step</span></div><div><small>FOLLOW-UPS</small><b>08</b><span>Due today</span></div><div><small>ACTIVE CUSTOMERS</small><b>126</b><span>Relationships in view</span></div></div>
            <div class="visual-list-head"><span>RECENT CUSTOMER ACTIVITY</span><span>VIEW ALL ↗</span></div>
            <div class="activity"><span class="activity-icon icon-amber"><Phone :size="15"/></span><div><b>New enquiry received</b><small>Northstar Supplies · Just now</small></div><em>New</em></div>
            <div class="activity"><span class="activity-icon icon-green"><MessageSquareText :size="15"/></span><div><b>Follow-up scheduled</b><small>Meera Industries · 10:30 AM</small></div><em class="done">On track</em></div>
            <div class="activity"><span class="activity-icon icon-blue"><UsersRound :size="15"/></span><div><b>Customer assigned to team</b><small>Westline Services · Yesterday</small></div><em>Assigned</em></div>
            <div class="visual-foot"><span>One place for the whole relationship.</span><span class="foot-mark">L.</span></div>
          </div>
          <div class="hero-note"><span>01 / 03</span><span>LESS CHAOS. MORE FOLLOW-THROUGH.</span></div>
        </div>
      </section>

      <section id="what-we-do" class="intro section-pad">
        <div class="container intro-grid">
          <div><p class="eyebrow">What we do</p><h2 class="display">Good customer relationships shouldn't depend on someone's memory.</h2></div>
          <div class="intro-text"><p>Leadgen helps businesses handle leads through organised customer profiles. Every enquiry has a place, every conversation has context, and every follow-up has a next step.</p><p>From the first question to the final sale — and the relationship after it — your team can see what matters and act on it.</p><a class="text-link" href="#contact">See how Leadgen can help <ArrowUpRight :size="16"/></a></div>
        </div>
      </section>

      <section class="promise">
        <div class="container promise-inner"><span class="promise-index">THE LEADGEN PROMISE</span><h2 class="display">Miss fewer moments.<br/><span>Make more of every lead.</span></h2><p>Because a missed follow-up can mean a missed opportunity.</p></div>
      </section>

      <section id="how-it-works" class="process section-pad">
        <div class="container">
          <div class="section-heading"><div><p class="eyebrow">How it works</p><h2 class="display">From first contact<br/>to next action.</h2></div><p>Simple structure for the work that happens around every customer — so your team can focus on the conversation, not chasing information.</p></div>
          <div class="steps-grid"><article v-for="step in steps" :key="step.n" class="step-card"><div class="step-top"><span>{{ step.n }}</span><component :is="step.icon" :size="21" :stroke-width="1.5"/></div><h3>{{ step.title }}</h3><p>{{ step.text }}</p><div class="step-rule"></div></article></div>
        </div>
      </section>

      <section class="capabilities section-pad">
        <div class="container">
          <div class="section-heading capability-heading"><div><p class="eyebrow">One connected view</p><h2 class="display">Everything important,<br/>in the right place.</h2></div><p>Lead management should make customer work clearer. Leadgen brings the essentials together without making the process feel complicated.</p></div>
          <div class="cap-grid"><article v-for="item in capabilities" :key="item.title" class="cap-card"><div class="cap-icon"><component :is="item.icon" :size="20" :stroke-width="1.6"/></div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div>
        </div>
      </section>

      <section id="who-it-helps" class="audience section-pad">
        <div class="container audience-grid"><div class="audience-copy"><p class="eyebrow">Built around real customer work</p><h2 class="display">For teams that<br/>can't afford to<br/><em>lose the thread.</em></h2><p>Whether your team wins new business, supports existing customers or does both, Leadgen helps everyone work from the same customer story.</p><a class="btn btn-dark" href="#contact">Let's talk about your team <ArrowUpRight :size="16"/></a></div><div class="audience-panel"><div class="audience-row"><span class="audience-number">01</span><div><b>Sales teams</b><small>Track enquiries, opportunities and the next conversation.</small></div><ArrowRight :size="18"/></div><div class="audience-row"><span class="audience-number">02</span><div><b>Service teams</b><small>Keep requests, customer context and follow-through connected.</small></div><ArrowRight :size="18"/></div><div class="audience-row"><span class="audience-number">03</span><div><b>Growing businesses</b><small>Build a shared view of customers as the team grows.</small></div><ArrowRight :size="18"/></div><div class="audience-quote"><span>“</span><p>Every customer deserves a response. Every opportunity deserves a next step.</p></div></div></div>
      </section>

      <section id="contact" class="contact section-pad"><div class="container contact-inner"><p class="eyebrow">Start a conversation</p><h2 class="display">Let's make sure<br/><em>no lead gets left behind.</em></h2><p class="contact-lede">Tell us how your team handles enquiries today. We'll show you how Leadgen can make the process clearer.</p><div class="contact-actions"><a class="btn btn-primary" :href="emailHref">Email our team <ArrowUpRight :size="16"/></a><a class="contact-phone" :href="phoneHref"><Phone :size="16"/> {{ phone }}</a></div><div class="contact-bottom"><span>LEADGEN — CUSTOMER RELATIONSHIPS, IN FOCUS.</span><span>WE'D LOVE TO HEAR FROM YOU.</span></div></div></section>
    </main>
    <footer class="footer"><div class="container footer-inner"><NuxtLink to="/" class="brand"><span class="brand-mark"><i></i><i></i><i></i></span><span>leadgen<span class="brand-period">.</span></span></NuxtLink><span>Make every enquiry count.</span><a :href="emailHref">{{ email }}</a><span>© {{ new Date().getFullYear() }} Leadgen</span></div></footer>
  </div>
</template>
<style scoped>
.hero{position:relative;min-height:690px;overflow:hidden;background:#203b35;color:#f5f2eb;isolation:isolate}.hero:before{content:"";position:absolute;inset:0;z-index:-2;background:radial-gradient(ellipse at 75% 45%,rgba(184,149,88,.19),transparent 35%),radial-gradient(ellipse at 20% 90%,rgba(7,19,17,.7),transparent 50%),linear-gradient(115deg,#203b35 0%,#1a302c 55%,#263e37 100%)}.hero-grain{position:absolute;inset:0;z-index:-1;opacity:.14;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.28'/%3E%3C/svg%3E")}.hero-inner{position:relative;display:grid;grid-template-columns:1fr .92fr;align-items:center;gap:48px;min-height:620px;padding-top:48px;padding-bottom:66px}.hero-copy{padding:15px 0 25px}.hero-copy .eyebrow{color:#d0b783}.hero h1{font-size:clamp(52px,6.1vw,82px);line-height:.99;font-weight:600;margin:24px 0 22px}.hero h1 em,.audience h2 em,.contact h2 em{font-style:normal;color:#d0b783}.hero-lede{max-width:430px;color:rgba(245,242,235,.76);font-size:17px;line-height:1.7}.hero-actions{display:flex;align-items:center;gap:27px;margin-top:32px}.hero-secondary{display:inline-flex;align-items:center;gap:9px;color:#e5ddce;font-size:12px;font-weight:600}.hero-visual{width:100%;max-width:510px;justify-self:end;padding:22px 24px 16px;background:#f5f2eb;color:#172522;border:1px solid rgba(255,255,255,.3);border-radius:12px;box-shadow:0 30px 90px rgba(0,0,0,.28);transform:rotate(1deg)}.visual-top,.visual-list-head,.visual-foot{display:flex;justify-content:space-between;align-items:center}.visual-top{font-size:8px;font-weight:700;letter-spacing:.14em;color:#6e776f;padding-bottom:17px;border-bottom:1px solid #e4dfd5}.live-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#8caa7b;margin-right:7px}.visual-heading{display:flex;justify-content:space-between;align-items:center;padding:20px 0 17px}.visual-heading small,.visual-stats small{display:block;font-size:8px;letter-spacing:.12em;color:#879087;font-weight:700}.visual-heading strong{display:block;font:700 20px Manrope,sans-serif;letter-spacing:-.8px;margin-top:5px}.avatar-stack{display:flex;align-items:center}.avatar-stack i{display:grid;place-items:center;width:27px;height:27px;border-radius:50%;margin-left:-6px;border:2px solid #f5f2eb;background:#d9c9a9;color:#3e443a;font-size:7px;font-style:normal;font-weight:700}.avatar-stack i:nth-child(2){background:#b9c9b9}.avatar-stack i:nth-child(3){background:#203b35;color:#fff}.visual-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.visual-stats>div{padding:12px 11px;background:#ece8df;border-radius:6px}.visual-stats b{display:block;font:700 27px Manrope,sans-serif;letter-spacing:-1px;margin:7px 0 2px}.visual-stats span{font-size:8px;color:#778077}.visual-list-head{margin:20px 0 6px;font-size:8px;letter-spacing:.1em;font-weight:700;color:#778077}.visual-list-head span:last-child{color:#9b7a45}.activity{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid #e7e2d9}.activity-icon{width:30px;height:30px;border-radius:7px;display:grid;place-items:center}.icon-amber{background:#eee2cb;color:#9b7842}.icon-green{background:#dfe8dc;color:#59765a}.icon-blue{background:#dce5e5;color:#526f71}.activity div{flex:1}.activity b{display:block;font-size:10px}.activity small{display:block;color:#858b83;font-size:8px;margin-top:3px}.activity em{font-size:8px;font-style:normal;color:#9a7845;background:#f0e8d9;padding:5px 7px;border-radius:3px}.activity em.done{color:#55745a;background:#e4ece1}.visual-foot{padding-top:14px;color:#8b9188;font-size:8px}.foot-mark{font:800 18px Manrope;color:#b89558}.hero-note{position:absolute;bottom:25px;left:0;right:0;display:flex;justify-content:space-between;color:rgba(245,242,235,.42);font-size:8px;letter-spacing:.16em}.scroll-cue{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);display:grid;place-items:center;width:42px;height:42px;border:1px solid rgba(245,242,235,.28);border-radius:50%;background:#203b35;color:#f5f2eb}
.intro{background:var(--ivory)}.intro-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:110px;align-items:start}.intro h2,.section-heading h2{max-width:600px;font-size:clamp(38px,4.6vw,59px);line-height:1.08;font-weight:600;margin:20px 0 0}.intro-text{padding-top:29px}.intro-text p{font-size:16px;line-height:1.85;color:#59635c;margin:0 0 18px}.text-link{display:inline-flex;align-items:center;gap:9px;margin-top:13px;color:#80653a;font-size:12px;font-weight:700}.promise{background:#e9e2d6;padding:74px 0;text-align:center}.promise-inner{display:flex;align-items:center;flex-direction:column}.promise-index{font-size:9px;letter-spacing:.18em;font-weight:700;color:#8c754d}.promise h2{font-size:clamp(38px,5vw,62px);line-height:1.08;margin:19px 0 12px;font-weight:600}.promise h2 span{color:#8b7042}.promise p{font-size:14px;color:#6f756d;margin:8px 0 0}
.process{background:#f5f2eb}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:60px;margin-bottom:55px}.section-heading>p{max-width:370px;color:#697169;font-size:14px;line-height:1.8;margin:0 0 5px}.section-heading h2{font-size:clamp(38px,4.4vw,54px)}.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #dcd7cc;border-bottom:1px solid #dcd7cc}.step-card{padding:28px 30px 30px 0;position:relative}.step-card+.step-card{padding-left:30px;border-left:1px solid #dcd7cc}.step-top{display:flex;align-items:center;justify-content:space-between;color:#a1814c}.step-top span{font-size:10px;letter-spacing:.12em;font-weight:700}.step-card h3,.cap-card h3{font:700 20px Manrope,sans-serif;letter-spacing:-.6px;margin:34px 0 10px}.step-card p,.cap-card p{font-size:13px;line-height:1.8;color:#737a72;max-width:290px;margin:0}.step-rule{width:35px;height:2px;background:#b89558;margin-top:28px}
.capabilities{background:#203b35;color:#f5f2eb}.capability-heading .eyebrow{color:#d0b783}.capability-heading>p{color:rgba(245,242,235,.62)}.cap-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(245,242,235,.2);border-left:1px solid rgba(245,242,235,.2)}.cap-card{min-height:220px;padding:27px 28px;border-right:1px solid rgba(245,242,235,.2);border-bottom:1px solid rgba(245,242,235,.2)}.cap-icon{display:grid;place-items:center;width:39px;height:39px;border:1px solid rgba(208,183,131,.5);border-radius:8px;color:#d0b783}.cap-card h3{font-size:17px;margin:23px 0 8px}.cap-card p{color:rgba(245,242,235,.62);font-size:12px;max-width:280px}
.audience{background:#e9e2d6}.audience-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:100px;align-items:center}.audience h2{font-size:clamp(44px,5vw,64px);line-height:1.04;margin:20px 0 22px}.audience-copy>p:not(.eyebrow){max-width:400px;font-size:14px;line-height:1.85;color:#6a726a;margin-bottom:27px}.audience-panel{background:#f5f2eb;padding:12px 28px 24px;border-radius:8px}.audience-row{display:flex;align-items:center;gap:18px;padding:23px 0;border-bottom:1px solid #e2ddd3}.audience-number{font-size:10px;color:#a1814c;font-weight:700}.audience-row div{flex:1}.audience-row b{display:block;font:700 16px Manrope}.audience-row small{display:block;margin-top:5px;font-size:11px;color:#788078}.audience-row>svg{color:#9a7b49}.audience-quote{display:flex;gap:12px;padding:23px 0 0}.audience-quote span{font:700 36px Georgia;color:#b89558;line-height:.8}.audience-quote p{font:600 14px Manrope;line-height:1.6;margin:0;max-width:310px}
.contact{background:#172522;color:#f5f2eb;text-align:center}.contact-inner{display:flex;flex-direction:column;align-items:center}.contact .eyebrow{color:#d0b783}.contact h2{font-size:clamp(43px,6vw,72px);line-height:1.04;font-weight:600;margin:23px 0 18px}.contact-lede{max-width:500px;color:rgba(245,242,235,.65);font-size:14px;line-height:1.8}.contact-actions{display:flex;align-items:center;gap:28px;margin-top:28px}.contact-phone{display:flex;align-items:center;gap:9px;font-size:13px;color:#e2d9c9}.contact-bottom{width:100%;display:flex;justify-content:space-between;margin-top:100px;padding-top:17px;border-top:1px solid rgba(245,242,235,.2);font-size:8px;letter-spacing:.15em;color:rgba(245,242,235,.4)}
.footer{background:#111d1a;color:#aeb5ac;padding:23px 0}.footer-inner{display:flex;align-items:center;justify-content:space-between;gap:20px}.footer .brand{color:#f5f2eb;font-size:19px}.footer .brand-mark i{background:#d0b783}.footer-inner>span,.footer-inner>a:not(.brand){font-size:10px;color:#aeb5ac}
@media(max-width:900px){.hero-inner{grid-template-columns:1fr .85fr;gap:25px}.hero h1{font-size:clamp(48px,6.3vw,66px)}.intro-grid,.audience-grid{gap:55px}.section-heading{gap:30px}}
@media(max-width:700px){.hero{min-height:auto}.hero-inner{display:flex;flex-direction:column;align-items:stretch;gap:32px;padding-top:74px;padding-bottom:75px}.hero-copy{padding:0}.hero h1{font-size:clamp(49px,12vw,68px);margin:20px 0}.hero-lede{font-size:15px;max-width:360px}.hero-actions{gap:18px;flex-wrap:wrap}.hero-visual{max-width:100%;padding:17px 16px 12px;transform:none}.visual-heading strong{font-size:17px}.visual-stats>div{padding:10px 8px}.visual-stats b{font-size:23px}.hero-note{bottom:25px}.intro-grid,.audience-grid{grid-template-columns:1fr;gap:22px}.intro h2,.section-heading h2{font-size:42px}.intro-text{padding-top:0}.promise{padding:64px 0}.section-heading{display:block;margin-bottom:35px}.section-heading>p{margin-top:18px}.steps-grid{grid-template-columns:1fr}.step-card,.step-card+.step-card{padding:24px 0;border-left:0;border-bottom:1px solid #dcd7cc}.step-card:last-child{border-bottom:0}.step-card h3{margin-top:22px}.cap-grid{grid-template-columns:1fr 1fr}.cap-card{padding:21px 16px;min-height:215px}.cap-card h3{font-size:15px}.cap-card p{font-size:11px}.audience h2{font-size:51px}.audience-panel{padding:7px 18px 20px}.contact h2{font-size:clamp(42px,10vw,60px)}.contact-actions{flex-direction:column;gap:19px}.contact-bottom{margin-top:70px;gap:12px;text-align:left}.contact-bottom span:last-child{text-align:right}.footer-inner{flex-wrap:wrap}.footer-inner>span:nth-child(2){display:none}}
@media(max-width:390px){.cap-grid{grid-template-columns:1fr}.cap-card{min-height:0}.cap-card h3{margin-top:16px}.hero-actions{align-items:flex-start;flex-direction:column}.activity em{display:none}}



/* Mobile layout: deliberate gutters, readable type and no clipped controls. */
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; gap: 34px; min-height: 0; }
  .hero-copy { max-width: 760px; }
  .hero-visual { justify-self: start; width: 100%; max-width: 650px; transform: none; }
  .intro-grid, .audience-grid { gap: 48px; }
}
@media (max-width: 700px) {
  .hero { min-height: 0; }
  .hero-inner {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 30px;
    padding: 52px 0 112px;
  }
  .hero-copy { padding: 0; }
  .hero-copy .eyebrow { max-width: 34ch; font-size: 9px; line-height: 1.65; letter-spacing: .14em; }
  .hero h1 { max-width: 12ch; font-size: clamp(39px, 9.5vw, 62px); line-height: 1.03; letter-spacing: -.07em; margin: 18px 0; }
  .hero-lede { max-width: 38ch; font-size: 14px; line-height: 1.7; }
  .hero-actions { align-items: flex-start; flex-wrap: wrap; gap: 14px 20px; margin-top: 24px; }
  .hero-actions .btn, .hero-secondary { min-height: 46px; }
  .hero-visual { padding: 16px 14px 12px; border-radius: 10px; }
  .visual-top { gap: 8px; font-size: 7px; letter-spacing: .08em; }
  .visual-heading { gap: 8px; padding: 17px 0 14px; }
  .visual-heading strong { font-size: clamp(15px, 4.3vw, 19px); }
  .visual-stats { gap: 6px; }
  .visual-stats > div { min-width: 0; padding: 10px 8px; }
  .visual-stats small { font-size: 6px; letter-spacing: .05em; line-height: 1.35; }
  .visual-stats b { font-size: clamp(18px, 5.8vw, 24px); margin: 6px 0 2px; }
  .visual-stats span { display: block; font-size: 7px; line-height: 1.4; }
  .visual-list-head { gap: 8px; font-size: 7px; letter-spacing: .05em; }
  .activity { gap: 8px; padding: 10px 0; }
  .activity-icon { flex: 0 0 28px; width: 28px; height: 28px; }
  .activity b { font-size: 9px; line-height: 1.4; }
  .activity small { font-size: 7px; line-height: 1.45; }
  .activity em { flex: 0 0 auto; font-size: 7px; padding: 4px 5px; }
  .visual-foot { font-size: 7px; }
  .hero-note { bottom: 58px; left: 0; right: 0; font-size: 7px; letter-spacing: .09em; }
  /* Keep the next-section cue visible in the first mobile viewport, before the preview card. */
  .scroll-cue {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
    display: grid;
    width: 42px;
    height: 42px;
    margin: 20px 0 0;
    z-index: 3;
  }
  .intro-grid, .audience-grid { grid-template-columns: 1fr; gap: 26px; }
  .intro h2, .section-heading h2 { font-size: clamp(34px, 8vw, 46px); line-height: 1.08; }
  .intro-text { padding-top: 0; }
  .intro-text p { font-size: 14px; line-height: 1.8; }
  .section-pad { padding: 68px 0; }
  .promise { padding: 58px 0; }
  .promise h2 { font-size: clamp(34px, 8vw, 48px); line-height: 1.08; }
  .section-heading { display: block; margin-bottom: 32px; }
  .section-heading > p { margin-top: 16px; font-size: 13px; line-height: 1.75; }
  .steps-grid { grid-template-columns: 1fr; }
  .step-card, .step-card + .step-card { padding: 22px 0; border-left: 0; border-bottom: 1px solid #dcd7cc; }
  .step-card:last-child { border-bottom: 0; }
  .step-card h3 { margin: 20px 0 8px; font-size: 18px; }
  .step-card p { font-size: 13px; line-height: 1.75; }
  .cap-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .cap-card { min-width: 0; min-height: 0; padding: 19px 14px 21px; }
  .cap-card h3 { margin: 17px 0 7px; font-size: 14px; line-height: 1.4; }
  .cap-card p { font-size: 11px; line-height: 1.7; }
  .audience h2 { font-size: clamp(40px, 9vw, 54px); line-height: 1.05; }
  .audience-copy > p:not(.eyebrow) { font-size: 13px; line-height: 1.8; }
  .audience-panel { padding: 6px 17px 19px; }
  .audience-row { gap: 12px; padding: 19px 0; }
  .audience-row b { font-size: 15px; }
  .audience-row small { font-size: 10px; line-height: 1.55; }
  .contact h2 { font-size: clamp(37px, 8.7vw, 58px); line-height: 1.06; }
  .contact-lede { font-size: 13px; line-height: 1.8; }
  .contact-actions { flex-direction: column; gap: 17px; }
  .contact-bottom { margin-top: 58px; gap: 14px; text-align: center; font-size: 7px; line-height: 1.7; letter-spacing: .08em; }
  .footer-inner { flex-wrap: wrap; justify-content: space-between; row-gap: 14px; }
  .footer-inner > span:nth-child(2) { display: none; }
  .footer-inner > a:not(.brand), .footer-inner > span:last-child { font-size: 9px; }
}
@media (max-width: 420px) {
  .hero-inner { padding-top: 42px; padding-bottom: 112px; }
  .hero h1 { font-size: clamp(36px, 9.3vw, 42px); }
  .hero-actions { flex-direction: column; align-items: flex-start; }
  .hero-visual { padding-inline: 11px; }
  .visual-top > span:last-child { white-space: nowrap; }
  .avatar-stack i { width: 23px; height: 23px; }
  .visual-stats { gap: 5px; }
  .visual-stats > div { padding: 9px 6px; }
  .visual-stats small { font-size: 5.5px; }
  .visual-stats span { font-size: 6.5px; }
  .activity em { display: none; }
  .hero-note { font-size: 6px; letter-spacing: .06em; }
  .cap-grid { grid-template-columns: 1fr; }
  .cap-card { display: grid; grid-template-columns: 38px minmax(0, 1fr); column-gap: 13px; align-items: center; }
  .cap-icon { grid-row: span 2; }
  .cap-card h3 { margin: 0 0 4px; }
  .cap-card p { grid-column: 2; max-width: none; margin: 0; }
  .contact-bottom { flex-direction: column; align-items: center; }
  .footer-inner > a:not(.brand) { overflow-wrap: anywhere; }
}
@media (max-width: 340px) {
  .hero h1 { font-size: 35px; }
  .visual-heading strong { font-size: 14px; }
  .visual-stats small { font-size: 5px; }
  .visual-stats span { font-size: 6px; }
  .audience-panel { padding-inline: 13px; }
}

</style>
