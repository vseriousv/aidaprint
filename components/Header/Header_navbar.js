import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
import Link from 'next/link';

import { withRouter }   from 'next/router'

import Navbar_Sections from './Navbar_Sections'

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

function Header_navbar () {

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
    var statusActive = document.getElementsByClassName('statusActive')
      for (var i=1; i< statusActive.length+1;i++){
        var elementMegaMenu = document.getElementById("navbarItemID"+i)
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
    <div id="fixedMenuBar" className="container-fluid ">
      <Row className="navbar-color-grey d-flex justify-content-between">
        <ul className="nav d-none d-md-flex">
          {
            componentNavbar[0].menu_items.map((item, index)=>{
              if(item.link == "#"){
                return(
                  <li key={item.id} className="nav-item">
                    <Link href={item.link}>
                      <a
                      id={"navbarItemID"+item.id}
                      className="nav-link statusActive"
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
                      id={"navbarItemID"+item.id}
                      className="nav-link statusActive"
                      data-megamenu={"megaMenu"+item.id}
                      >{item.name}</a>
                    </Link>
                  </li>
                )
              }
            })
          }
        </ul>
      </Row>
      <Navbar_Sections megaMenu={megaMenu} handleClickWindowClose={handleClickWindowClose}/>
    </div>
  ) 
}

export default withRouter(Header_navbar);