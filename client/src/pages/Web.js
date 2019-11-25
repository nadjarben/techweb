import React from 'react';
import Devis from '../components/web/Devis';
import Conception from '../components/web/Conception';
import '../components/web/Web.css';

export default function Home() {
    return (
        <div>
            <Devis />
            <Conception />
        </div>
    )
}