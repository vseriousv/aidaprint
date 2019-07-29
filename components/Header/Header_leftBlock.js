import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const allContactsQuery = gql`
query queryContacts {
  contacts{
	title
    type
    context_1
  	context_2
  }
}
`

export default class Header_leftBlock extends Component {
    render(){
        return(
        <Query query={allContactsQuery}>
             {({loading, error, data: { contacts } }) => {
                if (error) return <ErrorMessage message='Error loading posts.' />
                if (loading) return <div>Loading</div>
                return (
                  <div className="callBlock d-lg-flex">
                    <div className='callMenu callMenuDesktop d-lg-block d-none'>
                     {contacts.map((contact, index) =>(
                        <a key={index} href={"tel:"+contact.context_1}><span><b>{contact.context_1}</b> {contact.context_2}</span><br /></a>
                     ))}
                    </div>
                  </div>
                )
             }}
        </Query>
        );
    }
}
