import React from 'react';
import './Banner.css'

const imageData = [
    { imageSrc:'https://www.thebalancesmb.com/thmb/u1WdlFpZiucvGD6ndefbtGRDdjI=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DressForSuccess-56a8303f5f9b58b7d0f166fb.jpg', size: 100 },
    { imageSrc:'https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2018/06/26/20180626-095609_U3792_M426058_e9b3.png', size: 10 }
]

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageArr: []
        }
    }

    componentDidMount() {
        this.setState({imageArr: imageData})
        console.log(this.state.imageArr)
    }

    render() {
        return(
            <div className='Banner'>
                {this.state.imageArr.map((data) => 
                    <img src={data.imageSrc} style = {{maxWidth: '100%', height: 'auto'}}/>
                )}
            </div>
        )
    }
}

export default Banner;