import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const componentNavbarQuery = gql`
query users {
  componentNavbar{
    id
    name
    menu_items{
      id
      name
      child
    }
  }
}
`

export default class Header_navbar extends Component {

    render(){
        
        return(
        <Query query={componentNavbarQuery}>
             {({loading, error, data: { componentNavbar }, fetchMore }) => {
                if (error) return <ErrorMessage message='Error loading posts.' />
                if (loading) return <div>Loading</div>
                return (
                    <ul>
                        {componentNavbar[0].menu_items.map((item, index)=>(
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                )
             }}
        </Query> 
        );
    }
}