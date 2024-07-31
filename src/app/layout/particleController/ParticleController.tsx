"use client";
import { IOptions, RecursivePartial } from "@tsparticles/engine";
import React from "react";
import Particles from "@tsparticles/react";
type Props = {};
import "./particleController.scss";
const bubbles: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: "#0d48a10",
    },
  },
  fpsLimit: 120,
  fullScreen: false,

  particles: {
    color: {
      value: "#000000",
    },

    move: {
      attract: {
        rotate: {
          x: 500,
        },
      },
      direction: "top",
      enable: true,
      random: true,
      speed: {
        min: 1,
        max: 8,
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 20,
    },
    opacity: {
      value: {
        min: 0.5,
        max: 1,
      },
    },
    shape: {
      type: ["image"],
      options: {
        image: [
          {
            src: "/decors/bubble.png",
            width: 40,
            height: 40,
          },
        ],
      },
    },

    size: {
      value: { min: 4, max: 25 },
    },
  },

  detectRetina: true,
};
export default function ParticleController({}: Props) {
  return <Particles id="bubbles" options={bubbles} />;
}
