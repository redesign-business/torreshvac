const phoneHref = "tel:+17754759594";

const services = [
  {
    number: "01",
    title: "Repair & maintenance",
    text: "Fast diagnostics, careful repairs, and routine maintenance for all major brands.",
  },
  {
    number: "02",
    title: "System installation",
    text: "Practical guidance to select a comfort system that fits your space and your budget.",
  },
  {
    number: "03",
    title: "Ducts & new construction",
    text: "Duct repair and complete HVAC planning for homes, businesses, and new builds.",
  },
];

const faqs = [
  ["Can you come out today?", "Same-day service is available in most cases, with a focus on getting your system running that day."],
  ["What systems do you service?", "Torres HVAC installs and services all major brands for residential, commercial, mobile, and manufactured properties."],
  ["Do you offer financing or discounts?", "Financing is available through Synchrony. Senior, widow, military, and veteran discounts are also offered."],
  ["Will I reach a real person?", "Yes. When you call Torres HVAC, a real person is always available to help, never a robot."],
];

export default function Home() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: `
        :root{--ink:#172224;--cream:#f3efe6;--red:#c84831;--blue:#286477;--line:rgba(23,34,36,.16)}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,Helvetica,sans-serif}a{color:inherit}img{display:block;max-width:100%}
        .topbar{background:var(--ink);color:#fff;padding:10px 5vw;text-align:center;font-size:12px;font-weight:700;letter-spacing:.11em;text-transform:uppercase}.topbar span{color:#f0b45a;margin:0 9px}
        nav{height:92px;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;border-bottom:1px solid var(--line);background:var(--cream)}.logo{width:128px;height:auto}.links{display:flex;gap:28px;align-items:center}.links>a:not(.cta){text-decoration:none;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
        .cta{display:inline-flex;align-items:center;justify-content:center;min-height:49px;padding:0 22px;background:var(--red);color:#fff;text-decoration:none;text-transform:uppercase;letter-spacing:.08em;font-size:12px;font-weight:900;border:1px solid var(--red);transition:.2s}.cta:hover{background:#a93622;border-color:#a93622;transform:translateY(-2px)}
        .hero{min-height:670px;display:grid;grid-template-columns:1.12fr .88fr;border-bottom:1px solid var(--line)}.hero-copy{padding:90px 6vw 75px;display:flex;flex-direction:column;justify-content:center}.eyebrow{display:flex;align-items:center;gap:12px;color:var(--red);font-size:12px;font-weight:900;letter-spacing:.15em;text-transform:uppercase}.eyebrow:before{content:'';width:34px;height:2px;background:currentColor}.hero h1{font-family:Georgia,serif;font-weight:400;font-size:clamp(54px,7vw,104px);letter-spacing:-.055em;line-height:.9;margin:25px 0 30px;max-width:820px}.hero h1 em{color:var(--blue);font-weight:400}.hero p{font-family:Georgia,serif;font-size:19px;line-height:1.6;max-width:590px;margin:0 0 36px;color:#4c5555}.hero-actions{display:flex;align-items:center;gap:24px}.hero-note{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.hero-image{position:relative;min-height:540px;background:var(--blue);overflow:hidden}.hero-image img{width:100%;height:100%;object-fit:cover;filter:saturate(.82);transform:scale(1.01)}.hero-image:after{content:'NORTHERN NEVADA';position:absolute;right:0;bottom:0;padding:18px 26px;background:var(--ink);color:#fff;font-size:11px;font-weight:900;letter-spacing:.18em}.years{position:absolute;z-index:2;left:-52px;top:65px;width:150px;height:150px;border-radius:50%;background:#f0b45a;display:flex;flex-direction:column;justify-content:center;text-align:center;transform:rotate(-7deg);box-shadow:0 12px 40px rgba(0,0,0,.18)}.years strong{font-family:Georgia,serif;font-size:47px;line-height:.85}.years span{font-size:10px;font-weight:900;letter-spacing:.09em;text-transform:uppercase;margin-top:9px}
        .proofbar{display:grid;grid-template-columns:repeat(3,1fr);background:#fff}.proof{padding:30px 4vw;border-right:1px solid var(--line);display:flex;gap:17px;align-items:center}.proof:last-child{border:0}.proof b{font-family:Georgia,serif;color:var(--red);font-size:31px}.proof span{font-size:12px;line-height:1.45;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
        section{padding:110px 6vw}.section-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:58px}.section-head h2,.story h2,.quote h2,.final h2{font-family:Georgia,serif;font-weight:400;font-size:clamp(42px,5.5vw,76px);line-height:.98;letter-spacing:-.045em;margin:16px 0 0}.section-head p{max-width:450px;line-height:1.7;color:#596162;margin:0}
        .services{background:var(--ink);color:#fff}.services .eyebrow{color:#f0b45a}.services .section-head p{color:#bdc5c4}.service-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.2)}.service{padding:42px 36px 28px 0;border-right:1px solid rgba(255,255,255,.2);min-height:260px}.service+.service{padding-left:36px}.service:last-child{border:0}.service small{color:#f0b45a;font-weight:900}.service h3{font-family:Georgia,serif;font-size:31px;font-weight:400;margin:52px 0 15px}.service p{color:#bdc5c4;line-height:1.65;margin:0}
        .story{display:grid;grid-template-columns:.9fr 1.1fr;padding:0}.story-visual{position:relative;background:#d8c8b0;min-height:720px}.story-visual>img{width:100%;height:100%;object-fit:cover}.story-card{position:absolute;right:-46px;bottom:54px;background:var(--red);color:#fff;width:250px;padding:27px}.story-card img{width:58px;height:auto;margin-bottom:25px}.story-card strong{display:block;font-family:Georgia,serif;font-size:25px;font-weight:400;line-height:1.2}.story-card span{display:block;font-size:10px;letter-spacing:.13em;text-transform:uppercase;margin-top:14px}.story-copy{padding:110px 8vw;display:flex;flex-direction:column;justify-content:center}.story-copy>p{line-height:1.8;color:#596162;font-size:17px}.integrity{border-left:3px solid var(--red);padding-left:24px;margin:25px 0;font-family:Georgia,serif;font-size:22px;line-height:1.5}.credentials{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px}.credential{border:1px solid var(--line);padding:18px}.credential b{display:block;font-size:14px}.credential span{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.1em;margin-top:6px;color:#687071}
        .quote{background:var(--blue);color:#fff;text-align:center;position:relative;overflow:hidden}.quote:before{content:'“';position:absolute;top:-100px;left:3vw;font-family:Georgia,serif;font-size:420px;color:rgba(255,255,255,.07)}.quote-inner{position:relative;max-width:940px;margin:auto}.quote h2{font-size:clamp(37px,5vw,67px);line-height:1.12}.quote p{color:#cae0e5;font-size:12px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;margin:30px 0 0}
        .faq-wrap{display:grid;grid-template-columns:.75fr 1.25fr;gap:9vw}.faq-intro p{line-height:1.7;color:#596162}.faq-list{border-top:1px solid var(--line)}details{border-bottom:1px solid var(--line);padding:23px 0}summary{font-family:Georgia,serif;font-size:23px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:20px}summary:after{content:'+';color:var(--red);font-family:Arial;font-weight:400}details[open] summary:after{content:'−'}details p{line-height:1.65;color:#596162;max-width:650px;margin:16px 40px 2px 0}
        .final{margin:0 2.5vw 40px;background:#e5b45f;display:flex;align-items:center;justify-content:space-between;gap:35px;padding:70px 5vw}.final h2{max-width:720px}.final .cta{background:var(--ink);border-color:var(--ink);white-space:nowrap}.final .cta:hover{background:#314143}
        footer{background:var(--ink);color:#fff;padding:55px 6vw 30px}.footer-main{display:flex;justify-content:space-between;gap:40px;align-items:start}.footer-logo{width:125px;filter:brightness(0) invert(1)}.footer-contact{text-align:right}.footer-contact a{font-family:Georgia,serif;font-size:29px;text-decoration:none}.footer-contact p{color:#aab4b4;margin:10px 0}.footer-bottom{border-top:1px solid rgba(255,255,255,.15);margin-top:45px;padding-top:22px;display:flex;justify-content:space-between;color:#899595;font-size:10px;letter-spacing:.1em;text-transform:uppercase}.facebook{width:26px;height:26px}
        @media(max-width:800px){nav{height:76px}.links>a:not(.cta){display:none}.logo{width:105px}.links .cta{min-height:42px;padding:0 14px}.hero{grid-template-columns:1fr}.hero-copy{padding:70px 6vw}.hero-image{min-height:490px}.years{left:auto;right:22px;top:-52px}.proofbar{grid-template-columns:1fr}.proof{border-right:0;border-bottom:1px solid var(--line)}section{padding:80px 6vw}.section-head{display:block}.section-head p{margin-top:25px}.service-grid{grid-template-columns:1fr}.service,.service+.service{padding:30px 0;border-right:0;border-bottom:1px solid rgba(255,255,255,.2);min-height:0}.service h3{margin-top:28px}.story{grid-template-columns:1fr}.story-visual{min-height:590px}.story-card{right:14px}.story-copy{padding:80px 6vw}.faq-wrap{grid-template-columns:1fr;gap:45px}.final{align-items:flex-start;flex-direction:column}.footer-main{display:block}.footer-contact{text-align:left;margin-top:38px}.footer-bottom{display:block;line-height:1.8}.facebook{margin-top:20px}}
        @media(max-width:470px){.topbar{font-size:9px}.hero h1{font-size:53px}.hero-actions{align-items:flex-start;flex-direction:column}.hero-image{min-height:410px}.credentials{grid-template-columns:1fr}.story-visual{min-height:500px}.story-card{width:220px}.footer-contact a{font-size:24px}}
      ` }} />

      <div className="topbar">Same-day service available <span>•</span> A real person always answers</div>
      <nav aria-label="Main navigation">
        <a href="#top" aria-label="Torres HVAC home">
          <img className="logo" src="/images/905d2e_70071bc32b8d4b3b844f6ceebe2e1354-mv2-c4291b1d38.png" alt="Torres Heating and Air Conditioning" />
        </a>
        <div className="links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#answers">FAQ</a>
          <a className="cta" href={phoneHref}>Call for a free quote</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">Family-owned in Northern Nevada</div>
          <h1>Comfort built on <em>integrity.</em></h1>
          <p>Dependable heating and cooling service, fair pricing, and trained experts who treat your home like their own.</p>
          <div className="hero-actions">
            <a className="cta" href={phoneHref}>Call for a free quote</a>
            <span className="hero-note">775.475.9594</span>
          </div>
        </div>
        <div className="hero-image">
          <div className="years"><strong>15+</strong><span>years of<br />experience</span></div>
          <img src="/images/img_2461-86ce2e58b8.jpg" alt="Allan Torres, owner of Torres HVAC" />
        </div>
      </header>

      <div className="proofbar" aria-label="Why choose Torres HVAC">
        <div className="proof"><b>15+</b><span>Years of owner-led<br />HVAC experience</span></div>
        <div className="proof"><b>NV</b><span>Licensed contractor<br />#0088888 &amp; #0439</span></div>
        <div className="proof"><b>100%</b><span>Certified and trained<br />technicians</span></div>
      </div>

      <section className="services" id="services">
        <div className="section-head">
          <div><div className="eyebrow">What we do</div><h2>One call.<br />Total comfort.</h2></div>
          <p>From a no-cool emergency to a complete new system, Torres HVAC brings state-of-the-art tools and straightforward recommendations to every job.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => <article className="service" key={service.number}><small>{service.number}</small><h3>{service.title}</h3><p>{service.text}</p></article>)}
        </div>
      </section>

      <section className="story" id="about">
        <div className="story-visual">
          <img src="/images/905d2e_74a52609b6ec4d5392d9d4f9d869f1a6-mv2-558c75e7ee.jpg" alt="Torres HVAC technician providing professional service" />
          <div className="story-card">
            <img src="/images/a81524_e8983bbd31ee4edaab1ff6b346b24629-mv2-7546ac5f2a.png" alt="Torres HVAC service mark" />
            <strong>Family-owned from day one.</strong>
            <span>Led by Allan Torres</span>
          </div>
        </div>
        <div className="story-copy">
          <div className="eyebrow">The Torres standard</div>
          <h2>Do the right thing. Every time.</h2>
          <p>Owner Allan Torres brings more than 15 years of experience to every job. His family-owned team has earned repeat business across Northern Nevada through thorough workmanship, honest pricing, and care that never cuts corners.</p>
          <div className="integrity">“Integrity is doing the right thing, even when no one is watching.”</div>
          <div className="credentials">
            <div className="credential"><b>NV LIC #0088888</b><span>Nevada contractor license</span></div>
            <div className="credential"><b>NV LIC #0439</b><span>Nevada contractor license</span></div>
            <div className="credential"><b>Fully certified</b><span>Every technician</span></div>
            <div className="credential"><b>All major brands</b><span>Installed and serviced</span></div>
          </div>
        </div>
      </section>

      <section className="quote" aria-label="Customer testimonial">
        <div className="quote-inner">
          <div className="eyebrow" style={{ justifyContent: "center", color: "#f0b45a" }}>In a customer’s words</div>
          <h2>“Professional service done with absolute integrity. Pricing is affordable and competitive.”</h2>
          <p>Dave, owner of Thrive Reno Print &amp; Mail</p>
        </div>
      </section>

      <section id="answers">
        <div className="faq-wrap">
          <div className="faq-intro">
            <div className="eyebrow">Good to know</div>
            <div className="section-head" style={{ display: "block", marginBottom: 0 }}><h2>Clear answers before we arrive.</h2></div>
            <p>Whether it’s your home, business, mobile home, or new construction, you’ll get direct help from a qualified local team.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final">
        <h2>Let’s get your home back to comfortable.</h2>
        <a className="cta" href={phoneHref}>Call for a free quote</a>
      </section>

      <footer>
        <div className="footer-main">
          <div><img className="footer-logo" src="/images/905d2e_51143dab4b734a4d8063b7fd207f5973-mv2-fc16a12e0c.jpg" alt="Torres Heating and Air Conditioning" /></div>
          <div className="footer-contact"><a href={phoneHref}>775.475.9594</a><p>allan@torreshvac.com</p><p>Northern Nevada</p></div>
        </div>
        <div className="footer-bottom">
          <span>Torres Heating &amp; Air Conditioning · NV LIC #0088888 · NV LIC #0439</span>
          <a href="https://www.facebook.com/profile.php?id=100051680062621" aria-label="Torres HVAC on Facebook"><img className="facebook" src="/images/e0678ef25486466ba65ef6ad47b559e1-d4c228657c.png" alt="Facebook" /></a>
        </div>
      </footer>
    </main>
  );
}
