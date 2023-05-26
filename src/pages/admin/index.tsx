import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setIsUserSignedIn }: any) => {
  const [loginCred, setLoginCred] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setLoginCred({
      ...loginCred,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    // const payload = loginCred;
    // axios.post('https://calm-red-gopher-cuff.cyclic.app/api/v1/users/login', payload);
    setLoading(true);
    setTimeout(() => {
      setIsUserSignedIn(true);
      setLoading(false);
      navigate("/admin")
    }, 3000);
  };

  return (
    <Container>
      {loading ? (
        <Box sx={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <LinearProgress sx={{width: '100%'}} />
        </Box>
      ) : (
        <>
          <Typography variant="h6" fontWeight={600} color="primary" textAlign="center" my={6}>
            Login
          </Typography>

          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} my={2}>
            <Grid item xs={12} lg={6}>
              <Typography mb={1} variant="body2">
                UserName
              </Typography>
              <TextField
                name="email"
                onChange={handleChange}
                value={loginCred.email}
                label=""
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Typography mb={1} variant="body2">
                Password
              </Typography>
              <TextField
                name="password"
                onChange={handleChange}
                label=""
                fullWidth
                variant="outlined"
                type="password"
                value={loginCred.password}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Button onClick={handleLogin} variant="outlined">
                Submit
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default AdminLogin;
