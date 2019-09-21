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
export default function Footer_list () {

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
    <div className="container-fluid row-listSectionAndPages d-md-flex d-none">
		<Container className="listContainer">
			<ul className="footerListSections">
				{sections.map((section, index) => {
				return(
					<li key={section.id}><span>{section.name}</span>
					<ul className="footerListPages">
						{section.pages.map((page, index) => {
						return (
							<li key={index}>
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
	</div>
  ) 
}
