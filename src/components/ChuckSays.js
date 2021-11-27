import React from "react";
import { useSelector } from "react-redux";
import Container from "./Container";
import chuck from "../img/chuck.png";
import s from "./ChuckSays.module.css";

function ChuckSays() {
  const chuckInfo = useSelector((state) => state.chuck.items);
  const checkedPhrase = useSelector((state) => state.chuck.joke.value);

  return (
    <section>
      <Container>
        <div className={s.chuckId}>
          <div className={s.chuckImg}>
            <img src={chuck} alt="chuck" />
          </div>
          <div className={s.chuckSays}>
            {checkedPhrase ? (
              <p className={s.phrase}>{checkedPhrase}</p>
            ) : (
              <p className={s.phrase}>{chuckInfo.value}</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ChuckSays;
