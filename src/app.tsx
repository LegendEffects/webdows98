import React from "react";
import Desktop from "./app/components/screen/Desktop";
import Login from "./app/components/screen/Login";
import { useUser } from "./app/contexts/UserContext";

const App: React.FC = () => {
  const [ { authenticated } ] = useUser();

  if(!authenticated) {
    return (
      <Login />
    );
  }

  return (
    <Desktop />
  );
}

export default App;