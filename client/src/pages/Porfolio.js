import React from 'react';
import '../components/portfolio/Portfolio.css'
import '../components/portfolio/Presentation';
import Presentation from '../components/portfolio/Presentation';
import Projet from '../components/portfolio/Projets';

export default function Portfolio() {
    return (
        <div>
            <Presentation />
            <Projet />
        </div>
    )
}