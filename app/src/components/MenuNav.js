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
          name='aboutUs'
        />
        <Menu.Item name='jobs' />
        <Menu.Item
          name='locations'
        />
      </Menu>
    </div>
  </>
  );
}

export default MenuNav;