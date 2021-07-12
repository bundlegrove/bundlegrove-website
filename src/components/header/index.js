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
                        to="/gifts"
                        className="header-link" 
                        activeClassName="selected"
                    >
                        Gifts
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
                className="desktop-header-menu"
            >
                <li 
                    className="menu-item"
                >
                    <NavLink to="/" exact className="header-link" activeClassName="selected">
                        Home
                    </NavLink>
                </li>
    
                <li 
                    className="menu-item"
                >
                    <NavLink className="header-link" to="/gifts" activeClassName="selected">
                        Gifts
                    </NavLink>
                </li>

                <li 
                    className="menu-item"
                >
                    <NavLink to="/about" className="header-link" activeClassName="selected">
                        About
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
            expanded: false,
            previouslyExpanded: false
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

            this.setState({
                expanded: true,
                previouslyExpanded: false
            });
        }
        else {
            body.classList.remove("mobile-menu-open");

            this.setState({
                expanded: false,
                previouslyExpanded: true
            });
        }
    }

    render() {
        const {
            expanded,
            previouslyExpanded
        } = this.state;

        const headerClasses = classNames([
            "bg-header",
            {
                "expanded": expanded,
                "previously-expanded": previouslyExpanded
            }
        ]);

        return (
            <header className={headerClasses}>
                <section className="bg-header-container">
                    <NavLink 
                        to="/"
                        className="bg-name-and-logo"
                    >
                        <figure 
                            className="bg-logo"
                        ></figure>
    
                        <h2>BundleGrove</h2>
                    </NavLink>
        
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
                </section>
            </header>
        );
    }
};

export default Header;