import { useSystem } from "../../../contexts/SystemContext";
import { useWindow } from "../../../contexts/WindowContext";
import ActionType from "../../../interfaces/ActionType";
import { WindowBody } from "../desktop/window/structure/WindowElements";
import WindowFrame from "../desktop/window/structure/WindowFrame";
import WindowTitleBar from "../desktop/window/structure/WindowTitleBar";
import Icon from "../global/Icon";
import { useUser } from "../../../contexts/UserContext";
import React from "react";
import defineApplication from "../../../utils/DefineApplication";

const LoginComponent = () => {
  const [ state, dispatch ] = useSystem();
  const [ , userDispatch ] = useUser();

  const [ username, setUsername ] = React.useState("Anon");

  const window = useWindow();

  const doLogin = (anonymous = false) => {
    if(anonymous) {
      userDispatch({
        type: 'SET_USER',
        value: null
      });
    } else {
      userDispatch({
        type: 'SET_USER',
        value: {
          name: username
        }
      });
    }
  }

  return (
    <WindowFrame
        data-uuid={window.uuid}
        focused={window.uuid === state.focusedWindow}

        onMouseDown={() => {
          dispatch({
            type: 'SET_FOCUSED',
            uuid: window.uuid
          });
        }}

        {...window.frame}
        >
        <WindowTitleBar
          {...window.frame}
          onAction={(action) => {
            if(action === ActionType.CLOSE) {
              doLogin(true);
            }
          }}
          availableActions={window.frame.actions}
          />

          <WindowBody>
            <div className="flex flex-row p-4 space-x-6">
              <div>
                <Icon icon="icon-network_cool_two_pcs" size={48} />
              </div>
              
              <form className="flex flex-col w-100">
                <div>Enter your network password for Michaelsoft Networking</div>

                <div className="grid gap-x-6 gap-y-2 mt-8 whitespace-nowrap" style={{gridTemplateColumns: 'max-content auto'}}>
                  <label>User name:</label>
                  <input className="w-full" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                
                  {/* Purposely prevent auto completion of passwords in the field. */}
                  <label>Password:</label>
                  <input className="w-full" type="password" autoComplete="none" />
                </div>
              </form>

              <div className="flex flex-col">
                <button autoFocus onClick={() => doLogin()}>OK</button>
                <button className="mt-2" onClick={() => doLogin(true)}>Cancel</button>
              </div>
            </div>
          </WindowBody>
      </WindowFrame>

  )
};

export default defineApplication(LoginComponent, {
  title: 'Enter Network Password',
  width: 450,
  height: 140,
  resizable: false,
  x: (window.innerWidth / 2 ) - (450 / 2),
  y: (window.innerHeight / 2 ) - (140 / 2),
  actions: [ ActionType.CLOSE ],
  decorated: false,
});