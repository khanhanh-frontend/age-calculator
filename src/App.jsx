import style from "./app.module.css";
import DateInput from "./components/DateInput";
import DateDisplay from "./components/DateDisplay";
import SubmitButton from "./components/SubmitButton";
import Attribution from "./components/Attribution";
import { useImmer } from "use-immer";
import { useRef } from "react";
import { CalculateDate, IsInvalidDate } from "./lib/calculator";

function App() {
  const today = new Date(Date.now());
  const dateDisplayRef = useRef({});

  const [dateInput, setDateInput] = useImmer({
    day: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  function calculateDate() {
    if (IsInvalidDate(dateInput)) {
      return;
    }
    dateDisplayRef.current.setDate(CalculateDate(dateInput));
  }

  return (
    <>
      <section className={style.main}>
        <DateInput setDate={setDateInput} date={dateInput} />
        <SubmitButton date={dateInput} calculateDate={calculateDate} />
        <DateDisplay ref={dateDisplayRef} />
      </section>

      <Attribution />
    </>
  );
}

export default App;
