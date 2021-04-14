import React from "react";
import ActionType from "../../../../../interfaces/ActionType";
import Icon from "../../../global/Icon";
import { WindowTitleBarContainer, WindowTitleBarText } from "./WindowElements";

export interface WindowTitleBarProps {
  title: string;

  icon?: string;
  docked?: boolean;
  availableActions: ActionType[];

  onAction: (action: ActionType) => void;
}

const WindowTitleBar = React.forwardRef<HTMLDivElement, WindowTitleBarProps>(({ title, icon, docked, availableActions, onAction }, ref) => {
  return (
    <WindowTitleBarContainer className="title-bar drag-point">
      <WindowTitleBarText className="title-bar-text drag-point">
        {icon && <Icon size={16} icon={icon} className="drag-point" />}
        {title}
      </WindowTitleBarText>

      <div className="title-bar-controls">
        {availableActions.includes(ActionType.MINIMIZE) && (
          <button 
            aria-label="Minimize"
            onClick={() => { onAction(ActionType.MINIMIZE) }}
          />
        )}

        {availableActions.includes(ActionType.RESTORE) && (
          <button 
            aria-label={docked ? 'Restore' : 'Maximize'}
            onClick={() => { onAction(ActionType.RESTORE) }}
          />
        )}
        
        <button 
          aria-label="Close"
          disabled={!availableActions.includes(ActionType.CLOSE)}
          onClick={() => { onAction(ActionType.CLOSE) }}
        />
      </div>
    </WindowTitleBarContainer>
  );
});

export default WindowTitleBar;