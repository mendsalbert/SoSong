import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideBar(props) {
  const [checked, setChecked] = useState(true);
  const [toggle, setToggle] = useState(false);
  const showNavController = () => {
    setToggle((prev) => !prev);
    if (typeof window === "object") {
      var nav = document.getElementById("main__layout-sidebar");
      if (toggle) {
        // nav.style.transform = "translateY(0)";
        nav.style.display = "flex";
      } else {
        // nav.style.transform = "translateY(-42rem)";
        nav.style.display = "none";
      }
    }
  };
  const setTheme = () => {
    console.log(checked);
    setChecked((prev) => !prev);
    if (typeof window === "object") {
      if (checked) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-color-scheme", "dark");
      } else {
        document.documentElement.setAttribute("data-color-scheme", "light"); // or just empty " "
        localStorage.setItem("theme", "light");
      }
    }
  };
  useEffect(() => {
    if (typeof window === "object") {
      let theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setTheme();
      } else {
      }
    }
  }, []);
  const router = useRouter();
  // console.log(router.pathname);
  return (
    <nav className="main__layout-sidebar" id="main__layout-sidebar">
      <div className="main__layout-nav">
        <div className="main__layout-nav-mobile" id="main__layout-nav-mobile">
          <input
            type="button"
            // checked={checked}
            className="main__layout-header-top-toggle"
            id="toggle"
            // onClick={() => setTheme()}
            onClick={(e) => setTheme(e)}
          />
          <label for="toggle">
            {checked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="main__layout-nav-mobile-icon"
                viewBox="0 0 512 512"
              >
                <title>Moon</title>
                <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="main__layout-nav-mobile-icon"
                viewBox="0 0 512 512"
              >
                <title>Sunny</title>
                <path d="M234 26h44v92h-44zM234 394h44v92h-44zM338.025 142.857l65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zM26 234h92v44H26zM338.029 369.14l31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
              </svg>
            )}
          </label>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
            onClick={() => showNavController()}
            className="main__layout-nav-mobile-icon"
          >
            <title>Close</title>
            <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
          </svg>
        </div>
        <span className="main__layout-sidebar--logo u-mb-small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            className="main__layout-svg-logo"
          >
            <title>ionicons-v5-c</title>
            <path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z" />
          </svg>
        </span>
        <ul className="main__layout-nav-container">
          <li
            className={
              router.pathname === "/"
                ? "main__layout-nav-item__active"
                : "main__layout-nav-item"
            }
          >
            <Link href="/" scroll={false}>
              <a href="#">Browse</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/radio"
                ? "main__layout-nav-item__active"
                : "main__layout-nav-item"
            }
          >
            <Link href="/radio" scroll={false}>
              <a href="">Radio</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="main__layout-header-4">MY MUSIC</h4>
        <ul className="main__layout-main-music-nav">
          <li
            className={
              router.pathname === "/songs"
                ? " main__layout-main-music-item main__layout-main-music-item__active"
                : "main__layout-main-music-item"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className="main__layout-svg"
            >
              <title>ionicons-v5-i</title>
              <circle cx="256" cy="256" r="32" />
              <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM256,336a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,336Z" />
            </svg>

            <Link href="/songs" scroll={false}>
              <a href="">Songs</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/album"
                ? " main__layout-main-music-item main__layout-main-music-item__active"
                : "main__layout-main-music-item"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className="main__layout-svg"
            >
              <title>ionicons-v5-a</title>
              <rect x="128" y="64" width="256" height="32" />
              <rect x="96" y="112" width="320" height="32" />
              <path d="M464,448H48V160H464Z" />
            </svg>
            <Link href="/album" scroll={false}>
              <a href="#">Album</a>
            </Link>
            {/* <a href="#">Album</a> */}
          </li>
          <li
            className={
              router.pathname === "/artist"
                ? " main__layout-main-music-item main__layout-main-music-item__active"
                : "main__layout-main-music-item"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className="main__layout-svg"
            >
              <title>ionicons-v5-j</title>
              <path d="M256,256A112,112,0,1,0,144,144,112,112,0,0,0,256,256Zm0,32c-69.42,0-208,42.88-208,128v64H464V416C464,330.88,325.42,288,256,288Z" />
            </svg>
            <Link href="/artist" scroll={false}>
              <a href="">Artist</a>
            </Link>
          </li>

          <li
            className={
              router.pathname === "/podcast"
                ? " main__layout-main-music-item main__layout-main-music-item__active"
                : "main__layout-main-music-item"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="main__layout-svg"
              viewBox="0 0 512 512"
            >
              <title>Radio</title>
              <ellipse cx="256" cy="256" rx="36" ry="35.99" />
              <path d="M188.4 350.8l-14.62-16.44a117.91 117.91 0 010-156.71l14.62-16.43 32.87 29.24-14.62 16.43a73.93 73.93 0 000 98.25l14.62 16.44zM323.6 350.8l-32.89-29.22 14.62-16.44a73.93 73.93 0 000-98.25l-14.62-16.43 32.87-29.24 14.62 16.43a117.91 117.91 0 010 156.71z" />
              <path d="M138.24 401.76l-15-16.06a189.85 189.85 0 010-259.4l15-16.07 32.14 30.05-15 16.06a145.88 145.88 0 000 199.32l15 16.06zM373.76 401.76l-32.14-30 15-16.06a145.88 145.88 0 000-199.32l-15-16.06 32.14-30 15 16.07a189.85 189.85 0 010 259.4z" />
              <path d="M430.73 447l-32.79-29.33 14.66-16.39a218.2 218.2 0 000-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 010 349.22zM81.27 447L66.6 430.61a262.18 262.18 0 010-349.22L81.28 65l32.79 29.34-14.68 16.38a218.2 218.2 0 000 290.56l14.66 16.39z" />
            </svg>
            <Link href="/podcast" scroll={false}>
              <a href="">Podcast</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
