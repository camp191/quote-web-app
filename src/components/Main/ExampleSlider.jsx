import React from 'react'
import Slider from 'react-slick'
import SliderList from './SliderList'

class ExampleSlider extends React.Component {
    render() {

        let sliderData = [
            {
                name: "หน้ากากทักสิโด้",
                description: "ปกป้องสาวน้อยจากภัยอันตราย",
                avatar: "http://www.avatarsdb.com/avatars/tuxedo_mask.jpg",
                title: "เมื่อฉันได้พบคุณ ฉันตกอยู่ในห้วงแห่งความรัก และที่คุณยิ้ม นั่นเป็นเพราะว่าคุณรู้",
                who: "อาร์ริโก โบอิโต ( Arrigo Boito ) กวีชาวอิตาลี"
            },
            {
                name: "เทนเซ่อเฟส",
                description: "หน้าตาดี มีตังใช้",
                avatar: "http://www.avatarsdb.com/avatars/funny_penguin.gif",
                title: "เมื่อฉันได้พบคุณ ฉันตกอยู่ในห้วงแห่งความรัก และที่คุณยิ้ม นั่นเป็นเพราะว่าคุณรู้",
                who: "อาร์ริโก โบอิโต ( Arrigo Boito ) กวีชาวอิตาลี"
            },
            {
                name: "แมวโง่วว",
                description: "ถ้าป๋มน่ารักน้อยกว่าเขาป๋มก็จะไปฮับ",
                avatar: "http://www.avatarsdb.com/avatars/you_stupid_cat.gif",
                title: "เมื่อฉันได้พบคุณ ฉันตกอยู่ในห้วงแห่งความรัก และที่คุณยิ้ม นั่นเป็นเพราะว่าคุณรู้",
                who: "อาร์ริโก โบอิโต ( Arrigo Boito ) กวีชาวอิตาลี"
            },
            {
                name: "Swift",
                description: "an American singer-songwriter",
                avatar: "http://www.avatarsdb.com/avatars/taylor_heart.gif",
                title: "เมื่อฉันได้พบคุณ ฉันตกอยู่ในห้วงแห่งความรัก และที่คุณยิ้ม นั่นเป็นเพราะว่าคุณรู้",
                who: "อาร์ริโก โบอิโต ( Arrigo Boito ) กวีชาวอิตาลี"
            },
        ]

        var settings = {
            speed: 500,
            autoplay: true,
            autoplaySpeed: 50
        }
        return (
            <div className="container-slider">
                <Slider {...settings}>
                    {sliderData.map((list) => {
                        return (
                            <div>
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
        );
    }
}

export default ExampleSlider