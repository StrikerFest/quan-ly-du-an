import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ProjectCreate extends Component {
  // Constructor tạo state, bind các phương thức handler
  constructor(props) {
    super(props);
    this.state = {
      tenProject: "",
      ngayBatDau: "",
      tongThoiGianLam: "",
      idProjectManager: "2",
      idTrangThai: "1",
      trangThai: [],
      projectManager: [],
    };
    this.changeTenHandler = this.changeTenHandler.bind(this);
    this.changeNgayBatDauHandler = this.changeNgayBatDauHandler.bind(this);
    this.changeTongThoiGianLamHandler =
      this.changeTongThoiGianLamHandler.bind(this);
    this.changeIdProjectManagerHandler =
      this.changeIdProjectManagerHandler.bind(this);
    this.changeIdTrangThaiHandler = this.changeIdTrangThaiHandler.bind(this);
  }

  // xử lý request api
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/vi/trangThaiProject")
      .then((response) => {
        this.setState({ trangThai: response.data });
      });
    axios
      .get("http://localhost:8080/api/vi/projectManager")
      .then((response) => {
        this.setState({ projectManager: response.data });
      });
  }

  // lưu project - tạo biến và POST vào api
  saveProject = (e) => {
    // e.preventDefault();
    let project = {
      tenProject: this.state.tenProject,
      ngayBatDau: this.state.ngayBatDau,
      tongThoiGianLam: this.state.tongThoiGianLam,
      idProjectManager: this.state.idProjectManager,
      idTrangThai: this.state.idTrangThai,
    };
    console.log("project => " + JSON.stringify(project));
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.post(`http://localhost:8080/api/vi/project/create`, project, config);
  };

  // Các input handler function - cập nhật lên input khi có thay đổi
  changeTenHandler = (event) => {
    this.setState({ tenProject: event.target.value });
  };

  changeNgayBatDauHandler = (event) => {
    this.setState({ ngayBatDau: event.target.value });
  };

  changeTongThoiGianLamHandler = (event) => {
    this.setState({ tongThoiGianLam: event.target.value });
  };

  changeIdProjectManagerHandler = (event) => {
    this.setState({ idProjectManager: event.target.value });
  };

  changeIdTrangThaiHandler = (event) => {
    this.setState({ idTrangThai: event.target.value });
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
        <h1>Project</h1>
        <form>
          <table style={styleTable}>
            <tbody>
              {/* Tên */}
              <tr>
                <td>Tên :</td>
                <td>
                  <input
                    type="text"
                    name="ten"
                    value={this.state.tenProject}
                    onChange={this.changeTenHandler}
                    placeholder="Nhập tên project"
                  />
                </td>
              </tr>
              {/* Ngày bắt đầu */}
              <tr>
                <td>Ngày bắt đầu :</td>
                <td>
                  <input
                    type="date"
                    name="ngayBatDau"
                    value={this.state.ngayBatDau}
                    onChange={this.changeNgayBatDauHandler}
                  />
                </td>
              </tr>
              {/* Tổng thời gian làm */}
              <tr>
                <td>Tổng thời gian làm :</td>
                <td>
                  <input
                    type="text"
                    name="tongThoiGian"
                    value={this.state.tongThoiGianLam}
                    onChange={this.changeTongThoiGianLamHandler}
                    placeholder="Nhập tổng giờ làm"
                  />
                </td>
              </tr>
              {/* Project manager */}
              <tr>
                <td>Project manager :</td>
                <td>
                  <select onChange={this.changeIdProjectManagerHandler}>
                    {this.state.projectManager.map((projectManager) => (
                      <option value={projectManager.id} key={projectManager.id}>
                        {projectManager.tenNhanSu}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {/* Trạng thái */}
              <tr>
                <td>Trạng thái :</td>
                <td>
                  <select
                    value={this.state.idTrangThai}
                    onChange={this.changeIdTrangThaiHandler}
                  >
                    {this.state.trangThai.map((trangThai) => (
                      <option value={trangThai.id} key={trangThai.id}>
                        {trangThai.tenTrangThai}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {/* Submit */}
              <tr>
                <td colSpan="2">
                  <button type="submit" onClick={this.saveProject}>
                    Nhập
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        {/* Link quay lại */}
        <div>
          <Link to="/project">Quay lại</Link>
        </div>
      </div>
    );
  }
}

export default ProjectCreate;
