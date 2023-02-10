import Google from "@mui/icons-material/Google";
import { Link as RouterLink, Router } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingAuth, startGoogleSignIn } from "../../store/auth/thunks";
import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "jorge@google.com",
    password: "123456",
  });

  const onSubmit = (event) => {
    dispatch(checkingAuth());
    event.preventDefault();
  };

  const onGoogleSignIn = (event) => {
    dispatch(startGoogleSignIn());
    event.preventDefault();
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="mail@gmail.com"
              fullWidth
              autoComplete="false"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              autoComplete="false"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                type="submit"
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              <Typography>Create an Account</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
