import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { zoomInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: Radium.keyframes(zoomInRight, 'bounce')
  }
}


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(13),
    marginRight: theme.spacing(13),
    width: 500,
  },
}));

export default function OutlinedTextFields(state) {
  const { translate } = useContext(I18nContext);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    axios.post('http://portfolio-bn.herokuapp.com/api/send', {values})
    alert('Merci, votre message a bien ete envoyé')
  }

  return (
    <StyleRoot>
    <div style={styles.bounce}>                      
    <form className='container form'style={{marginTop:'5vh'}}>
        <div className='row justify-content-center'>
      <TextField
        id="outlined-name"
        label={translate('form_name')}
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
            shrink: true,
          }}
      />
      </div>
      <div className='row justify-content-center'>
      <TextField
        id="outlined-mail"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
            shrink: true,
          }}
      />
      </div>
      <div className='row justify-content-center'>
      <TextField
        id="outlined-full-width"
        label="Message"
        className={classes.textField}
        value={values.message}
        onChange={handleChange('message')}
        margin="normal"
        variant="outlined"
        multiline
        rows='4'
        fullWidth
        InputLabelProps={{
            shrink: true,
          }}
      />
      </div>
      <br/>
      <div className='row justify-content-center'>
        <Button onClick={handleSubmit} style={{color:'orange', borderColor:'orange'}} variant="outlined">
        {translate('form_button')}
        </Button>
      </div>
    </form>
    </div>
  </StyleRoot>
  );
}
