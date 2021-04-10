import styled from "@emotion/styled";
import { useSystem } from "../../../../contexts/SystemContext";
import { useWindow } from "../../../../contexts/WindowContext";

const TitleBar = styled.div`
  user-select: none;
`;

const TitleBarTest = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 3px;
  }
`;

const WindowTitleBar = () => {
  const [ , dispatch ] = useSystem();
  const { uuid, frame } = useWindow();

  return (
    <TitleBar 
      className="title-bar"
      onMouseDown={(e) => {
        if((e.target as HTMLElement).parentElement?.classList.contains('no-drag')) {
          return;
        }
        dispatch({
          type: 'startDragging',
          uuid,
          details: {
            mouse: {
              x: e.clientX,
              y: e.clientY
            },
            offset: {
              x: e.clientX - frame.x,
              y: e.clientY - frame.y
            }
          }
        });
        dispatch({
          type: 'setFocused',
          uuid
        });
      }}
      >
        <TitleBarTest className="title-bar-text">
          <img src={`/assets/icons/${frame.icon}-16.png`} alt={`${frame.title} Icon`} />
          {frame.title}
        </TitleBarTest>

        <div className="title-bar-controls no-drag">
          {frame.actions.minimize && (
            <button 
              aria-label="Minimize"
              onClickCapture={(e) => {
                dispatch({type: 'setVisibility', uuid, value: false});
              }}
            />
          )}

          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
    </TitleBar>
  )
}

export default WindowTitleBar;