import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
import Link from 'next/link';
import { withRouter }   from 'next/router'

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

function Navbar_Sections_Fixed (props) {

  const [pageSection, setPageSection] = useState(0);

  const handleClickPageMenu = () => {
    let idElement = document.getElementById(event.target.id)
    let dataElementID = idElement.getAttribute('data-nameid');

    setPageSection(dataElementID);
    
    var pagesViewMegaMenu = document.getElementsByClassName("pagesViewMegaMenu");
    for (var i=0; i<pagesViewMegaMenu.length; i++){
      var NonTargetElement2 = document.getElementById("SectionID_"+i);
      NonTargetElement2.classList.remove('active');
    }
    idElement.classList.add('active');
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

  switch(props.megaMenu){
    case 'megaMenu1': 
      return (
        <>
        <div id="windowCloseClick" className="windowCloseClick" onClick={props.handleClickWindowClose}></div>
        <div id="megaMenu1" className="container-fluid MegaMenu MegaMenu-top-two">
          <Row className="megaMenuRow">
            <Container>
              <Row>
            {sections.map((section, index)=>{
              if(section.viewMagaMenu == true && index==0){
                return (
                  <div  key={"section"+section.id} 
                        id={"SectionID_"+index} 
                        className="SectionsInMegaMenu active" 
                        data-nameid={index} 
                        onClick={handleClickPageMenu}>
                    {section.name}
                  </div>
                );
              }else if(section.viewMagaMenu == true){
                return (
                  <div  key={"section"+section.id} 
                        id={"SectionID_"+index} 
                        className="SectionsInMegaMenu" 
                        data-nameid={index} 
                        onClick={handleClickPageMenu}>
                    {section.name}
                  </div>
                );
              }
            })}
              </Row>
            </Container>
            <Container>
              <Row>
                {sections.map((section, index)=>{
                  if(section.viewMagaMenu == true && index==pageSection){
                    return (
                      <div key={"section"+index} id={"nameID_"+index} className="pagesViewMegaMenu">
                        {section.pages.map((page, id) => {
                          return (
                          <Link key={page.id} href={page.url}>
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
                          <Link key={page.id} href={page.url}>
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
          </Row>
        </div>
        </>
      );
      break;
    case 'megaMenu4': 
      return (
        <>
        <div id="windowCloseClick" className="windowCloseClick" onClick={props.handleClickWindowClose}></div>
        <div id="megaMenu4" className="container-fluid MegaMenu MegaMenu-top-two">
          <h1>Технологии</h1>
        </div>
        </>
      );
      break;
    default:
      return '';
      break;
  }
}

export default withRouter(Navbar_Sections_Fixed);