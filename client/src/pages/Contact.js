import React from 'react';
import '../components/contact/Contact.css';
import Questions from '../components/contact/Question';
import Form from '../components/contact/Form';

export default function Contact() {
    return (
        <div>
            <Questions />
            <Form />
        </div>
    )
}