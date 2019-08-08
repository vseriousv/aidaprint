import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const allContactsQuery = gql`
query contactsphone{
	contactsphone( type: "phone_mobil"){
    id
    title
    type
    context_1
    context_2
  }
}
`

const Header_leftBlock =()=> (
    <Query query={allContactsQuery}>
         {({loading, error, data }) => {
            if (error) return `Error! ${error.message}`;
            if (loading) return <div>Loading</div>
            return (
              <div className="callBlock d-lg-flex">
                <div className='callMenu callMenuDesktop d-lg-block d-none'>
                 {data.contactsphone.map((contact, index) =>( 
                    <a key={index} href={"tel:"+contact.context_1}><span><b>{contact.context_1}</b> {contact.context_2}</span><br /></a>
                 ))}
                </div>
              </div>
            )
         }}
    </Query>
)
export default Header_leftBlock;
