import React, {useState} from "react";
import styled from "styled-components";   //This is the Styling used for this project
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarLinks} from './SidebarLinks';
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
/*Header Bar*/

/*Header*/
const Nav = styled.div`
  background: #40485f;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

/*Header Menu Icon*/
const NavIcon = styled(Link)`
  margin-left: 85%;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

/*Menu List*/
const SidebarNav = styled.nav`
  font-family: 'DM Serif Text', serif;
  background: #40485f;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  /*rigth:..... menuList slides from the right. verse-versa for lef:...*/
  right: ${ ({ifSidebar})=> (ifSidebar ? '0' : '-100%')};
  transition: ease-in-out 650ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function SideBar() {
    const [ifSidebar, setSidebar] = useState(false)

    const showSidebar =()=> setSidebar(!ifSidebar)

  return (
    <>
    <IconContext.Provider value={{color: '#ffe834'}}>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>
      </Nav>
      
      <SidebarNav ifSidebar={ifSidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
          </NavIcon>
          {SidebarLinks.map( (item, index)=> {
              return <SubMenu item={item} key={index} />
          })}
        </SidebarWrap>
      </SidebarNav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
