import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EmployeeUpdate = (props) => {
  // UseParams lấy id của trang cần update hiện tại
  const { id } = useParams();

  // UserState dùng State trong functional component
  let [tenNhanSu, setTenNhanSu] = useState([]);
  let [soDienThoai, setSoDienThoai] = useState([]);
  let [email, setEmail] = useState([]);
  let [quyenHan, setQuyenHan] = useState([]);

  // Use effect xử lý side-effect - Lấy thông tin từ HTTP - Api
  useEffect(() => {
    // Lấy api từ update để lấy object nhanVien cũ
    axios
      .get("http://localhost:8080/api/vi/nhanVien/update/" + id)
      .then((response) => {
        setTenNhanSu(response.data.tenNhanSu);
        setSoDienThoai(response.data.soDienThoai);
        setEmail(response.data.email);
        setQuyenHan(response.data.quyenHan);
        console.log("response.data");
        console.log(response.data);
      });
  }, []);

  // lưu nhanVien - tạo biến và PUT vào api
  const saveNhanVien = (e) => {
    // e.preventDefault();
    let nhanVien = {
      tenNhanSu: tenNhanSu,
      soDienThoai: soDienThoai,
      email: email,
      quyenHan: quyenHan,
    };
    console.log("nhanVien => ");
    console.log(JSON.stringify(nhanVien));
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.put(
      `http://localhost:8080/api/vi/nhanVien/put/` + id,
      nhanVien,
      config
    );
  };

  // Các input handler function - cập nhật lên input khi có thay đổi
  const changeTenHandler = (event) => {
    setTenNhanSu(event.target.value);
  };

  const changeSoDienThoaiHandler = (event) => {
    setSoDienThoai(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changeQuyenHanHandler = (event) => {
    setQuyenHan(event.target.value);
  };

  // Css tạm cho table
  const styleTable = {
    border: "1px solid black",
    margin: "0 auto",
    color: "crimson",
    fontWeight: "bold",
  };

  return (
    <div>
      <h1>Nhân viên</h1>
      <form>
        <table style={styleTable}>
          <tbody>
            {/* Tên */}
            <tr>
              <td>Tên :</td>
              <td>
                <input
                  type="text"
                  name="tenNhanSu"
                  value={tenNhanSu}
                  onChange={changeTenHandler}
                />
              </td>
            </tr>
            {/* Số điện thoại */}
            <tr>
              <td>Số điện thoại :</td>
              <td>
                <input
                  type="text"
                  name="soDienThoai"
                  value={soDienThoai}
                  onChange={changeSoDienThoaiHandler}
                />
              </td>
            </tr>
            {/* Email */}
            <tr>
              <td>Email :</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={changeEmailHandler}
                />
              </td>
            </tr>
            {/* Quyền hạn */}
            <tr>
              <td>Quyền hạn :</td>
              <td>
                <select value={quyenHan} onChange={changeQuyenHanHandler}>
                  <option value="1">Admin</option>
                  <option value="2">Project Manager</option>
                  <option value="3">Nhân viên</option>
                </select>
              </td>
            </tr>
            {/* Submit */}
            <tr>
              <td colSpan="2">
                <button type="submit" onClick={saveNhanVien}>
                  Nhập
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {/* Link quay về */}
      <div>
        <Link to="/nhanVien">Quay lại</Link>
      </div>
    </div>
  );
};

export default EmployeeUpdate;
