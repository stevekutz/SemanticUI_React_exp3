import React from 'react';
import {
  Menu
} from 'semantic-ui-react'

function MenuNav() {
  return (
  <>
    <div>
    <Menu>
        <Menu.Item header>MyFieldTripp</Menu.Item>
        <Menu.Item
          content='aboutUs'
        />
        <Menu.Item content='jobs' />
        <Menu.Item
          content='locations'
        />
      </Menu>
    </div>
  </>
  );
}

export default MenuNav;