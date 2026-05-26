import React from "react";
import { Container } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";

function ModalCreateNewAccount(props) {
  // 
  let { onHandleCloseModal, onhandleCreateNewAccount, listDepartment, listPosition } = props;
  //  hàm xư lý sự kiện khi click vào nút "Close" trong Modal
  let handleCloseModal = () => {
    onHandleCloseModal();
  }
  // Kết nối lên store redux và lấy về các state
  let stateRedux = useSelector((state) => state);
  let showForm = stateRedux.formState.showForm;

  return (
    <Container>
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm onhandleCreateNewAccount={onhandleCreateNewAccount} listDepartment={listDepartment} listPosition={listPosition} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewAccount;
