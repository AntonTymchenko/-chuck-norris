import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChuckJoke } from "../redux/chuck-operations";
import Container from "./Container";
import s from "./Hero.module.css";

function Hero() {
  const [checkedCat, setCheckedCat] = useState("");
  const dispatch = useDispatch();
  const categoriesState = useSelector((state) => state.chuck.categories);

  return (
    <section>
      <Container>
        <h1 className={s.mainTitle}>Categories</h1>
        <ul className={s.listOfCategories}>
          {categoriesState.map((item) => {
            return (
              <li key={item} className={s.listOfCatItem}>
                <button
                  type="button"
                  className={checkedCat === item ? s.activeItem : s.button}
                  onClick={() => {
                    dispatch(fetchChuckJoke(item));
                    setCheckedCat(item);
                  }}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
export default Hero;
