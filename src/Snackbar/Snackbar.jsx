import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles'
import { SettingsPowerRounded } from '@material-ui/icons'


const Customize = ({open,SetOpen}) => {
    const classes=useStyles();
    const handleClose=(event,reason)=>{
        if(reason==='cickaway')return;


        SetOpen(false)
    }
  return (
    <div className={classes.root}><Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={open} autoHideDuration={300}
    onClose={handleClose} >
        <MuiAlert onClose={handleClose} severity='success' elevation={6} variant='filled'>Transaction successfully created</MuiAlert>
        </Snackbar></div>
  )
}

export default Customize