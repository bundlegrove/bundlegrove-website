import React, { Component } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <article className="home-page">
        <header>
          <h1>Build the perfect gift</h1>

          <p>Whether you're celebrating a special occasion or showing someone how much you appreciate them, BundleGrove will help you make the perfect gift.</p>
        </header>

        <section>
          <ul className="product-summary-list">
            <li
              className="premade-item"
            >    
              <section className="product-summary-copy">
                <h2><FontAwesomeIcon
                  icon={['fas', 'gift']}
                /> Premade bundles</h2>

                <p>Gift one of our premade bundles with a personalized note!</p>
              </section>
            </li>

            <li
              className="customizable-item"
            >
              <section className="product-summary-copy">
                <h2><FontAwesomeIcon
                  icon={['fas', 'shopping-basket']}
                /> Customize your own bundle</h2>

                <p>Build your perfect bundle by selecting what you want.</p>
              </section>
            </li>

            <li
              className="green-item"
            >
              <section className="product-summary-copy">
                <h2><FontAwesomeIcon
                  icon={['fas', 'recycle']}
                /> Reuse and recycle bundle materials</h2>
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