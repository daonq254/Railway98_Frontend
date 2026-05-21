import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function InputForm({ onhandleCreateNewAccount, listDepartment, listPosition }) {

  // Khai báo state để quản lý dữ liệu của form
  let [Email, SetEmail] = useState("");
  let [Username, SetUsername] = useState("");
  let [Fullname, SetFullname] = useState("");
  let [Department, SetDepartment] = useState("");
  let [Postion, SetPostion] = useState("");

  // 

  // let handleChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // }
  // Hàm xử lý sự kiện khi click vào nút "Create"
  let handleCreate = () => {
    // console.log("Email: ", Email);  
    // console.log("Username: ", Username);
    // console.log("Fullname: ", Fullname);
    // console.log("Department: ", Department);
    // console.log("Postion: ", Postion);
    let account_new = {
      id: 1,
      email: Email,
      username: Username,
      fullname: Fullname,
      department: Department,
      position: Postion,
      createDate: "2026-05-19"
    }
    onhandleCreateNewAccount(account_new);
  }

  // Hàm xử lý sự kiện khi click vào nút "Reset"
  let handleReset = () => {
    SetEmail("");
    SetUsername("");
    SetFullname("");
    SetDepartment("");
    SetPostion("");
  }

  // Hiển thị danh sách phòng ban
  let departmentItems = listDepartment.map((department, index) => {
    return (
      <option value={department.id}>{department.name}</option>
    )
  })

  // Hiển thị danh sách vị trí
  let positionItems = listPosition.map((position, index) => {
    return (
      <option value={position.id}>{position.name}</option>
    )
  })
  //  
  return (
    <Container>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input id="Email" name="Email" placeholder="Input Email" type="email" value={Email}
            onChange={(event) => {
              SetEmail(event.target.value);
            }}
          />
        </FormGroup>

        {/* Username */}
        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input id="Username" name="Username" placeholder="Input Username" type="text" value={Username}
            onChange={(event) => {
              SetUsername(event.target.value);
            }}
          />
        </FormGroup>

        {/* Fullname */}
        <FormGroup>
          <Label for="Fullname">Fullname: </Label>
          <Input id="Fullname" name="Fullname" placeholder="Input Fullname" type="text" value={Fullname}
            onChange={(event) => {
              SetFullname(event.target.value);
            }}
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input id="Department" name="Department" type="select" value={Department}
            onChange={(event) => {
              SetDepartment(event.target.value);
            }}
          >
            {departmentItems}
            {/* <option value={"Bán hàng"}>Bán hàng</option>
            <option value={"Bảo vệ"}>Bảo vệ</option>
            <option value={"Giám đốc"}>Giám đốc</option>
            <option value={"Kỹ thuật"}>Kỹ thuật</option>
            <option value={"Marketing"}>Marketing</option> */}
          </Input>
        </FormGroup>

        {/* Postion */}
        <FormGroup>
          <Label for="Postion">Select a Postion: </Label>
          <Input id="Postion" name="Postion" type="select" value={Postion}
            onChange={(event) => {
              SetPostion(event.target.value);
            }}
          >
            {positionItems}
            {/* <option value={"Dev"}>Dev</option>
            <option value={"Test"}>Test</option>
            <option value={"Scrum_Master"}>Scrum_Master</option>
            <option value={"PM"}>PM</option> */}
          </Input>
        </FormGroup>
      </Form>

      <Button color="primary" onClick={handleCreate} >
        Create
      </Button>
      <Button color="danger" onClick={handleReset}>Reset</Button>

    </Container>
  );
}

export default InputForm;
