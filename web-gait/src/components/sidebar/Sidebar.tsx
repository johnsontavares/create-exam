import React, {FC, useState} from 'react'
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import SidebarLink from './Submenu';
import Submenu from './Submenu';

//retirar
const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  background-color: #dcdcdc;
`;

const SidebarNav = styled.div<{sidebar: boolean}>` // RETIRAR
  width: 250px;
  height: 100vh;
  top:0;
  background-color: #dcdcdc;
  position: fixed;
  left: ${ ({sidebar}) => (sidebar ? '0': '-100%')}  ;

`;

// const NavIcon = styled(Link)`
//   display: flex;
//   justify-content: flex-start;
//   align-items:center;
//   height: 5rem;
//   font-size: 2rem;
//   margin-left: 2rem;
// `

const SidebarWrap = styled.div`
  margin-top: 6rem;
`

const  Sidebar: FC = () => {

  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(true);
  return (
    <IconContext.Provider value={{ color: "#fff"}}>
      

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
              {SidebarData.map((item, index) => {
              return < Submenu item={item} key={index} />
            })}
        </SidebarWrap>
       </SidebarNav>  
    </IconContext.Provider>


  );
}

export default Sidebar;