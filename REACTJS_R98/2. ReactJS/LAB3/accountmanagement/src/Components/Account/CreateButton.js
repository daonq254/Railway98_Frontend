import React from "react";
import { Container, Button } from "reactstrap";

function CreateButton(props) {
  let { onHandleCreateNewAccount } = props;

  // hàm xử lý sự kiện khi click vào nút "Create New Account"
let handleCreateNewAccount = () => {
  onHandleCreateNewAccount();
}
  // 
  return (
    <Container>
      <br />
      <Button color="primary" onClick={handleCreateNewAccount}>Create New Account</Button>
    </Container>
  );
}

export default CreateButton;
