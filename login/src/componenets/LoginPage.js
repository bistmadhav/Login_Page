import React from 'react'
import './LoginPage.css';
import {Button, Grid, Paper, TextField} from '@material-ui/core'

const LoginPage=() =>{
    return (
        
        <Grid>

            <h1 className ="message">
                MMS (MONEY MANAGEMENT SERVICE)
                </h1>
                <h2 className= "quote"
                
                >Helping Family,Freinds to save Income</h2>
          
           <Paper className= "Height" >
               <Grid>

               
               <h2>SignIn</h2>
               </Grid>
               
               <TextField className = "user" label ='Enter Your Email or Phone'variant="outlined" fullWidth/>
               <h6  className="id2"></h6>
               <TextField className = "pass" label ='Enter Top Secret'variant="outlined" fullWidth/>
               <h6 className ="id"> id="none" </h6>
               <Button className ="sub" color ='primary' fullWidth  variant="contained" >
                   Log In
               </Button>
                 <h6 className ="id3"></h6>
               <a className ="refe" href =""> Forget Password? </a>
               <h1 className = "id4" > </h1>
               <hr/>
               
           </Paper>
           
        </Grid>

        
    )
}

export default LoginPage
