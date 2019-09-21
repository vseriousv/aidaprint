import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
import Link                     from 'next/link'

export const ALL_CONTACTS_QUERY = gql`
query ALL_CONTACTS_QUERY{
	contactsphone( type: "phone_mobil"){
    id
    title
    type
    context_1
    context_2
  }
}
`
export default function Footer_center_block () {

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_CONTACTS_QUERY,
    {
      notifyOnNetworkStatusChange: true
    }
  )

  if (error) return <div>ERROR</div>
  if (loading) return <div>Loading</div>

  const { contactsphone } = data

  return (
    <div className="callBlock d-lg-flex text-center text-sm-left">
      <div className='callMenu callFooter'>
        {contactsphone.map((contact, index) =>( 
          <a key={index} href={"tel:"+contact.context_1}>
            <span><b>{contact.context_1}</b>
              <span className="colorWhite">{contact.context_2}</span>
            </span><br /></a>
        ))}
      </div>
    </div>
  ) 
}
