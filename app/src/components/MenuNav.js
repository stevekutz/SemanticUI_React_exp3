import React from 'react';
import {
  Menu, 
  Segment,
} from 'semantic-ui-react'

function MenuNav() {
  return (
  <>
    <div>
    <Menu style = {{display: `flex`, 
                    border: `5px solid black`,
                    justifyContent: `space-between`
                }}>
        <Menu.Item header >MyFieldTripp</Menu.Item>
        <Segment floated = 'right' >
            <Menu.Item style = {{border: `5px solid green`}}   content='aboutUs' />
            <Menu.Item content='jobs' />
            <Menu.Item style = {{border: `5px solid green`, margin: `0` }}  content='locations' />
        
        
        </Segment>    
        
        </Menu>
    </div>
  </>
  );
}

export default MenuNav;