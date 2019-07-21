import React, {Component}       from 'react'
import { Query }                from 'react-apollo'
import gql                      from 'graphql-tag'

import Link                     from 'next/link'

export const componentNavbarQuery = gql`
query navbar {
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

export const sectionsPagesQuery = gql`
query sections {
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
export default class Header_MobilMenu extends Component {

    handleClick(e){
        e.preventDefault();
        var eElement = document.getElementById(e.target.id)
        var dataValue = eElement.getAttribute("data-value")
        var windowCloseClickMobilMenu = document.getElementById(dataValue)
        windowCloseClickMobilMenu.classList.toggle('transformMobilMenu')
    }
    showPagesMenuSection(e){
        var eElement = document.getElementById('view'+e.target.id)
        eElement.classList.toggle('d-none')
    }
    render(){
        return(
            <div>
                <a href='#' onClick={(e) => this.handleClick(e)}>
                    <img id="MobilMenuLink" data-value="MobilMenu" className="fluid gamburgerMenu" src="/static/images/menuIcon.png" />
                </a>
                <div id="MobilMenu" className="MobilMenu transformMobilMenu">
                    <div className="MobilMenuButtonClose float-right m-3">
                        <a href='#' id="MobilMenuClose" data-value="MobilMenu" onClick={(e) => this.handleClick(e)}>
                            <img id="MobilMenuCloseLink" data-value="MobilMenu" className="fluid gamburgerMenu" src="/static/images/closeMenu.png" />
                        </a>
                    </div>
                    <div className="sectionsAndPages">
                    <Query query={componentNavbarQuery}>
                        {({loading, error, data: { componentNavbar }, fetchMore }) => {
                        if (error) return <ErrorMessage message='Error loading posts.' />
                        if (loading) return <div>Loading</div>
                        return (
                            <ul className="nav flex-column m-4">
                                {componentNavbar[0].menu_items.map((item, index)=>{
                                    if(item.link == "#"){
                                        return (
                                          <div key={"item_mobil"+item.id}>                                           
                                            <a id="ourProductionIDLink" 
                                                data-value="sectionPagesMobilMenu" 
                                                className="nav-link m-0 p-0" 
                                                href="#"
                                                onClick={(e) =>this.handleClick(e)}>
                                                <li id="ourProductionIDLinkLi" data-value="sectionPagesMobilMenu" className="nav-item">{item.name}</li>
                                            </a>
                                            <div id="sectionPagesMobilMenu" className="sectionPagesMobilMenu transformMobilMenu">
                                                <div className="MobilMenuButtonClose w-100 p-3">
                                                    <a id="ourProductionIDCloseLink" 
                                                        data-value="sectionPagesMobilMenu" 
                                                        href='#'
                                                        className="d-flex justify-content-end" 
                                                        onClick={(e) =>this.handleClick(e)}>
                                                        <img id="ourProductionIDCloseLink" data-value="sectionPagesMobilMenu" className="fluid gamburgerMenu" src="/static/images/backPointer.png" />
                                                    </a>
                                                    <Query query={sectionsPagesQuery}>
                                                    {({data: { sections }}) => {
                                                        if (error) return <ErrorMessage message='Error loading posts.' />
                                                        if (loading) return <div>Loading</div>
                                                        return(
                                                            <ul className="nav flex-column ml-4 mr-4 mt-1">
                                                                {sections.map((section, index)=>{
                                                                    if(section.viewMagaMenu == true){
                                                                        return (
                                                                            <li className="clickPointer"   key={"section"+section.id}>
                                                                                <span id={"sectionID_"+index} onClick={(e) => this.showPagesMenuSection(e)}>{section.name}</span>
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
                                                    }}
                                                    </Query>
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
                        )
                        }}
                    </Query>
                    </div>
                </div>
            </div>
        );
    }
}
