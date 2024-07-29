import React from "react";
import "./portfolio.scss";
import { BiFullscreen } from "react-icons/bi";
import { TfiFullscreen } from "react-icons/tfi";
type Props = {};

export default function Portfolio({}: Props) {
  return (
    <main id="page_portfolio">
      <section id="portfolio">
        <div className="controls">
          <button className="btn btn-category selected">SCHEDULE</button>
          <button className="btn btn-category">LOGO</button>
          <button className="btn btn-category">BANNER</button>
          <button className="btn btn-category">OVERLAY</button>
          <button className="btn btn-category">DEBUT</button>
          <button className="btn btn-category">SCREEN</button>
          <button className="btn btn-category">PANELS</button>
          <button className="btn btn-category">OTHER</button>
          <img src="/decors/port_top.png" alt="" className="port t" />
          <img src="/decors/port_bottom.png" alt="" className="port b" />
          <img src="/decors/port_chibi.png" alt="" className="decor chibi" />
        </div>
        <div className="image-list">
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
          <div className="port-card">
            <img src="/graphics/port_sample.png" alt="" className="port-img" />
            <button className="btn btn-fs">
              <TfiFullscreen />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
