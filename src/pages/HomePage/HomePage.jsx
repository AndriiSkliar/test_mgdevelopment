import { CardsList } from "../../components/CardsList/CardsList";
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <section className={css.cardsSection}>
        <h1 className={css.title}>Services</h1>
        <CardsList/>
      </section>
    </main>
  );
};

export default HomePage;
