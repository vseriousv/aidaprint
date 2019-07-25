import React, {Component} from 'react';
import { Query }                from 'react-apollo'
import gql                      from 'graphql-tag'
import Link                     from 'next/link'
import { Container, Row, Col, Carousel }  from 'react-bootstrap'

import './SliderMainPage.less';

export const mpslider = gql`
query mpslides{
  mpslides{
    id
    name
    image
    firstHeader
    secondHeader
    button
    url
  }
}
`

class SliderMainPage extends Component{
  render () {
    return (
      <Query query={mpslider}>
      {({loading, error, data: { mpslides }}) => {
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <div>Loading</div>
        return (
          <div className="container-fluid sliderHomePageComponent">
            <Carousel indicators={false}>
              {mpslides.map((slide,index)=>{
                return(
                  <Carousel.Item key={index}>
                    <div className="container-fluid">
                      <Row>
                        <div className="col-md-6 col-12 text-md-right text-center">
                          <img className="img-slider img-fluid" src={"/static/images/sliders/"+slide.image+".png"} />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                          <h3 className="firstHeaderSlider text-md-left text-center mx-md-0 mx-auto">{slide.firstHeader}</h3>
                          <h3 className="secondHeaderSlider text-md-left text-center mx-md-0 mx-auto">{slide.secondHeader}</h3>
                          <Link prefetch href={slide.url}>
                            <a>
                              <div className="BTNHeadSlide">
                                <h1 className="text-uppercase ">{slide.button}</h1>
                                <div className="BTNBGRSLide"></div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </Row>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        )
      }}
      </Query>
    )
  }
}
export default SliderMainPage;
