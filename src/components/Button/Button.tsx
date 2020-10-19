import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styled';

interface Props {
  variant?: string;
  children: any;
}

export const Button: React.FC<Props> = ({
  variant,
  children
}) => (
  <ButtonStyled
    variant={variant}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.any.isRequired
};
