import React, {Component}       from 'react'

export default class PaddingComponent extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    var paddingTop = document.getElementById("padding_top_withFixedMenu");
    if(window.pageYOffset >= "80"){
        paddingTop.classList.remove("d-none");      
    }else{
        paddingTop.classList.add("d-none");
    }
  }
  render(){
      return(
        <div id="padding_top_withFixedMenu" className="padding-top-withFixedMenu d-none"></div>
      );
  }
}