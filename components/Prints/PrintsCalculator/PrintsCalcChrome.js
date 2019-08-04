import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { bussnessCart_incrementCount, bussnessCart_decrementCount } from '../../../store'

class PrintsCalcChrome extends React.Component {
  bussnessCart_increment = () => {
    const { bussnessCart_incrementCount } = this.props
    bussnessCart_incrementCount()
  }

  bussnessCart_decrement = () => {
    const { bussnessCart_decrementCount } = this.props
    bussnessCart_decrementCount()
  }
    render(){
      const { bussnessCart_color_chrome } = this.props;
      var returnChrome;
      if(bussnessCart_color_chrome == "4"){ returnChrome = "4+0" }else{ returnChrome = "4+4" }
      return(
        <>
          <input id="colorback" className="tiragTagLeftColor cursor-pointer" type="text" defaultValue="<" readOnly={true} onClick={this.bussnessCart_increment} />
          <input className="tiragTagEnterColor" type="text" defaultValue={returnChrome} readOnly={true} />
          <input id="colorNext" className="tiragTagRightColor cursor-pointer" type="text" defaultValue=">" readOnly={true} onClick={this.bussnessCart_decrement}/>
        </>
      );
    }
}

function mapStateToProps (state) {
  const { bussnessCart_color_chrome } = state
  return { bussnessCart_color_chrome }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ bussnessCart_incrementCount, bussnessCart_decrementCount }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PrintsCalcChrome)
