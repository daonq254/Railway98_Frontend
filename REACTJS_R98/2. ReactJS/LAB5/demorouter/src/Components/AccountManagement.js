import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AccountManagement(props) {
  // 
  let [listAccounts, setListAccounts] = useState([]);
  // 
  useEffect(() => {
    // Call API
    let listAccounts_API_FAKE = [
      {
        ID: "1",
        Email: "Email1@gmail.com",
      },
      {
        ID: "2",
        Email: "Email2@gmail.com",
      },
      {
        ID: "3",
        Email: "Email3@gmail.com",
      },
      {
        ID: "4",
        Email: "Email4@gmail.com",
      },
    ];

    setListAccounts(listAccounts_API_FAKE)
  }, [])
  //  Hiển thị danh sách
  let accountItems = listAccounts.map((account) => {
    let url = `/AccountDetail/${account.ID}`;
    return (
      <tr>
        <td>{account.ID}</td>
        <td>
          <Link to={url}>{account.Email}</Link>
        </td>
      </tr>
    )
  })
  // 
  return (
    <div>
      <h2>This is AccountManagement Page</h2>
      {/*  */}
      <div className="row">
        <h3>Thông tin Account</h3>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <table className="table table-hover">
            <thead>
              <tr>
                <td>ID</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {/* In các row */}
              {/* <tr>
                <td>1</td>
                <td>daonq@gmail.com</td> */}
              {/* </tr> */}
              {accountItems}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default AccountManagement;


