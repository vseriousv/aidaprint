import React, {Component}       from 'react'
import { Query }                from 'react-apollo'
import gql                      from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
import Link                     from 'next/link'


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

export default class Footer_list_mobil extends Component {
  render(){
      return(
        <div className="container-fluid row-listSectionAndPages d-md-none">
          <Query query={sectionsPagesQuery}>
          {({loading, error, data}) => {
						if (error) return `Error! ${error.message}`;
            if (loading) return <div>Loading</div>
              return (
								<Container className="">
	                <ul className="nav flex-column text-center pt-3 pb-3">
	                  {data.sections.map((section, index) => {
											if(section.viewMagaMenu == false){
		                    return(
		                      <li className="nav-item pb-2 text-center" key={section.id}><span>{section.name}</span></li>
		                    );
											}
	                  })}
	                </ul>
								</Container>
              );
            }
          }
          </Query>
        </div>
      );
  }
}
