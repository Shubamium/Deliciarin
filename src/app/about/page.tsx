"use client";
import React, { useEffect } from "react";
import { BsDiscord, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs";
import { motion, stagger, useAnimate } from "framer-motion";
type Props = {};
import "./about.scss";
import { GiSharkBite, GiSharkFin, GiSharkJaws } from "react-icons/gi";
import { BiCoffee, BiCrown } from "react-icons/bi";
export default function About({}: Props) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const animateBtn = async () => {
      if (scope.current) {
        await animate(
          ".contact-btn .btn-social",
          {
            opacity: 0,
            scale: 0,
          },
          {
            duration: 0,
          }
        );
        animate(
          ".contact-btn .btn-social",
          {
            opacity: 1,
            scale: 1,
          },
          {
            duration: 0.2,
            delay: stagger(0.4),
          }
        );
      }
    };
    animateBtn();
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.9, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      id="page_about"
      ref={scope}
    >
      <section id="about-panel">
        <figure className="art-part">
          <img src="/decors/water.png" alt="" className="water" />
          <img src="/graphics/deli-about.png" alt="" className="deli" />
        </figure>
        <article className="info-part">
          <div className="info">
            <div className="about">
              <h2>
                ABOUT <GiSharkFin />
              </h2>
              <p>
                Hi, I&#39;m Delichan~ but you can call me Deli-!!! I&#39;m a
                full-time freelance graphic designer. I&#39;ll assist you in
                your project 🌊🫧
              </p>
            </div>
            <div className="art">
              <img src="/decors/about-chibi.png" alt="" className="chibi" />
            </div>
          </div>
          <div className="contact-btn">
            <a
              href="https://x.com/deliciarin_"
              target="_blank"
              className="btn btn-social"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://discord.com/invite/jqf9yUbPqt"
              target="_blank"
              className="btn btn-social"
            >
              <BsDiscord />
            </a>
            <a
              href="https://www.twitch.tv/deliciarin"
              target="_blank"
              className="btn btn-social"
            >
              <BsYoutube />
            </a>
            <a
              href="https://throne.com/deliciarin"
              target="_blank"
              className="btn btn-social"
            >
              <BiCrown />
            </a>
            <a
              href="https://ko-fi.com/deliciarin"
              target="_blank"
              className="btn btn-social"
            >
              <BiCoffee />
            </a>
            <a
              href="https://www.tiktok.com/@deliciarin"
              target="_blank"
              className="btn btn-social"
            >
              <BsTiktok />
            </a>
          </div>
          <img src="/decors/about_t.png" alt="" className="decor_t t" />
          <img src="/decors/about_t.png" alt="" className="decor_t b" />
        </article>
      </section>
    </motion.main>
  );
}
