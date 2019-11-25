import React from 'react';
import { Link } from 'react-router-dom';
import TextLoop from "react-text-loop";
import Fab from '@material-ui/core/Fab';
import logo from '../../../assets/logo_transparent.png';
import { zoomInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(zoomInRight, 'bounce')
    }
  }

export default function Description() {
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
                    <span>Web Developer Freelance </span>
                    <TextLoop>
                        <p style={{color:'orange'}}>#React.Js</p>
                        <p style={{color:'orange'}}>#Node.Js</p>
                    </TextLoop>{" "}
                    </h3>
                    <h5>Developer Web Front-End React</h5>
                    <h5>Developer Web Back-End Node</h5>
                    <h5>UX/UI Designer</h5>
                    <h5>SEO Referencement</h5>
                    <br/>
                    <Link to='/web'>
                        <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                            More
                        </Fab>
                    </Link>              
                </div>
            </div>
        </div>
    )
}