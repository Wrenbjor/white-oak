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
          <h2 className="intro__title">White Oak Residential Real Estate</h2>
          <p className="intro__text">
            White Oak Residential real estate brokers in Morristown, NJ, provide
            local North Jersey residents with premier assistance &amp; guidance in
            buying or selling a property. At White Oak Residential, we help North
            Jersey clients buy and sell homes with confidence. Led by Karen Polanco
            and Michael Marchese, our team combines local market expertise with
            personalized service. We focus on smart strategy, strong negotiation,
            and a seamless experience from start to finish. At White Oak
            Residential, our mission is to offer a concierge-level experience that
            ensures every transaction is executed with the highest standards of
            integrity and professionalism.
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
                Our experts provide concierge-level support for local South Jersey
                homebuyers.
              </p>
            </a>
            <a href="#" className="card">
              <span className="card__icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icon_sellers.png" alt="" />
              </span>
              <h3 className="card__title">Sellers</h3>
              <p className="card__text">
                Expert strategic pricing and elite representation for South Jersey
                sellers.
              </p>
            </a>
            <a href="#" className="card">
              <span className="card__icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icon_about.png" alt="" />
              </span>
              <h3 className="card__title">About Us</h3>
              <p className="card__text">
                Our team of expert local brokers can help you get your desired
                outcome.
              </p>
            </a>
            <a href="#" className="card">
              <span className="card__icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/icon_contact.png" alt="" />
              </span>
              <h3 className="card__title">Contact Us</h3>
              <p className="card__text">
                Contact our Morristown experts today for premier real estate
                assistance.
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
                For buyers our team provides professional guidance to help you find
                and secure your ideal home in this competitive market. We use our
                deep background in commercial negotiation and luxury service to give
                you a strategic edge. Our experts focus on your specific goals,
                ensuring you make an informed investment within your target
                neighborhood.
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
                Sellers receive expert representation and strategic pricing from our
                team at White Oak Residential to ensure their properties stand out.
                We apply our background in commercial negotiation and luxury service
                to help you secure the best results for your investment. Our experts
                handle every detail to provide a smooth, successful transition.
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
              Michael Marchese, offers 25+ years of elite expertise. An
              award-winning leader with 350+ transactions, Michael earned the 2022
              NJBIZ Leader in Real Estate title. He leverages institutional-grade
              negotiation strategies and deep market knowledge to secure the best
              results for our clients.
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
              Karen Polanco, fluent in both English and Spanish, provides White Oak
              Residential clients with invaluable local insight. Known for her
              client-first approach, Karen expertly guides buyers and sellers
              through every transaction. She is dedicated to delivering personalized
              service and professional results across the region.
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
              143 Washington Street, Morristown, New Jersey, 07960
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__addr">
            143, Washington Street, Morristown, New Jersey, 07960{"  |  "}
            (973) 610-9678
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
            Privacy Policy{"  -  "}Copyright 2026 All Rights Reserved Created and
            Designed by VisionLine Media
          </p>
        </div>
      </footer>
    </div>
  );
}
