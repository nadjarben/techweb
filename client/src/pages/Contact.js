import React from 'react';
import { Helmet } from 'react-helmet';
import '../components/contact/Contact.css';
import Questions from '../components/contact/Question';
import Form from '../components/contact/Form';

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contactez nous pour un devis ou la réalisation d'une PWA ou SPA</title>
                <meta name="description" content="Remplissez le formulaire de contact pour toute informations au sujet du développement d'une SPA ou PWA" />
            </Helmet>
            <Questions />
            <Form />
        </div>
    )
}