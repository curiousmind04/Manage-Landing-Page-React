import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header>
      <div className={classes.logo}>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <img
        src="/images/icon-hamburger.svg"
        alt="hamburger icon"
        className={classes.hamburger}
      />
    </header>
  );
}

export default Navigation;
