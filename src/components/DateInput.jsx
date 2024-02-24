import style from "./dateinput.module.css";
import { useState } from "react";

const DateInput = (props) => {
  const [dayInvalid, setDateInvalid] = useState(false);
  const [monthInvalid, setMonthInvalid] = useState(false);
  const [yearInvalid, setYearInvalid] = useState(false);

  function changeDate(e, part) {
    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      return;
    }
    switch (part) {
      case "day":
        props.setDate((date) => {
          date.day = value;
        });
        break;

      case "month":
        props.setDate((date) => {
          date.month = value;
        });
        break;

      case "year":
        props.setDate((date) => {
          date.year = value;
        });
        break;
    }

    checkInvalidDate(part, value);
  }

  function checkInvalidDate(type, value) {
    switch (type) {
      case "day":
        setDateInvalid(value > 31);
        break;
      case "month":
        setMonthInvalid(value > 12);
        break;
      case "year":
        setYearInvalid(value > new Date().getFullYear());
    }
  }

  function maxLengthCheck(object) {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength,
      );
    }
  }

  return (
    <>
      <section className={style.main}>
        <div className={style.date}>
          <label htmlFor="day">DAY</label>
          <input
            type="number"
            name="day"
            maxLength="2"
            onInput={maxLengthCheck}
            onChange={(e) => changeDate(e, "day")}
            className={dayInvalid ? style.invalid : ""}
            placeholder={props.date.day}
          />
        </div>

        <div className={style.date}>
          <label htmlFor="month">MONTH</label>
          <input
            type="number"
            name="month"
            maxLength="2"
            onInput={maxLengthCheck}
            onChange={(e) => changeDate(e, "month")}
            className={monthInvalid ? style.invalid : ""}
            placeholder={props.date.month}
          />
        </div>

        <div className={style.date}>
          <label htmlFor="year">YEAR</label>
          <input
            type="number"
            name="year"
            onChange={(e) => changeDate(e, "year")}
            maxLength="4"
            onInput={maxLengthCheck}
            className={yearInvalid ? style.invalid : ""}
            placeholder={props.date.year}
          />
        </div>
      </section>
    </>
  );
};

DateInput.displayName = "DateInput";
export default DateInput;
