import styled from "@emotion/styled";
import WindowMenuBar from "../../desktop/window/menu/WindowMenuBar";
import WindowScrollResize from "../../desktop/window/WindowScrollResize";
import WindowMenuAccessKeyDropdown from "../../desktop/window/menu/WindowMenuAccessKeyDropdown";
import DropdownItem from "../../global/dropdown/DropdownItem";
import IBaseApplication from "../../../../interfaces/IBaseApplication";
import { WindowBody } from "../../desktop/window/structure/WindowElements";

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  overflow: scroll;
`

const NotepadApp: IBaseApplication = {
  details: {
    title:  'Untitled - Notepad',
    icon:   'icon-notepad',
    width:  300,
    height: 200
  },

  component: () => {
    return (
      <>
        <WindowMenuBar>
          <WindowMenuAccessKeyDropdown title="File">
            <DropdownItem>New</DropdownItem>
            <DropdownItem>Open</DropdownItem>
            <DropdownItem>Save</DropdownItem>
            <DropdownItem>Save As</DropdownItem>
          </WindowMenuAccessKeyDropdown>
  
          <WindowMenuAccessKeyDropdown title="Edit" /> 
          <WindowMenuAccessKeyDropdown title="Format" />
          <WindowMenuAccessKeyDropdown title="Help" />
        </WindowMenuBar>
        
        <WindowBody>
          <TextArea wrap="off" />
          <WindowScrollResize className="resize-point cursor-nwse-resize" />
        </WindowBody>
      </>
    )
  }
}

export default NotepadApp;