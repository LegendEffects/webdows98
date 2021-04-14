import styled from "@emotion/styled";
import { useSystem } from "../../../../contexts/SystemContext";
import { useWindow } from "../../../../contexts/WindowContext";

const TitleBar = styled.div`
  background: linear-gradient(90deg,var(--button-shadow),#b5b5b5);
  color: var(--surface);
  user-select: none;
  
  &.active {
    background: linear-gradient(90deg, var(--dialog-blue), var(--dialog-blue-light));
    color: var(--button-highlight);
  }
`;

const TitleBarText = styled.div`
  display: flex;
  align-items: center;

  white-space: nowrap;
  text-overflow: ellipsis;

  .icon {
    margin-right: 3px;
  }
`;

const WindowTitleBar = () => {
  const [ { focusedWindow }, dispatch ] = useSystem();
  const { uuid, frame } = useWindow();

  return (
    <TitleBar className={`title-bar drag-point ${focusedWindow === uuid && 'active'}`}>
        <TitleBarText className="title-bar-text drag-point">
          <div className={`drag-point icon ${frame.icon}_16`} />
          {frame.title}
        </TitleBarText>

        <div className="title-bar-controls">
          {frame.actions.minimize && (
            <button 
              aria-label="Minimize"
              onClickCapture={(e) => {
                dispatch({type: 'setVisibility', uuid, value: false});
              }}
            />
          )}

          {frame.actions.restore && (
            <button
              aria-label={frame.docked ? 'Restore' : 'Maximize'} 
              onClick={() => {
                dispatch({
                  type: 'toggleDocked',
                  uuid
                })
              }}
              />
          )}

          <button aria-label="Close" disabled={frame.actions.close === false} />
        </div>
    </TitleBar>
  )
}

export default WindowTitleBar;