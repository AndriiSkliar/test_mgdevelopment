import css from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <p className={css.footerText}>Created by </p>
            <a href="https://github.com/AndriiSkliar" target="_blank" rel="noreferrer noopener">Andrii Skliar</a>
        </footer>
    );
};