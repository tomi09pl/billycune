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
                            <a href="https://www.facebook.com/hadrian.cone">
                                <div className="facebook"/>
                            </a>
                            <a href="https://www.instagram.com/billycuneart/">
                                <div className="instagram"/>
                            </a>
                            <AiOutlineMail size={36}/>
                        </div>
                    </div>
                    <div className="box2">
                        <p>billycune.pl || 2020</p>
                    </div>
                    <div className="box3"/>
                </div>
            </div>
        )
    }
}