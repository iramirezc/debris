import styled from "styled-components"

export const StyledHelloWorld = styled.h1`
  color: #495159;
  font-family: "Courier New", Courier, monospace;
  font-size: 3em;
  margin-bottom: 0;

  & + span {
    color: #090809;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    font-style: italic;
    display: block;
    margin-bottom: 2em;
    margin-left: 18em;
  }
`
