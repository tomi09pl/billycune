import React from 'react';

import img1 from '../../assets/gallery/picture1_vertical.jpg'
import img2 from '../../assets/gallery/picture2_horizontal.jpg'

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="home-gallery-container" id="gallery">
                <div className="firstRow galleryRow">
                    <div className="responsive">
                        <div className="gallery">
                            <a href={img1}>
                                <img src={img1} alt="engine1" width="600" height="400"/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img2}>
                                <img src={img2} alt="engine1" width="600" height="400"/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img1}>
                                <img src={img1} alt="engine1" width="600" height="400"/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img2}>
                                <img src={img2} alt="engine1" width="600" height="400"/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>
                </div>

                <div className="secondRow galleryRow">
                    <div className="responsive">
                        <div className="gallery">
                            <a href={img1}>
                                <img src={img1} alt="engine1" width="600" height="400"/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img2}>
                                <img src={img2} alt="engine1" width="600" height="400"/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img1}>
                                <img src={img1} alt="engine1" width="600" height="400"/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a href={img2}>
                                <img src={img2} alt="engine1" width="600" height="400"/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}