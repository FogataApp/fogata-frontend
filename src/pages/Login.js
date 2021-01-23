import React from 'react'
import{TextField, makeStyles,Grid,Button,FormControl, Typography, Modal,Fade,Backdrop} from '@material-ui/core/'
import {Link} from 'react-router-dom/';
import'../styles/Login.css'
import Register from '../components/Register'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  zIndex:10,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




 function SignIn(){
  const [email,setEmail]= React.useState(null);
  const[password,setPassword]= React.useState(null)
  const[errorEmail,setErrorEmail]= React.useState(false);
  const[errorPassword,setErrorPassword]= React.useState(false);
  const [open, setOpen] = React.useState(false);
  
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  
  
  const handleSubmit= (e)=> {
    e.preventDefault();
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
    
    
  }
  
  return(
    
    <div className="Login">
    <div className="container">
      <div className="row">
        <div className="Login__col">
          <div className="cuadro">

            <div>
            <FormControl className={classes.root}  onSubmit={handleSubmit}> 
              <Grid component="main"   >
                <Typography component="h1" variant="h5">Login</Typography>
                <Grid item xs={12} >
                  <TextField
                    variant="outlined" 
                    required={true}
                    type="email"
                    helperText={errorEmail?"llenar campo":""}
                    error={errorEmail}
                    fullWidth
                    id="email"
                    label="Email Address"
                    onChange={(e)=>{
                      setEmail(e.target.value)}}
                  />
                </Grid>
                <Grid>
                  <br/>
                </Grid>
                <Grid item xs={12}  >
                  <TextField                    
                    variant="outlined"
                    required={true}
                    type="password" 
                    helperText={errorPassword?"llenar campo":""}
                    error={errorPassword}
                    fullWidth
                    label="Password"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value)}}
                    autoComplete="current-password"
                  />
              </Grid>
              <Grid>
                  <br/>
              </Grid>
              </Grid>
              <Button               
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSubmit}>
                Sign In
              </Button>
      
      </FormControl>
      <Link onClick={handleOpen}> SIGN UP</Link>
      <div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Register/>
          </div>
        </Fade>
      </Modal>
  </div>

      
                
                
            </div>
          

           </div>
        </div>
        

      </div>
    </div>
    
   
  </div>
  
)
}
export default SignIn;
