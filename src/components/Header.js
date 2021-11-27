import { useSelector } from "react-redux";
import Container from "./Container";
import s from "./Header.module.css";

function Header() {
  const chuckInfo = useSelector((state) => state.chuck.items);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.divHeader}>
          <img src={chuckInfo.icon_url} alt="chuck" />
          <p>Chuck Norris</p>
        </div>
      </Container>
    </header>
  );
}

export default Header;
