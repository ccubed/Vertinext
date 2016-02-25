import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
        <ul class="left">
          <MenuItem route="app" text="Home" />
          <MenuItem route="gitrepos" text="Github Repos" />
          <MenuItem route="hosting" text="Hosting" />
          <MenuItem route="blog" text="Blog" />
        </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Menu;
