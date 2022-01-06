import React, { Component } from 'react';
import './index.scss';
import basket1 from '../../assets/baskets/basket-1.jpg';
import basket2 from '../../assets/baskets/basket-2.jpg';
import basket3 from '../../assets/baskets/basket-3.jpg';
import Button from '../button';
import Card from '../card';

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
          <h1>A gift bundle for any occasion</h1>

          <p>Whether you're celebrating a special event, milestone, or showing someone how much you appreciate them, BundleGrove will help you make the perfect gift.</p>

          <div className="cta-wrapper">
            <Button 
              text="Build a Bundle"
            />

            <Button
              text="View Premade Bundles"
            />
          </div>
        </header>

        <section>
          <ul className="product-summary-list">
            <li
              className="premade-item"
            >    
              <Card
                image={basket1}
                header={"Premade bundles"}
                copy={"Look through our premade bundles to decide which one is right for you. Add a personalized note at no additional charge."}
                links={[{ href: "/", copy: "View Premade Bundles" }]}
              />
            </li>

            <li
              className="customizable-item"
            >
              <Card 
                image={basket2}
                header={"Customize your own bundle"}
                copy={"Build your perfect bundle by mix and matching different selections."}
                links={[{href: "/", copy: "Build Your Own Bundle"}]}
              />
            </li>

            <li
              className="green-item"
            >
              <Card
                image={basket3}
                header={"Reuse and recycle bundle materials"}
                copy={"We encourage everyone to either reuse or recycle our bundle boxes and decorations!"}
                // links={[{ href: "/", copy: "Build Your Own Bundle" }]}
              />
            </li>
          </ul>
        </section>
      </article>
    )
  }
}

export default Home;