import React, { Component } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import basket1 from '../../assets/baskets/basket-1.jpg';
import basket2 from '../../assets/baskets/basket-2.jpg';
import basket3 from '../../assets/baskets/basket-3.jpg';
import Button from '../button';
import {
  NavLink
} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <article className="home-page">
        <header className="home-page-header">
          <h1>A gift bundle for every occasion</h1>

          <p>Whether you're celebrating a special event, milestone, or showing someone how much you appreciate them, BundleGrove will help you make the perfect gift.</p>

          <div className="cta-wrapper">
            <Button 
              text="Build a Bundle"
            />
          </div>
        </header>

        <section>
          <ul className="product-summary-list">
            <li
              className="premade-item"
            >    
              <section className="product-summary-copy">
                <header>
                  <img 
                    src={basket1}
                  />
                </header>

                <h2>
                  {/* <FontAwesomeIcon
                    icon={['fas', 'gift']}
                  /> */}
                  Premade bundles
                </h2>

                <p>Look through our premade bundles to decide which one is right for you. Add a personalized note at no additional charge.</p>

                <NavLink 
                  to={"/"}
                >
                  View Premade Bundles
                </NavLink>
              </section>
            </li>

            <li
              className="customizable-item"
            >
              <section className="product-summary-copy">
                <header>
                  <img
                    src={basket2}
                  />
                </header>

                <h2>
                  {/* <FontAwesomeIcon
                    icon={['fas', 'shopping-basket']}
                  /> */}
                  Customize your own bundle
                </h2>

                <p>Build your perfect bundle by selecting what you want.</p>
              </section>
            </li>

            <li
              className="green-item"
            >
              <header>
                <img
                  src={basket3}
                />
              </header>

              <section className="product-summary-copy">
                <h2>
                  {/* <FontAwesomeIcon
                    icon={['fas', 'recycle']}
                  /> */}
                  Reuse and recycle bundle materials
                </h2>
                <p>We encourage everyone to either reuse or recycle our bundle boxes and decorations!</p>
              </section>
            </li>
          </ul>
        </section>
      </article>
    )
  }
}

export default Home;