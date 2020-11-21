import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <article className="menu-page">
                <p className="menu-description">
                    All our breakfasts includes a tray, two balloons, and a card. Balloons or a flower arrangement are offered for an additional fee.
                </p>

                <section>
                    <p><strong>FREE DELIVERY</strong></p>

                    <p className="p-small"><strong>*within 25 miles of Reston Town Center</strong></p>
                </section>

                <section>
                    <ul className="menu-categories">
                        <li>Breakfasts</li>
                    </ul>

                    <section className="menu-options">
                        <section className="menu-option">
                            <h3 className="option-heading">Birthday Surprise</h3>

                            <ul className="menu-option-food-items">
                                <li className="menu-option-food-item">
                                    Choice of
                                    <ul className="secondary-choices">
                                        <li className="secondary-choice">scrambled eggs with bacon</li>
                                        <li><strong>or</strong></li>
                                        <li className="secondary-choice">ham and cheese sandwich</li>
                                    </ul>
                                </li>
                                <li className="menu-option-food-item">
                                    Starbucks iced coffee
                                </li>

                                <li className="menu-option-food-item">
                                    Pancakes with maple syrup
                                </li>
                            </ul>
                        </section>

                        <section className="menu-option">
                            <h3 className="option-heading">Morning Surprise Special</h3>

                            <ul>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>scrambled eggs with bacon</li>
                                        <strong>or</strong>
                                        <li>ham and cheese sandwich</li>
                                    </ul>
                                </li>
                                <li>
                                    Starbucks Iced Coffee
                                </li>
                                <li>
                                    Pancakes with Maple Syrup
                                </li>
                                <li>
                                    Chocolates
                                </li>
                            </ul>
                        </section>

                        <section className="menu-option">
                            <h3 className="option-heading">American Breakfast</h3>

                            <ul>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>scrambled eggs with bacon</li>
                                        <strong>or</strong>
                                        <li>ham and cheese sandwich</li>
                                    </ul>
                                </li>
                                <li>Toast</li>
                                <li>
                                    Starbucks iced coffee
                                </li>
                                <li>
                                    Orange juice
                                </li>
                                <li>
                                    Pancakes with Maple Syrup
                                </li>
                                <li>
                                    Strawberries
                                </li>
                                <li>
                                    Yogurt with granola and strawberries
                                </li>
                                <li>
                                    Chocolates
                                </li>
                            </ul>
                        </section>

                        <section className="menu-option">
                            <h3 className="option-heading">French Breakfast</h3>

                            <ul>
                                <li>
                                    Ham and cheese croissants
                                </li>
                                <li>
                                    Starbucks Iced Coffee
                                </li>
                                <li>
                                    Orange Juice
                                </li>
                                <li>
                                    Pancakes with Maple Syrup
                                </li>
                                <li>
                                    Strawberries
                                </li>
                                <li>
                                    Yogurt with granola and strawberries
                                </li>
                                <li>
                                    Chocolates
                                </li>
                            </ul>
                        </section>

                        <section className="menu-option">
                            <h3 className="option-heading">Colombian Breakfast</h3>

                            <ul>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>cheese-stuffed arepas</li>
                                        <strong>or</strong>
                                        <li>plain arepas</li>
                                    </ul>
                                </li>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>sunny-side-up eggs</li>
                                        <strong>or</strong>
                                        <li>pericos</li>
                                    </ul>
                                </li>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>sausage</li>
                                        <strong>or</strong>
                                        <li>fried pork belly</li>
                                    </ul>
                                </li>
                                <li>
                                    Choice of
                                    <ul>
                                        <li>Colombian coffee</li>
                                        <strong>or</strong>
                                        <li>oatmeal drink</li>
                                    </ul>
                                </li>
                                <li>
                                    Orange juice
                                </li>
                                <li>
                                    Pancakes with Maple Syrup
                                </li>
                                <li>
                                    Fresh fruits
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </article>
        )
    }
}

export default Menu;