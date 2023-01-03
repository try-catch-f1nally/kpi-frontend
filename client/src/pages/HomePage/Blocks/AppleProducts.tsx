import React, {FC} from 'react';
import classes from './AppleProducts.module.scss';
import LinkWithUnderlineOnHover from '../../../components/LinkWithUnderlineOnHover';

const AppleProducts: FC = () => {
  const items = [
    {
      text: 'Flagship smartphones',
      linkText: 'iPhone',
      link: '/iphones'
    },
    {
      text: 'Professional tablets',
      linkText: 'iPad',
      link: '#'
    },
    {
      text: 'Powerful laptops',
      linkText: 'Mac',
      link: '#'
    },
    {
      text: 'Smart wristwatch',
      linkText: 'Apple Watch',
      link: '#'
    },
    {
      text: 'Wireless headphones',
      linkText: 'AirPods',
      link: '#'
    },
    {
      text: 'Original Apple',
      linkText: 'accessories',
      link: '#'
    }
  ];

  return (
    <section className={classes.container}>
      <div className={'py-4 ' + classes.overlap}>
        <h4 className="text-center fs-1 mb-3">Discover the full range of Apple products</h4>
        <ul className="list-unstyled fs-4 text-center m-0">
          {items.map((item, index) =>
            <li className={'mb-2 ' + classes.listItem} key={item.text}>
              {item.text}&nbsp;
              <LinkWithUnderlineOnHover to={item.link}>
                {item.linkText}&nbsp;
                <i className="bi-arrow-left-circle"/>
              </LinkWithUnderlineOnHover>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default AppleProducts;
