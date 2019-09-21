import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import { Query }          from 'react-apollo'
import Link               from 'next/link'
import { Row, Carousel }  from 'react-bootstrap'

import './SliderMainPage.less';

export const MP_SLIDER = gql`
query MP_SLIDER{
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
export default function Header_leftBlock () {

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    MP_SLIDER,
    {
      notifyOnNetworkStatusChange: true
    }
  )

  if (error) return <div>ERROR</div>
  if (loading) return <div>Loading</div>

  const { mpslides } = data

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
}
