import styled from "@emotion/styled";

export const WindowFrameContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  will-change: contents;
  
  display: flex;
  flex-direction: column;

  &.docked {
    padding: 0;
    box-shadow: none;
  }

  &.focused .title-bar {
    background: linear-gradient(90deg, var(--dialog-blue), var(--dialog-blue-light));
    color: var(--button-highlight);
  }
`;

export const WindowBody = styled.div`
  position: relative;
  height: 100%;
  margin: 3px;
`;

export const WindowTitleBarContainer = styled.div`
  background: linear-gradient(90deg,var(--button-shadow),#b5b5b5);
  color: var(--surface);

  user-select: none;
`;

export const WindowTitleBarText = styled.div`
  display: flex;
  align-items: center;

  white-space: nowrap;
  text-overflow: ellipsis;

  .icon {
    margin-right: 3px;
  }
`;