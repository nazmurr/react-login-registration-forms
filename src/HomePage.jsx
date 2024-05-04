import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 4,
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <Button
        variant="contained"
        component={Link}
        to="/login"
        sx={{ my: 1, width: "100%" }}
      >
        Login Form
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/register"
        sx={{ my: 1, width: "100%" }}
      >
        Register Form
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/login-split"
        sx={{ my: 1, width: "100%" }}
      >
        Login Form Split
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/register-split"
        sx={{ my: 1, width: "100%" }}
      >
        Register Form Split
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/login-transparent"
        sx={{ my: 1, width: "100%" }}
      >
        Login Form with Background
      </Button>
      <Button
        variant="contained"
        component={Link}
        to="/register-transparent"
        sx={{ my: 1, width: "100%" }}
      >
        Register Form with Background
      </Button>
    </Box>
  );
}
