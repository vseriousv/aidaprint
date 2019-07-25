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

export default class Footer_list extends Component {
  render(){
      return(
        <div className="container-fluid row-listSectionAndPages d-md-flex d-none">
          <Query query={sectionsPagesQuery}>
          {({loading, error, data: { sections }, fetchMore }) => {
              if (error) return <ErrorMessage message='Error loading posts.' />
              if (loading) return <div>Loading</div>
              return (
								<Container className="listContainer">
	                <ul className="footerListSections">
	                  {sections.map((section, index) => {
	                    return(
	                      <li key={section.id}><span>{section.name}</span>
	                        <ul className="footerListPages">
	                          {section.pages.map((page, index) => {
	                            return (
																<li>
																<Link prefetch href={page.url}>
																	<a>
																		{page.name}
																	</a>
																</Link>
																	<span className="redColor text-uppercase">
																		{page.text}
																	</span>
																</li>
															);
	                          })}
	                        </ul>
	                      </li>
	                    );
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
