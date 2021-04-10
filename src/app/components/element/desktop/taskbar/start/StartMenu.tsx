import styled from '@emotion/styled';
import React from 'react';

const StartMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  user-select: none;
  height: 400px;
  width: 171px;

  transform: translateY(-100%);
  background: var(--surface);

  box-shadow: var(--border-window-outer);
`

const StartMenuInner = styled.div`
  display: flex;
  height: 100%;
  box-shadow: var(--border-window-inner);
`;

const StartMenuGradient = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: var(--dialog-blue);

  min-width: 21px;
  color: #fff;

  margin: 2px;
  margin-right: 0;
  
  .text {
    transform: rotate(180deg);
    writing-mode: vertical-lr;
    text-orientation: mixed;
    white-space: nowrap;
    
    font-size: 14px;
    margin-bottom: 5px;
  }

  ::before {
    position: absolute;
    width: 100px;
    height: 125px;

    background: radial-gradient(#0000fe 0%, transparent 80%);

    bottom: -30px;
    content: "";
  }
`;

const StartMenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  width: 100%;
  margin: 2px;
  margin-left: 0;
`

const StartMenuSeparator = styled.div`
  background-color: var(--button-shadow);
  border-bottom: var(--border-width) solid var(--button-highlight);
  height: 1px;

  margin: 2px 3px;

  content: "";
`

const StartMenuItem = styled.div`
  text-align: left;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 11px;

  height: 35px;
  padding-left: 5px;

  img {
    margin-right: 3px;
  }
  
  &:hover {
    background: var(--dialog-blue);
    color: #fff;
  }
`

export interface StartMenuProps { }

const StartMenu: React.FC<StartMenuProps> = () => {
  return (
    <StartMenuContainer>
      <StartMenuInner>
        <StartMenuGradient>
          <div className="text">
            <b>Windows</b> Very Legitimate Edition
          </div>
        </StartMenuGradient>
        <StartMenuList>
          <StartMenuSeparator />

          <StartMenuItem>
            <img src="/assets/icons/key_win-32.png" alt="Log Off" />
            Log Off Anon...
          </StartMenuItem>
          <StartMenuItem>
            <img src="/assets/icons/shut_down-32.png" alt="Shut Down" />
            Shut Down...
          </StartMenuItem>

        </StartMenuList>
      </StartMenuInner>
    </StartMenuContainer>
  )
}

export default StartMenu;