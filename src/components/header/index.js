import React, {Component} from "react";
import {
    NavLink
} from "react-router-dom";
import classNames from "../../helpers/customClassNames";
import Fade from "../global/Fade";

const MobileMenu = props => {
    const {
        toggleExpansion
    } = props;

    return (
        <nav className="mobile-header-nav">
            <ul 
                className="mobile-header-menu"
            >
                <li 
                    className="menu-item"
                    onClick={toggleExpansion}
                >
                    <NavLink 
                        to="/" 
                        exact className="header-link" activeClassName="selected"
                    >
                        Home
                    </NavLink>
                </li>
    
                <li 
                    className="menu-item"
                    onClick={toggleExpansion}
                >
                    <NavLink
                        to="/menu"
                        className="header-link" 
                        activeClassName="selected"
                    >
                        Menu
                    </NavLink>
                </li>

                <li 
                    className="menu-item"
                    onClick={toggleExpansion}
                >
                    <NavLink 
                        to="/about" className="header-link" activeClassName="selected"
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

const DesktopMenu = props => {
    return (
        <nav className="desktop-header-nav">
            <ul 
                id="headerMenu" 
                className="transitionExpand"
            >
                <li 
                    className="menuItems"
                >
                    <NavLink to="/" exact className="headerLink" activeClassName="selected">
                        <p>Home</p>
                    </NavLink>
                </li>
    
                <li 
                    className="menuItems"
                >
                    <NavLink className="headerLink" to="/menu" activeClassName="selected">
                        <p>
                            Menu
                        </p>
                    </NavLink>
                </li>

                <li 
                    className="menuItems"
                >
                    <NavLink to="/about" className="headerLink" activeClassName="selected">
                        <p>About</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleExpansion = this.toggleExpansion.bind(this);
        this.resizeHandler = this.resizeHandler.bind(this);

        this.state = {
            expanded: false
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeHandler, false);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeHandler, false);
    }

    resizeHandler() {
        this.setState({
            expanded: false
        });
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
    
                <button 
                    id="toggleMobileMenuButton"
                    onClick={this.toggleExpansion}
                >
                    <div className="hamburger-icon">
                        <div className="hamburger-icon-line"></div>
                        <div className="hamburger-icon-line"></div>
                        <div className="hamburger-icon-line"></div>
                    </div>
                </button>
    
                <Fade
                    show={expanded}
                >
                    <MobileMenu 
                        toggleExpansion={this.toggleExpansion}
                    />
                </Fade>

                <DesktopMenu />
            </header>
        );
    }
};

export default Header;