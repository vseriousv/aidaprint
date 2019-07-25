import React, {Component}       from 'react'
import { Query }                from 'react-apollo'
import gql                      from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
import Link                     from 'next/link'

export default class Footer_searchAndSubscribe extends Component {
  render(){
      return(
        <div className="container-fluid row-searchAndSubscribe">
          <Row>
            <Container>
              <Row>
                <div className="col-xl-7 col-lg-5 col-md-5 my-auto">
                    <div className='searchFooter'>
                        <input type="text" name="seacrch" placeholder="ПОИСК ПО САЙТУ" />
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 my-auto">
                    <div className="socialIconFooter">

                    </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-md-5 my-auto">
                    <div className="socialFooter">
                        <input type="submit" name="subscribe" value="СКИДКА ЗА РЕПОСТ 5%" />
                    </div>
                </div>
              </Row>
            </Container>
          </Row>
        </div>
      );
  }
}
