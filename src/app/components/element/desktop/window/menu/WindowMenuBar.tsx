import styled from "@emotion/styled";


/**
 * A menu bar, one of the most common forms of a menu interface, is a
 * special area displayed across the top of a window directly below the title
 * bar
 * 
 * - Microsoft Windows User Experience Pg. 138
 */
const WindowMenuBar = styled.div`
  display: flex;
  align-items: center;
  
  height: 18px;
  
  margin: 1px 3px;
  margin-bottom: 0;
  
  background: var(--surface);
`

export default WindowMenuBar;