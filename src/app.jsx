import React, { Component } from 'react';
import { Swipe, SwipeItem } from 'swipejs/react';
import Main from './slides/main.jsx'
import 'swipejs/style.css';

var injectTapEventPlugin = require("react-tap-event-plugin");

      injectTapEventPlugin(); // in constructor 
export default class Application extends Component{

constructor(...args) {
    super(...args);
    this.state = {};
  }


  run=()=>{

  }

  componentDidMount() {
    // let mySwipe = this.refs.swipe.instance;
    // You can call swipe methods on `mySwipe`
    // mySwipe.prev()
    // mySwipe.next()
    // mySwipe.getPos()
    // mySwipe.getNumSlides()
    // mySwipe.slide()
    // mySwipe.restart()
    // mySwipe.stop()
    // mySwipe.kill()
  }

  onTransactionEnd(index, elem) {
    // Your own logic
  }

  handleCallback(index, elem) {
    // Your own logic
    console.log('Hello')
   
  }

  handleClick(e) {
    // Your own logic
    //    let mySwipe = this.refs.swipe.instance;
    // mySwipe.next()
    // mySwipe.stop()
  }

  render() {
    return (
      <Swipe className='custom-swipe-container-class'
             ref='swipe'
             startSlide={0}
             speed={300}
             auto={false}
             draggable={false}
             continuous={true}
             autoRestart={false}
             disableScroll={false}
             stopPropagation={true}
             callback={this.handleCallback.bind(this)}
             transitionEnd={this.onTransactionEnd.bind(this)}>
        <SwipeItem className='custom-swipe-item-class'
                   onClick={this.handleClick.bind(this)}>
         <Main className="hello"/>
        </SwipeItem>
        <SwipeItem className='custom-swipe-item-class'
                   onClick={this.handleClick.bind(this)}>
          Slide Two
        </SwipeItem>
        <SwipeItem className='custom-swipe-item-class'
                   onClick={this.handleClick.bind(this)}>
          Slide Three
        </SwipeItem>
      </Swipe>
    );
  }

	
	// return( <ReactSwipe className="carousel"  id="morecorusel" swipeOptions={swipeOptions}>
 //                <div style={styles.slide1} className="page" onClick={()=>this.create()}><Main/></div>
 //                <div style={styles.slide2}  className="page" onClick={()=>this.create()}>PANE 2</div>
 //                <div style={styles.slide3}  className="page" onClick={()=>this.create()}>PANE 3</div>
 //            </ReactSwipe>

		

	// 	   )





}