import sprite from '../../assets/svg/iconsSprite.svg';
import { Item, List } from './ListIcon.styled';

export const ListIcon = ({ details }) => {
  const icons = {
    AC: 'icon-ac',
    adults: 'icon-adults',
    airconditioner: 'icon-airconditioner',
    kitchen: 'icon-kitchen',
    beds: 'icon-beds',
    TV: 'icon-tele',
    CD: 'icon-CD',
    radio: 'icon-radio',
    shower: 'icon-shower',
    transmission: 'icon-automatic',
    engine: 'icon-petrol',
    toilet: 'icon-toilet',
    freezer: 'icon-freezer',
    hob: 'icon-hob',
    microwave: 'icon-microwave',
    gas: 'icon-gas',
    water: 'icon-water',
  };

  const data = [];

  for (const key in details) {
    if (key === 'bathroom') continue;

    if (
      key === 'transmission' ||
      key === 'engine' ||
      Number.parseInt(details[key]) !== 0
    ) {
      if (key === 'airConditioner') {
        data.splice(2, 0, 'AC');
        data.push('airconditioner');
      } else {
        data.push(key);
      }
    }
  }
  return (
    <List>
      {data.map((key, index) => (
        <Item key={index}>
          <svg width={20} height={20} fill="none" stroke="#101828">
            <use xlinkHref={`${sprite}#${icons[key]}`} />
          </svg>
          <span>
            {key === 'airConditioner' ||
            key === 'beds' ||
            key === 'hob' ||
            key === 'adults'
              ? details[key]
              : ''}
            {key === 'transmission' || key === 'engine'
              ? details[key].charAt(0).toUpperCase() + details[key].slice(1)
              : ` ${key}`}
          </span>
        </Item>
      ))}
    </List>
  );
};
