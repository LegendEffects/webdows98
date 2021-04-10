import styled from "@emotion/styled";
import Clock from "./Clock";

const taskbarHeight = '22px';

const TaskbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
  height: ${taskbarHeight};
`;

export const InsetPanel = styled(Panel)`
  box-shadow: var(--border-sunken-inner);
  padding-left: 4px;
  padding-right: 4px;
`;

export const PanelSeparator = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  height: ${taskbarHeight};
  width: 1px;
  background-color: var(--button-highlight);
  border-left: var(--border-width) solid var(--button-shadow);

  content: '';
`;

export const StartButton = styled.button`
  background-image: url('/assets/icons/start_button.png');
  background-repeat: no-repeat;
  background-position: center;

  min-height: initial;
  min-width: initial;

  width: 54px;
  height: ${taskbarHeight};
`;

const Taskbar: React.FC<{}> = () => {
  return (
    <TaskbarContainer>
      <Panel>
        <StartButton />
        <PanelSeparator />
      </Panel>
      

      
      <InsetPanel>
        <img src="/assets/icons/loudspeaker_rays-16.png" alt="Volume" />
        <div style={{marginLeft: '6px', marginRight: '6px'}}>
          <Clock />
        </div>
      </InsetPanel>
    </TaskbarContainer>
  );
}

export default Taskbar;