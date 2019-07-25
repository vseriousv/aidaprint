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

export default class Footer_centerBlock extends Component {
    render(){
        return(
          <Query query={allContactsQuery}>
               {({loading, error, data: { contacts }, fetchMore }) => {
                  if (error) return <ErrorMessage message='Error loading posts.' />
                  if (loading) return <div>Loading</div>
                  return (
                    <div className="callBlock d-lg-flex text-center text-sm-left">
                        <div className='callMenu callFooter'>
                         {contacts.map((contact, index) =>(
                            <a key={index} href={"tel:"+contact.context_1}>
                              <span><b>{contact.context_1}</b>
                                <span className="colorWhite">{contact.context_2}</span>
                              </span><br /></a>
                         ))}
                        </div>
                      </div>
                  );
                }}
          </Query>
        );
    }
}
