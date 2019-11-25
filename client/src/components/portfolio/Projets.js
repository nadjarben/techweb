import React, { useState, useContext } from 'react';
import { I18nContext } from '../../i18n';
import yfo from '../../assets/yfof.png';
import cleaners from '../../assets/cleaners.png';
import ft from '../../assets/ftr.png';
import Fab from '@material-ui/core/Fab';



export default function Projets() {
    const { translate } = useContext(I18nContext);
    const [displayYfo, setDisplayYfo] = useState(false);
    const [displayCleaners, setDisplayCleaners] = useState(false);
    const [displayFt, setDisplayFt] = useState(false);

    const textYfo = () => {
        if(displayYfo === true)
        return (
            <div>
                {translate('port_yfo_1')}<br/>
                {translate('port_yfo_2')}<br/>
                {translate('port_yfo_3')}<br/>
                {translate('port_yfo_4')}<br/>
            </div>
        )
    }
    const textCleaners = () => {
        if(displayCleaners === true)
        return (
            <div>
                {translate('port_cle_1')}<br />
                {translate('port_cle_2')}<br/>
                {translate('port_cle_3')}<br/>
            </div>
        )
    }
    const textFt = () => {
        if(displayFt === true)
        return (
            <div>
                {translate('port_ft_1')}<br/>
                {translate('port_ft_2')}<br/>
                {translate('port_ft_3')}
            </div>
        )
    }
    const handleDisplayYfo = () => {
        setDisplayYfo(prevDisplayYfo => !prevDisplayYfo)
    }
    const handleDisplayCleaners = () => {
        setDisplayCleaners(prevDisplayCleaners => !prevDisplayCleaners)
    }
    const handleDisplayFt = () => {
        setDisplayFt(prevDisplayFt => !prevDisplayFt)
    }


    return (
        <div className='container port2'>
            <div className='text-center'>
                <h3 style={{color:'orange', fontWeight:'bold'}}>{translate('port_proj_title')}</h3>
            </div>
            <div className='row text-center'>
                <div className='col-md-4'>
                    <img className='pic' src={yfo} alt='yfo' width='100%' />
                    <h5>Your Fast Order</h5>
                    <Fab onClick={handleDisplayYfo} style={{backgroundColor:'orange'}} variant="extended" aria-label="delete">
                        {translate('home_descri_sav')}
                    </Fab>
                    <div>
                        <br/>
                        {textYfo()}
                    </div>
                </div>
                <div className='col-md-4'>
                    <img className='pic' src={cleaners} alt='cleaners' width='100%' />
                    <h5>The Cleaners</h5>
                    <Fab onClick={handleDisplayCleaners} style={{backgroundColor:'orange'}} variant="extended" aria-label="delete">
                        {translate('home_descri_sav')}
                    </Fab>
                    <div>
                        <br/>
                        {textCleaners()}
                    </div>
                </div>
                <div className='col-md-4'>
                    <img className='pic' src={ft} alt='ft' width='100%' />
                    <h5>Fast Transport</h5>
                    <Fab onClick={handleDisplayFt} style={{backgroundColor:'orange'}} variant="extended" aria-label="delete">
                        {translate('home_descri_sav')}
                    </Fab>
                    <div>
                        <br/>
                        {textFt()}
                    </div>
                </div>
            </div>
        </div>
    )
}