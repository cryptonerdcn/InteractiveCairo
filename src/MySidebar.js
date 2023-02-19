import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from "react";
import { Link } from 'react-router-dom';

const MySidebar = ({title, children}) => (
    <Sidebar className={"sidebar"}>
        <Menu>
            <SubMenu label="Lessons">
                <MenuItem component={<Link to="lesson/0" />}> Hello world! </MenuItem>
                <MenuItem component={<Link to="lesson/1" />}> 1+1 </MenuItem>
            </SubMenu>
            <MenuItem> About </MenuItem>
            <MenuItem component={<Link to={{ pathname: "https://twitter.com/cryptonerdcn" }} target="_blank" />}> Twitter </MenuItem>
        </Menu>
    </Sidebar>
);

export {MySidebar};
