import styled from "@emotion/styled";

const WindowScrollResize = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  
  width: 16px;
  height: 17px; /* Strange positioning of the vertical scrollbar */

  background-color: var(--surface);
  
  &:after {
    position: absolute;
    width: 16px;
    height: 16px;

    bottom: 0;
    right: 0;
    
    content: "";

    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTExVDE3OjIyOjQ1KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTExVDE3OjIyOjQ1KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNC0xMVQxNzoyMjo0NSswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphNTBiZmMwOC0zYTA2LWJmNGMtYmQ2NS1iYTAzMjA5NWEwNDMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphMDgzMzdlYy01OTU5LTZlNGItOTc0ZS01NGNiNjliYjE1YWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MDFiNzU4Zi04ZWM5LTMyNDYtOTE3OC0xYmE5N2ZiNmI4ZTAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDFiNzU4Zi04ZWM5LTMyNDYtOTE3OC0xYmE5N2ZiNmI4ZTAiIHN0RXZ0OndoZW49IjIwMjEtMDQtMTFUMTc6MjI6NDUrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTUwYmZjMDgtM2EwNi1iZjRjLWJkNjUtYmEwMzIwOTVhMDQzIiBzdEV2dDp3aGVuPSIyMDIxLTA0LTExVDE3OjIyOjQ1KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZejuAwAAAENJREFUOMvt0DEKADAIBEGf7s83XSAQ5eK1KSxn4QwgnIsf8HBmenga2HjygwPj4pcJV6wGSqz8oMW4uJsg4SogYyAWnUkB5CVzhGoAAAAASUVORK5CYII=");
  }
`

export default WindowScrollResize;