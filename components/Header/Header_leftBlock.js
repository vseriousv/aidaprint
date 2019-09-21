import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'

export const  ALL_CONTACTS_QUERY = gql`
query ALL_CONTACTS_QUERY{
  contactsphone(type: "phone_mobil"){
    id
    title
    type
    context_1
    context_2
  }
}
`
export default function Header_leftBlock () {

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
    <div className="callBlock d-lg-flex">
      <div className='callMenu callMenuDesktop d-lg-block d-none'>
        {contactsphone.map((contact, index) =>( 
          <a key={index} href={"tel:"+contact.context_1}><span><b>{contact.context_1}</b> {contact.context_2}</span><br /></a>
        ))}
      </div>
    </div>
  ) 
}
