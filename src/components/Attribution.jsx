import style from "./attribution.module.css";
const Attribution = () => {
  return (
    <div className={style.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://khanhanh.me" target="_blank">
        Anh Trinh
      </a>
      .
    </div>
  );
};

export default Attribution;
