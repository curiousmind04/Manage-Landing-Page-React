import { useState } from "react";
import MobileMenu from "./MobileMenu";
import classes from "./Navigation.module.css";

function Navigation() {
  const [menu, setMenu] = useState(false);

  const openMenuHandler = () => {
    setMenu(true);
  };

  const onCloseMenu = () => {
    setMenu(false);
  };

  return (
    <header>
      <div className={classes.logo}>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <ul className={classes.links}>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
      </ul>
      <button className={classes.btn}>Get Started</button>
      {!menu && (
        <img
          src="/images/icon-hamburger.svg"
          alt="hamburger icon"
          className={classes.hamburger}
          onClick={openMenuHandler}
          tabIndex="0"
        />
      )}
      {menu && <MobileMenu onCloseMenu={onCloseMenu} />}
    </header>
  );
}

export default Navigation;
