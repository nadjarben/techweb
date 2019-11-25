import React, {useContext} from 'react';
import { I18nContext } from '../../i18n';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import responsive from '../../assets/responsive.png'

export default function Reponsive() {
    const { translate } = useContext(I18nContext);
    return (
        <div>
        <Divider variant="middle" />
        <div className='container respons'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2 style={{fontWeight:'bold'}}>{translate('home_res_title')}
                    </h2>
                    <br/>
                    <h5 style={{color:'orange'}}>{translate('home_res_title2')}</h5>
                    <br/>
                    <ul>
                    <li>{translate('home_res_li1')}</li>
                    <br/>
                    <li>{translate('home_res_li2')}</li>
                    <br/>
                    <li>{translate('home_res_li3')}</li>
                    <br/>
                    <li>{translate('home_res_li4')}</li>
                    </ul>
                    <br/>
                    <Link to='/web'>
                        <Fab style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
                        {translate('home_descri_sav')}
                        </Fab>
                    </Link>  
                </div>

                <div className='col-md-6 pics'>
                    <br />
                    <img src={responsive} width='100%' alt='responsive' />
                </div>
            </div>
        </div>
        <br/>
        </div>
    )
}