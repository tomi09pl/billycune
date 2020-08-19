import React from 'react';
import Divider from './Divider';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//===========F-HEAD===========//
import fheadIcon from '../assets/black/F-Head.jpg';
import fhead1 from '../assets/makingOf/fhead/1.jpg';
import fhead2 from '../assets/makingOf/fhead/2.jpg';
import fhead3 from '../assets/makingOf/fhead/3.jpg';
import fhead4 from '../assets/makingOf/fhead/4.jpg';
import fhead5 from '../assets/makingOf/fhead/5.jpg';
import fhead6 from '../assets/makingOf/fhead/6.jpg';
import fhead7 from '../assets/makingOf/fhead/7.jpg';
//============================//

//==========FLATHEAD==========//
import flatheadIcon from '../assets/black/Flathead.jpg';
import flathead1 from '../assets/makingOf/flathead/1.jpg';
import flathead2 from '../assets/makingOf/flathead/2.jpg';
import flathead3 from '../assets/makingOf/flathead/3.jpg';
import flathead4 from '../assets/makingOf/flathead/4.jpg';
import flathead5 from '../assets/makingOf/flathead/5.jpg';
//============================//

//===========KNUCKLE==========//
import knuckleIcon from '../assets/black/KnuckleheadVer2.jpg';
import knuckle1 from '../assets/makingOf/knuckle/1.jpg';
import knuckle2 from '../assets/makingOf/knuckle/2.jpg';
import knuckle3 from '../assets/makingOf/knuckle/3.jpg';
import knuckle4 from '../assets/makingOf/knuckle/4.jpg';
import knuckle5 from '../assets/makingOf/knuckle/5.jpg';
//============================//

//=========PANSHOVEL==========//
import panshovelIcon from '../assets/black/Panshovel.jpg';
import panshovel1 from '../assets/makingOf/panshovel/1.jpg';
import panshovel2 from '../assets/makingOf/panshovel/2.jpg';
import panshovel3 from '../assets/makingOf/panshovel/3.jpg';
import panshovel4 from '../assets/makingOf/panshovel/4.jpg';
import panshovel5 from '../assets/makingOf/panshovel/5.jpg';
//============================//

//=========SHOVELHEAD=========//
import shovelheadIcon from '../assets/black/Shovelhead.jpg';
import shovelhead1 from '../assets/makingOf/shovelHead/1.jpg';
import shovelhead2 from '../assets/makingOf/shovelHead/2.jpg';
import shovelhead3 from '../assets/makingOf/shovelHead/3.jpg';
import shovelhead4 from '../assets/makingOf/shovelHead/4.jpg';
import shovelhead5 from '../assets/makingOf/shovelHead/5.jpg';
//============================//

//======Lightbox Arrays=======//
const fheadArr = [fhead1,fhead2,fhead3,fhead4,fhead5,fhead6,fhead7];
const flatheadArr = [flathead1,flathead2,flathead3,flathead4,flathead5];
const knuckleArr = [knuckle1,knuckle2,knuckle3,knuckle4,knuckle5];
const panshovelArr = [panshovel1,panshovel2,panshovel3,panshovel4,panshovel5];
const shovelheadArr = [shovelhead1,shovelhead2,shovelhead3,shovelhead4,shovelhead5];
//============================//

export default class MakingOf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            gallery:''
        };
    }

    render() {

        const {photoIndex, isOpen, gallery} = this.state;
        let galleryArr = [];

        if (gallery === 'fhead') {
            galleryArr = fheadArr
        } else if(gallery === 'flathead') {
            galleryArr = flatheadArr
        } else if(gallery === 'knuckle') {
            galleryArr = knuckleArr
        } else if(gallery === 'panshovel') {
            galleryArr = panshovelArr
        } else if(gallery === 'shovel') {
            galleryArr = shovelheadArr
        } else {
            galleryArr = []
        };

        return(
            <div className='makingOf'>
                <h1 className='makingOf-header'>Making of arts</h1>
                <Divider/>

                <div className='wrapper-wrapper'>
                    <div className='makingOf-icon-wrapper'>
                        <img className='makingOf-icon gallery' src={fheadIcon} alt='F-Head engine icon' onClick={() => this.setState({isOpen: true, gallery: 'fhead'})}></img>
                        <img className='makingOf-icon gallery' src={flatheadIcon} alt='Flathead engine icon' onClick={() => this.setState({isOpen: true, gallery: 'flathead'})}></img>
                        <img className='makingOf-icon gallery' src={knuckleIcon} alt='Knucklehead engine icon' onClick={() => this.setState({isOpen: true, gallery: 'knuckle'})}></img>
                        <img className='makingOf-icon gallery' src={panshovelIcon} alt='Panshovel engine icon' onClick={() => this.setState({isOpen: true, gallery: 'panshovel'})}></img>
                        <img className='makingOf-icon gallery' src={shovelheadIcon} alt='Shovelhead engine icon' onClick={() => this.setState({isOpen: true, gallery: 'shovel'})}></img>
                    </div>    
                </div>
               

                <h1 className='makingOf-subheader'>Heavy Metal Videos</h1>
                <Divider/>

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


                {isOpen && (
                    <Lightbox
                        mainSrc={galleryArr[photoIndex]}
                        nextSrc={galleryArr[(photoIndex + 1) % galleryArr.length]}
                        prevSrc={galleryArr[(photoIndex + galleryArr.length - 1) % galleryArr.length]}
                        onCloseRequest={() => this.setState({isOpen: false, photoIndex: 0})}
                        onMovePrevRequest={() =>
                            this.setState({
                              photoIndex: (photoIndex + galleryArr.length - 1) % galleryArr.length,
                            })
                          }
                          onMoveNextRequest={() =>
                            this.setState({
                              photoIndex: (photoIndex + 1) % galleryArr.length,
                            })
                        }
                        enableZoom={false}
                    />
                            
                )}
            </div>
        )
    }
}