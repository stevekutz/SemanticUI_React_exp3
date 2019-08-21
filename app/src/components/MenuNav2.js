import React from 'react';
import {
  Menu
} from 'semantic-ui-react'

export const MenuNav2 = () => {
  return (
  <>
    <div>
    <Menu style = {{display: `flex`, 
                    border: `1px solid pink`,
                    justifyContent: `space-evenly`
                }}>
        <Menu.Item header style = {{justifyContent: `space-apart`}}>MyFieldTripp</Menu.Item>
            <Menu.Item style = {{border: `5px solid blue`}}   content='aboutUs' />
            <Menu.Item content='jobs' />
            <Menu.Item style = {{border: `5px solid pink`, margin: `0` }}  content='locations' />
      </Menu>
    </div>
  </>
  );
}