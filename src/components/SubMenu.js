import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";  //This is the Styling used for this project

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 5px solid #632ce4;
    cursor: pointer;
    font-size: 24px;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #414757;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px;
&:hover {
    background: #632ce4;
    cursor: pointer;
}
`

function SubMenu({ item }) {
  const [ifSubnav, setSubnav] = useState(false);

  const showSubNave = () => setSubnav(!ifSubnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNave}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && ifSubnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {ifSubnav && item.subNav.map( (item, index) => {
          return(
              <DropdownLink to={item.path} key={index}>
                  <SidebarLabel>
                      {item.title}
                  </SidebarLabel>
              </DropdownLink>
          )
      } )}
    </>
  );
}

export default SubMenu;
