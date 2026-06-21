import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <div className="stage">
      {/* ============ TOP NAV ============ */}
      <header className="topbar">
        <nav className="topbar__inner">
          <ul className="topbar__links">
            <li>
              <a href="#">Buying &amp; Selling</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="topbar__right">
            <a href="#" className="topbar__cta">
              Get Started
            </a>
            <span className="topbar__divider" />
            <a href="tel:9736109678" className="topbar__phone">
              (973) 610-9678
            </a>
          </div>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__logo"
          src="/assets/Logo.png"
          alt="White Oak Residential"
        />
        <div className="hero__band">
          <h1 className="hero__title">Local Real Estate Expertise</h1>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="intro">
        <div className="intro__inner">
          <h2 className="intro__title">
            White Oak Residential Real Estate Brokers in Morristown, NJ
          </h2>
          <p className="intro__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vestibulum mi quam, ac pulvinar orci rutrum eu. Nulla interdum lectus
            nulla, vel ultricies odio mattis eget. Duis et quam in mauris placerat
            sodales id nec est. Vivamus vitae eros eget nisl rutrum blandit.
            Maecenas augue eros, laoreet vitae tortor et, rutrum volutpat lectus.
            Sed est elit, viverra vel tempus sagittis, faucibus vulputate risus.
            Pellentesque bibendum, lorem a imperdiet consectetur, orci tortor
            efficitur risus, ut dignissim sapien est lobortis nunc. Sed non mauris
            scelerisque, pharetra arcu eget, ornare est. Proin ut ultricies augue.
            Curabitur eu scelerisque Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum vestibulum mi quam, ac pulvinar orci rutrum
            eu.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="divider" src="/assets/divider_white.png" alt="" />
        </div>
      </section>

      {/* ============ HOW CAN WE HELP ============ */}
      <section className="help">
        <div className="help__inner">
          <h2 className="help__title">How Can We Help You?</h2>
          <div className="cards">
            <a href="#" className="card">
              <span className="card__icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icon_buyers.png" alt="" />
              </span>
              <h3 className="card__title">Buyers</h3>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Vestibulum
                vestib
              </p>
            </a>
            <a href="#" className="card">
              <span className="card__icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icon_sellers.png" alt="" />
              </span>
              <h3 className="card__title">Sellers</h3>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Vestibulum
                vestib
              </p>
            </a>
            <a href="#" className="card">
              <span className="card__icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icon_about.png" alt="" />
              </span>
              <h3 className="card__title">About Us</h3>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Vestibulum
                vestib
              </p>
            </a>
            <a href="#" className="card">
              <span className="card__icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icon_contact.png" alt="" />
              </span>
              <h3 className="card__title">Contact Us</h3>
              <p className="card__text">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Vestibulum
                vestib
              </p>
            </a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="divider divider--black"
            src="/assets/divider_black.png"
            alt=""
          />
        </div>
      </section>

      {/* ============ BUYERS / SELLERS ============ */}
      <section className="bs">
        <div className="bs__inner">
          <div className="bs__row">
            <div className="bs__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/buyer_house.png" alt="Family looking at a home" />
            </div>
            <div className="bs__copy">
              <h3 className="bs__title">Buyers</h3>
              <p className="bs__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum mi quam, ac pulvinar orci rutrum eu. Nulla
                interdum lectus nulla, vel ultricies odio mattis eget. Duis et quam
                in mauris placerat sodales id nec est. Vivamus vitae eros eget nisl
                rutrum blandit. Maecenas augue eros, laoreet vitae tortor et,
                rutrum volutpat lectus. Sed est elit, viverra vel tempus sagittis.
              </p>
              <a href="#" className="btn">
                Get Started
              </a>
            </div>
          </div>
          <div className="bs__row">
            <div className="bs__copy">
              <h3 className="bs__title">Sellers</h3>
              <p className="bs__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum mi quam, ac pulvinar orci rutrum eu. Nulla
                interdum lectus nulla, vel ultricies odio mattis eget. Duis et quam
                in mauris placerat sodales id nec est. Vivamus vitae eros eget nisl
                rutrum blandit. Maecenas augue eros, laoreet vitae tortor et,
                rutrum volutpat lectus. Sed est elit, viverra vel tempus sagittis.
              </p>
              <a href="#" className="btn">
                Get Started
              </a>
            </div>
            <div className="bs__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/seller_house.png" alt="Sold home" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ AGENTS ============ */}
      <section className="agents">
        <div className="agents__inner">
          <div className="agent">
            <div className="agent__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/michael.png" alt="Michael Marchese" />
            </div>
            <h3 className="agent__name">Michael Marchese</h3>
            <p className="agent__role">
              Broker of Record
              <br />P: (201) 787-7634
            </p>
            <p className="agent__bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              vestibulum mi quam, ac pulvinar orci rutrum eu. Nulla interdum lectus
              nulla, vel ultricies odio mattis eget. Duis et quam in mauris
              placerat sodales id nec est. Vivamus vitae eros eget nisl rutrum
              blandit.
            </p>
          </div>
          <div className="agent">
            <div className="agent__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/karen.png" alt="Karen Polanco" />
            </div>
            <h3 className="agent__name">Karen Polanco</h3>
            <p className="agent__role">
              Sales Associate
              <br />P: (973) 610-9678
            </p>
            <p className="agent__bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              vestibulum mi quam, ac pulvinar orci rutrum eu. Nulla interdum lectus
              nulla, vel ultricies odio mattis eget. Duis et quam in mauris
              placerat sodales id nec est. Vivamus vitae eros eget nisl rutrum
              blandit.
            </p>
          </div>
        </div>
      </section>

      {/* ============ MAP + CONTACT ============ */}
      <section className="contact">
        <div className="contact__inner">
          <div className="contact__map">
            <iframe
              title="143 Washington Street, Morristown, NJ"
              src="https://www.google.com/maps?q=143%20Washington%20Street%2C%20Morristown%2C%20NJ%2007960&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="contact__head">
            <h2 className="contact__formtitle">Contact Form</h2>
            <p className="contact__address">
              143 Washington Street, Morristown, NJ 07960
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__addr">
            143 Washington Street, Morristown, NJ 07960{"  |  "}
            Phone: (973) 610-967
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook" className="social">
              f
            </a>
            <a href="#" aria-label="Google" className="social">
              G
            </a>
          </div>
          <p className="footer__legal">
            Privacy Policy{"  -  "}Copyright 2026 White Oak
            Residential. All Rights Reserved. Created and Designed By VisionLine
            Media
          </p>
        </div>
      </footer>
    </div>
  );
}
