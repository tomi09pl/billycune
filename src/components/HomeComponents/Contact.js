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
        // fetch(`https://billycune.pl/index.php?name=${name}&email=${email}&message=${message}`, {
        fetch("https://billycune.pl/index.php", {
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

        let idRegex=/^.{5,200}$/;

        console.log('Regex mail',emailRegex.test(email));
        console.log('Reg Name',nameRegex.test(name));
        console.log("reg mess", messageRegex.test(message));

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

        if (!idRegex.test(id)){
            this.setState({idError:true});
            correctMessage=false;
        }else{
            this.setState({idError:false});
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
                    {/* <p className="bike-icon">{bike}</p> */}
                    <Divider />
                    <div className="boxes">

                        <div className='left-wrapper'>

                        <div className="aboutText">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores beatae doloremque eius eos eveniet excepturi facilis fugit impedit labore molestias praesentium provident quasi quo, rem tempore voluptate. Magni, molestias! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptates.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis laudantium, ut. Ab nesciunt obcaecati officiis tempora veritatis vero! Fuga, inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, molestiae! Lorem ipsum dolor sit amet.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eum suscipit veniam. Aperiam doloremque labore quam recusandae tempora vero voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, voluptas!
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
                                    <td>€15</td>
                                    <td rowspan="6">€15 (2-3 days delivery)</td>
                                    <td rowspan="6">€20 (5-7 days delivery)</td>
                                    <td rowspan="6">€15-€30 (5-10 days delivery)</td>
                                </tr>
                                <tr>
                                    <td>A4 Original</td>
                                    <td>€75</td>
                                </tr>
                                <tr>
                                    <td>A3 Print</td>
                                    <td>€30</td>
                                </tr>
                                <tr>
                                    <td>A3 Original</td>
                                    <td>€100</td>
                                </tr>
                                <tr>
                                    <td>Set of 10 A3 Prints</td>
                                    <td>€70</td>
                                </tr>
                                <tr>
                                    <td>A4 custom drawing</td>
                                    <td>100€</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>

                        <div className="contactForm">
                            <h3>GET IN TOUCH!</h3>
                            <div className='messageSend'>
                                {this.state.messageSend && <p className='send'>Wiadomość została wysłana!<br/>Wkrótce się skonatktujemy.</p>}
                                {this.state.fetchError && <p className='error'>Bład serwera!</p>}
                                {(!this.state.messageSend && !this.state.fetchError) && <p/>}
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="formBox">
                                    <div className="formLeft">
                                        <label>
                                            <p className="title">Name:</p>
                                            <input className="formUp" type="text" name="name" placeholder="Your name..." onChange={this.handleChange} />
                                            {(this.state.nameError)?<span>Incorrect name!</span>:<span className='correct'/>}
                                        </label>
                                        <label>
                                            <p className="title">Email:</p>
                                            <input className="formUp" type="text" name="email" placeholder="your@email.com" onChange={this.handleChange} />
                                            {(this.state.emailError)?<span>Incorrect email!</span>:<span className='correct'/>}
                                        </label>
                                        <label>
                                            <p className="title">Art name</p>
                                            <input className="formUp" type="text" name="id" placeholder="Type in one or more..." onChange={this.handleChange} />
                                            {(this.state.emailError)?<span>Incorrect ID!</span>:<span className='correct'/>}
                                        </label>
                                    </div>
                                    <div className="formRight">
                                        <label className="formBottom">
                                            <p className="title"> Your message:</p>
                                            <textarea className="formMessage" name="message" placeholder="Type your message here..."onChange={this.handleChange} />
                                            {(this.state.messageError)?<span>Message too short!</span>:<span className='correct'/>}
                                            <div className="check1">
                                                <input type="checkbox" id="terms" name="terms" value="terms"/>
                                                <label htmlFor="terms"> I agree with terms and conditions</label>
                                            </div>
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

