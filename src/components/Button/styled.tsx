import styled from 'styled-components';

interface Props {
  variant?: string;
}

const VARIANT_BACKGROUND = {
  primary: '#FA9300',
  secondary: '#676767'
};

const VARIANT_HOVER = {
  primary: '#E18400',
  secondary: '#333333'
};

const VARIANT_COLOR = {
  primary: '#FFFFFF',
  secondary: '#FFFFFF'
}

export const ButtonStyled = styled.button`
  font-size: 1rem;
  height: 2rem;
  padding: 0 1rem;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 250ms ease 0s;

  background-color: ${(props: Props) => VARIANT_BACKGROUND[props.variant] || '#EDF2F7'};
  color: ${(props: Props) => VARIANT_COLOR[props.variant] || '#1A212C'};

  &:hover {
    background-color: ${(props: Props) => VARIANT_HOVER[props.variant] || '#E2E8F0'};
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-right: 1rem;
  }
`;

ButtonStyled.displayName = 'ButtonStyled';
