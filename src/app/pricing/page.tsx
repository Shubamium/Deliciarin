"use client";
import React, { useState } from "react";
import "./pricing.scss";
import { GiCheckMark } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { BiFlag, BiListPlus, BiPackage, BiPlusCircle } from "react-icons/bi";
import { IoCheckmarkCircle, IoCheckmarkOutline } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
type Props = {};

export default function PricingPage({}: Props) {
  const [active, setActive] = useState(0);

  return (
    <main id="page_pricing">
      <section id="pricing">
        <div className="pricing-navigation">
          <div className="confine">
            <button
              className={`btn btn-nav ${active === 0 ? "active" : ""}`}
              onClick={() => {
                setActive(0);
              }}
            >
              PACKAGES
            </button>
            <button
              className={`btn btn-nav ${active === 1 ? "active" : ""}`}
              onClick={() => {
                setActive(1);
              }}
            >
              PACKAGES II
            </button>
            <button
              className={`btn btn-nav ${active === 2 ? "active" : ""}`}
              onClick={() => {
                setActive(2);
              }}
            >
              GENERAL
            </button>
            <button
              className={`btn btn-nav ${active === 3 ? "active" : ""}`}
              onClick={() => {
                setActive(3);
              }}
            >
              EXTRAS
            </button>
          </div>
        </div>
        <div className="content">
          {active === 0 && <PackageA />}
          {active === 1 && <PackageB />}
          {active === 2 && <General />}
          {active === 3 && <Extras />}
        </div>
      </section>
    </main>
  );
}

function Extras() {
  return (
    <div id="extras">
      <div className="art">
        <img src="/graphics/deli-extras.png" alt="" className="extra-deli" />
        <img src="/decors/star_big.png" alt="" className="star l" />
        <img src="/decors/star_big.png" alt="" className="star r" />
      </div>
      <div className="price-panel">
        <div className="c-panel">
          <h2>Other Comms</h2>
          <div className="rows">
            <div className="price-row">
              <div className="price">
                <div className="info">
                  <h4>Character Sheet Design</h4>
                  <p>Design for your character sheet!</p>
                </div>
                <div className="amount">
                  <p>€40</p>
                </div>
              </div>
              <div className="price">
                <div className="info">
                  <h4>Model Reveal Design</h4>
                  <p>Design for model reveal!</p>
                </div>
                <div className="amount">
                  <p>€50</p>
                </div>
              </div>
            </div>
            <div className="price-row">
              <div className="price">
                <div className="info">
                  <h4>Subathon / Donothon</h4>
                  <p>Design for subathon or donothon screen!</p>
                </div>
                <div className="amount">
                  <p>€50</p>
                </div>
              </div>
              <div className="price">
                <div className="info">
                  <h4>Display Showcase</h4>
                  <p>Design for showcasing your character!</p>
                </div>
                <div className="amount">
                  <p>€40</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-panel second">
          <h2>Extras</h2>
          <div className="list">
            <div className="price-row">
              <div className="price">
                <div className="info">
                  <h4> Private for Everything Set</h4>
                  <p>Keeping the commission private </p>
                </div>
                <div className="amount">
                  <p>€60</p>
                </div>
              </div>
              <div className="price">
                <div className="info">
                  <h4> Private for small project</h4>
                  <p>Keeping the commission private</p>
                </div>
                <div className="amount">
                  <p>€30</p>
                </div>
              </div>
            </div>
            <div className="price-row">
              <div className="price">
                <div className="info">
                  <h4>Revision</h4>
                  <p>Each revision after the finished work:</p>
                </div>
                <div className="amount">
                  <p>€20</p>
                </div>
              </div>
            </div>
            <div className="price-row">
              <div className="price">
                <div className="info">
                  <h4> PSD File</h4>
                  <p>PSD File for the design </p>
                </div>
                <div className="amount">
                  <p>+2X</p>
                </div>
              </div>
              <div className="price">
                <div className="info">
                  <h4> Commercial Usage</h4>
                  <p>Merch and advertise</p>
                </div>
                <div className="amount">
                  <p>+2X</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lasto">
            <h2>RUSH FEE:</h2>
            <div className="price-row">
              <div className="price">
                <div className="info">
                  <h4>EVERYTHING SET</h4>
                </div>
                <div className="amount">
                  <p>€60</p>
                </div>
              </div>
              <div className="price">
                <div className="info">
                  <h4>SMALL PROJECT</h4>
                </div>
                <div className="amount">
                  <p>€30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function General() {
  return (
    <div id="general">
      <div className="pricing-list left">
        <div className="p-panel">
          <h3>OVERLAYS</h3>
          <div className="price-row">
            <div className="price">
              <div className="info">
                <h4>STATIC</h4>
                <p>Overlays for your stream!</p>
              </div>
              <div className="amount">
                <p>€40</p>
              </div>
            </div>
            <div className="price">
              <div className="info">
                <h4>ANIMATED</h4>
                <p>The overlays will be animated!</p>
              </div>
              <div className="amount">
                <p>€55</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-panel">
          <h3>Panels</h3>
          <div className="price-row">
            <div className="price">
              <div className="info">
                <h4>Six Panels</h4>
                <p>Design for Six Panels</p>
              </div>
              <div className="amount">
                <p>€20</p>
              </div>
            </div>
            <div className="price">
              <div className="info">
                <h4>Six+ Panels</h4>
                <p>Design for Six+ Panels</p>
              </div>
              <div className="amount">
                <p>€30</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-panel">
          <h3>Screens</h3>
          <div className="price-row">
            <div className="price">
              <div className="info">
                <h4>STATIC</h4>
                <p>A static starting soon screens</p>
              </div>
              <div className="amount">
                <p>€40</p>
              </div>
            </div>
            <div className="price">
              <div className="info">
                <h4>Animated</h4>
                <p>The screens will be animated!</p>
              </div>
              <div className="amount">
                <p>€55</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="art">
        <div className="container">
          <img src="/graphics/deli-pfp.png" alt="" className="pfp" />
          <img src="/decors/star-mini.png" alt="" className="star l" />
          <img src="/decors/star_big.png" alt="" className="star r" />
        </div>
      </div>
      <div className="pricing-list right">
        <div className="p-panel">
          <h3>Schedule</h3>
          <div className="price-row">
            <div className="price">
              <div className="info">
                <h4>DEsign</h4>
                <p>Stream schedule design!</p>
              </div>
              <div className="amount">
                <p>€50</p>
              </div>
            </div>
            <div className="price">
              <div className="info">
                <h4>Editing</h4>
                <p>Editing the schedule for each week</p>
              </div>
              <div className="amount">
                <p>€5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-panel">
          <h3>DEBUT</h3>
          <div className="price-row">
            <div className="price">
              <div className="info">
                <h4>1 Overlay</h4>
                <p>An overlay for your debut!</p>
              </div>
              <div className="amount">
                <p>€40</p>
              </div>
            </div>
            <div className="price">
              <div className="info">
                <h4>6 Overlays</h4>
                <p>6 overlays for your debut!</p>
              </div>
              <div className="amount">
                <p>€160</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-panel">
          <h3>LoGo </h3>
          <div className="price-row">
            <div className="price">
              <div className="info">
                <h4>LoGo </h4>
                <p>Logo design for your branding!</p>
              </div>
              <div className="amount">
                <p>€50</p>
              </div>
            </div>
            <div className="price">
              <div className="info">
                <h4>Commercial Fee</h4>
                <p>It is for merch and advertising, streaming is included.</p>
              </div>
              <div className="amount">
                <p>€40</p>
              </div>
            </div>
          </div>
          <div className="detail">
            <p>If you buy the Starter or the Plus Set the logo will be 40€!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function PackageB() {
  return (
    <div id="package_b">
      <div className="set-card">
        <div className="data">
          <h2>
            <BiPackage /> 3 Animate Screen
          </h2>
          <p className="sub">Same Design</p>
          <p className="desc">
            Animated Screens with a different design costs 40€ each.
          </p>
        </div>
        <div className="price">
          <p>€60</p>
        </div>
      </div>
      <div className="set-card">
        <div className="data">
          <h2>
            {" "}
            <BsYoutube />
            YOUTUBE PACKAGE
          </h2>
          <p className="sub">Thumbnail / Intro / Outro / Preview</p>
          <p className="desc">
            by choosing one of these you will receive a 10% discount on a
            editing video of your choice from{" "}
            <a href="https://x.com/@illyachin" target="_blank">
              @illyachin
            </a>
          </p>
        </div>
        <div className="price">
          <p>
            €30<span>each</span>
          </p>
        </div>
      </div>
    </div>
  );
}
function PackageA() {
  return (
    <div id="package_a">
      <div className="normal-set">
        <div className="set-list">
          <div className="set">
            <h2>
              <BiFlag /> STARTER SET
            </h2>
            <div className="includes">
              <div className="include">
                <div className="icon">
                  <IoCheckmarkCircle />
                </div>
                <p>Gameplay</p>
              </div>
              <div className="include">
                <div className="icon">
                  <IoCheckmarkCircle />
                </div>
                <p>Just Chatting</p>
              </div>
            </div>

            <div className="price">
              <p>€60</p>
            </div>
          </div>
          <div className="set">
            <h2>
              <BiPlusCircle /> PLUS SET
            </h2>
            <div className="includes">
              <div className="include">
                <div className="icon">
                  <IoCheckmarkCircle />
                </div>
                <p>Gameplay</p>
              </div>
              <div className="include">
                <div className="icon">
                  <IoCheckmarkCircle />
                </div>
                <p>Just Chatting</p>
              </div>
              <div className="include">
                <div className="icon">
                  <IoCheckmarkCircle />
                </div>
                <p>One Screen</p>
              </div>
            </div>

            <div className="price">
              <p>€85</p>
            </div>
          </div>
        </div>
        <div className="extra">
          <p>+ Animation on the Starter Set </p>
          <p className="price">€100</p>
        </div>
      </div>
      <div className="star-set">
        <div className="chibi">
          <img src="/graphics/pricing-chibi.png" alt="" className="chibi" />
          <img src="/decors/star-mini.png" alt="" className="star l" />
          <img src="/decors/star-mini.png" alt="" className="star r" />
        </div>
        <h2> Branding:Full Package</h2>
        <div className="includes">
          <div className="include">
            <div className="icon">
              <FaStar />
            </div>
            <p>Gameplay</p>
          </div>
          <div className="include">
            <div className="icon">
              <FaStar />
            </div>
            <p>Just Chatting</p>
          </div>
          <div className="include">
            <div className="icon">
              <FaStar />
            </div>
            <p>3 Screens</p>
          </div>
          <div className="include">
            <div className="icon">
              <FaStar />
            </div>
            <p>Panels</p>
          </div>
          <div className="include">
            <div className="icon">
              <FaStar />
            </div>
            <p>Logo</p>
          </div>
        </div>
        <div className="price">
          <p>€200</p>
        </div>
      </div>
    </div>
  );
}
