import { forwardRef } from "react";
import style from "./datedisplay.module.css";
import { useState } from "react";

export const DateDisplay = forwardRef((props, ref) => {
  const [date, setDate] = useState();

  ref.current.setDate = setDate;

  return (
    <>
      {date ? (
        <section className={style.main}>
          <div className="date">
            <span className={style.date}>{date.years}</span>
            <span>years</span>
          </div>

          <div className="date">
            <span className={style.date}>{date.months}</span>
            <span>months</span>
          </div>

          <div className="date">
            <span className={style.date}>{date.days}</span>
            <span>days</span>
          </div>
        </section>
      ) : (
        <div className={style.welcome}>
          <span className={style.name}>Age Calculator</span> ,{" "}
          <span>provide your date to continue</span>
        </div>
      )}
    </>
  );
});

DateDisplay.displayName = "DateDisplay";

export default DateDisplay;
