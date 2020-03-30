import { Button } from 'antd';
import React from 'react';

interface Props {
  buttonText?: string;
  size?: any;
  icon?: any;
  onClick?: () => void;
}

const ButtonComponent: React.FC<Props> = props => {
  const { buttonText, size, icon, onClick } = props;

  return (
    <Button onClick={onClick} type="primary" icon={icon} size={size}>
      {buttonText}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  buttonText: 'Text',
  size: 'large',
};

export default ButtonComponent;
