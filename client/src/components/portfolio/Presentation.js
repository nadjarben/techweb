import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import port from '../../assets/port.png';
import { rollIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(rollIn, 'bounce')
    }
  }

export default function Presentation() {
    const { translate } = useContext(I18nContext);
    const bg = port
    return (
        <StyleRoot>
        <div style={styles.bounce}>
        <div className='port' style={{backgroundImage: `url(${bg})`}}>
            <div>
                
                
            <div className='container'>
                <h2 style={{fontWeight:'bold'}}>Portfolio</h2>
                <p>{translate('port_pres_title')}</p>
                <br />
                <Link to='/contact'>
                    <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                        {translate('web_devis_btn')}
                    </Fab>    
                </Link>   
            </div>
            </div>
        </div>
        </div>
                    </StyleRoot>
    )
}