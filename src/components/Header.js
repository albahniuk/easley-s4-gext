import React, {Component} from "react";
import logoHeader from '../images/logo__gext_header.png';
import {Link} from 'react-router-dom';
import btn_google from '../images/btn_google.svg';


class Header extends Component {
  render() {
    return (
      <header className="header-container fluid-container row">
        <div className="header__logo col-auto mr-auto">
          <Link to="/"><img src={logoHeader} alt="Gext logo"></img></Link>
        </div>
        <button type="button" onClick={this.props.handleSignoutClick}><img src={btn_google} alt="google logo"/>Sign Out</button>
        <div className="header__link col-auto"><a>How it works</a></div>
      </header>
    );
  }
}

export default Header;