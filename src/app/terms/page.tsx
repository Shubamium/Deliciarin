"use client";
import React, { useState } from "react";
import "./terms.scss";
import { FaPaintBrush, FaStar } from "react-icons/fa";
import { BsBrushFill, BsPaypal, BsYoutube } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { RiErrorWarningFill } from "react-icons/ri";
import Link from "next/link";
import { FiTwitch } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
type Props = {};

export default function Portfolio({}: Props) {
  const [active, setActive] = useState(0);
  return (
    <main id="page_terms">
      <section id="terms-panel">
        <div className="terms-header">
          <div className="panel">
            <img src="/decors/star-mini.png" alt="" className="stars" />
            <h2>TERMS OF SERVICE</h2>
            <img src="/decors/terms-top.png" alt="" className="terms-top" />
            <img src="/decors/star-mini.png" alt="" className="stars" />
          </div>
        </div>
        <div className="navigator">
          <button
            className={`btn btn-termsc ${active === 0 && "active"} `}
            onClick={() => {
              setActive(0);
            }}
          >
            INTRO
          </button>
          <button
            className={`btn btn-termsc ${active === 1 && "active"} `}
            onClick={() => {
              setActive(1);
            }}
          >
            GUIDELINES
          </button>
          <button
            className={`btn btn-termsc ${active === 2 && "active"} `}
            onClick={() => {
              setActive(2);
            }}
          >
            PAYMENT & PROCESS
          </button>
        </div>
        <div className="panel-content">
          {active === 0 && (
            <IntroSection
              click={() => {
                setActive(1);
              }}
            />
          )}
          {active === 1 && <Guideline />}
          {active === 2 && <Payment />}
        </div>
      </section>
    </main>
  );
}

function IntroSection({ click }: any) {
  return (
    <div className="intro-section">
      <figure>a</figure>
      <article>
        <h3>THANKS SO MUCH FOR CONSIDERING A COMMISSION FROM ME! ✦ </h3>
        <p>
          Please only start a request if you find the service details and my
          acceptable. After talking with me through DMs, you must make half
          payment to apply to my waitlist, and when it&#39;s your turn you need
          to other half to start your commission.
        </p>
        <button className="btn btn-guide" onClick={click}>
          View Guidelines <FaStar />
        </button>
      </article>
    </div>
  );
}
function Guideline() {
  return (
    <div className="guideline">
      <div className="guide-notes">
        <div className="guide-card">
          <img src="/graphics/chibi1.png" alt="" className="chibi" />
          <div className="text">
            <p>
              <strong>I cannot draw</strong>. I can only provide backgrounds,
              design, and design inspired clip-art.
            </p>
          </div>
        </div>
        <div className="guide-card">
          <img src="/graphics/chibi2.png" alt="" className="chibi" />
          <div className="text">
            <p>
              Please take my style into consideration before making requests, I
              can do a lot, and try a lot, but I do have a particular style.
            </p>
          </div>
        </div>
        <div className="guide-card">
          <img src="/graphics/chibi3.png" alt="" className="chibi" />
          <div className="text">
            <p>
              I have a right to <strong>refuse your commission</strong> if I do
              not believe it is within my skill set or abilities.
            </p>
            <p>I would like to do your design justice!</p>
          </div>
        </div>
      </div>
      <div className="guide-info">
        <div className="artwork">
          <div className="icon">
            <FaPaintBrush />
          </div>
          <p>
            All artworks must be provided by <u>you</u>
          </p>
        </div>
        <div className="preference">
          <RiErrorWarningFill />
          <p>
            All the orders that do not specify their preferences in the request
            will be treated as skeb-like!
          </p>
        </div>
      </div>
    </div>
  );
}
function Payment() {
  return (
    <div className="payment">
      <div className="info-part">
        <div className="top">
          <h3>Deadlines</h3>
          <p>
            If I do not receive a reply or references within two months on your
            order I will consider it closed
          </p>
          <div className="time-list">
            <div className="time">
              <h4>BIG PROJECT</h4>
              <p>2 MONTHS</p>
            </div>
            <div className="time">
              <h4>SMALL PROJECT</h4>
              <p>1 MONTH</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="screen card">
            <p>In the animated screen I can animate only the text</p>
            <Link href={"/portfolio"} className="btn btn-sample">
              View Samples
            </Link>
          </div>
          <div className="banner card">
            <p>
              My banners are for Twitter and Youtube, specify which one you want
              when commissioning.
            </p>
            <div className="icons">
              <BsYoutube />
              <FiTwitch />
            </div>
          </div>
        </div>
      </div>
      <div className="method">
        <div className="paypal">
          <BsPaypal />
          <h2>METHOD OF PAYMENT</h2>
          <p>PAYPAL ONLY!</p>
          <svg
            width="68"
            height="69"
            viewBox="0 0 68 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="tail"
          >
            <path
              d="M67.4914 68.4211C68.2864 49.9991 37.5371 15.3603 22.0631 0.343681C9.81177 19.6645 -10.1354 57.1456 8.08691 52.5037C26.3092 47.8618 55.2825 61.1811 67.4914 68.4211Z"
              fill="#6C93C5"
            />
          </svg>
        </div>
        <div className="refund">
          <p>
            REFUND IS
            <span>NOT AVAILABLE</span>
          </p>
          <GiCancel />
        </div>
      </div>
    </div>
  );
}
