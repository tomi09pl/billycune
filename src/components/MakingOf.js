import React from 'react';
import Divider from './Divider';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import fheadIcon from '../assets/black/F-Head.jpg';
import fhead1 from '../assets/makingOf/fhead/1.jpg';
import fhead2 from '../assets/makingOf/fhead/2.jpg';
import fhead3 from '../assets/makingOf/fhead/3.jpg';
import fhead4 from '../assets/makingOf/fhead/4.jpg';
import fhead5 from '../assets/makingOf/fhead/5.jpg';
import fhead6 from '../assets/makingOf/fhead/6.jpg';
import fhead7 from '../assets/makingOf/fhead/7.jpg';

const fhead = [
    {id:1, src:'../assets/makingOf/fhead/1.jpg', alt:'first drawing'},
    {id:2, src:'../assets/makingOf/fhead/2.jpg', alt:'more detailed drawing'},
    {id:3, src:'../assets/makingOf/fhead/3.jpg', alt:'more detailed drawing'},
    {id:4, src:'../assets/makingOf/fhead/4.jpg', alt:'painted'},
    {id:5, src:'../assets/makingOf/fhead/5.jpg', alt:'painted'},
    {id:6, src:'../assets/makingOf/fhead/6.jpg', alt:'finished classic edition'},
    {id:7, src:'../assets/makingOf/fhead/7.jpg', alt:'black edition'},
];

const fheadArr = [fhead1,fhead2,fhead3,fhead4,fhead5,fhead6,fhead7];


export default class MakingOf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {

        const {photoIndex, isOpen} = this.state;

        return(
            <div className='makingOf'>
                <h1 className='makingOf-header'>Making of arts</h1>
                <Divider/>

                <div className='wrapper-wrapper'>
                    <div className='makingOf-icon-wrapper'>
                        <img className='makingOf-icon gallery' src={fheadIcon} alt='F-Head engine icon' onClick={() => this.setState({isOpen: true})}></img>
                        <img className='makingOf-icon gallery' src={fheadIcon} alt='F-Head engine icon' onClick={() => this.setState({isOpen: true})}></img>
                        <img className='makingOf-icon gallery' src={fheadIcon} alt='F-Head engine icon' onClick={() => this.setState({isOpen: true})}></img>
                        <img className='makingOf-icon gallery' src={fheadIcon} alt='F-Head engine icon' onClick={() => this.setState({isOpen: true})}></img>
                        <img className='makingOf-icon gallery' src={fheadIcon} alt='F-Head engine icon' onClick={() => this.setState({isOpen: true})}></img>
                    </div>    
                </div>
               

                <h1 className='makingOf-subheader'>Heavy Metal Videos</h1>
                <Divider/>

                {/* <div className='wrapper-wrapper'> */}
                    <div className='makingOf-yt-wrapper'>
                        <iframe className='makingOg-yt-frame' title='Evo Retro Poster'
                        src="https://www.youtube.com/embed/pizxZPHpR9c">
                        </iframe>
                        <iframe className='makingOg-yt-frame' title='Black Motor Set'
                        src="https://www.youtube.com/embed/246v7RNnvaM">
                        </iframe> 
                        <iframe className='makingOg-yt-frame' title='Image production - Milwaukee-Eight 114'
                        src="https://www.youtube.com/embed/UUq6QiuGvJQ">
                        </iframe> 
                        <iframe className='makingOg-yt-frame' title='New engine'
                        src="https://www.youtube.com/embed/x6_JfpnLCkk">
                        </iframe> 
                        <iframe className='makingOg-yt-frame' title='New engine 2'
                        src="https://www.youtube.com/embed/uX9nLr6jdnE">
                        </iframe> 
                    </div>
                {/* </div> */}


                {isOpen && (
                    <Lightbox
                        mainSrc={fheadArr[photoIndex]}
                        nextSrc={fheadArr[(photoIndex + 1) % fheadArr.length]}
                        prevSrc={fheadArr[(photoIndex + fheadArr.length - 1) % fheadArr.length]}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                              photoIndex: (photoIndex + fheadArr.length - 1) % fheadArr.length,
                            })
                          }
                          onMoveNextRequest={() =>
                            this.setState({
                              photoIndex: (photoIndex + 1) % fheadArr.length,
                            })
                        }
                        // mainSrcThumbnail={props.mainSrc}
                        // nextSrcThumbnail={props.nextSrc}
                        // prevSrcThumbnail={props.prevSrc}
                    />
                            
                )}
            </div>
        )
    }
}