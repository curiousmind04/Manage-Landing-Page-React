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
      {!menu && (
        <img
          src="/images/icon-hamburger.svg"
          alt="hamburger icon"
          className={classes.hamburger}
          onClick={openMenuHandler}
        />
      )}
      {menu && <MobileMenu onCloseMenu={onCloseMenu} />}
    </header>
  );
}

export default Navigation;
