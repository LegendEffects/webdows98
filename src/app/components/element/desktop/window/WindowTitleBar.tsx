import styled from "@emotion/styled";
import { useSystem } from "../../../../contexts/SystemContext";
import { useWindow } from "../../../../contexts/WindowContext";

const TitleBar = styled.div`
  user-select: none;
`;

const TitleBarTest = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 3px;
  }
`;

const WindowTitleBar = () => {
  const [ , dispatch ] = useSystem();
  const { uuid, frame } = useWindow();

  return (
    <TitleBar className="title-bar drag-point">
        <TitleBarTest className="title-bar-text drag-point">
          <div className={`drag-point icon ${frame.icon}_16`} />
          {frame.title}
        </TitleBarTest>

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
                console.log('a')
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