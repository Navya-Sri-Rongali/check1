import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { putuser } from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar'; 

export default function SignIn() {
  const [user, setuser] = useState({
    username: "",
    job: "",
    
  })
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const submithandler=(e)=>{
    e.preventDefault();
    dispatch(putuser({ username: user.username, job: user.job }));
    axios.post('https://localhost:5000/login',{username:user.username,job:user.job}).then(res=>{
      setuser(user);
    })
    // navigate('/home');
  }
  

  const username1 = useSelector((state) => state.username);
  console.log("username1111:", username1);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

  };
  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            value={user.username}
            onChange={(e) => { setuser({ ...user, username: e.target.value }) }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="job"
            label="job"
            type="job"
            id="job"
            autoComplete="job"
            value={user.job}
            onChange={(e) => { setuser({ ...user, job: e.target.value }) }}
          />
          {/* <Calendar onChange={onChange} value={date}/> */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={submithandler}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}