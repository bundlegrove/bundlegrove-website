import React, {Component} from "react";
import {
  withRouter
} from "react-router-dom";
import classNames from "../../helpers/customClassNames";

class SecondaryMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
          selected: null,
          map: null
        };
    }

    hyphenize(option) {
      return option.replace(/\s+/g, '-').toLowerCase();
    }

    scroll() {

    }

    componentDidMount() {
      const {
        location,
        options
      } = this.props;

      const map = {};

      options.forEach(option => map[this.hyphenize(option)] = this.hyphenize(option));

      const {
        hash
      } = location;

      const i = options.findIndex(option => this.hyphenize(option) === hash.substr(1));

      this.setState({
        map,
        selected: (i > -1) ? i : 0
      });
    }

    render() {
      const {
        history,
        options
      } = this.props;

      const {
        selected
      } = this.state;

      return (
          <nav className="secondary-menu">
              <ul>
                {options.map((option, i) => (
                  <li 
                    key={i}
                    className={classNames([
                      "option",
                      {
                        "selected": i === selected
                      }
                    ])}
                    onClick={() => {
                      const name = this.hyphenize(option);

                      const id = document.getElementById(name);

                      if (id) {
                        history.push("#" + name);

                        id.scrollIntoView();
                      }
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
          </nav>
      );
    }
};

export default withRouter(SecondaryMenu);