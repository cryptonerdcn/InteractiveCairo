import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from "react";
import { Link } from 'react-router-dom';

const MySidebar = ({title, children}) => (
    <Sidebar>
        <Menu>
            <SubMenu label="Lessons">
                <MenuItem component={<Link to="/0" />}> Hello world! </MenuItem>
                <MenuItem component={<Link to="/1" />}> 1+1 </MenuItem>
            </SubMenu>
            <MenuItem> About </MenuItem>
            <MenuItem> Twitter </MenuItem>
        </Menu>
    </Sidebar>
);

export {MySidebar};
