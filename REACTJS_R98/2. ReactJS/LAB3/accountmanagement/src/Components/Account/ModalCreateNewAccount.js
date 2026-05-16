import React from "react";
import { Container } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputForm from "./InputForm";

function ModalCreateNewAccount(props) {
  // 
  let { showForm, onHandleCloseModal } = props;
  //  hàm xư lý sự kiện khi click vào nút "Close" trong Modal
  let handleCloseModal = () => {
    onHandleCloseModal();
  }
  return (
    <Container>
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewAccount;
