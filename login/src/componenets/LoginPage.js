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

               
               <h4 className ="sign">Welcome to MMS!</h4>
               </Grid>
               
               <TextField className = "user" label ='Enter Your Email or Phone'variant="outlined" fullWidth/>
               <h6  className="id2"></h6>
               <TextField  type="Password" className = "pass" label ='Enter Top Secret'variant="outlined" fullWidth/>
               <h6 className ="id"> id="none" </h6>
               <Button className ="sub" fullWidth  variant="contained" style={{background:'rgb(9, 94, 84)', color:'white'}} >
                   Log In
               </Button>
                 <h6 className ="id3"></h6>
               <a className ="refe" href =""> Forget Password? </a>
               <h1 className = "id4" > </h1>
               <hr/>
                <h1></h1>
               <Button className = "bth" variant ="contained" style={{background:'rgb(9, 94, 84)', color:'white'}}>
                   Create New Account
               </Button>
               
           </Paper>
           <h4 className = "copy">
           MMS (Money Management Service) © 2021  
           </h4>
               
           
        </Grid>

        
    )
}

export default LoginPage
