import React from 'react';
import {
  Menu,
  Container,
} from 'semantic-ui-react'

export const MenuNav2 = () => {
  return (
  <>
    <div>
        <Menu style = {{ border: `8px solid green`, display: `flex`, justifyContent: `flex-end`}}>
        <Menu.Menu style = {{ border: `8px solid red`}}>
            <Menu.Item header>MyFieldTripp</Menu.Item>
        </Menu.Menu>

        <Menu.Menu style = {{ border: `8px solid red`}}>
            <Menu.Item style = {{border: `5px solid blue`}}   content='aboutUs' />
            <Menu.Item content='jobs' />
            <Menu.Item style = {{border: `5px solid pink`, margin: `0` }}  content='locations' />
        </Menu.Menu>

        </Menu>
    </div>
  </>
  );
}