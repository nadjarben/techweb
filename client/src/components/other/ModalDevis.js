import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import logo from '../../assets/logo_transparent.png';
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'orange',
    textAlign: 'center'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
    width: 300
  },
}));

const ranges = [
  {
    value: 1000,
    label: 'Un site vitrine',
  },
  {
    value: 2000,
    label: 'Un site e-commerce',
  },
  {
    value: 3000,
    label: 'Une web app React',
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    price: 0,
    priceRange: 1000
    ,
  });
  const [open, setOpen] = React.useState(false);
  const [toggleDom, setToggleDom] = React.useState(true);
  const [toggleHeb, setToggleHeb] = React.useState(true);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePriceHeb =  event => {
    console.log(values)
    if(toggleHeb === true)
      setValues({ priceRange: parseInt(values.priceRange) +  parseInt(event.target.value) });
    if(toggleHeb === false)
    setValues({ priceRange: parseInt(values.priceRange) - parseInt(event.target.value) });
  };

  const handlePriceDom =  event => {
    console.log(values)
    if(toggleDom === true)
      setValues({ priceRange: parseInt(values.priceRange) +  parseInt(event.target.value) });
    if(toggleDom === false)
    setValues({ priceRange: parseInt(values.priceRange) - parseInt(event.target.value) });
  };

  const handleToggleHeb = (event) => {
    setToggleHeb(prevToggleHeb => !prevToggleHeb);
    handlePriceHeb(event);
}
  const handleToggleDom = (event) => {
    setToggleDom(prevToggleDom => !prevToggleDom);
    handlePriceDom(event);
}
  

  return (
    <div>
      <Fab onClick={handleClickOpen} style={{backgroundColor:'orange', fontWeight:'bold'}} variant="extended" aria-label="delete">
          JE SOUHAITE OBTENIR UN DEVIS GRATUIT
      </Fab> 
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Estimation création d'un site ou d'une application web
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={logo} alt='logo' width='100%' style={{marginTop:'10vh'}} />
            </div>
          <div className='col-md-6'>
          <TextField
            select
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Je souhaite"
            value={values.priceRange}
            onChange={handleChange('priceRange')}
            InputProps={{
              startAdornment: <InputAdornment position="start">Type de site</InputAdornment>,
            }}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <FormControlLabel
          value={10}
          control={<Switch color="primary" />}
          label="Je possède déjà un nom de domaine"
          labelPlacement="start"
          onClick={handleToggleDom}
        />
        <br />
        <FormControlLabel
          value={50}
          control={<Switch color="primary" />}
          label="Je possède déjà une offre d’hébergement"
          labelPlacement="start"
          onClick={handleToggleHeb}
        />
        <br />
        <Fab style={{color:'orange'}} variant="extended" aria-label="delete">
              {values.priceRange}$
        </Fab>
          </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
