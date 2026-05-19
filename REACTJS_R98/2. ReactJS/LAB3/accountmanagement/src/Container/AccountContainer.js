import React, { useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "./../Components/Account/ResultForm";
import ModalCreateNewAccount from "./../Components/Account/ModalCreateNewAccount";

function AccountContainer(props) {
  // State để quản lý trạng thái của modal
  let [showForm, setShowForm] = React.useState(false);
  // Khai bao state listAccount để quản lý danh sách tài khoản
  let [listAccount, setListAccount] = useState([]);
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
  // Khai báo hàm callback nhận dữ liệu từ InputForm
  let onhandleCreateNewAccount = (account_new) => {
    // console.log("click create new account");
    setListAccount([...listAccount, account_new]);
    // console.log("listAccount: ", listAccount);
    localStorage.setItem("listAccount", JSON.stringify(listAccount));
  }

  return (
    <div>
      <CreateButton onHandleCreateNewAccount={onHandleCreateNewAccount} />
      <ModalCreateNewAccount showForm={showForm} onHandleCloseModal={onHandleCloseModal} onhandleCreateNewAccount={onhandleCreateNewAccount} />
      <ResultForm />
    </div>
  );
}

export default AccountContainer;
