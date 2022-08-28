import { Badge, Divider, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=>({
  title:{
    flexGrow: 1
  },
  tagline:{
    fontSize:20,
    justifyContent:"center",
    fontFamily:"Monteserrat",
    textTransform:"uppercase"
  }
}))

export default function Header() {

  const classes = useStyles();
  return (
    <>
    <Toolbar>
        <IconButton color='inherit'>
            <MenuIcon />
        </IconButton>

        <Typography variant='h6' color='inherit' className={classes.title}>Blogg Website</Typography>

        <IconButton color='inherit'>
            <Badge badgeContent={4} color="primary">
                    <NotificationsIcon/>
            </Badge>
        </IconButton>

        <IconButton color='inherit'>
            <AccountCircleIcon/>
        </IconButton>
    </Toolbar>

    <Divider></Divider>

    <Toolbar className={classes.tagline}>exprees your emotions through words</Toolbar>

    </>
  )
}
