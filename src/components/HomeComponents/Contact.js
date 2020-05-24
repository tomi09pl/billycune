import React from 'react';

// export default class Contact extends React.Component {
//     render() {
//         return(
//             <div className="home-contact-container" id="contact">How to order art + Contact Form
//
//
//             </div>
//         )
//     }
// }


export default class Contact extends React.Component{
    state={
        name:'',
        email:'',
        id: '',
        message:'',

        nameError:false,
        emailError:false,
        messageError:false,

        messageSend:false,
        fetchError:false

    };
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    sendForm=(name,email,message)=>{
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
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
        let message=this.state.message;
        let correctMessage=true;

        let nameRegex=/^[a-zA-Z]{1,200}$/;

        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let messageRegex=/^.{120,1000}$/;

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

        if (!messageRegex.test(message)){
            this.setState({messageError:true});
            correctMessage=false;
        }else{
            this.setState({messageError:false});
        }

        if (correctMessage){
            this.sendForm(name,email,message);
        }



    };

    render() {
        return (
            <div className="home-contact-container" id="contact">
                <div className="contactForm">
                    <p>Contact form</p>
                    <div className="contactDecoration" />
                    <div className='messageSend'>
                        {this.state.messageSend && <p className='send'>Wiadomość została wysłana!<br/>Wkrótce się skonatktujemy.</p>}
                        {this.state.fetchError && <p className='error'>Bład serwera!</p>}
                        {(!this.state.messageSend && !this.state.fetchError) && <p/>}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="formTop">
                            <label>
                                <p className="title">Name:</p>
                                <input className="formUp" type="text" name="name" placeholder="Krzysztof" onChange={this.handleChange} />
                                {(this.state.nameError)?<span>Podane imię jest nieprawidłowe!</span>:<span className='correct'/>}
                            </label>
                            <label>
                                <p className="title">Email:</p>
                                <input className="formUp" type="text" name="email" placeholder="abc@xyz.pl" onChange={this.handleChange} />
                                {(this.state.emailError)?<span>Podany email jest nieprawidłowy!</span>:<span className='correct'/>}
                            </label>
                            <label>
                                <p className="title">Art name / ID</p>
                                <input className="formUp" type="text" name="email" placeholder="abc@xyz.pl" onChange={this.handleChange} />
                                {(this.state.emailError)?<span>Podany email jest nieprawidłowy!</span>:<span className='correct'/>}
                            </label>
                        </div>
                        <label className="formBottom">
                            <p className="title"> Wpisz swoją wiadomość:</p>
                            <textarea className="formMessage" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A earum maxime perferendis rerum voluptas? Consectetur corporis incidunt non quis rem?"onChange={this.handleChange} />
                            {(this.state.messageError)?<span>Widomość musi miec  conajmniej 120 znaków!</span>:<span className='correct'/>}
                        </label>
                        <input className="sendButton" type="submit" value="Wyślij" />
                    </form>
                </div>
                <div className="contactFooter">
                    <p>billycune.pl || 2020</p>
                    <div className="socialIcons">
                        Talk to me on:
                        <div className="facebook"/>
                        <div className="instagram"/>
                        <div>mail icon</div>
                    </div>
                </div>
            </div>


        )

    }
}

