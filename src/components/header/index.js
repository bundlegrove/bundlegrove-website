import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import classNames from '../../helpers/customClassNames';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleExpansion = this.toggleExpansion.bind(this);

        this.state = {
            expanded: false
        };
    }

    toggleExpansion() {
        const {
            expanded
        } = this.state;

        const body = document.getElementsByTagName("body")[0];

        if (!expanded) {
            body.classList.add("mobile-menu-open");
        }
        else {
            body.classList.remove("mobile-menu-open");
        }

        this.setState({
            expanded: !expanded
        });
    }

    render() {
        const {
            expanded
        } = this.state;

        const headerClasses = classNames([
            "bg-header",
            {
                "expanded": expanded
            }
        ]);

        return (
            <header className={headerClasses}>
                <section className="title">
                    <div className="logo-and-name-wrapper">
                        <figure 
                            className="morning-surprise-logo"
                        ></figure>
    
                        <h2>BundleGrove</h2>
                    </div>
                </section>
    
                <div id="buttonWrapper" className="flexRight">
                    <button 
                        id="mobileButton"
                        onClick={this.toggleExpansion}
                    >
                        <span className="flexBottom">
                            <span id="hamburgerWrapper">
                                <span className="hamburgerIcon"></span>
                                <span className="hamburgerIcon"></span>
                                <span className="hamburgerIcon"></span>
                            </span>
                        </span>
                    </button>
                </div>
    
                <nav className="header-nav">
                    <ul 
                        id="headerMenu" 
                        className="transitionExpand"
                    >
                        <li 
                            className="menuItems"
                            onClick={this.toggleExpansion}
                        >
                            <NavLink to="/" exact className="textAlignCenter plainLink headerLink" activeClassName="selected">
                                <p>Home</p>
                            </NavLink>
                        </li>
            
                        <li 
                            className="menuItems"
                            onClick={this.toggleExpansion}
                        >
                            <NavLink className="plainLink headerLink" to="/about/" activeClassName="selected">
                                <p>
                                    About
                                </p>
                            </NavLink>
                        </li>
    
                        <li 
                            className="menuItems"
                            onClick={this.toggleExpansion}
                        >
                            <NavLink to="/blog/" className="plainLink headerLink" activeClassName="selected">
                                <p>Blog</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
};

export default Header;