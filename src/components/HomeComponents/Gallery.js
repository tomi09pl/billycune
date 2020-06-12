import React from 'react';
import {SRLWrapper} from 'simple-react-lightbox';
import Divider from '../Divider';

import img1 from '../../assets/black/Atmosferic Twin.jpg';
import img2 from '../../assets/black/Evolution.jpg';
import img3 from '../../assets/black/F-Head.jpg';
import img4 from '../../assets/black/Generator Shovelhead.jpg';
import img5 from '../../assets/classic/m8.jpg';
import img6 from '../../assets/classic/Knucklehead.jpg';
import img7 from '../../assets/classic/Panhead S_S.jpg';
import img8 from '../../assets/classic/Twin Cam.jpg';


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
                                <img src={img3} alt="F-Head" width="600" height="400"/>
                            </a>
                            <div className="desc">F-Head</div>
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
                                <img src={img5} alt="M8" width="600" height="400"/>
                            </a>
                            <div className="desc">M8</div>
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
                                <img src={img7} alt="Panhead S&S" width="600" height="400"/>
                            </a>
                            <div className="desc">Panhead S&S</div>
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