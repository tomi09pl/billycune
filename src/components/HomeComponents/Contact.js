import React from 'react';
import Divider from '../Divider';

export default class Contact extends React.Component{
    state={
        name:'',
        email:'',
        id: '',
        message:'',

        nameError:false,
        emailError:false,
        idError: false,
        messageError:false,

        messageSend:false,
        fetchError:false

    };
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    sendForm=(name,email,id,message)=>{
        fetch(`https://${window.location.host}/index.php`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, id, message
            })
        })
            .then((data)=> {
                console.log(data);
                this.setState({messageSend:true,fetchError:false})
            })
            .catch((error)=> {
                console.log(error);
                this.setState({messageSend:false,fetchError:true});
            })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({messageSend:false});
        let name=this.state.name;
        let email=this.state.email;
        let id=this.state.id;
        let message=this.state.message;
        let correctMessage=true;

        let nameRegex=/^.{1,200}$/;

        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let messageRegex=/^.{5,1000}$/;

        if (!nameRegex.test(name)){
            this.setState({nameError:true});
            correctMessage=false;
        }else{
            this.setState({nameError:false});
        }

        if (!emailRegex.test(email)){
            this.setState({emailError:true});
            correctMessage=false;
        }else{
            this.setState({emailError:false});
        }

        if (!messageRegex.test(message)){
            this.setState({messageError:true});
            correctMessage=false;
        }else{
            this.setState({messageError:false});
        }

        if (correctMessage){
            this.sendForm(name,email,id,message);
        }



    };

    render() {
        return (
            <div className="home-contact-container" id="contact">
                <div className="howToOrder">
                    <h1>HOW TO ORDER ART</h1>
                    <Divider />
                    <div className="boxes">

                        <div className='left-wrapper'>

                        <div className="aboutText">
                            <p>
                            To order Art or Set of Arts please get in touch with me using contact form on this website.
                            </p>
                            <p>
                            We are using PayPal as a secure mean of payment. After receiving your details needed for shipping and when payment is cleared I email you with tracking number for order.
                            </p>
                            <p>
                            When making PayPal payment please include in comment information about your address and phone number. These details are necessary to order a courier delivery.
                            </p>
                        </div>

                        <table className='order-table'>
                                <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Delivery EU</th>
                                    <th>Delivery USA</th>
                                    <th>Delivery World</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>A4 Print</td>
                                    <td>€10</td>
                                    <td className='centeredCell' rowspan="8">€10 - €20<br/>(2-6 days GLS / DPD)</td>
                                    <td className='centeredCell' rowspan="8">$30<br/>(5-7 days FedEx)</td>
                                    <td className='centeredCell' rowspan="8">€30 - €50<br/>(contact me for details)</td>
                                </tr>
                                <tr>
                                    <td>A4 Set of choice - 12 Prints</td>
                                    <td>€50</td>
                                </tr>
                                <tr>
                                    <td>A4 Original</td>
                                    <td>€150</td>
                                </tr>
                                <tr>
                                    <td>A3 Print</td>
                                    <td>€15</td>
                                </tr>
                                <tr>
                                    <td>A3 Original</td>
                                    <td>€250</td>
                                </tr>
                                <tr>
                                    <td>A3 Black Edition Set - 12 Prints</td>
                                    <td>€80</td>
                                </tr>
                                <tr>
                                    <td>A3 Retro Edition Set - 12 Prints</td>
                                    <td>€80</td>
                                </tr>
                                <tr>
                                    <td>A3 White Edition Set - 12 Prints</td>
                                    <td>€80</td>
                                </tr>                                
                                </tbody>
                            </table>

                        </div>

                        <div className="contactForm">
                            <h3>GET IN TOUCH!</h3>
                            <div className='messageSend'>
                                {this.state.messageSend && <p className='send'>Thank you! Message sent.<br/>We'll get back to you soon.</p>}
                                {this.state.fetchError && <p className='error'>Message not sent!</p>}
                                {(!this.state.messageSend && !this.state.fetchError) && <p/>}
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="formBox">
                                    <div className="formLeft">
                                        <label>
                                            <p className="title">Name:</p>
                                            <input className="formUp" type="text" name="name" placeholder onChange={this.handleChange} />
                                            {(this.state.nameError)?<span>Incorrect name!</span>:<span className='correct'/>}
                                        </label>
                                        <label>
                                            <p className="title">Email:</p>
                                            <input className="formUp" type="text" name="email" placeholder onChange={this.handleChange} />
                                            {(this.state.emailError)?<span>Incorrect email!</span>:<span className='correct'/>}
                                        </label>
                                        <label>
                                            <p className="title">Art name</p>
                                            <input className="formUp" type="text" name="id" placeholder="Type in one or more..." onChange={this.handleChange} />
                                            {(this.state.idError)?<span>Art name too short!</span>:<span className='correct'/>}
                                        </label>
                                    </div>
                                    <div className="formRight">
                                        <label className="formBottom">
                                            <p className="title"> Your message:</p>
                                            <textarea className="formMessage" name="message" placeholder onChange={this.handleChange} />
                                            {(this.state.messageError)?<span>Message too short!</span>:<span className='correct'/>}
                                            <div className="check2">
                                                <input type="checkbox" id="news" name="news" value="news"/>
                                                <label htmlFor="news"> I want to receive news from website</label>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <input className="sendButton" type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
}

