import React from 'react';
import {
  Menu
} from 'semantic-ui-react'

const MenuNav3 = () => {
  return (
  <>
  <div>
    <Menu>
        <Menu.Item header style = {{justifyContent: `space-apart`}}>MyFieldTripp</Menu.Item>
        <Menu.Menu position = 'right'>
            <Menu.Item style = {{border: `5px solid rebeccapurple`}}   content='aboutUs' />
            <Menu.Item content='jobs' />
            <Menu.Item style = {{border: `5px solid deeppink`, margin: `0` }}  content='locations' />
        </Menu.Menu>  
    </Menu>
  </div>
  </>
  );
}

export default MenuNav3;