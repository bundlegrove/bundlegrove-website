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

          <p>Whether you're celebrating a special occasion or showing someone how much you appreciate them, BundleGrove will help you make the perfect gift. Whether it's a basket of desserts, a breakfast basket, or a movie night basket, we'll customize it to include what you want.</p>
        </header>

        <section>
          <FontAwesomeIcon 
            icon={['fas', 'recycle']}
          />
          Reuse our baskets and paper decorations
          <FontAwesomeIcon
            icon={['fas', 'gift']}
          />
          Show your appreciation
          <FontAwesomeIcon
            icon={['fas', 'coffee']}
          />
          Give a breakfast basket
          <FontAwesomeIcon
            icon={['fas', 'shopping-basket']}
          />
          Customize
        </section>
      </article>
    )
  }
}

export default Home;