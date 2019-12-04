import React, {useContext, useState } from 'react';
import { I18nContext } from '../../i18n';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import react from '../../assets/react.png';
import wp from '../../assets/wp.png'
import seo from '../../assets/seo.png';

export default function Services() {
    const { translate } = useContext(I18nContext);
    const [displayRn, setDisplayRn] = useState(false);
    const [displayRjs, setDisplayRjs] = useState(false);
    const [displayNode, setDisplayNode] = useState(false);
    /*
    const [isMobile, setIsmobile] = useState(false);
    const [isDeskopt, setIsDeskopt] = useState(false);
    useEffect(() => {
        // Update the document title using the browser API
        screenSize();
      });

    const screenSize = () => {
        if(window.innerWidth < 650) {
            setIsmobile(true)
        }
        if(window.innerWidth > 650) {
            setIsDeskopt(true)
        }
    }
    */
    return (
        <div>
        <Divider variant="middle" />
        <div className='container serv'>

            <h2 className='text-center' style={{fontWeight:'bold'}}>Services</h2>
            <p className='text-center text-serv'>{translate('home_serv_title')}</p>

            <div className='row text-center' style={{marginTop:'10vh'}}>
                <div className='col-md-4'>
                    <img src={react} alt='react' />
                    <h5 style={{marginTop:'2vh', fontWeight:'bold'}}>{translate('home_serv_react_title')}</h5>
                    <br/>
                    <div className='text-left list'>
                        <ul className='list-services'>
                            <li>{translate('home_serv_react_li1')}</li>
                            <li>{translate('home_serv_react_li4')}</li>
                            <li>{translate('home_serv_react_li2')}</li>
                            <li>{translate('home_serv_react_li3')}</li>
                        </ul>
                    <br/>
                    <Button
                        onClick={() => setDisplayRjs(!displayRjs) 
                                    + setDisplayRn(false)
                                    + setDisplayNode(false)
                        }
                        style={{color:'orange'}}>
                        {translate('home_descri_sav')}
                    </Button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={seo} alt='seo' width='50%' style={{marginTop:'-4vh'}} />
                    <h5 style={{marginTop:'0vh', fontWeight:'bold'}}>{translate('home_serv_seo_title')}</h5>
                    <br/>
                    <div className='text-left'>
                        <ul className='list-services'>
                            <li>{translate('home_serv_seo_li1')}</li>
                            <li>{translate('home_serv_seo_li2')}</li>
                            <li>{translate('home_serv_seo_li3')}</li>
                            <li>{translate('home_serv_seo_li4')}</li>
                        </ul>
                    <br/>
                    <Button 
                        onClick={() => setDisplayRn(!displayRn)
                                    + setDisplayRjs(false)
                                    + setDisplayNode(false)
                        }
                        style={{color:'orange'}}>
                        {translate('home_descri_sav')}
                    </Button>
                </div>
                </div>
                <div className='col-md-4'>
                    <img src={wp} alt='wp' width='33%'/>
                    <h5 style={{marginTop:'2vh', fontWeight:'bold'}}>{translate('home_serv_node_title')}</h5>
                    <br/>
                    <div className='text-left'>
                        <ul className='list-services'>
                            <li>{translate('home_serv_node_li1')}</li>
                            <li>{translate('home_serv_node_li2')}</li>
                            <li>{translate('home_serv_node_li3')}</li>
                            <li>{translate('home_serv_node_li4')}</li>
                        </ul>
                    <br/>
                    <Button
                        onClick={() => setDisplayNode(!displayNode)
                                    + setDisplayRjs(false)
                                    + setDisplayRn(false)
                        }
                        style={{color:'orange'}}>
                        {translate('home_descri_sav')}
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    )
}