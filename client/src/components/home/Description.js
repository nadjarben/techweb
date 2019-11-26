import React, {useContext} from 'react';
import { I18nContext } from '../../i18n';
import { Link } from 'react-router-dom';
import TextLoop from "react-text-loop";
import Fab from '@material-ui/core/Fab';
import logo from '../../assets/techweblogo.png';
import { zoomInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(zoomInRight, 'bounce')
    }
  }

export default function Description() {
    const { translate } = useContext(I18nContext);
    return (
        <div className='container descri'>
            <div className='row'>

                <div className='col-md-6 order-md-2 logo'>
                     <StyleRoot>
                        <div style={styles.bounce}>
                        <img src={logo} width='80%' alt='logo' />
                        </div>
                    </StyleRoot>
                </div>

                <div className='col-md-6 order-md-1 text-descri'>
                    <h3 style={{fontWeight:'bold'}}>
                        {translate('home_descri_dev')}
                    <TextLoop>
                        <p style={{color:'orange'}}>#React.Js</p>
                        <p style={{color:'orange'}}>#Node.Js</p>
                        <p style={{color:'orange'}}>#React.Native</p>
                    </TextLoop>{" "}
                    </h3>
                    <br/>
                    <h5>Front-End React Development</h5>
                    <h5>Back-End Node Development</h5>
                    <h5>UX/UI Design</h5>
                    <h5>Application Testing</h5>
                    <br/>
                    <Link to='/web'>
                        <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                        {translate('home_descri_sav')}
                        </Fab>
                    </Link>              
                </div>
            </div>
        </div>
    )
}