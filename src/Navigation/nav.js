import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../index.css';

function NavItem(props){
    return (
      <a href={props.value} className="custom-nav-item">
        {props.value}
      </a>
    );
  }
  
  function Title(props){
    return(
      <a id='page-title'>
        {props.value}
      </a>
    );
  }
  function Dropdown(props){
    return(
      <li className="dropdown">
        <a className="dropbtn">Popular Actors</a>
        <div className="dropdown-content">
        </div>
      </li>
    )
  }
  
  class Navbar extends React.Component{
    renderNavItem(str) {
      return (
        <NavItem
          value={str}
        />
      );
    }
    renderTitle(str) {
      return (
        <Title
          value={str}
        />
      );
    }
    renderDropDown(str){
      return(
        <Dropdown value="str"/>
      )
    }
    render(){
      return(
        <nav data-testid="nav-1" id='navbar'>
          <ul>
            <li>{this.renderNavItem('Home')}</li>
            <li>{this.renderNavItem('Actors')}</li>
            <li>{this.renderNavItem('Films')}</li>
            {this.renderDropDown('Apps')}
            <li>{this.renderTitle('IMDB Knockoff')}</li>
          </ul>
        </nav>
      );
    }
  }

  export default Navbar;