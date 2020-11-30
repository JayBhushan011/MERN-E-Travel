import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'//https://codesandbox.io/s/lp602ljjj7?file=/src/Carousel.js:155-2128

export default class Carous extends Component{
    render(){
        return(
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
            <img alt="img" height="100%" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/51/54/e1/lobby.jpg?w=900&amp;h=-1&amp;s=1"/>
        </div>
        <div>
            <img alt="img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/f2/a7/b9/reception.jpg?w=900&amp;h=-1&amp;s=1"/>
        </div>
        <div>
            <img alt="img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4d/29/9e/exterior.jpg?w=900&amp;h=-1&amp;s=1"/>
        </div>
    </Carousel>)
}
}