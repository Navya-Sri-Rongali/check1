
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';//this is our store
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { putuser } from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import './ButtonAppBar.css'
export default function ButtonAppBar(props) {
  const dispatch=useDispatch();
  const username1=useSelector(state=>state.username);
  const job1=useSelector(state=>state.job);
  console.log("in nabar username is:",username1,"his job is:",job1);
  const handleLogout = () => {
    dispatch(putuser({ username: '', job: '' }));
  }
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className='spacing_in_bar'>
            <div className='explore_tag'>
          <Typography variant="h6" component="div" >
            Explore Portal
           
          </Typography>
          </div>
          <div className='assessment_tag'>
          <Typography ><Button color="inherit" onClick={navigate('/assessment')}>Assessment</Button></Typography>
          </div>
          <div className='username_tag'>
          <Typography >
          <span>Hello! {username1}</span>
          
          <Button color="inherit" onClick={handleLogout
          }>Logout</Button>
          </Typography>
          </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}