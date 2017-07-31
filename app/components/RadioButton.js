import React from 'react';
import styled from 'styled-components';

import Colors from './../consts/Colors';

const RadioButton = ({ on, onClick }) =>
  <RadioButtonSymbol onClick={onClick}>
    {on && <RadioButtonFill />}
  </RadioButtonSymbol>;

const RadioButtonSymbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border: 1px solid ${Colors.darkGray};
  border-radius: 50%;
`;

const RadioButtonFill = styled.div`
  width: .5rem;
  height: .5rem;
  background-color: ${Colors.darkGray};
  border: 1px solid ${Colors.darkGray};
  border-radius: 50px;
`;

export default RadioButton;