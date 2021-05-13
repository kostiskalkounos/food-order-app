import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table of delicious food" />
      </div>
    </>
  );
};

export default Header;
