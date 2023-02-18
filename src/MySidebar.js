import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from "react";

const MySidebar = ({title, children}) => (
    <Sidebar>
        <Menu>
            <SubMenu label="Lessons">
                <MenuItem> Hello world! </MenuItem>
                <MenuItem> 1+1 </MenuItem>
            </SubMenu>
            <MenuItem> About </MenuItem>
            <MenuItem> Twitter </MenuItem>
        </Menu>
    </Sidebar>
);

export {MySidebar};
