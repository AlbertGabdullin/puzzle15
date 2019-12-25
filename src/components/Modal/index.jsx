// @flow
import React, { useRef } from 'react';
import styled from 'styled-components';
import useOnClickOutside from 'use-onclickoutside';
import Close from '../../static/close.svg';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  height: 100vh;
  width: 100%;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 15px;
  height: 15px;
  background: url(${Close});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  max-width: 80%;
`;

const Content = styled.div`
  position: relative;
  font-size: 30px;
  padding: 20px 40px;
  z-index: 100;
  border-radius: 10px;
  background: #fff;
  max-width: 80%;
`;

type Props = {
  children: React$Node,
  onClose: () => void,
};

const Modal = ({ children, onClose }: Props) => {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onClose);
  return (
    <ModalWrapper>
      <Content ref={modalRef}>
        <CloseButton onClick={onClose} />
        {children}
      </Content>
    </ModalWrapper>
  );
};

export default Modal;
