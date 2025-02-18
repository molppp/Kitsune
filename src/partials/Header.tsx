import React from "react";
import SearchAnime from "@/partials/SearchAnime";
import { nightTokyo } from "@/utils/fonts";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="navbar bg-gradient-to-b from-base-300 to-transparent lg:absolute lg:top-0 lg:z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="https://cdn.discordapp.com/attachments/1185582411245948998/1194964985391099914/New_Project_16_D6EA922.png?ex=65b244dd&is=659fcfdd&hm=fe4499d6ed4b43cd33013d2abcbff3a3208d0f552b82543c2e184be2f95b776a&"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/manga">MANGA</a>
              </li>
              <li>
                <a href="/waifu">WAIFU</a>
              </li>
              <li>
                <a
                  href="daha.yapmadık.la.com"
                  target="_blank"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Image src="/icon.png" alt="logo" width="80" height="80" />
            <a
              href="/"
              className={`${nightTokyo.className} btn btn-ghost font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-pink-600 tracking-widest`}
            >
              KITSUNE
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/manga">MANGA</a>
            </li>
            <li>
              <a href="/waifu">WAIFU</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          <a href="daha.yapmadık.la.com" target="_blank">
            <button className="btn btn-ghost">Donate</button>
          </a>
          <div className="w-full lg:w-1/2 mr-1">
            <SearchAnime />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <SearchAnime />
      </div>
    </>
  );
}

export default Header;
