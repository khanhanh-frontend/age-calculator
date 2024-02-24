import IconArrow from "/icon-arrow.svg";
import style from "./submitbutton.module.css";
import { IsInvalidDate } from "../lib/calculator";
const SubmitButton = (props) => {
  return (
    <>
      <section className={style.main}>
        <div className={style.line}></div>

        <button
          disabled={IsInvalidDate(props.date)}
          onClick={props.calculateDate}
        >
          <img src={IconArrow} alt="" />
        </button>
      </section>
      <p className={IsInvalidDate(props.date) ? style.message : style.hide}>
        Please provide valid date and it have to be in the past 😀
      </p>
    </>
  );
};

export default SubmitButton;
