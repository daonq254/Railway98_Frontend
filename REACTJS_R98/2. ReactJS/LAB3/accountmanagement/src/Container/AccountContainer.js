import React from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "./../Components/Account/ResultForm";
import ModalCreateNewAccount from "./../Components/Account/ModalCreateNewAccount";

function AccountContainer(props) {
  // State để quản lý trạng thái của modal
  let [showForm, setShowForm] = React.useState(false);
  // Khai báo hàm callback nhận sự kiện từ CreateButton
  let onHandleCreateNewAccount = () => {
    // 
    setShowForm(true);
  }

  // Khai báo hàm callback nhận sự kiện từ ModalCreateNewAccount
  let onHandleCloseModal = () => {
    // 
    setShowForm(false);

  }

  return (
    <div>
      <CreateButton onHandleCreateNewAccount={onHandleCreateNewAccount} />
      <ModalCreateNewAccount showForm={showForm} onHandleCloseModal={onHandleCloseModal} />
      <ResultForm />
    </div>
  );
}

export default AccountContainer;
