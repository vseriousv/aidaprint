import React, {Component}       from 'react'
import { Query }                from 'react-apollo'
import gql                      from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
import Link                     from 'next/link'

import Header_MobilMenu         from './Header_MobilMenu'

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

export default class Header_navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    var fixedMenuBar = document.getElementById("fixedMenuBar");
    var MegaMenu1 = document.getElementById("megaMenu1");
    var MegaMenu4 = document.getElementById("megaMenu4");
    if(window.pageYOffset >= "80"){
        MegaMenu1.classList.remove("MegaMenu-top-one");
        MegaMenu1.classList.add("MegaMenu-top-two");
        MegaMenu4.classList.remove("MegaMenu-top-one");
        MegaMenu4.classList.add("MegaMenu-top-two");
        fixedMenuBar.classList.add("fixed-top");
    }else{
        MegaMenu1.classList.add("MegaMenu-top-one");
        MegaMenu1.classList.remove("MegaMenu-top-two");
        MegaMenu4.classList.add("MegaMenu-top-one");
        MegaMenu4.classList.remove("MegaMenu-top-two");
        fixedMenuBar.classList.remove("fixed-top");
    }
  }
  handleClick(event){
    event.preventDefault()
    var idElement = document.getElementById(event.target.id)
    var dataMegaMenu = idElement.getAttribute('data-megamenu')
    var MegaMenu = document.getElementById(dataMegaMenu)
    var windowCloseClick = document.getElementById('windowCloseClick')
      windowCloseClick.classList.remove("d-none")
      MegaMenu.classList.remove("d-none")
      idElement.classList.add("active")
  }
  handleClickWindowClose(e){
    var statusActive = document.getElementsByClassName('statusActive')
    var windowCloseClick = document.getElementById('windowCloseClick')
      windowCloseClick.classList.add("d-none")
    var MegaMenu = document.getElementsByClassName('MegaMenu')
    for (var j=1; j<=MegaMenu.length; j++ ){
      var MegaMenuJ = document.getElementById('megaMenu'+j)
      MegaMenuJ.classList.add("d-none")
    }
    var idElement = document.getElementById(event.target.id)
    if(idElement != null){
      for (var i=1; i< statusActive.length+1;i++){
        var elementMegaMenu = document.getElementById("navbarItemID"+i)
        elementMegaMenu.classList.remove("active")
      }
    }
  }
  handleClickPageMenu(){
    var idElement = document.getElementById(event.target.id)
    var dataElementID = idElement.getAttribute('data-nameid');
    var targetElement = document.getElementById(dataElementID);
    var pagesViewMegaMenu = document.getElementsByClassName("pagesViewMegaMenu");
    for (var i=0; i<pagesViewMegaMenu.length; i++){
      var NonTargetElement = document.getElementById("nameID_"+i);
      var NonTargetElement2 = document.getElementById("SectionID_"+i);
      NonTargetElement.classList.add('d-none');
      NonTargetElement2.classList.remove('active');
    }
    idElement.classList.add('active');
    targetElement.classList.remove('d-none');
  }

  render(){
      return(
      <Query query={componentNavbarQuery}>
            {({loading, error, data: { componentNavbar }, fetchMore }) => {
              if (error) return <ErrorMessage message='Error loading posts.' />
              if (loading) return <div>Loading</div>
              return (
                <div id="fixedMenuBar" className="container-fluid ">
                  <Row className="navbar-color-grey d-flex justify-content-between">
                    <ul className="nav d-none d-md-flex">
                        {componentNavbar[0].menu_items.map((item, index)=>{
                            if(item.link == "#"){
                            return(
                              <li key={item.id} className="nav-item">
                                <Link prefetch href={item.link}>
                                  <a
                                  id={"navbarItemID"+item.id}
                                  className="nav-link statusActive"
                                  data-megamenu={"megaMenu"+item.id}
                                  onClick={this.handleClick}>{item.name}</a>
                                </Link>
                              </li>
                            )}else {
                              return(
                              <li key={item.id} className="nav-item">
                                <Link prefetch href={item.link}>
                                  <a
                                  id={"navbarItemID"+item.id}
                                  className="nav-link statusActive"
                                  data-megamenu={"megaMenu"+item.id}
                                  >{item.name}</a>
                                </Link>
                              </li>
                              )}
                        })}
                    </ul>
                    <div className="col-6 d-md-none my-auto d-flex justify-content-start">
                      <Header_MobilMenu />
                    </div>
                    <div className="col-6 d-md-none my-auto d-flex justify-content-end">S</div>
                  </Row>
                  {/*Отображение мегаМеню
                    Кликая на кнопку меню, я говорю - открой мне мега меню и покажи
                    весь список страниц, которые относятся к выбранной категории
                  */}
                  <div id="windowCloseClick" className="windowCloseClick d-none" onClick={this.handleClickWindowClose}></div>
                    <Query query={sectionsPagesQuery}>
                      {({data: { sections }}) => {
                        if (error) return <ErrorMessage message='Error loading posts.' />
                        if (loading) return <div>Loading</div>
                        return(
                          <div>
                            <div id="megaMenu1" className="container-fluid MegaMenu MegaMenu-top-one d-none">
                              <Row className="megaMenuRow">
                                <Container>
                                  <Row>
                                {sections.map((section, index)=>{
                                  if(section.viewMagaMenu == true && index==0){
                                    return (
                                      <div key={"section"+section.id} id={"SectionID_"+index} className="SectionsInMegaMenu active" data-nameid={"nameID_"+index} onClick={this.handleClickPageMenu}>{section.name}</div>
                                    );
                                  }else if(section.viewMagaMenu == true){
                                    return (
                                      <div key={"section"+section.id} id={"SectionID_"+index} className="SectionsInMegaMenu" data-nameid={"nameID_"+index} onClick={this.handleClickPageMenu}>{section.name}</div>
                                    );
                                  }
                                })}
                                  </Row>
                                </Container>
                              </Row>
                              <Container>
                              <Row>
                                {sections.map((section, index)=>{
                                  if(section.viewMagaMenu == true && index==0){
                                    return (
                                      <div key={"section"+index} id={"nameID_"+index} className="pagesViewMegaMenu">
                                        {section.pages.map((page, id) => {
                                          return (
                                          <Link key={page.id} prefetch href={page.url}>
                                            <a>
                                              <Col className="insertPagesOnMegamenu">
                                                <img className="img-fluid w-100" src="/static/images/OurProduction/image1.jpg" />
                                                <p>{page.name}</p>
                                              </Col>
                                            </a>
                                          </Link>
                                          );
                                        })}
                                      </div>
                                    );
                                  }else if(section.viewMagaMenu == true){
                                    return (
                                      <div key={"section"+index} id={"nameID_"+index} className="pagesViewMegaMenu d-none">
                                        {section.pages.map((page, id) => {
                                          return (
                                          <Link key={page.id} prefetch href={page.url}>
                                            <a>
                                              <Col className="insertPagesOnMegamenu">
                                                <img className="img-fluid w-100" src="/static/images/OurProduction/image1.jpg" />
                                                <p>{page.name}</p>
                                              </Col>
                                            </a>
                                          </Link>
                                          );
                                        })}
                                      </div>
                                    );
                                  }
                                })}
                              </Row>
                            </Container>
                            </div>
                          </div>
                        )
                      }}
                    </Query>
                    <div><div id="megaMenu2" className="container-fluid MegaMenu MegaMenu-top-one d-none"></div></div>
                    <div> <div id="megaMenu3" className="container-fluid MegaMenu MegaMenu-top-one d-none"></div></div>
                    <div>
                      <div id="megaMenu4" className="container-fluid MegaMenu MegaMenu-top-one d-none">
                        <h1>Технологии</h1>
                      </div>
                    </div>
                  </div>
              )
            }}
      </Query>
      );
  }
}
