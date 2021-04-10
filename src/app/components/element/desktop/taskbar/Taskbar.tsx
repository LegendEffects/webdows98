import styled from "@emotion/styled";
import NotificationArea from "./NotificationArea";
import { TASKBAR_HEIGHT } from "../../../../constants/Taskbar";
import { useSystem } from "../../../../contexts/SystemContext";
import StartButton from "./start/StartButton";

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

export const QuickLaunchItem = styled.img`
  margin-left: 7px;
`

export const WindowButton = styled.button`
  width: 160px;
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

  img {
    margin-right: 3px;
  }

  &.active {
    font-weight: bold;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAG0lEQVQYV2M8cODAf3t7ewbG/////z948CADAFuqCj64BtLKAAAAAElFTkSuQmCC');
  }
`;

const Taskbar: React.FC = () => {
  const [ system, dispatch ] = useSystem();

  return (
    <TaskbarContainer>
      <Panel>
        <StartButton />
        <PanelSeparator />
      </Panel>
      <Panel>
        <TaskbarGrip style={{marginRight: 0}} />

        <QuickLaunchItem src="/assets/icons/internet_explorer-16.png" alt="Internet Explorer Icon" />
        <PanelSeparator style={{marginLeft: '7px'}} />
      </Panel>

      <Panel style={{width: '100%', overflow: 'hidden'}}>
        <TaskbarGrip style={{marginRight: '4px'}} />
        {system.windows.map((window) => {
          return (
            <WindowButton
              key={window.uuid} 
              className={window.uuid === system.focusedWindow ? 'active' : undefined}
              onClick={() => {
                if(window.visible && window.uuid !== system.focusedWindow) {
                  dispatch({
                    type: 'setFocused',
                    uuid: window.uuid
                  });
                  return;
                }
                
                dispatch({
                  type: 'setVisibility',
                  uuid: window.uuid,
                  value: !window.visible
                });
              }}
              >
                <img src={`/assets/icons/${window.frame.icon}-16.png`} alt={`${window.frame.title} Icon`} />
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