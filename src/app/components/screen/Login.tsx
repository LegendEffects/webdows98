import React from "react";
import { SystemProvider, useSystem } from "../../contexts/SystemContext";
import createApplicationInstance from "../../utils/CreateApplicationInstance";
import DesktopContainer from "../element/desktop/DesktopContainer";
import WindowArea from "../element/desktop/WindowArea";
import LoginWindow from "../element/login/LoginWindow";

const LoginInner: React.FC = () => {
  const [ , dispatch ] = useSystem();

  React.useEffect(() => {
    dispatch({
      type: 'CREATE_WINDOW',
      window: createApplicationInstance(LoginWindow),
      focus: true,
    })
  }, [ dispatch ]);

  return (
    <DesktopContainer>
      <WindowArea preventHighlighting />
    </DesktopContainer>
  )
}

const Login: React.FC = () => {
  return (
    <SystemProvider>
      <LoginInner />
    </SystemProvider>
  )
}

export default Login;