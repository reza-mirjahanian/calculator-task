import styled from 'styled-components'


export const Body = styled.div`
  //width: 300px;
  max-width: 100%;
  padding: 20px;
  background-color: #1c1c1c;
`


export const Keypad = styled.div`
  display: grid;
  grid-template: repeat(5, 1fr)/repeat(4, 1fr);
  grid-gap: 10px;
`


export const Screen = styled.div`
  margin-bottom: 1rem;
  padding: 0.4rem 0.7rem;
  background-color: #505050;
  font-size: 1.3rem;
  text-align: right;
  border-radius: 4px;
  overflow-y: auto;
  color: white;
`
