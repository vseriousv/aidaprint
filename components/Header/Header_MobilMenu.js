import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
import Link from 'next/link';

import { withRouter }   from 'next/router'

export const COMPONENT_NAVBAR_QUERY = gql`
  query COMPONENT_NAVBAR_QUERY {
    componentNavbar{
      id
      name
      menu_items{
        id
        name
        child
        link
      }
    }
  }
`

export const SECTIONS_PAGES_QUERY = gql`
query SECTIONS_PAGES_QUERY {
	sections{
    id
    name
    viewMagaMenu
    pages{
      id
      name
      text
      url
    }
  }
}
`

function Navbar_Sections (props) {
 
    const showPagesMenuSection = (e) => {
        var eElement = document.getElementById('view'+e.target.id)
        eElement.classList.toggle('d-none')
    }

    const { loading, error, data, fetchMore, networkStatus } = useQuery(
      SECTIONS_PAGES_QUERY,
      {
        notifyOnNetworkStatusChange: true
      }
    )
    if (error) return <div>ERROR</div>
    if (loading) return <div>Loading</div>
  
    const { sections } = data  
      
    return (
        <ul className="nav flex-column ml-4 mr-4 mt-1">
            {sections.map((section, index)=>{
                if(section.viewMagaMenu == true){
                    return (
                        <li className="clickPointer"   key={"section"+section.id}>
                            <span id={"sectionID_"+index} onClick={(e) => showPagesMenuSection(e)}>{section.name}</span>
                            <ul id={"viewsectionID_"+index} className={"viewsectionID nav flex-column ml-4 mr-4 mt-1 d-none"}>
                            {section.pages.map((page, id) => {
                                return (
                                <li key={"page"+page.id}>
                                    <span><Link prefetch href={page.url}>
                                        <a>
                                            {page.name}
                                        </a>
                                    </Link></span>
                                </li>
                                );
                            })}
                            </ul>
                        </li>
                    );
                }
            })}
        </ul>  
    );    
}

function Header_navbar () {

    const handleClick = (e) => {
        e.preventDefault();
        var eElement = document.getElementById(e.target.id)
        var dataValue = eElement.getAttribute("data-value")
        var windowCloseClickMobilMenu = document.getElementById(dataValue)
        windowCloseClickMobilMenu.classList.toggle('transformMobilMenu')
    }

  const [megaMenu, setMegaMenu] = useState('');

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    COMPONENT_NAVBAR_QUERY,
    {
      notifyOnNetworkStatusChange: true
    }
  )

  if (error) return <div>ERROR</div>
  if (loading) return <div>Loading</div>

  const { componentNavbar } = data
  return (
    <div>
        <a href='#' onClick={(e) => handleClick(e)}>
            <img id="MobilMenuLink" data-value="MobilMenu" className="fluid gamburgerMenu" src="/static/images/menuIcon.png" />
        </a>
        <div id="MobilMenu" className="MobilMenu transformMobilMenu">
            <div className="MobilMenuButtonClose float-right m-3">
                <a href='#' id="MobilMenuClose" data-value="MobilMenu" onClick={(e) => handleClick(e)}>
                    <img id="MobilMenuCloseLink" data-value="MobilMenu" className="fluid gamburgerMenu" src="/static/images/closeMenu.png" />
                </a>
            </div>
            <div className="sectionsAndPages">
                <ul className="nav flex-column m-4">
                    {componentNavbar[0].menu_items.map((item, index)=>{
                        if(item.link == "#"){
                            return (
                                <div key={"item_mobil"+item.id}>
                                <a id="ourProductionIDLink"
                                    data-value="sectionPagesMobilMenu"
                                    className="nav-link m-0 p-0"
                                    href="#"
                                    onClick={(e) =>handleClick(e)}>
                                    <li id="ourProductionIDLinkLi" data-value="sectionPagesMobilMenu" className="nav-item">{item.name}</li>
                                </a>
                                <div id="sectionPagesMobilMenu" className="sectionPagesMobilMenu transformMobilMenu">
                                    <div className="MobilMenuButtonClose w-100 p-3">
                                        <a id="ourProductionIDCloseLink"
                                            data-value="sectionPagesMobilMenu"
                                            href='#'
                                            className="d-flex justify-content-end"
                                            onClick={(e) =>handleClick(e)}>
                                            <img id="ourProductionIDCloseLink" data-value="sectionPagesMobilMenu" className="fluid gamburgerMenu" src="/static/images/backPointer.png" />
                                        </a>
                                        <Navbar_Sections />
                                    </div>
                                </div>
                                </div>
                            );
                        }else{
                            return (
                                <Link key={"item_mobil"+item.id} prefetch href={item.link}>
                                <a className="nav-link m-0 p-0">
                                    <li className="nav-item">{item.name}</li>
                                </a>
                                </Link>
                            );
                        }
                    })}
                </ul>                        
            </div>
        </div>
    </div>
  ) 
}

export default withRouter(Header_navbar);