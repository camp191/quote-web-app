import React from 'react'
import Slider from 'react-slick'
import SliderList from './SliderList'
import sliderData from './../../modules/SliderData'

var settings = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 50
}

const ExampleSlider = () => (
    <div className="container-slider">
        <Slider {...settings}>
            {sliderData.map((list) => {
                return (
                    <div key={list.name}>
                        <SliderList
                            name={list.name}
                            description={list.description}
                            avatar={list.avatar}
                            title={list.title}
                            who={list.who}
                        />
                    </div>
                )
            })}
        </Slider>
    </div>
)

export default ExampleSlider