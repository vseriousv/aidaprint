import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
import Link                     from 'next/link'

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
export default function Footer_list_mobil () {

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
    <div className="container-fluid row-listSectionAndPages d-md-none">
      <Container className="">
        <ul className="nav flex-column text-center pt-3 pb-3">
          {sections.map((section, index) => {
            if(section.viewMagaMenu == false){
              return(
                <li className="nav-item pb-2 text-center" 
                    key={section.id}>
                  <span>{section.name}</span>
                </li>
              );
            }
          })}
        </ul>
      </Container>
	</div>
  ) 
}
