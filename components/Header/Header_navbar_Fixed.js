import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Row }  from 'react-bootstrap'
import Link from 'next/link';

import { withRouter }   from 'next/router'

import Navbar_Sections_Fixed from './Navbar_Sections_Fixed'
import Header_MobilMenu from './Header_MobilMenu'

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

function Header_navbar (props) {

    // const fixed_Scroll = () => {
    
  //   // var fixedMenuBar = document.getElementById("fixedMenuBar");
  //   // var MegaMenu4 = document.getElementById("megaMenu4");
  //   // var MegaMenu1 = document.getElementById("megaMenu1");
  //   // if(props.scroll_Y <= "80"){
  //   //     fixedMenuBar.classList.remove("fixed-top");
  //   //     MegaMenu1.classList.add("MegaMenu-top-one");
  //   //     MegaMenu1.classList.remove("MegaMenu-top-two");
  //   //     MegaMenu4.classList.add("MegaMenu-top-one");
  //   //     MegaMenu4.classList.remove("MegaMenu-top-two");
  //   // }else{
  //   //     fixedMenuBar.classList.add("fixed-top");
  //   //     MegaMenu1.classList.remove("MegaMenu-top-one");
  //   //     MegaMenu1.classList.add("MegaMenu-top-two");
  //   //     MegaMenu4.classList.remove("MegaMenu-top-one");
  //   //     MegaMenu4.classList.add("MegaMenu-top-two");
  //   // }
  // }

  const handleClick = (event) => {
    event.preventDefault()
    let idElement = document.getElementById(event.target.id);
    let dataMegaMenu = idElement.getAttribute('data-megamenu');
    if(dataMegaMenu == megaMenu){
      setMegaMenu('');
    }else{
      setMegaMenu(dataMegaMenu);
    }
    idElement.classList.add("active")
  }

  const handleClickWindowClose = () => {
    var statusActive = document.getElementsByClassName('statusActive2')
      for (var i=1; i< statusActive.length+1;i++){
        var elementMegaMenu = document.getElementById("navbar2ItemID"+i)
        elementMegaMenu.classList.remove("active")
      } 
    setMegaMenu('');
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
    <div id="fixedMenuBar" className="container-fluid fixed-top">
      <Row className="navbar-color-grey d-flex justify-content-between">
        <ul className="nav d-none d-md-flex">
          {
            componentNavbar[0].menu_items.map((item, index)=>{
              if(item.link == "#"){
                return(
                  <li key={item.id} className="nav-item">
                    <Link href={item.link}>
                      <a
                      id={"navbar2ItemID"+item.id}
                      className="nav-link statusActive2"
                      data-megamenu={"megaMenu"+item.id}
                      onClick={handleClick}>{item.name}</a>
                    </Link>
                  </li>
                  )
              }else {
                return(
                  <li key={item.id} className="nav-item">
                    <Link href={item.link}>
                      <a
                      id={"navbar2ItemID"+item.id}
                      className="nav-link statusActive2"
                      data-megamenu={"megaMenu"+item.id}
                      >{item.name}</a>
                    </Link>
                  </li>
                )
              }
            })
          }
        </ul>
        <div className="col-6 d-md-none my-auto d-flex justify-content-start">
          <Header_MobilMenu />
        </div>
        {/* <div className="col-6 d-md-none my-auto d-flex justify-content-end">Search</div> */}
      </Row>
      <Navbar_Sections_Fixed megaMenu={megaMenu} handleClickWindowClose={handleClickWindowClose}/>
    </div>
  ) 
}

export default withRouter(Header_navbar);