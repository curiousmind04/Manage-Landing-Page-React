import classes from "./Intro.module.css";

function Intro() {
  return (
    <div className={classes.container}>
      <div className={classes.right}>
        <div className={classes.illustration}>
          <img src="/images/illustration-intro.svg" alt="intro illustration" />
        </div>
      </div>
      <div className={classes.left}>
        <div>
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className={classes.btn}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
