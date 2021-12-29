import React, { Component } from "react";
import axios from "axios";

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenNhanSu: "",
      soDienThoai: "",
      email: "",
      quyenHan: "3",
    };
    this.changeTenHandler = this.changeTenHandler.bind(this);
    this.changeSoDienThoaiHandler = this.changeSoDienThoaiHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeQuyenHanHandler = this.changeQuyenHanHandler.bind(this);
  }

  componentDidMount() {}
  //
  saveNhanVien = (e) => {
    // e.preventDefault();
    let nhanVien = {
      tenNhanSu: this.state.tenNhanSu,
      soDienThoai: this.state.soDienThoai,
      email: this.state.email,
      quyenHan: this.state.quyenHan,
    };
    console.log("nhanVien => " + JSON.stringify(nhanVien));
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.post(
      `http://localhost:8080/api/vi/nhanVien/create`,
      nhanVien,
      config
    );
  };

  changeTenHandler = (event) => {
    this.setState({ tenNhanSu: event.target.value });
  };

  changeSoDienThoaiHandler = (event) => {
    this.setState({ soDienThoai: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changeQuyenHanHandler = (event) => {
    this.setState({ quyenHan: event.target.value });
  };

  render() {
    const styleTable = {
      border: "1px solid black",
      margin: "0 auto",
      color: "crimson",
      fontWeight: "bold",
    };

    return (
      <div>
        {/* <button onClick={this.some}>HAYEAYEDHASDN</button> */}
        <h1>Nhân viên</h1>
        <form>
          <table style={styleTable}>
            <tbody>
              <tr>
                <td>Tên :</td>
                <td>
                  <input
                    type="text"
                    name="tenNhanSu"
                    value={this.state.tenNhanSu}
                    onChange={this.changeTenHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Số điện thoại :</td>
                <td>
                  <input
                    type="text"
                    name="soDienThoai"
                    value={this.state.soDienThoai}
                    onChange={this.changeSoDienThoaiHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeEmailHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Quyền hạn :</td>
                <td>
                  <select
                    value={this.state.quyenHan}
                    onChange={this.changeQuyenHanHandler}
                  >
                    <option value="1">Admin</option>
                    <option value="2">Project Manager</option>
                    <option value="3">Nhân viên</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit" onClick={this.saveNhanVien}>
                    Nhập
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default EmployeeCreate;
