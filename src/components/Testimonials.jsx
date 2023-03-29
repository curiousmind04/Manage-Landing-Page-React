import { useState } from "react";
import classes from "./Testimonials.module.css";

function Testimonials() {
  const [tab, setTab] = useState(1);

  const tabSwitchHandler = (e) => {
    if (e.target.id === "tab-one") {
      setTab(1);
    }
    if (e.target.id === "tab-two") {
      setTab(2);
    }
    if (e.target.id === "tab-three") {
      setTab(3);
    }
    if (e.target.id === "tab-four") {
      setTab(4);
    }
  };

  return (
    <div className={classes.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="814" height="814">
        <rect
          width="436"
          height="970"
          x="774"
          y="-62"
          fill="#FFF0EC"
          fillRule="evenodd"
          rx="218"
          transform="rotate(45 718.814 -291.157)"
        />
      </svg>
      <h2>What they've said</h2>
      <div className={classes.testimonials}>
        <div
          className={classes.testimonial}
          role="tabpanel"
          id="tab-panel-one"
          hidden={tab === 1 ? false : true}
          tabIndex="0"
        >
          <div className={classes.avatar}>
            <img src="/images/avatar-anisha.png" alt="anisha avatar" />
          </div>
          <div className={classes.space}></div>
          <div>
            <h3>Anisha Li</h3>
            <p>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        <div
          className={classes.testimonial}
          role="tabpanel"
          id="tab-panel-two"
          hidden={tab === 2 ? false : true}
          tabIndex="0"
        >
          <div className={classes.avatar}>
            <img src="/images/avatar-ali.png" alt="ali avatar" />
          </div>
          <div className={classes.space}></div>
          <div>
            <h3>Ali Bravo</h3>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </div>
        <div
          className={classes.testimonial}
          role="tabpanel"
          id="tab-panel-three"
          hidden={tab === 3 ? false : true}
          tabIndex="0"
        >
          <div className={classes.avatar}>
            <img src="/images/avatar-richard.png" alt="richard avatar" />
          </div>
          <div className={classes.space}></div>
          <div>
            <h3>Richard Watts</h3>
            <p>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </div>
        <div
          className={classes.testimonial}
          role="tabpanel"
          id="tab-panel-four"
          hidden={tab === 4 ? false : true}
          tabIndex="0"
        >
          <div className={classes.avatar}>
            <img src="/images/avatar-shanai.png" alt="shanai avatar" />
          </div>
          <div className={classes.space}></div>
          <div>
            <h3>Shanai Gough</h3>
            <p>
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </div>
      </div>
      <div className={classes.tabs} role="tablist">
        <button
          className={classes.tab}
          id="tab-one"
          aria-controls="tab-panel-one"
          tabIndex="0"
          role="tab"
          aria-selected={tab === 1 ? "true" : "false"}
          onClick={tabSwitchHandler}
        ></button>
        <button
          className={classes.tab}
          id="tab-two"
          aria-controls="tab-panel-two"
          tabIndex="0"
          role="tab"
          aria-selected={tab === 2 ? "true" : "false"}
          onClick={tabSwitchHandler}
        ></button>
        <button
          className={classes.tab}
          id="tab-three"
          aria-controls="tab-panel-three"
          tabIndex="0"
          role="tab"
          aria-selected={tab === 3 ? "true" : "false"}
          onClick={tabSwitchHandler}
        ></button>
        <button
          className={classes.tab}
          id="tab-four"
          aria-controls="tab-panel-four"
          tabIndex="0"
          role="tab"
          aria-selected={tab === 4 ? "true" : "false"}
          onClick={tabSwitchHandler}
        ></button>
      </div>
      <button className={classes.btn}>Get Started</button>
    </div>
  );
}

export default Testimonials;
