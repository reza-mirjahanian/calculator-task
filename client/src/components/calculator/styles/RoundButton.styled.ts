import styled, {css} from 'styled-components'
import React from "react";
import {device} from "../../styles/Global";

interface IProps extends React.HTMLAttributes<HTMLElement> {
    wide?: '2';
}

export const RoundBtn = styled.button<IProps>`
  position: relative;
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
  width: ${({wide}) => wide ? '100%' : '3rem'};
  height: 3rem;
  line-height: 3rem;
  font-size: 1.6rem;
  border-radius: 3rem;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: color 0.15s ease, background-color 0.15s ease;

  ${({wide}) => (wide) ? css`
            grid-row-start: 5;
            grid-column-start: 1;
            grid-row-end: 5;
            grid-column-end: span 2;
          `
          : ''}
  &:hover {
    opacity: 0.25;
  }


  @media only screen and ${device.mobileL} {
    height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
    border-radius: 2rem;
    width: ${({wide}) => wide ? '100%' : '2rem'};
  }

`
export const RoundBtnOrange = styled(RoundBtn)`
  background-color: #ff9503;

  &:focus {
    background-color: #fff;
    color: #ff9503;
  }
`;

export const RoundBtnWhite = styled(RoundBtn)`
  background-color: #a5a5a5;
  color: #1c1c1c;

  &:focus {
    background-color: #fff;
    color: #1c1c1c;
  }
`;


