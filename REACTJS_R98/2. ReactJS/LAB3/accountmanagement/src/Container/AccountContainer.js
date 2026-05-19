import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "./../Components/Account/ResultForm";
import ModalCreateNewAccount from "./../Components/Account/ModalCreateNewAccount";
import axios from "axios";

function AccountContainer(props) {
  // State để quản lý trạng thái của modal
  let [showForm, setShowForm] = React.useState(false);
  // Khai bao state listAccount để quản lý danh sách tài khoản
  let [listAccount, setListAccount] = useState([]);

  let [listDepartment, setListDepartment] = useState([]);
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
    // 

    // console.log("click create new account");
    setListAccount([...listAccount, account_new]);
    // console.log("listAccount: ", listAccount);
    localStorage.setItem("listAccount", JSON.stringify(listAccount));
  }

  // Load dữ liệu từ localStorage khi component được render lần đầu tiên
  useEffect(() => {
    // if (localStorage && localStorage.getItem("listAccount")) {
    //   let listAccount_Localstorage = JSON.parse(localStorage.getItem("listAccount"));
    //   setListAccount(listAccount_Localstorage);
    // }
    // load dữ liệu từ API backend Account
    // Xử lý bất đồng bộ promise: then catch
    axios.get(`http://localhost:8080/api/v1/accounts`).then((response) => {
      // console.log(response);
      let listAccount_API = response.data;
      // console.log(listAccount_API);
      setListAccount(listAccount_API);
    })

// load dữ liệu cho Department
    axios.get(`http://localhost:8080/api/v1/departments`).then((response) => {
      // console.log(response);
      let listDepartment_API = response.data;
      // console.log(listAccount_API);
      setListDepartment(listDepartment_API);
    })
  }, []);

  // 
  return (
    <div>
      <CreateButton onHandleCreateNewAccount={onHandleCreateNewAccount} />
      <ModalCreateNewAccount showForm={showForm} onHandleCloseModal={onHandleCloseModal} onhandleCreateNewAccount={onhandleCreateNewAccount} listDepartment={listDepartment}/>
      <ResultForm listAccount={listAccount} />
    </div>
  );
}

export default AccountContainer;
