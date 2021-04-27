import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  text: string;
}

/**
 * ===================================
 * Styled Component
 * ===================================
 * */

const ButtonStyle = styled.button`
  padding: 10px;
`;

/**
 *
 * @param props
 * @returns
 */
const Button = (props: ButtonProps) => {
  const { text } = props;

  return <ButtonStyle>{text}</ButtonStyle>;
};

export default Button;
