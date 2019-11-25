import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import conception from '../../assets/conception.png';
import iphonex from '../../assets/iphone-x.png'
import light from '../../assets/lightbulb-outline.png';
import rule from '../../assets/ruler-square.png';
import adjust from '../../assets/image-auto-adjust.png';
import animate from '../../assets/animation-play-outline.png';

export default function Conception() {
    const { translate } = useContext(I18nContext);
    return (
        <div className='container conception'>
            <p className='text-center' style={{color:'orange', fontWeight:'bold'}}>{translate('web_conc_title')}</p>
            <div className='row text-center' style={{marginTop:'5vh'}}>
                <div className='col-md-6'>
                    <img src={iphonex} width='100%' alt='conception' />
                </div>
                <div className='col-md-6'>
                <br />
                    <img src={conception} width='100%' alt='conception' />
                </div>
            </div>
            <div className='row text-center' style={{marginTop:'10vh'}}>
                <div className='col-md-3'>
                    <img src={light} alt='light' />
                    <br />
                    <br />
                    <p style={{fontWeight:'bold'}}>{translate('web_conc_def_title')}</p>
                    <p>{translate('web_conc_def_descri')}</p>
                </div>
                <div className='col-md-3'>
                    <img src={rule} alt='rule' />
                    <br />
                    <br />
                    <p style={{fontWeight:'bold'}}>{translate('web_conc_des_title')}</p>
                    <p>{translate('web_conc_des_descri')}</p>
                </div>
                <div className='col-md-3'>
                    <img src={adjust} alt='adjust' />
                    <br />
                    <br />
                    <p style={{fontWeight:'bold'}}>{translate('web_conc_cre_title')}</p>
                    <p>{translate('web_conc_des_descri')}</p>
                </div>
                <div className='col-md-3'>
                    <img src={animate} alt='animate' />
                    <br />
                    <br />
                    <p style={{fontWeight:'bold'}}>{translate('web_conc_ani_title')}</p>
                    <p>{translate('web_conc_ani_descri')}</p>
                </div>
            </div>
            <div className='text-center'>
                <Link to='/portfolio'>
                    <Fab style={{color:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                    {translate('web_conc_btn')}
                    </Fab>
                </Link>
            </div>
        </div>
    )
}