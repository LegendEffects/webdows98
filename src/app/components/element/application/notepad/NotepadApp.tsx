import styled from "@emotion/styled";
import WindowBody from "../../desktop/window/WindowBody";
import WindowMenuBar from "../../desktop/window/menu/WindowMenuBar";
import WindowScrollResize from "../../desktop/window/WindowScrollResize";
import WindowMenuAccessKeyDropdown from "../../desktop/window/menu/WindowMenuAccessKeyDropdown";
import DropdownItem from "../../global/dropdown/DropdownItem";
import WebApplication from "../WebApplication";

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  overflow: scroll;
`

class NotepadApp extends WebApplication {
  static details = {
    title: 'Untitled - Notepad',
    icon:  'icon-notepad',
    width: 300,
    height: 200
  }

  static component = () => {
    return (
      <>
        <WindowMenuBar>
          <WindowMenuAccessKeyDropdown title="File">
            <DropdownItem icon="icon-notepad">
              Test Dropdown
            </DropdownItem>
            <DropdownItem>
              Test Dropdown
            </DropdownItem>
            <DropdownItem>
              Test Dropdown
            </DropdownItem>
          </WindowMenuAccessKeyDropdown>
  
          <WindowMenuAccessKeyDropdown title="Edit">
            
          </WindowMenuAccessKeyDropdown>
          <WindowMenuAccessKeyDropdown title="Format">
            
          </WindowMenuAccessKeyDropdown>
          <WindowMenuAccessKeyDropdown title="Help">
            
          </WindowMenuAccessKeyDropdown>
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