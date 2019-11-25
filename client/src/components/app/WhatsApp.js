import React from 'react';
import './WhatsApp.css';
import whatsapp from '../../assets/whatsappo.png';

export default function WhatsApp() {
    return (
        <a href='https://api.whatsapp.com/send?phone=972586305515'>
            <img src={whatsapp} alt='whatsapp' className='whatsapp' />
        </a>
    )
}