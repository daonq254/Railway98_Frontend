console.log("HRM");
// Khai báo mảng global để lưu trữ danh sách tài khoản
var listAccount = [];

// Load dữ liệu API Account
getListAccount();

function getListAccount(params) {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/v1/accounts",
    // data: "data",
    dataType: "json",
    success: function (response) {
      //
      console.log("Response API: ", response);
      // gán dữ liệu vào listAccount
      listAccount = response;
      // Hiển thị dữ liệu ở bảng kết quả
      showListAccount();
    },
  });
}
// Xử lý sự kiện click cho nút Reset
$("#reset_btn").click(function (e) {
  //   console.log("Reset button clicked");
  $("#ID_ID").val("");
  $("#Email_ID").val("");
  $("#Username_ID").val("");
  $("#Fullname_ID").val("");
  $("#Department_ID").val(0);
  $("#Position_ID").val(0);
  $("#Cretate_Date_ID").val("");
});

// Xử lý sự kiện click cho nút save
//   1. Xử lý bắt sự kiện khi người dùng nhấn nút Save
$("#save_btn").click(function (e) {
  // 2. Lấy dữ liệu người dùng nhập
  var v_ID_ID = $("#ID_ID").val();
  var v_Email_ID = $("#Email_ID").val();
  var v_Username_ID = $("#Username_ID").val();
  var v_Fullname_ID = $("#Fullname_ID").val();
  var v_Department_ID = $("#Department_ID").val();
  var v_Position_ID = $("#Position_ID").val();
  var v_Cretate_Date_ID = $("#Cretate_Date_ID").val();

  // console.log("ID_ID: " + v_ID_ID);
  // console.log("Email_ID: " + v_Email_ID);
  // console.log("Username_ID: " + v_Username_ID);
  // console.log("Fullname_ID: " + v_Fullname_ID);
  // console.log("Department_ID: " + v_Department_ID);
  // console.log("Position_ID: " + v_Position_ID);
  // console.log("Cretate_Date_ID: " + v_Cretate_Date_ID);

  // 3. Lưu trữ dữ liệu(FE)
  // Tạo đối tượng account
  var account = {
    Id: v_ID_ID,
    Email: v_Email_ID,
    Username: v_Username_ID,
    Fullname: v_Fullname_ID,
    Department: v_Department_ID,
    Position: v_Position_ID,
    Cretate_Date: v_Cretate_Date_ID,
  };
  // console.log(account);

  // Lưu trữ account vào mảng listAccount
  listAccount.push(account);
  //

  // 4. Hiển thị dữ liệu ở bảng kết quả
  showListAccount();
});

// Hàm hiển thị dữ liệu ở bảng kết quả
function showListAccount() {
  $("#Result_TB").empty();
  // listAccount là mảng chứa danh sách tài khoản
  for (let index = 0; index < listAccount.length; index++) {
    $("#Result_TB").append(`<tr>
      <td>${listAccount[index].id}</td>
      <td>${listAccount[index].email}</td>
      <td>${listAccount[index].username}</td>
      <td>${listAccount[index].fullname}</td>
      <td>${listAccount[index].department}</td>
      <td>${listAccount[index].position}</td>
      <td>${listAccount[index].createDate}</td>
      <td>
        <button type="button" class="btn btn-warning" onclick="handleEdit(${index})">Edit</button>
      </td>
      <td>
        <button type="button" class="btn btn-danger" onclick="handleDelete(${index})">Delete</button>
      </td>
    </tr>`);
  }
}

// Hàm xử lý sự kiện khi người dùng nhấn nút Delete
function handleDelete(indexParam) {
  // console.log("Delete button indexParam: " + indexParam);
  // Xóa phần tử tại vị trí indexParam trong mảng listAccount
  var resultConfirm = confirm("Bạn có chắc chắn muốn xóa tài khoản này không?");
  if (resultConfirm == true) {
    listAccount.splice(indexParam, 1);
    showListAccount();
  } else {
    alert("Bạn đã hủy xóa tài khoản này!");
  }
}

// Hàm xử lý sự kiện khi người dùng nhấn nút Edit
function handleEdit(indexParam) {
  // console.log("Edit button indexParam: " + indexParam);
  var account_edit = listAccount[indexParam];
  $("#ID_ID").val(account_edit.Id);
  $("#Email_ID").val(account_edit.Email);
  $("#Username_ID").val(account_edit.Username);
  $("#Fullname_ID").val(account_edit.Fullname);
  $("#Department_ID").val(account_edit.Department);
  $("#Position_ID").val(account_edit.Position);
  $("#Cretate_Date_ID").val(account_edit.Cretate_Date);

  // var indexAccountEdit = indexParam;
}

// Xử lý sự kiện click cho nút update
$("#update_btn").click(function (e) {
  // 2. Lấy dữ liệu người dùng nhập
  var v_ID_ID = $("#ID_ID").val();
  var v_Email_ID_Update = $("#Email_ID").val();
  var v_Username_ID_Update = $("#Username_ID").val();
  var v_Fullname_ID_Update = $("#Fullname_ID").val();
  var v_Department_ID_Update = $("#Department_ID").val();
  var v_Position_ID_Update = $("#Position_ID").val();
  var v_Cretate_Date_ID_Update = $("#Cretate_Date_ID").val();

  // console.log("ID_ID: " + v_ID_ID);
  // console.log("Email_ID: " + v_Email_ID);
  // console.log("Username_ID: " + v_Username_ID);
  // console.log("Fullname_ID: " + v_Fullname_ID);
  // console.log("Department_ID: " + v_Department_ID);
  // console.log("Position_ID: " + v_Position_ID);
  // console.log("Cretate_Date_ID: " + v_Cretate_Date_ID);
  // listAccount
  // Tìm Account mà đang cần Update
  var indexAccountEdit;
  for (let index = 0; index < listAccount.length; index++) {
    if (listAccount[index].Id == v_ID_ID) {
      indexAccountEdit = index;
    }
  }
  // Cập nhật lại thông tin cho Account cần Update
  listAccount[indexAccountEdit].Email = v_Email_ID_Update;
  listAccount[indexAccountEdit].Username = v_Username_ID_Update;
  listAccount[indexAccountEdit].Fullname = v_Fullname_ID_Update;
  listAccount[indexAccountEdit].Department = v_Department_ID_Update;
  listAccount[indexAccountEdit].Position = v_Position_ID_Update;
  listAccount[indexAccountEdit].Cretate_Date = v_Cretate_Date_ID_Update;

  showListAccount();
});
