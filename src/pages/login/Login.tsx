import { Box } from "@mui/material";

import { LoginForm } from "./components/LoginForm";
import { LoginContext } from "./context/login.context";
import { useState } from "react";
import { Loading } from "../../components/Loading";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  return (
    <LoginContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ backgroundColor: "#EEF2F5" }}
      >
        <LoginForm />
      </Box>
    </LoginContext.Provider>
  );
};
