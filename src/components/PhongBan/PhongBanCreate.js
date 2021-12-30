import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PhongBanCreate extends Component {
  // Constructor tạo state, bind các phương thức handler
  constructor(props) {
    super(props);
    this.state = {
      idDuAn: "2",
      idCongViec: "2",
      idNhanVien: "2",
      project: [],
      task: [],
      nhanVien: [],
    };
    this.changeIdDuAnHandler = this.changeIdDuAnHandler.bind(this);
    this.changeIdCongViecHandler = this.changeIdCongViecHandler.bind(this);
    this.changeIdNhanVienHandler = this.changeIdNhanVienHandler.bind(this);
  }

  // xử lý request api
  componentDidMount() {
    axios.get("http://localhost:8080/api/vi/project").then((response) => {
      this.setState({ project: response.data });
    });
    axios.get("http://localhost:8080/api/vi/task").then((response) => {
      this.setState({ task: response.data });
    });

    axios.get("http://localhost:8080/api/vi/nhanSu").then((response) => {
      this.setState({ nhanVien: response.data });
    });
  }

  // lưu phòng ban - tạo biến và POST vào api
  savePhongBan = (e) => {
    // e.preventDefault();
    let phongBan = {
      idDuAn: this.state.idDuAn,
      idCongViec: this.state.idCongViec,
      idNhanVien: this.state.idNhanVien,
    };
    console.log("phongBan => " + JSON.stringify(phongBan));
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.post(
      `http://localhost:8080/api/vi/phongBan/create`,
      phongBan,
      config
    );
  };

  // Các input handler function - cập nhật lên input khi có thay đổi
  changeIdDuAnHandler = (event) => {
    this.setState({ idDuAn: event.target.value });
  };

  changeIdCongViecHandler = (event) => {
    this.setState({ idCongViec: event.target.value });
  };

  changeIdNhanVienHandler = (event) => {
    this.setState({ idNhanVien: event.target.value });
  };

  // Render
  render() {
    // Css tạm cho table
    const styleTable = {
      border: "1px solid black",
      margin: "0 auto",
      color: "crimson",
      fontWeight: "bold",
    };

    return (
      <div>
        <h1>Phân công</h1>
        <form>
          <table style={styleTable}>
            <tbody>
              {/* Project */}
              <tr>
                <td>Project :</td>
                <td>
                  <select onChange={this.changeIdDuAnHandler}>
                    <option defaultValue="true">Chọn project</option>
                    {this.state.project.map((project) => (
                      <option value={project.id} key={project.id}>
                        {project.tenProject}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {/* Công việc */}
              <tr>
                <td>Công việc :</td>
                <td>
                  <select
                    value={this.state.idTrangThai}
                    onChange={this.changeIdCongViecHandler}
                  >
                    <option defaultValue="true">Chọn công việc</option>
                    {this.state.task.map((task) => (
                      <option value={task.id} key={task.id}>
                        {task.tenTask}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {/* Nhân viên */}
              <tr>
                <td>Nhân viên :</td>
                <td>
                  <select onChange={this.changeIdNhanVienHandler}>
                    <option defaultValue="true">Chọn nhân viên</option>

                    {this.state.nhanVien.map((nhanVien) => (
                      <option value={nhanVien.id} key={nhanVien.id}>
                        {nhanVien.tenNhanSu} -
                        {nhanVien.quyenHan == 0
                          ? " SuperAdmin"
                          : nhanVien.quyenHan == 1
                          ? " Admin"
                          : nhanVien.quyenHan == 2
                          ? " PM"
                          : nhanVien.quyenHan == 3
                          ? "Nhân viên"
                          : ""}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {/* Nhập */}
              <tr>
                <td colSpan="2">
                  <button type="submit" onClick={this.savePhongBan}>
                    Nhập
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        {/* Link quay về */}
        <div>
          <Link to="/phongBan">Quay lại</Link>
        </div>
      </div>
    );
  }
}

export default PhongBanCreate;
