import React, {useState} from 'react';
import {
    CarouselItem,
    CarouselCaption,
    Card, 
    CardImg,
    CardGroup, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
} from 'reactstrap';
import Banner from '../components/Banner';
import CardView from '../components/CardView';
import AutoplaySlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const imageData = [
    { imageSrc:'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png' },
    { imageSrc:'http://tech.akamai.com/image-manager/img/mountain.jpeg' },
    { imageSrc:'https://c.pxhere.com/images/5b/9a/69277238603785e61b8d0ef790fd-1567591.jpg!d' }
]

const campaignFakeData = [
    {title: '新創項目', subtitle:'關於此項目', info: '此項目內容', currentInvestment:100000, requuiredInvestment:200000, imgSrc:'https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png'},
    {title: '新創項目', subtitle:'關於此項目', info: '此項目內容', currentInvestment:100000, requuiredInvestment:200000, imgSrc:'https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png'},
    {title: '新創項目', subtitle:'關於此項目', info: '此項目內容', currentInvestment:100000, requuiredInvestment:200000, imgSrc:'https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png'},
    {title: '新創項目', subtitle:'關於此項目', info: '此項目內容', currentInvestment:100000, requuiredInvestment:200000, imgSrc:'https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png'},
    
]

const Main = () => {

    return(
        <div className="Main">
            <AutoplaySlider 
                bullets={false} 
                style={{ height:'60vh', width:'100%' }}>
                {imageData.map(
                    (img) => <div data-src={img.imageSrc} />
                )}
            </AutoplaySlider>
            <p style={{padding:20}}/>
            <h4 style={{justifySelf:'start'}}>熱門項目</h4>
            <div style={{padding:'1rem'}}>
                <CardGroup>
                    {campaignFakeData.map((data, index) => 
                        <Card style={{margin:'0.5rem'}}>
                            <CardImg top height='100vh' width='10vh' src={data.imgSrc} alt={'Campaign' + index + 'Image'}/>
                            <CardBody>
                                <CardTitle>{data.title}</CardTitle>
                                <CardSubtitle>{data.subtitle}</CardSubtitle>
                                <CardText>{data.info}</CardText>
                                <Button>進入</Button>
                            </CardBody>
                        </Card>
                    )}
                </CardGroup>
            </div>
            <div style={{padding:'1rem'}}>
                <CardGroup>
                    {campaignFakeData.map((data, index) => 
                        <Card style={{margin:'0.5rem'}}>
                            <CardImg top height='100vh' width='10vh' src={data.imgSrc} alt={'Campaign' + index + 'Image'}/>
                            <CardBody>
                                <CardTitle>{data.title}</CardTitle>
                                <CardSubtitle>{data.subtitle}</CardSubtitle>
                                <CardText>{data.info}</CardText>
                                <Button>進入</Button>
                            </CardBody>
                        </Card>
                    )}
                </CardGroup>
            </div>
        </div>
    )
}

export default Main;