import classes from "./MobileMenu.module.css";

function MobileMenu(props) {
  const closeMenuHandler = () => {
    props.onCloseMenu();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeMenuHandler}></div>
      <div className={classes.container}>
        <img
          src="/images/icon-close.svg"
          alt="close icon"
          onClick={closeMenuHandler}
        />
        <div className={classes.menu}>
          <ul>
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
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
