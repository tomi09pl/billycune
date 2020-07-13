import React from 'react';
import {SRLWrapper} from 'simple-react-lightbox';
import Divider from '../Divider';

import img1 from '../../assets/black/AtmosfericTwin.jpg';
import img2 from '../../assets/black/Evolution.jpg';
import img3 from '../../assets/classic_title/2017_Milwaukee-Eight_114.jpg';
import img4 from '../../assets/classic_title/1966_Generator_Shovelhead.jpg';
import img5 from '../../assets/classic/m8.jpg';
import img6 from '../../assets/classic/Knucklehead.jpg';
import img7 from '../../assets/retro/1948_Panhead.jpg';
import img8 from '../../assets/retro/1999_Twin_Cam.jpg';


export default class Gallery extends React.Component {

    render() {
        const callbacks = {
            onLightboxOpened: object => console.log(object),
            onLightboxClosed: object => console.log(object)
          }

        const options = {
            buttons: {
              showAutoplayButton: false,
              showCloseButton: false,
              showDownloadButton: false,
              showFullscreenButton: false,
              showNextButton: true,
              showPrevButton: true,
              showThumbnailsButton: false
            },
            settings: {
                autoplaySpeed: 3000,
                disableKeyboardControls: false,
                disablePanzoom: false,
                disableWheelControls: true
              }
        }

        return (
            <div className="home-gallery-container" id="gallery">
                <SRLWrapper callbacks={callbacks} options={options}>
                <h1 className='galleryHeader'>latest work</h1>
                <Divider/>

                <div className="firstRow galleryRow">
                    <div className="responsive">
                        <div className="gallery">
                            <a href={img1} data-attribute="SRL">
                                <img src={img1} alt="Atmosferic Twin" width="600" height="400"/>
                            </a>
                            <div className="desc">Atmosferic Twin</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img2} data-attribute="SRL">
                                <img src={img2} alt="Evolution" width="600" height="400"/>
                            </a>
                            <div className="desc">Evolution</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img3} data-attribute="SRL">
                                <img src={img3} alt="Milwaukee-Eight 114" width="600" height="400"/>
                            </a>
                            <div className="desc">Milwaukee-Eight 114</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img4} data-attribute="SRL">
                                <img src={img4} alt="Generator Shovelhead" width="600" height="400"/>
                            </a>
                            <div className="desc">Generator Shovelhead</div>
                        </div>
                    </div>
                </div>

                <div className="secondRow galleryRow">
                    <div className="responsive">
                        <div className="gallery">
                            <a href={img5} data-attribute="SRL">
                                <img src={img5} alt="Milwaukee-Eight" width="600" height="400"/>
                            </a>
                            <div className="desc">Milwaukee-Eight</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img6} data-attribute="SRL">
                                <img src={img6} alt="Knucklehead" width="600" height="400"/>
                            </a>
                            <div className="desc">Knucklehead</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img7} data-attribute="SRL">
                                <img src={img7} alt="Panhead" width="600" height="400"/>
                            </a>
                            <div className="desc">Panhead</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img8} data-attribute="SRL">
                                <img src={img8} alt="Twin Cam" width="600" height="400"/>
                            </a>
                            <div className="desc">Twin Cam</div>
                        </div>
                    </div>
                </div>
                </SRLWrapper>
            </div>
        )
    }
}