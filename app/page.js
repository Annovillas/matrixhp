"use client";
import { useEffect, useRef, useState } from "react";

export default function MatrixHomepage() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      ja: "オフグリッド独立システム",
      en: "Off-Grid Independence",
      desc: "太陽光発電・蓄電池・衛星通信を標準搭載。電力・水道・通信のインフラに頼らず、どこでも自立した生活が可能です。",
      descEn: "Solar power, battery storage, and satellite comms included as standard. Live completely independently, anywhere.",
      icon: "◎",
    },
    {
      ja: "モジュール式設計",
      en: "Modular Architecture",
      desc: "ユニットを組み合わせて間取りを自由に拡張。ライフスタイルの変化に合わせて、住まいも進化します。",
      descEn: "Combine units to expand your floor plan freely. Your home evolves as your lifestyle changes.",
      icon: "⊞",
    },
    {
      ja: "迅速な設置",
      en: "Rapid Deployment",
      desc: "工場で完成させたユニットをトラックで搬入し、クレーンで設置。最短1日で居住可能な状態になります。",
      descEn: "Factory-finished units are transported and crane-placed on site. Move-in ready in as little as one day.",
      icon: "↗",
    },
    {
      ja: "サステナブル素材",
      en: "Sustainable Materials",
      desc: "断熱性・耐久性に優れた素材を厳選。エネルギー消費を抑えながら、長期にわたる快適な居住環境を実現します。",
      descEn: "Carefully selected materials for superior insulation and durability. Low energy use, lasting comfort.",
      icon: "❋",
    },
  ];

  const specs = [
    { label: "基本面積 / Base Area", value: "28㎡" },
    { label: "最大拡張 / Max Expansion", value: "112㎡" },
    { label: "太陽光容量 / Solar Capacity", value: "6 kWp" },
    { label: "蓄電容量 / Battery Storage", value: "20 kWh" },
    { label: "設置期間 / Install Time", value: "1–3日" },
    { label: "耐用年数 / Lifespan", value: "50+ 年" },
  ];

  return (
    <div className="matrix-root">
      {/* NAV */}
      <nav className={`matrix-nav ${scrollY > 60 ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="brand-sub">合同会社</span>
            <span className="brand-name">MATRIX</span>
          </div>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#product">製品 / Product</a>
            <a href="#features">特長 / Features</a>
            <a href="#specs">仕様 / Specs</a>
            <a href="#villa">宿泊 / Villa</a>
            <a href="#contact" className="nav-cta">お問い合わせ</a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/matrix/offgrid-unit.png" alt="Matrix Off-Grid Unit" className="hero-img" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="dot" />
            次世代オフグリッド住宅 — Next-Generation Off-Grid Living
          </div>
          <h1 className="hero-title">
            どこでも、<br />
            <em>自分らしく。</em>
          </h1>
          <p className="hero-subtitle">
            Live anywhere.<br />Live freely.
          </p>
          <p className="hero-body">
            MATRIXは、電力・水道・通信インフラから解放された<br />
            モジュール式オフグリッド住宅を提供します。
          </p>
          <div className="hero-actions">
            <a href="#product" className="btn-primary">製品を見る</a>
            <a href="#contact" className="btn-ghost">資料請求</a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="intro-strip">
        <p className="intro-text">
          <span>電力網不要</span>
          <span className="divider">—</span>
          <span>水道不要</span>
          <span className="divider">—</span>
          <span>どこでも設置可能</span>
          <span className="divider">—</span>
          <span>最短1日で完成</span>
        </p>
      </section>

      {/* PRODUCT SECTION */}
      <section id="product" className="product-section">
        <div className="section-label">製品紹介 / Our Product</div>
        <div className="product-grid">
          <div className="product-text">
            <h2 className="section-title">
              自然と共存する、<br />
              <span>完全自立の住まい。</span>
            </h2>
            <p className="section-body">
              MATRIXユニットは、太陽光発電・蓄電池・衛星通信・雨水回収システムを
              コンパクトな一体型ユニットに統合。山間部・離島・農地など、
              従来では住むことが困難だった場所に、快適な住環境を実現します。
            </p>
            <p className="section-body-en">
              The MATRIX unit integrates solar generation, battery storage, satellite
              communications, and rainwater collection into one compact system—bringing
              comfortable living to mountains, islands, and rural land once thought uninhabitable.
            </p>
            <a href="#contact" className="btn-primary mt">詳細を問い合わせる</a>
          </div>
          <div className="product-image-wrap">
            <img src="/matrix/module-overview.png" alt="Module Overview" className="product-img" />
            <div className="product-tag">モジュール搬入・設置の様子</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features-section">
        <div className="section-label">特長 / Features</div>
        <h2 className="features-title">4つのコア技術</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div
              key={i}
              className={`feature-card ${activeFeature === i ? "active" : ""}`}
              onMouseEnter={() => setActiveFeature(i)}
            >
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-num">0{i + 1}</div>
              <h3 className="feature-ja">{f.ja}</h3>
              <h4 className="feature-en">{f.en}</h4>
              <p className="feature-desc">{f.desc}</p>
              <p className="feature-desc-en">{f.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="specs-section">
        <div className="specs-inner">
          <div className="section-label">仕様 / Specifications</div>
          <h2 className="specs-title">標準仕様</h2>
          <div className="specs-grid">
            {specs.map((s, i) => (
              <div key={i} className="spec-item">
                <div className="spec-value">{s.value}</div>
                <div className="spec-label">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="specs-note">
            ※ 仕様は構成・オプションにより異なります。詳細はお問い合わせください。<br />
            <em>Specifications vary by configuration. Please contact us for details.</em>
          </p>
        </div>
      </section>

      {/* PANORAMA VILLA */}
      <section id="villa" className="villa-section">
        <div className="villa-inner">
          <div className="section-label">宿泊施設 / Accommodation</div>
          <div className="villa-header">
            <h2 className="section-title">
              富士山を望む、<br />
              <span>一棟貸し別荘。</span>
            </h2>
            <p className="villa-header-en">A private villa with an unobstructed view of Mt. Fuji.</p>
          </div>
          <div className="villa-grid">
            <div className="villa-images">
              <div className="villa-img-main">
                <img src="/matrix/panorama-night.jpg" alt="Panorama Villa 夜景" />
              </div>
              <div className="villa-img-sub-row">
                <div className="villa-img-sub"><img src="/matrix/panorama-day.jpg" alt="Panorama Villa 外観" /></div>
                <div className="villa-img-sub"><img src="/matrix/panorama-bonfire.jpg" alt="焚き火と富士山" /></div>
              </div>
            </div>
            <div className="villa-info">
              <h3 className="villa-name">Panorama Villa</h3>
              <p className="villa-location">📍 山梨県 — 富士山エリア</p>
              <p className="villa-desc">
                富士山を一望できる絶景ロケーションに立つ、完全一棟貸しのプライベート別荘。
                3階建て・最大10名収容、屋上BBQテラスからは富士山を眺めながら焚き火が楽しめます。
              </p>
              <p className="villa-desc-en">
                A fully private three-story villa with panoramic views of Mt. Fuji.
                Sleeps up to 10 guests. The rooftop terrace offers bonfire dining under the mountain sky.
              </p>
              <div className="villa-specs-row">
                {[
                  { label: "定員 / Capacity", value: "最大10名" },
                  { label: "階数 / Floors", value: "3F" },
                  { label: "形式 / Type", value: "一棟貸し" },
                ].map((s, i) => (
                  <div key={i} className="villa-spec-item">
                    <div className="villa-spec-value">{s.value}</div>
                    <div className="villa-spec-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="villa-amenities">
                <div className="amenity-tag">屋上BBQテラス</div>
                <div className="amenity-tag">焚き火エリア</div>
                <div className="amenity-tag">プロジェクター</div>
                <div className="amenity-tag">和室（茶室）</div>
                <div className="amenity-tag">アウトドアデッキ</div>
                <div className="amenity-tag">洗濯機完備</div>
              </div>
              <a href="#contact" className="btn-primary mt">宿泊を問い合わせる / Enquire</a>
            </div>
          </div>
        </div>
      </section>

      {/* FORMA GLAMPING */}
      <section className="forma-section">
        <div className="forma-inner">
          <div className="forma-badge">COMING SOON</div>
          <div className="section-label">新規事業 / New Venture</div>
          <h2 className="forma-title">FORMA GLAMPING</h2>
          <p className="forma-by">by AnnoVillas</p>
          <p className="forma-desc">
            MATRIXのオフグリッド技術と、AnnoVillasのホスピタリティが融合した<br />
            次世代グランピング体験。詳細は近日公開予定。
          </p>
          <p className="forma-desc-en">
            Off-grid technology meets curated hospitality.<br />
            A new glamping experience — details coming soon.
          </p>
          <a href="https://comingsoon.annovillas.com/" target="_blank" rel="noopener noreferrer" className="btn-forma">
            詳細を見る / Learn More →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="section-label">お問い合わせ / Contact</div>
          <h2 className="contact-title">
            まずは、<br />お気軽にご相談を。
          </h2>
          <p className="contact-sub">Feel free to reach out — we'd love to talk.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>お名前 / Name</label>
                <input type="text" placeholder="山田 太郎" />
              </div>
              <div className="form-group">
                <label>メールアドレス / Email</label>
                <input type="email" placeholder="taro@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label>ご用件 / Subject</label>
              <input type="text" placeholder="製品についての質問 / Product inquiry" />
            </div>
            <div className="form-group">
              <label>メッセージ / Message</label>
              <textarea rows={5} placeholder="ご自由にお書きください / Write freely..." />
            </div>
            <button type="submit" className="btn-submit">送信する / Send</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="matrix-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-sub">合同会社</span>
            <span className="brand-name">MATRIX</span>
          </div>
          <p className="footer-tagline">次世代オフグリッド住宅 — Next-Generation Off-Grid Living</p>
          <p className="footer-address">〒401-0301 山梨県南都留郡富士河口湖町船津１６４６</p>
          <p className="footer-copy">© {new Date().getFullYear()} 合同会社 MATRIX. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        /* ── RESET & BASE ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .matrix-root {
          font-family: 'Georgia', 'Times New Roman', serif;
          background: #0a0a08;
          color: #e8e4dc;
          overflow-x: hidden;
        }

        /* ── NAV ── */
        .matrix-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 20px 0;
          transition: background 0.4s, padding 0.4s, backdrop-filter 0.4s;
        }
        .matrix-nav.scrolled {
          background: rgba(10,10,8,0.92);
          backdrop-filter: blur(12px);
          padding: 14px 0;
          border-bottom: 1px solid rgba(232,228,220,0.08);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-brand { display: flex; flex-direction: column; gap: 1px; cursor: default; }
        .brand-sub { font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif; font-size: 9px; letter-spacing: 0.3em; color: rgba(232,228,220,0.45); text-transform: uppercase; }
        .brand-name { font-size: 18px; font-weight: 700; letter-spacing: 0.25em; color: #e8e4dc; font-family: 'Georgia', serif; }
        .nav-links { display: flex; align-items: center; gap: 36px; }
        .nav-links a { font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif; font-size: 12px; letter-spacing: 0.12em; color: rgba(232,228,220,0.65); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: #e8e4dc; }
        .nav-cta {
          border: 1px solid rgba(232,228,220,0.35);
          padding: 8px 20px; border-radius: 2px;
          color: #e8e4dc !important;
          transition: background 0.2s, border-color 0.2s !important;
        }
        .nav-cta:hover { background: rgba(232,228,220,0.08) !important; border-color: rgba(232,228,220,0.6) !important; }
        .menu-toggle {
          display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px;
        }
        .menu-toggle span { display: block; width: 24px; height: 1px; background: #e8e4dc; }

        /* ── HERO ── */
        .hero {
          position: relative; min-height: 100svh;
          display: flex; align-items: flex-end;
          padding-bottom: 80px;
        }
        .hero-bg { position: absolute; inset: 0; overflow: hidden; }
        .hero-img { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: brightness(0.45) saturate(0.8); }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,10,8,0.92) 0%, rgba(10,10,8,0.3) 50%, rgba(10,10,8,0.1) 100%);
        }
        .hero-content {
          position: relative; z-index: 2;
          max-width: 1200px; width: 100%; margin: 0 auto; padding: 0 32px;
          animation: fadeUp 1.2s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 11px; letter-spacing: 0.2em; color: rgba(232,228,220,0.5);
          margin-bottom: 28px;
          animation: fadeUp 1.2s 0.1s ease both;
        }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: #a8c090; flex-shrink: 0; }
        .hero-title {
          font-size: clamp(52px, 8vw, 96px);
          font-weight: 400; line-height: 1.1;
          letter-spacing: -0.02em;
          color: #e8e4dc;
          margin-bottom: 16px;
          animation: fadeUp 1.2s 0.2s ease both;
        }
        .hero-title em { font-style: italic; color: #a8c090; }
        .hero-subtitle {
          font-size: clamp(18px, 2.5vw, 28px);
          font-style: italic; color: rgba(232,228,220,0.55);
          margin-bottom: 28px; letter-spacing: 0.02em;
          animation: fadeUp 1.2s 0.3s ease both;
        }
        .hero-body {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 14px; line-height: 1.9; letter-spacing: 0.08em;
          color: rgba(232,228,220,0.65); margin-bottom: 40px;
          animation: fadeUp 1.2s 0.4s ease both;
        }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; animation: fadeUp 1.2s 0.5s ease both; }
        .btn-primary {
          display: inline-block;
          background: #a8c090; color: #0a0a08;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 13px; letter-spacing: 0.15em;
          padding: 14px 32px; border-radius: 2px;
          text-decoration: none; border: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-primary:hover { background: #bdd4a8; transform: translateY(-1px); }
        .btn-primary.mt { margin-top: 32px; }
        .btn-ghost {
          display: inline-block;
          border: 1px solid rgba(232,228,220,0.3); color: #e8e4dc;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 13px; letter-spacing: 0.15em;
          padding: 14px 32px; border-radius: 2px;
          text-decoration: none; transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost:hover { border-color: rgba(232,228,220,0.7); background: rgba(232,228,220,0.05); }
        .hero-scroll-hint {
          position: absolute; right: 40px; bottom: 80px; z-index: 2;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .hero-scroll-hint span {
          font-family: 'Hiragino Kaku Gothic Pro', sans-serif;
          font-size: 9px; letter-spacing: 0.3em; color: rgba(232,228,220,0.3);
          writing-mode: vertical-rl;
        }
        .scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, rgba(232,228,220,0.3), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.15); }
        }

        /* ── INTRO STRIP ── */
        .intro-strip {
          background: #111110;
          border-top: 1px solid rgba(232,228,220,0.06);
          border-bottom: 1px solid rgba(232,228,220,0.06);
          padding: 20px 32px; overflow: hidden;
        }
        .intro-text {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 8px 24px;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 12px; letter-spacing: 0.2em; color: rgba(232,228,220,0.4);
        }
        .intro-text .divider { color: #a8c090; font-size: 14px; }

        /* ── SECTION SHARED ── */
        .section-label {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 10px; letter-spacing: 0.35em; color: #a8c090;
          text-transform: uppercase; margin-bottom: 20px;
        }
        .section-title {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400; line-height: 1.25;
          letter-spacing: -0.01em; color: #e8e4dc;
          margin-bottom: 28px;
        }
        .section-title span { font-style: italic; color: rgba(232,228,220,0.65); }

        /* ── PRODUCT ── */
        .product-section {
          max-width: 1200px; margin: 0 auto;
          padding: 120px 32px;
        }
        .product-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .section-body {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 14px; line-height: 2; letter-spacing: 0.08em;
          color: rgba(232,228,220,0.65); margin-bottom: 20px;
        }
        .section-body-en {
          font-size: 13px; line-height: 1.9;
          color: rgba(232,228,220,0.38); font-style: italic;
          margin-bottom: 8px;
        }
        .product-image-wrap { position: relative; }
        .product-img {
          width: 100%; border-radius: 4px;
          filter: brightness(0.9) saturate(0.85);
          transition: filter 0.4s;
        }
        .product-img:hover { filter: brightness(1) saturate(1); }
        .product-tag {
          position: absolute; bottom: -16px; right: 0;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 10px; letter-spacing: 0.15em; color: rgba(232,228,220,0.35);
        }

        /* ── FEATURES ── */
        .features-section {
          background: #0f0f0d;
          border-top: 1px solid rgba(232,228,220,0.06);
          padding: 120px 32px;
        }
        .features-section > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .features-title {
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 400;
          letter-spacing: -0.01em; color: #e8e4dc;
          margin-bottom: 60px;
        }
        .features-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
        }
        .feature-card {
          background: rgba(232,228,220,0.03);
          border: 1px solid rgba(232,228,220,0.06);
          padding: 40px 28px; cursor: default;
          transition: background 0.3s, border-color 0.3s;
          position: relative; overflow: hidden;
        }
        .feature-card::before {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: #a8c090; transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s ease;
        }
        .feature-card.active { background: rgba(168,192,144,0.06); border-color: rgba(168,192,144,0.2); }
        .feature-card.active::before { transform: scaleX(1); }
        .feature-icon { font-size: 24px; color: #a8c090; margin-bottom: 20px; display: block; }
        .feature-num {
          position: absolute; top: 20px; right: 24px;
          font-size: 11px; letter-spacing: 0.2em; color: rgba(232,228,220,0.15);
        }
        .feature-ja {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 15px; font-weight: 600; letter-spacing: 0.05em;
          color: #e8e4dc; margin-bottom: 4px;
        }
        .feature-en {
          font-size: 12px; font-style: italic; font-weight: 400;
          color: rgba(232,228,220,0.4); margin-bottom: 20px; letter-spacing: 0.05em;
        }
        .feature-desc {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 12px; line-height: 1.9; letter-spacing: 0.05em;
          color: rgba(232,228,220,0.55); margin-bottom: 12px;
        }
        .feature-desc-en {
          font-size: 11px; line-height: 1.8; font-style: italic;
          color: rgba(232,228,220,0.28);
        }

        /* ── SPECS ── */
        .specs-section {
          background: #0a0a08;
          border-top: 1px solid rgba(232,228,220,0.06);
          padding: 120px 32px;
        }
        .specs-inner { max-width: 1200px; margin: 0 auto; }
        .specs-title {
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 400;
          color: #e8e4dc; margin-bottom: 60px; letter-spacing: -0.01em;
        }
        .specs-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(232,228,220,0.06);
          border: 1px solid rgba(232,228,220,0.06);
          margin-bottom: 40px;
        }
        .spec-item {
          background: #0a0a08; padding: 40px 36px;
          transition: background 0.2s;
        }
        .spec-item:hover { background: rgba(168,192,144,0.04); }
        .spec-value {
          font-size: clamp(36px, 4vw, 52px); font-weight: 300;
          color: #a8c090; letter-spacing: -0.02em; margin-bottom: 8px;
          font-style: italic;
        }
        .spec-label {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 11px; letter-spacing: 0.2em; color: rgba(232,228,220,0.4);
        }
        .specs-note {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 11px; line-height: 2; letter-spacing: 0.08em;
          color: rgba(232,228,220,0.3);
        }
        .specs-note em { display: block; margin-top: 4px; }

        /* ── VILLA ── */
        .villa-section {
          background: #0f0f0d;
          border-top: 1px solid rgba(232,228,220,0.06);
          padding: 120px 32px;
        }
        .villa-inner { max-width: 1200px; margin: 0 auto; }
        .villa-header { margin-bottom: 60px; }
        .villa-header-en {
          font-size: 14px; font-style: italic;
          color: rgba(232,228,220,0.4); margin-top: -16px;
        }
        .villa-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start;
        }
        .villa-images { display: flex; flex-direction: column; gap: 8px; }
        .villa-img-main { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .villa-img-main img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9); transition: filter 0.4s; }
        .villa-img-main img:hover { filter: brightness(1); }
        .villa-img-sub-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .villa-img-sub { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .villa-img-sub img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85); transition: filter 0.4s; }
        .villa-img-sub img:hover { filter: brightness(1); }
        .villa-name {
          font-size: 28px; font-weight: 400; letter-spacing: 0.08em;
          color: #e8e4dc; margin-bottom: 8px;
        }
        .villa-location {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 12px; letter-spacing: 0.15em; color: #a8c090; margin-bottom: 24px;
        }
        .villa-desc {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 14px; line-height: 2; letter-spacing: 0.08em;
          color: rgba(232,228,220,0.65); margin-bottom: 16px;
        }
        .villa-desc-en {
          font-size: 13px; line-height: 1.9; font-style: italic;
          color: rgba(232,228,220,0.35); margin-bottom: 32px;
        }
        .villa-specs-row {
          display: flex; gap: 0;
          border: 1px solid rgba(232,228,220,0.08);
          margin-bottom: 28px;
        }
        .villa-spec-item {
          flex: 1; padding: 20px 20px;
          border-right: 1px solid rgba(232,228,220,0.08);
        }
        .villa-spec-item:last-child { border-right: none; }
        .villa-spec-value {
          font-size: 22px; font-weight: 300; font-style: italic;
          color: #a8c090; margin-bottom: 4px; letter-spacing: -0.01em;
        }
        .villa-spec-label {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 10px; letter-spacing: 0.18em; color: rgba(232,228,220,0.35);
        }
        .villa-amenities {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px;
        }
        .amenity-tag {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 11px; letter-spacing: 0.1em;
          border: 1px solid rgba(168,192,144,0.3);
          color: rgba(168,192,144,0.8);
          padding: 5px 12px; border-radius: 2px;
        }

        /* ── FORMA ── */
        .forma-section {
          background: #0a0a08;
          border-top: 1px solid rgba(232,228,220,0.06);
          padding: 120px 32px;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .forma-section::before {
          content: 'FORMA';
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(80px, 18vw, 240px);
          font-weight: 700; letter-spacing: 0.1em;
          color: rgba(232,228,220,0.02);
          pointer-events: none; white-space: nowrap;
        }
        .forma-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }
        .forma-badge {
          display: inline-block;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 10px; letter-spacing: 0.4em;
          border: 1px solid #a8c090; color: #a8c090;
          padding: 5px 16px; border-radius: 2px; margin-bottom: 24px;
        }
        .forma-title {
          font-size: clamp(36px, 6vw, 72px); font-weight: 400;
          letter-spacing: 0.12em; color: #e8e4dc;
          margin-bottom: 8px; line-height: 1;
        }
        .forma-by {
          font-size: 14px; font-style: italic;
          color: rgba(232,228,220,0.4); margin-bottom: 40px; letter-spacing: 0.1em;
        }
        .forma-desc {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 14px; line-height: 2; letter-spacing: 0.08em;
          color: rgba(232,228,220,0.6); margin-bottom: 16px;
        }
        .forma-desc-en {
          font-size: 13px; line-height: 1.9; font-style: italic;
          color: rgba(232,228,220,0.35); margin-bottom: 48px;
        }
        .btn-forma {
          display: inline-block;
          border: 1px solid rgba(232,228,220,0.3); color: #e8e4dc;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 13px; letter-spacing: 0.2em;
          padding: 16px 40px; border-radius: 2px;
          text-decoration: none; transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .btn-forma:hover { border-color: #a8c090; color: #a8c090; background: rgba(168,192,144,0.04); }

        /* ── CONTACT ── */
        .contact-section {
          background: #111110;
          border-top: 1px solid rgba(232,228,220,0.06);
          padding: 120px 32px;
        }
        .contact-inner { max-width: 760px; margin: 0 auto; }
        .contact-title {
          font-size: clamp(36px, 5vw, 60px); font-weight: 400;
          line-height: 1.2; letter-spacing: -0.02em;
          color: #e8e4dc; margin-bottom: 12px;
        }
        .contact-sub {
          font-size: 14px; font-style: italic;
          color: rgba(232,228,220,0.4); margin-bottom: 56px;
        }
        .contact-form { display: flex; flex-direction: column; gap: 24px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 10px; letter-spacing: 0.25em; color: rgba(232,228,220,0.45);
          text-transform: uppercase;
        }
        .form-group input, .form-group textarea {
          background: rgba(232,228,220,0.04);
          border: 1px solid rgba(232,228,220,0.12);
          border-radius: 2px; padding: 14px 16px;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 13px; letter-spacing: 0.05em;
          color: #e8e4dc; outline: none;
          transition: border-color 0.2s, background 0.2s;
          resize: vertical;
        }
        .form-group input::placeholder, .form-group textarea::placeholder { color: rgba(232,228,220,0.2); }
        .form-group input:focus, .form-group textarea:focus {
          border-color: rgba(168,192,144,0.5);
          background: rgba(168,192,144,0.04);
        }
        .btn-submit {
          align-self: flex-start;
          background: #a8c090; color: #0a0a08;
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 13px; letter-spacing: 0.18em;
          padding: 16px 40px; border: none; border-radius: 2px; cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-submit:hover { background: #bdd4a8; transform: translateY(-1px); }

        /* ── FOOTER ── */
        .matrix-footer {
          background: #070706;
          border-top: 1px solid rgba(232,228,220,0.06);
          padding: 48px 32px;
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center;
        }
        .footer-brand { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .footer-tagline {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 11px; letter-spacing: 0.2em; color: rgba(232,228,220,0.3);
        }
        .footer-address {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 11px; letter-spacing: 0.1em; color: rgba(232,228,220,0.25);
        }
        .footer-copy {
          font-family: 'Hiragino Kaku Gothic Pro', 'Noto Sans JP', sans-serif;
          font-size: 10px; letter-spacing: 0.1em; color: rgba(232,228,220,0.2);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr; gap: 48px; }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .specs-grid { grid-template-columns: repeat(2, 1fr); }
          .villa-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 640px) {
          .nav-links { display: none; flex-direction: column; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(10,10,8,0.98); justify-content: center; align-items: center; gap: 32px; }
          .nav-links.open { display: flex; }
          .nav-links a { font-size: 18px; }
          .menu-toggle { display: flex; z-index: 101; }
          .features-grid { grid-template-columns: 1fr; }
          .specs-grid { grid-template-columns: 1fr 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .hero-scroll-hint { display: none; }
        }
      `}</style>
    </div>
  );
}
