"use client";
import React, { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import { TfiFullscreen } from "react-icons/tfi";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  ptList: any[];
};

export default function PortfolioSelector({ ptList }: Props) {
  const [modalImg, setModalImg] = useState<null | {
    type: string;
    source: string;
  }>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [imageList, setImageList] = useState(ptList[activeCategory].portfolio);

  const changeCat = (number: number) => {
    setActiveCategory(number);
    setImageList(ptList[number].portfolio);
  };
  return (
    <>
      <section id="portfolio">
        <div className="controls">
          {ptList?.map((pt: any, index: number) => (
            <button
              className={`btn btn-category ${index === activeCategory ? "selected" : ""}`}
              key={pt._id + pt.category}
              onClick={() => {
                changeCat(index);
              }}
            >
              {pt.category}
            </button>
          ))}
          {/* <button className="btn btn-category">LOGO</button>
          <button className="btn btn-category">BANNER</button>
          <button className="btn btn-category">OVERLAY</button>
          <button className="btn btn-category">DEBUT</button>
          <button className="btn btn-category">SCREEN</button>
          <button className="btn btn-category">PANELS</button>
          <button className="btn btn-category">OTHER</button> */}
          <img src="/decors/port_top.png" alt="" className="port t" />
          <img src="/decors/port_bottom.png" alt="" className="port b" />
          <img src="/decors/port_chibi.png" alt="" className="decor chibi" />
        </div>
        <div className="image-list">
          {imageList &&
            imageList.length > 0 &&
            imageList.map((img: any, index: number) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                }}
                className="port-card"
                onClick={() => {
                  setModalImg({
                    type: img._type,
                    source: img.source,
                  });
                }}
                key={img._key + img.title}
              >
                {img._type === "images" && (
                  <img src={img.source} alt={img.title} className="port-img" />
                )}
                {img._type === "video" && (
                  <video src={img.source} autoPlay className="port-img" />
                )}
                <button className="btn btn-fs">
                  <TfiFullscreen />
                </button>
              </motion.div>
            ))}
          {/* <div className="port-card">
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
          </div> */}
        </div>
      </section>
      <AnimatePresence>
        {modalImg !== null && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 0.5,
              },
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="modal"
            onClick={() => setModalImg(null)}
          >
            {modalImg.type === "images" && (
              <img src={modalImg.source} className="sample" />
            )}
            {modalImg.type === "video" && (
              <video
                src={modalImg.source}
                autoPlay
                controls
                className="sample"
              />
            )}
            <p>
              Click anywhere to close <HiCursorClick />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
