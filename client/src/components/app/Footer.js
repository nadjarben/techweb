import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';
import linkedinbox from '../../assets/linkedin-box.png';
import git from '../../assets/github-box.png';
import mail from '../../assets/email (2).png';

export default function Footer() {
    const { translate } = useContext(I18nContext);

    return (
        <div style={{backgroundColor:'orange', marginTop:'10vh'}}>
            <div className='container footer'>
                <div className='row '>
                    <div className='col-md-8'>
                        <h5 style={{fontWeight:'bold'}}>{translate('footer_follow')}</h5>
                        <div className='row logo'>
                            <a href='https://www.linkedin.com/in/benjamin-nadjar/' target="blank">
                                <img src={linkedinbox} alt='linkedin' />
                            </a>
                            <a href='https://github.com/nadjarben' target="blank">
                                <img src={git} alt='git' />
                            </a>
                            <a href='mailto:nadjar.benjamin@gmail.com'>
                                <img src={mail} alt='mail' />
                            </a>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <h5 className='footer-contact' style={{fontWeight:'bold'}}>{translate('footer_contact')}</h5>
                    <p>nadjar.benjamin@gmail.com</p>
                    <p style={{marginTop:'-12px'}}>+972 58 630 55 15</p>
                    <p style={{marginTop:'-12px'}}>+336 67 97 42 54</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'black'}}>
                <div className='container text-center mentions' style={{color:'darkgrey', padding:'2vh', fontSize:'10px'}}>
                {translate('footer_mention')}
                </div>
            </div>
        </div>
    )
}