import React from "react";
import { AiOutlineMail } from "react-icons/ai";


export default class Footer extends React.Component {


    render() {
        return(
            <div>
                <div className="contactFooter">
                    <div className="box1">
                        <div className="socialIcons">
                        <h3> Talk to me on: </h3>
                            <div className='socialIcons-wrapper'>
                                <a href="https://www.facebook.com/BillyCune/" target='_blank' rel="noopener noreferrer">
                                    <div className="facebook"/>
                                </a>
                                <a href="https://www.instagram.com/billycuneart/" target='_blank' rel="noopener noreferrer">
                                    <div className="instagram"/>
                                </a>
                                <a href="https://www.deviantart.com/cune" target='_blank' rel="noopener noreferrer">
                                    <div className="deviantart"/>
                                </a>
                                <a className='mail-footer' target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@billycune.com&body=my-text" rel="noopener noreferrer">
                                <AiOutlineMail size={28}/>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="box2">
                        <p>billycune.com || 2020</p>
                    </div>
                    <div className="box3"/>
                </div>
            </div>
        )
    }
}