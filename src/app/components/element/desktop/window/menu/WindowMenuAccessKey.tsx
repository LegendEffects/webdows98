import styled from "@emotion/styled";

const WindowMenuAccessKey = styled.button`
  min-height: 100%;
  min-width: initial;
  
  box-shadow: none;

  padding: 3px 5px;

  &:focus {
    outline: none;
  }
  
  &:hover {
    box-shadow: inset -1px -1px var(--button-shadow), inset 1px 1px var(--button-highlight);
  }
  
  &:not(:disabled).active,
  &:not(:disabled):active {
    box-shadow: inset -1px -1px var(--button-highlight), inset 1px 1px var(--button-shadow);
  }
`

export default WindowMenuAccessKey;