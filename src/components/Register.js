import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const[name,setName] = React.useState('');
  const [email,setEmail]= React.useState('');
  const[password,setPassword]= React.useState('');
  const[number,setNumber]= React.useState('');

  const[errorEmail,setErrorEmail]= React.useState(false);
  const[errorPassword,setErrorPassword]= React.useState(false);
  const[errorName,setErrorName]= React.useState(false);
  const[errorNumber,setErrorNumber]= React.useState(false);

  



  const handleSubmit=(event)=>{
    event.preventDefault();
    if(!email){
      setErrorEmail(true)  
    }
    else{
      setErrorEmail(false)
    }
    if(!password){
      setErrorPassword(true)
    }
    else{
      setErrorPassword(false)
    }
    if(!name){
      setErrorName(true)
    }
    else{
      setErrorName(false)
    }
    if(!number){
      setErrorNumber(true)
    }
    else{
      setErrorNumber(false)
    }
    if(errorName===false&&errorNumber===false&& errorEmail===false&& errorPassword===false){
       
    }
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onsubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required={true}
                fullWidth
                id="Name"
                helperText={errorName?"llenar campo":""}
                error={errorName}
                type="text"

                label="Full Name"
                onChange={e=>setName(e.target.value)}
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                required={true}
                type="email"
                helperText={errorEmail?"llenar campo":""}
                error={errorEmail}
                label="Email Address"
                onChange={e=>setEmail(e.target.value)}
                

              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password" 
                helperText={errorPassword?"llenar campo":""}
                error={errorPassword}
                id="password"
                onChange={e =>setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone number"
                helperText={errorNumber?"llenar campo":""}
                error={errorNumber}
                name="text"
                onChange={e=>setNumber(e.target.value)}
                autoComplete="number"
              />
            </Grid>
          </Grid>
          <Button
           
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            
          >
            Sign Up
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
} 