
import React, { useContext } from "react";
import { I18nContext } from "../../i18n/";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import en from '../../assets/flag-en.png';
import fr from '../../assets/flag-fr.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    textAlign: 'center',
    backgroundColor:'black'
  },
}));

export default function LanguageSelect() {
  
  const { dispatch } = useContext(I18nContext);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
 
  return (
  <div className={classes.root}>
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Typography className='link' onClick={handleClick}>LANGUAGE</Typography>
        {open ? (
          <Paper className='paper'>
          <div className='lang' onClick={() => dispatch({type:'setLanguage', payload: 'en'})}><img src={en} width='30%' alt='en' /></div>
          <div className='lang' onClick={() => dispatch({type:'setLanguage', payload: 'fr'})}><img src={fr} width='30%' alt='fr' /></div>
          </Paper>
        ) : null}
        </div>
    </ClickAwayListener>
  </div>
  );
};

