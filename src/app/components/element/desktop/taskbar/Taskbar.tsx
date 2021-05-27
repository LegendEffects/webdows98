import styled from "@emotion/styled";
import NotificationArea from "./NotificationArea";
import { TASKBAR_HEIGHT } from "../../../../constants/Taskbar";
import { useSystem } from "../../../../contexts/SystemContext";
import StartButton from "./start/StartButton";
import QuickLaunchItem from "./QuickLaunchItem";
import React from "react";
import IWindow from "../../../../interfaces/IWindow";

const TaskbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: var(--surface);
  box-shadow: inset 1px 0 #fff;
  border-top: var(--border-width) solid #f4f4f4;
  border-bottom: var(--border-width) solid #4e4e4e;

  padding: 2px;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${TASKBAR_HEIGHT}px;
`;

export const InsetPanel = styled(Panel)`
  box-shadow: var(--border-sunken-inner);
  padding-left: 4px;
  padding-right: 4px;
`;

export const PanelSeparator = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  height: ${TASKBAR_HEIGHT}px;
  width: 1px;
  background-color: var(--button-highlight);
  border-left: var(--border-width) solid var(--button-shadow);

  content: '';
`;

export const TaskbarGrip = styled.div`
  width: 3px;
  height: ${TASKBAR_HEIGHT - 4}px;
  background: var(--surface);

  box-shadow: inset -1px -1px var(--button-shadow), inset 1px 1px var(--button-highlight);
  margin: 2px;
`

export const WindowButton = styled.button`
  width: 160px;
  min-width: 50px;
  padding-left: 4px;
  padding-right: 4px;

  display: flex;
  align-items: center;
  
  span {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }

  margin-right: 3px;

  .icon {
    margin-right: 3px;
  }

  &.active {
    font-weight: bold;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAG0lEQVQYV2M8cODAf3t7ewbG/////z948CADAFuqCj64BtLKAAAAAElFTkSuQmCC');
  }
`;

const Taskbar: React.FC = () => {
  const [ system, dispatch ] = useSystem();
  const [ windows, setWindows ] = React.useState<IWindow[]>([]);

  /**
   * We need to maintain the state for the taskbar individually as the system
   * state for windows is used as a stack, therefore the taskbar would
   * reflect that with the focused window always being on the end of the
   * taskbar.
   */
  React.useEffect(() => {
    // There's likely a more efficient way of doing this.
    setWindows((windows) => {
      // Remove removed windows
      const result = windows.filter((window) => {
        return system.windows.find((w) => w.uuid === window.uuid) !== undefined;
      });
  
      // Add new windows to the current state
      system.windows.forEach((window) => {
        const find = result.find((w) => w.uuid === window.uuid);
        if(!find) {
          result.push(window);
        }
      });
      
      return result;
    })
  }, [ system.windows ]);

  return (
    <TaskbarContainer>
      <Panel>
        <StartButton />
        <PanelSeparator />
      </Panel>
      <Panel>
        <TaskbarGrip style={{marginRight: 0}} />

        <QuickLaunchItem icon="icon-msie1" />
        <PanelSeparator style={{marginLeft: '7px'}} />
      </Panel>

      <Panel style={{width: '100%', overflow: 'hidden'}}>
        <TaskbarGrip style={{marginRight: '4px'}} />
        {windows.map((window) => {
          return (
            <WindowButton
              key={window.uuid} 
              className={window.uuid === system.focusedWindow ? 'active' : undefined}
              onClick={() => {
                if(window.visible && window.uuid !== system.focusedWindow) {
                  dispatch({
                    type: 'SET_FOCUSED',
                    uuid: window.uuid
                  });
                  return;
                }
                
                dispatch({
                  type: 'SET_VISIBILITY',
                  uuid: window.uuid,
                  value: !window.visible
                });
              }}
              >
                <div className={`icon ${window.frame.icon}_16`} />
                <span>{window.frame.title}</span>
            </WindowButton>
          )
        })}
      </Panel>
      
      <NotificationArea />
    </TaskbarContainer>
  )
}

export default Taskbar;