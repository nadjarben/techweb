import React from 'react';
import { Helmet } from 'react-helmet';
import '../components/portfolio/Portfolio.css'
import '../components/portfolio/Presentation';
import Presentation from '../components/portfolio/Presentation';
import Projet from '../components/portfolio/Projets';

export default function Portfolio() {
    return (
        <div>
            <Helmet>
                <title>Portfolio de web applications</title>
                <meta name="description" content="Voici certains de nos projets React, Node realisés en freelance par un ou plusieurs membres de notre groupe." />
            </Helmet>
            <Presentation />
            <Projet />
        </div>
    )
}