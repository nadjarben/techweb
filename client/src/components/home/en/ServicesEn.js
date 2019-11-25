import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import react from '../../../assets/react.png';
import wp from '../../../assets/wp.png'
import seo from '../../../assets/seo.png'

export default function Services() {
    return (
        <div>
        <Divider variant="middle" />
        <div className='container serv'>

            <h2 className='text-center' style={{fontWeight:'bold'}}>Services</h2>
            <p className='text-center text-serv'>De la création de votre site web à son référencement par les moteurs de recherche en passant par la gestion de vos réseaux sociaux, je saurai accompagner l’ensemble de votre stratégie digitale.</p>

            <div className='row text-center' style={{marginTop:'10vh'}}>
                <div className='col-md-4'>
                    <img src={react} alt='react' />
                    <h5 style={{marginTop:'2vh', fontWeight:'bold'}}>Application React.JS</h5>
                    <br/>
                    <div className='text-left list'>
                    <li>Développement: HTML/CSS, JS & React/Redux</li>
                    <li>Intégration site web sur-mesure</li>
                    <li>Application web, Single-page app React</li>
                    <li>Cible : Start-up, ETI, Grandes Entreprises</li>
                    <br/>
                    <Button style={{color:'orange'}}>
                        En savoir plus
                    </Button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={seo} alt='seo' />
                    <h5 style={{marginTop:'2vh', fontWeight:'bold'}}>Optimisation SEO</h5>
                    <br/>
                    <div className='text-left'>
                    <li>Audit technique</li>
                    <li>Définitions des keywords et meta</li>
                    <li>Outils d’aide au référencement</li>
                    <li>Optimisation pour les PWA</li>
                    <li>Cible : Tous types d’entreprises</li>
                    <br/>
                    <Button style={{color:'orange'}}>
                        En savoir plus
                    </Button>                    
                </div>
                </div>
                <div className='col-md-4'>
                    <img src={wp} alt='wp' width='33%'/>
                    <h5 style={{marginTop:'2vh', fontWeight:'bold'}}>Développement Node.Js</h5>
                    <br/>
                    <div className='text-left'>
                    <li>Développement Back-End en Js</li>
                    <li>Rest Api</li>
                    <li>Top niveau performance</li>
                    <li>Facilement scalable</li>
                    <li>Cible : Start-up, ETI, Grandes Entreprises</li>
                    <br/>
                    <Button style={{color:'orange'}}>
                        En savoir plus
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    )
}