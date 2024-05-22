import data from '../../../services.json';
import { Card } from '../Card/Card';
import { nanoid } from 'nanoid';
import css from './CardsList.module.css';

export const CardsList = () => {
  const spriteImages = [
    'icon-tap',
    'icon-paint',
    'icon-sofa',
    'icon-electrical',
    'icon-door',
    'icon-picture',
    'icon-instalation',
    'icon-home',
    'icon-outdoor'
  ];

  return (
    <ul className={css.cardsList}>
      {data.map(({ title, description, color }, index) => (
          <li className={css.cardsItem} key={nanoid()}>
            <Card title={title} description={description} color={color} spriteImage={spriteImages[index]} />
          </li>
        ))}
    </ul>
  )
}

