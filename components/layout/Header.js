import style from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={style.Block}>
      <h1 className={style.Block_title}>Orders App</h1>
      <nav className={style.Block_navigation}>
        <Link href="/">
          <a className={style.Block_navigationItem}>Orders</a>
        </Link>
        <Link href="/create">
          <a className={style.Block_navigationItem}>Create New Order</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
