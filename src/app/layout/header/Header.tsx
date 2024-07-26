import React from "react";
import "./header.scss";
import Link from "next/link";
import { FaHome, FaPalette } from "react-icons/fa";
import { PiScrollFill } from "react-icons/pi";
type Props = {};

export default function Header({}: Props) {
  return (
    <header id="header">
      <Link href={"/"} className="logo">
        <img src="/graphics/logo_long.png" alt="" className="logo-img" />
        <img src="/decors/teeth-top.png" alt="" className="teeth-top" />
      </Link>

      <nav id="main-nav">
        <Link href={"/about"} className="btn btn-nav">
          <svg
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77 56V63H70C65.1 63 60.2 61.6 56 59.5C47.25 64.05 36.75 64.05 28 59.5C23.8 61.6 18.9 63 14 63H7V56H14C18.9 56 23.8 54.25 28 51.45C36.4 57.4 47.6 57.4 56 51.45C60.2 54.25 65.1 56 70 56H77ZM18.48 48.265C20.37 47.705 22.295 46.83 24.115 45.64L28 42.98C30.415 35 30.73 25.445 26.565 14.49C41.825 17.115 55.615 30.275 60.795 46.165C63.42 47.74 66.185 48.685 68.81 48.895C63.84 25.9 43.295 7 21 7C19.775 7 18.655 7.63 18.025 8.645C17.395 9.695 17.325 10.99 17.885 12.075C25.48 27.265 23.135 39.515 18.48 48.265ZM56 65.45C47.6 71.4 36.4 71.4 28 65.45C23.8 68.25 18.9 70 14 70H7V77H14C18.9 77 23.8 75.6 28 73.5C36.75 78.05 47.25 78.05 56 73.5C60.2 75.6 65.1 77 70 77H77V70H70C65.1 70 60.2 68.25 56 65.45Z"
              fill="#C0D2E9"
            />
          </svg>
          ABOUT
        </Link>
        <Link href={"/portfolio"} className="btn btn-nav">
          <FaPalette />
          Portfolio
        </Link>

        <Link href={"/"} className="btn btn-home-nav">
          <div className="btn-home">
            <FaHome />
          </div>
          <div className="stars">
            <svg
              width="122"
              height="116"
              viewBox="0 0 122 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.4249 5.93206C55.6363 -1.51505 66.3637 -1.51506 70.575 5.93205L82.0624 26.2458C83.6307 29.0191 86.3244 30.9762 89.4467 31.6108L112.316 36.2586C120.7 37.9626 124.015 48.1649 118.234 54.4714L102.464 71.6739C100.311 74.0224 99.2821 77.1891 99.6434 80.3546L102.29 103.541C103.26 112.041 94.5817 118.346 86.7973 114.797L65.5637 105.115C62.6648 103.793 59.3352 103.793 56.4363 105.115L35.2027 114.797C27.4183 118.346 18.7397 112.041 19.7099 103.541L22.3566 80.3546C22.7179 77.1891 21.689 74.0224 19.536 71.6739L3.76632 54.4715C-2.01494 48.165 1.30001 37.9626 9.684 36.2586L32.5533 31.6108C35.6755 30.9762 38.3693 29.0191 39.9376 26.2458L51.4249 5.93206Z"
                fill="url(#paint0_linear_24_331)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_24_331"
                  x1="61"
                  y1="-11"
                  x2="61"
                  y2="137"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FBC676" />
                  <stop offset="1" stop-color="#BBDDFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>

        <Link href={"/terms"} className="btn btn-nav">
          <PiScrollFill />
          Terms
        </Link>
        <Link href={"/pricing"} className="btn btn-nav">
          <svg
            width="80"
            height="85"
            viewBox="0 0 80 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7175 24.24C11.5175 26.0967 7.41745 27.0233 6.44078 30.16C5.46745 33.2933 8.26078 36.5633 13.8508 43.1L15.2975 44.79C16.8841 46.6467 17.6808 47.5767 18.0375 48.7233C18.3941 49.8733 18.2741 51.1133 18.0341 53.59L17.8141 55.8467C16.9708 64.57 16.5475 68.93 19.1008 70.8667C21.6541 72.8067 25.4941 71.0367 33.1675 67.5033L35.1575 66.59C37.3375 65.5833 38.4275 65.0833 39.5841 65.0833C40.7408 65.0833 41.8308 65.5833 44.0141 66.59L45.9975 67.5033C53.6741 71.0367 57.5141 72.8033 60.0641 70.87C62.6208 68.93 62.1975 64.57 61.3541 55.8467M65.3175 43.1C70.9075 36.5667 73.7008 33.2967 72.7275 30.16C71.7508 27.0233 67.6508 26.0933 59.4508 24.24L57.3308 23.76C55.0008 23.2333 53.8375 22.97 52.9008 22.26C51.9675 21.55 51.3675 20.4733 50.1675 18.32L49.0741 16.36C44.8508 8.78667 42.7408 5 39.5841 5C36.4275 5 34.3175 8.78667 30.0941 16.36"
              stroke="#C0D2E9"
              stroke-width="9"
              stroke-linecap="round"
            />
          </svg>
          Pricing
        </Link>
      </nav>
    </header>
  );
}
