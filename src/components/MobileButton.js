import React from 'react';

export default class Button extends React.Component {

    handleClick(e){
        const menu = document.querySelector('.main-nav-list');
        menu.classList.toggle('show');
    }
    render() {
        return (
            <button onClick={e => this.handleClick(e)} className="main-nav-toggle" aria-label="Pokaż menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        )
    }
}