import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Card = (props) => {
  const {
    copy,
    links = [],
    image,
    header
  } = props;

  return (
    <section className="card">
      <header>
        <img
          src={image}
          alt="Basket"
        />
      </header>

      <div className="copy">
        <h2>
          {header}
        </h2>

        <p>{copy}</p>

        {links.map(({href, copy}) => (
          <NavLink
            to={href}
            key={href + copy}
          >
            {copy}

            <FontAwesomeIcon
              icon={['fas', 'angle-right']}
            />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Card;