import React from 'react';
import { Helmet } from 'react-helmet';
import Devis from '../components/web/Devis';
import Conception from '../components/web/Conception';
import '../components/web/Web.css';

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Développons vos projets Web</title>
                <meta name="description" content="Nous développons vos projets web. Avec notre offre clé en main, accédez à un éventail des dernieres compétences technologiques tels que React et Node et à un encadrement avec la méthode Scrum." />
            </Helmet>
            <Devis />
            <Conception />
        </div>
    )
}