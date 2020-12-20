import React, { Component } from 'react';
import menuCategories from './menuData';
import SecondaryMenu from '../global/SecondaryMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const MenuOption = props => {
    const {
        option
    } = props;

    const {
        colors,
        food_line_items,
        menu_option,
        price,
        description
    } = option;

    const foodLineItems = food_line_items.map((item, i) => {
        const {
            choices = []
        } = item || {};

        const foodItemCopy = choices.map((choice, i, arr) => {
            const next = arr[i + 1];

            return (
                <React.Fragment
                    key={i}
                >
                    <div 
                        className="food-item-text"
                    >
                        {choice}
                    </div>

                    {(next) &&
                        <strong>or</strong>
                    }
                </React.Fragment>
            );
        });

        return (
            <li 
                key={i}
                className="menu-option-food-item"
            >
                { foodItemCopy }
            </li>
        )
    });

    const colorStr = colors.join(",")

    const backgroundImage = "linear-gradient(90deg, " + colorStr + ")";

    return (
        <section 
            className="menu-option"
        >
            <header 
                className="option-header"
            >
                <h3 className="option-heading">
                    {menu_option}
                </h3>

                <div className="option-price">
                    {price}
                </div>

                <div
                    className="header-border"
                    style={
                        {
                            backgroundImage
                        }
                    }
                ></div>
            </header>

            <section className="menu-option-body">
                <p className="menu-option-description">{description}</p>

                <div className="menu-option-list-heading">Includes:</div>

                <ul className="menu-option-food-items">
                    { foodLineItems }
                </ul>
            </section>
        </section>
    );
};

const MenuCategory = props => {
    const {
        category,
        options,
        searchStr
    } = props;

    const MenuOptions = options
    .filter(option => {
        const {
            food_line_items = "",
            menu_option = "",
            price = ""
        } = option;

        const normalizedSearchStr = searchStr.toUpperCase();

        const normalizedFoodLineItems = food_line_items && 
        food_line_items
        .reduce((accum, curr, i, arr) => {
            const next = arr[i + 1];

            const choices = curr && curr.choices && curr.choices.join(" ");

            if (next) {
                return accum += " " + choices;
            }

            return accum += choices;
        }, "")
        .toUpperCase();

        const normalizedMenuOption = menu_option.toUpperCase();

        const normalizedPrice = price.toUpperCase();

        return (
            normalizedFoodLineItems.includes(normalizedSearchStr) 
            ||
            normalizedMenuOption.includes(normalizedSearchStr) 
            ||
            normalizedPrice.includes(normalizedSearchStr)
        );
    })
    .map((option, i) => {
        return (
            <MenuOption 
                key={i}
                option={option}
            />
        );
    });

    const hyphenize = (option) => {
      return option.replace(/\s+/g, '-').toLowerCase();
    }

    return (
        <section className="menu-categories">
            <section id={hyphenize(category)} className="menu-category">
                <h3 className="menu-category-heading">{ category }</h3>
            
                <section className="menu-options">
                    { MenuOptions }

                    {(MenuOptions && MenuOptions.length === 0) &&
                        <div className="no-menu-search-results">
                            No results. Try searching for another food, price, or basket name!
                        </div>
                    }
                </section>
            </section>
        </section>
    );
};

class Menu extends Component {
    constructor(props) {
        super(props);

        this.searchOnChangeHandle = this.searchOnChangeHandle.bind(this);
        this.onSearchSubmitHandler = this.onSearchSubmitHandler.bind(this);

        this.state = {
            searchStr: ""
        };
    }

    searchOnChangeHandle(e) {
        const {
            value: searchStr
        } = e.target;

        this.setState({
            searchStr
        });
    }

    onSearchSubmitHandler(e) {
        e.preventDefault();

        const searchInput = document.getElementById("searchInput");

        if (searchInput) {
            searchInput.blur();
        }
    }

    render() {
        const {
            searchStr
        } = this.state;

        const MenuCategories = menuCategories.map((menuCategory, i) => (
            <MenuCategory 
                key={i}
                options={menuCategory.menu_options}
                category={menuCategory.category}
                searchStr={searchStr}
            />
        ));

        return (
            <article className="menu-page">
                <section className="menu-header">
                    <h2 className="menu-heading">Gifts</h2>

                    <section className="menu-page-details">
                        <p className="gift-description">
                            All our breakfasts includes a tray, two balloons, and a card. Additional balloons or flower arrangements are offered for an additional fee.
                        </p>

                        <section className="delivery-information">
                            <p><strong>Free</strong> delivery is offered for addresses within 25 miles of <a
                                href="https://www.google.com/maps/place/Reston+Town+Center/@38.9589138,-77.3636571,17z/data=!3m1!4b1!4m5!3m4!1s0x89b6481ec20e5467:0xb1e039cd5342749!8m2!3d38.9589096!4d-77.3614631"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Reston Town Center</a>.</p>
                        </section>
                    </section>
                </section>

                <section className="menu">
                    <div className="menu-search-container">
                        <form 
                            className="menu-search"
                            onSubmit={this.onSearchSubmitHandler}
                        >
                            <div className="menu-search-items">
                                <div className="search-icon-container">
                                    <FontAwesomeIcon 
                                        icon={faSearch}
                                    />
                                </div>

                                <input 
                                    id="searchInput"
                                    className="menu-search-input"
                                    placeholder="Search for food or prices"
                                    value={searchStr}
                                    onChange={this.searchOnChangeHandle}
                                />
                            </div>
                        </form>
                    </div>

                    <SecondaryMenu 
                      options={[
                        "Surprise Breakfasts",
                        "Baskets"
                      ]}
                    />

                    { MenuCategories }
                </section>
            </article>
        )
    }
}

export default Menu;