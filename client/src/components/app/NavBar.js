import React, { useEffect, useContext } from 'react';
import { I18nContext } from '../../i18n';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageSelect from './LanguageSelect';
import { Link } from 'react-router-dom';

const styleSheet = {
  list : {
    width : 250,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    cursor : "pointer",
    color: 'orange',
  }
}

export default function ResAppBar() {
  const { translate } = useContext(I18nContext);
  const [drawer, setDrawer] = React.useState(false);
  const [drawerActivate, setDrawerActivate] = React.useState(false);
  useEffect(() =>  {
    if(window.innerWidth <= 600){
      setDrawerActivate(true)
    }}, []
  );
  
    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        setDrawerActivate(true);
      }
      else{
        setDrawerActivate(false);
      }
    });

  //Small Screens
  function createDrawer(){
    return (
      <div>
        <AppBar style={{boxShadow:'none', backgroundColor:'white'}} >
          <Toolbar style={{backgroundColor:'transparent'}}>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
              style={styleSheet.sideBarIcon}
                onClick={()=>{setDrawer(true)}} />

            </Grid>
          </Toolbar>
        </AppBar>


        <SwipeableDrawer
         open={drawer}
         onClose={()=>{setDrawer(false)}}
         onOpen={()=>{setDrawer(true)}}>

          <LanguageSelect />
          
           <div
           style={{backgroundColor:'orange', height:'100vh'}}
             tabIndex={0}
             role="button"
             onClick={()=>{setDrawer(false)}}
             onKeyDown={()=>{setDrawer(false)}}>

            <List style = {styleSheet.list}>
                         <LanguageSelect />

               <ListItem key = {1} button divider><Link to='/' className='link2'>{translate('navbar_home')}</Link></ListItem>
               <ListItem key = {2} button divider><Link to='/web' className='link2'>{translate('navbar_web')}</Link></ListItem>
               <ListItem key = {3} button divider><Link to='/portfolio' className='link2'>{translate('navbar_portfolio')}</Link></ListItem>
               <ListItem key = {4} button divider><Link to='/about' className='link2'>{translate('navbar_about')}</Link></ListItem>
               <ListItem key = {5} button divider><Link to='/contact' className='link2'>{translate('navbar_contact')}</Link></ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  function destroyDrawer(){
    return (
      <AppBar style={{backgroundColor:'white', boxShadow:'none'}}>
          <div className='container'>
              <div className='row justify-content-center'>
            <Toolbar style={{color:'orange', marginTop:'-1'}}>
              <Typography><Link className='link' to='/'>{translate('navbar_home')}</Link></Typography>
              <Typography><Link className='link' to='/web'>{translate('navbar_web')}</Link></Typography>
              <Typography><Link to='/portfolio' className='link'>{translate('navbar_portfolio')}</Link></Typography>
              <Typography><Link to='/about' className='link'>{translate('navbar_about')}</Link></Typography>
              <Typography><Link to='contact' className='link'>{translate('navbar_contact')}</Link></Typography>
              <LanguageSelect />
            </Toolbar>
            </div>
        </div>
      </AppBar>
    )
  }


    return(
      <div>
        {drawerActivate ? createDrawer() : destroyDrawer()}
      </div>
    );
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};
