import React from "react";
import { BsYoutube } from "react-icons/bs";

type Props = {};
import "./about.scss";
export default function About({}: Props) {
  return (
    <main id="page_about">
      <section id="about-panel">
        <figure className="art-part">
          <img src="/decors/water.png" alt="" className="water" />
          <img src="/graphics/deli-about.png" alt="" className="deli" />
        </figure>
        <article className="info-part">
          <div className="info">
            <div className="about">
              <h2>ABOUT ♡</h2>
              <p>
                Hi, I&#39;m Delichan~ but you can call me Deli-!!! I&#39;m a
                full-time freelance graphic designer. I&#39;ll assist you in
                your project
              </p>
            </div>
            <div className="art">
              <img src="/decors/about-chibi.png" alt="" className="chibi" />
            </div>
          </div>
          <div className="contact-btn">
            <a href="/" target="_blank" className="btn btn-social">
              <BsYoutube />
            </a>
            <a href="/" target="_blank" className="btn btn-social">
              <BsYoutube />
            </a>
            <a href="/" target="_blank" className="btn btn-social">
              <BsYoutube />
            </a>
            <a href="/" target="_blank" className="btn btn-social">
              <BsYoutube />
            </a>
            <a href="/" target="_blank" className="btn btn-social">
              <BsYoutube />
            </a>
            <a href="/" target="_blank" className="btn btn-social">
              <BsYoutube />
            </a>
          </div>
          <img src="/decors/about_t.png" alt="" className="decor_t t" />
          <img src="/decors/about_t.png" alt="" className="decor_t b" />
        </article>
      </section>
    </main>
  );
}
