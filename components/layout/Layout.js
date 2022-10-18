import Header from "./Header";
import style from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <main className={style.Block}>
      <header className={style.Block_headerContainer}>
        <Header />
      </header>
      <section
        className={`${style.Block_contentContainer} ${style.Block_contentContainer___compact}`}
      >
        {children}
      </section>
    </main>
  );
};

export default Layout;
