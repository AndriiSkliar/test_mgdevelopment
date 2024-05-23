import { nanoid } from 'nanoid';
import css from './Card.module.css';
import sprite from '../../assets/icons/sprite.svg';

export const Card = ({ title, description, color, spriteImage }) => {
    let cssVariableName;

    switch (color) {
        case 'green':
            cssVariableName = 'var(--green-color)';
            break;
        case 'blue':
            cssVariableName = 'var(--blue-color)';
            break;
        case 'yellow':
            cssVariableName = 'var(--yellow-color)';
            break;
        case 'red':
            cssVariableName = 'var(--red-color)';
            break;
        default:
            cssVariableName = 'var(--second-color)'; 
    }

    const cardStyle = {
        border: `2px solid ${cssVariableName}`
    };

    const svgStyle = {
        fill: `${cssVariableName}`
    };

  return (
    <div className={css.cardContainer} style={cardStyle}>
        <svg className={css.svg} style={svgStyle}>
            <use className={css.svgIcon} href={`${sprite}#${spriteImage}`}></use>
        </svg>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.cardList}>
            {description.map((desc) => (
                <li className={css.cardItem} key={nanoid()}>{desc}</li>
            ))}
        </ul>
        <a className={css.cardLink} href="https://www.gmdev.site/en/index.html" target="_blank" rel="noreferrer noopener">View more</a>
    </div>
  )
}
