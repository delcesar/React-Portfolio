import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  listener = null;
  state = {
    nav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    // if (window.pageYOffset > 140) {
    //   if (!this.state.nav) {
    //     this.setState({ nav: true });
    //   }
    // } else {
    //   if (this.state.nav) {
    //     this.setState({ nav: false });
    //   }
    // }
    console.log("ola k ase");
  };

  render() {
    return (
      <div className="navigation">
        <nav className="navbar">
          <Link as={Link} to="/home">
            Home
          </Link>
          <Link as={Link} to="/work">
            Work
          </Link>
          <Link as={Link} to="/about">
            About
          </Link>
          <Link as={Link} to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navigation;
