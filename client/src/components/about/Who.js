import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';
import cvphoto from '../../assets/dev.png';
import share from '../../assets/share.png';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(zoomIn, 'bounce')
    }
  }

export default function Who() {
    const { translate } = useContext(I18nContext);
    return (
        <div className='container about'>
            <div className='text-center'>
                <h1 style={{fontWeight:'bold'}}>{translate('abo_title1')}</h1>
                <h5>{translate('abo_title2_1')}<br/> {translate('abo_title2_2')}</h5>
            </div>
            <div className='row text-center cv'>
                <div className='col-md-6'>
                <StyleRoot>
                        <div style={styles.bounce}>
                            <img src={cvphoto} alt='cv' width='80%' />                 
                        </div>
                    </StyleRoot>
                </div>
                <div className='col-md-6'>
                    <h3 style={{fontWeight:'bold', color:'orange'}}>{translate('abo_title3')}</h3>
                    <br/>
                    <p>{translate('abo_text_1')}<br/>
                        {translate('abo_text_2')} 
                        <br />
                        {translate('abo_text_3')}
                        </p>
                </div>
            </div>
            <div className='text-center' style={{marginTop:'10vh'}}>
                <h2 style={{color:'orange'}}>{translate('abo_share_title')}</h2>
                <p style={{marginTop:'3vh'}}>{translate('abo_share_text1')}</p>
                <p style={{fontWeight:'bold'}}>{translate('abo_share_text2')}</p>
            </div>
            <div className='row' style={{marginTop:'3vh'}}>
                <div className='col-6 text-center share-text'>
                <Link>
                    <Fab style={{backgroundColor:'orange', fontWeight:'bold', height:'auto', minHeight:'9vh'}} variant="extended" aria-label="delete">
                        {translate('home_descri_sav1')}
                    </Fab>
                </Link>
                <br/>
                <br/>
                <Link>
                    <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                        {translate('home_descri_sav2')}
                    </Fab>
                </Link>
                <br/>
                <br/>
                <Link to='contact'>
                    <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                        {translate('navbar_contact')}
                    </Fab>
                </Link>
                </div>
                <div className='col-6 share-pic'>
                    <img src={share} alt='share' width='100%' />                 
                </div>
            </div>
        </div>
    )
}