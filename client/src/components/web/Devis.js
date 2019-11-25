import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import devis from '../../assets/devis.png';
import { hinge } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


export default function Devis() {
    const { translate } = useContext(I18nContext);

    //const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    const bg = devis

    const styles = {
        bounce: {
          animation: 'x 2s',
          animationName: Radium.keyframes(hinge, 'bounce')
        }
      }
    

    return (
        <div className='devis' style={{backgroundImage: `url(${bg})`}}>
            <div className='container'>
                <h2 style={{fontWeight:'bold'}}>{translate('web_devis_title')}<br/>SEO</h2>
                <p>{translate('web_devis_title2')}</p>
                <div className='row'>
                    <div className='col-md-4'>
                    <StyleRoot>
                        <div style={styles.bounce}>
                        <Link to='/contact'>
                            <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                            {translate('web_devis_btn')}
                            </Fab>    
                        </Link>                     
                        </div>
                    </StyleRoot>
                    </div>
                    <div className='col-md-3 button'>
                        <Link to='/portfolio'>
                            <Fab style={{color:'orange'}} variant="extended" aria-label="delete">
                                PORTFOLIO
                            </Fab>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}