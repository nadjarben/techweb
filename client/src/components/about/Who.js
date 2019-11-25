import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';
import Fab from '@material-ui/core/Fab';
import cvphoto from '../../assets/cvphoto.png';
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import cv from '../../assets/cv-bn.pdf'

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
                            <img src={cvphoto} alt='cv' width='50%' />                 
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
            <div className='text-center'>
            <a href={cv}><Fab style={{backgroundColor:'orange', fontWeight:'bold', marginTop:'5vh'}} variant="extended" aria-label="delete">
                {translate('abo_cv')}
            </Fab></a>
            </div>
        </div>
    )
}