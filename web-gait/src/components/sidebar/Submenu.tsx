import React, {FC} from 'react'
import { SidebarItem } from '../../model/sidebar/Sidebaritem';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react';

type SidebarLinkProps = {
    item: SidebarItem;
}

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: right;
    height: 3.75rem;
    font-size: 1.125rem;
    /* margin-left: 2rem; */
    text-decoration: none;
    padding: 1.2rem;
    color: #afaeae;
    margin-left: 12px;
    /* margin-top: 1rem; */



    &:hover{
        
        background-color: #ffff;
        border-bottom-left-radius: 20px;
        border-top-left-radius:20px;
        font-weight: bold;
    }
`

const SidebarLabel = styled.span`
    /* margin-top: 10rem; */
    margin-left: 0rem;
    margin-top: 10rem;
    
    `

const Submenu : FC<SidebarLinkProps> = ({item}) => {

    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav);

    return ( 
        
        <>
        
            <SidebarLink to={item.path} onClick={showSubnav}>

                <div>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                {/* <div>{item?.subnav && subnav? item?.iconOpened : item?.iconClosed}</div> */}
            </SidebarLink>
            {/* {subnav && item?.subnav?.map((subnavItem, index) =>{
                return (
                <DropdownLink to={subnavItem.path} key={index} >
                    {subnavItem.icon}
                    <SidebarLabel>{subnavItem.title}</SidebarLabel>
                </DropdownLink>
                );
            })} */}
        </>
    )
}

export default Submenu;