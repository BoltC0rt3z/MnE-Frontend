import { Modal } from 'antd';
import React, { ReactNode } from 'react';
import './Modal.scss';

interface Props {
  children?: ReactNode;
  title?: string;
  isVisible: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  disableOkButton?: boolean;
  footer?: any;
}

const ModalComponent: React.FC<Props> = props => {
  const { children, title, isVisible, handleClose, disableOkButton, footer } = props;
  return (
    <div className="modalComponent">
      <Modal
        title={title}
        centered
        visible={isVisible}
        onOk={() => handleClose()}
        onCancel={() => handleClose()}
        okButtonProps={{ disabled: disableOkButton }}
        footer={footer}
      >
        {children}
      </Modal>
    </div>
  );
};

ModalComponent.defaultProps = {
  title: 'Title',
  isVisible: false,
  disableOkButton: false,
  footer: null,
};

export default ModalComponent;
