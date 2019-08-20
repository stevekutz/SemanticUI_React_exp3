import React from 'react';
import {
  Menu
} from 'semantic-ui-react'

function MenuNav() {
  return (
  <>
    <div>
    <Menu style = {{display: `flex`, 
                    border: `1px solid pink`,
                    justifyContent: `space-evenly`
                }}>
        <Menu.Item header style = {{justifyContent: `space-between`}}>MyFieldTripp</Menu.Item>
            <Menu.Item style = {{border: `5px solid green`}}   content='aboutUs' />
            <Menu.Item content='jobs' />
            <Menu.Item style = {{border: `5px solid green`, margin: `0` }}  content='locations' />
      </Menu>
    </div>
  </>
  );
}

export default MenuNav;