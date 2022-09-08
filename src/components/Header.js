import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  function showmenu(event) {
    event.preventDefault();
    setOpen(true);
  }

  function hidemenu(event) {
    event.preventDefault();
    setOpen(false)
  }

  return (
    <header>
      <button
        className="HeaderTitle"
        onClick={() => {
          window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
        }}
      >
        Lucas Maul
      </button>
      <ul>
        <li>
          <button
            className="headerbutton"
            onClick={() => {
              window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="headerbutton"
            onClick={() => {
              window.scrollTo({ behavior: "smooth", top: 1000, left: 0 });
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="headerbutton"
            onClick={() => {
              window.scrollTo({ behavior: "smooth", top: 1900, left: 0 });
            }}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            className="headerbutton"
            onClick={() => {
              window.scrollTo({ behavior: "smooth", top: 3900, left: 0 });
            }}
          >
            Contact
          </button>
        </li>
      </ul>

      <div>
        {open ? (
          <>
            <AiOutlineClose className="mobilehamburger" onClick={hidemenu}/>
            <ul className="hamburgermenu">
              <li>
                <button
                  className="headerbutton"
                  onClick={() => {
                    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
                    setOpen(false)
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="headerbutton"
                  onClick={() => {
                    window.scrollTo({ behavior: "smooth", top: 840, left: 0 });
                    setOpen(false)
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="headerbutton"
                  onClick={() => {
                    window.scrollTo({ behavior: "smooth", top: 1650, left: 0 });
                    setOpen(false)
                  }}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  className="headerbutton"
                  onClick={() => {
                    window.scrollTo({ behavior: "smooth", top: 3350, left: 0 });
                    setOpen(false)
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </>
        ) : (
          <GiHamburgerMenu className="mobilehamburger" onClick={showmenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
