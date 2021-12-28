import React, { Component } from "react";
import axios from "axios";

class ProjectCreate extends Component {
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
  //
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
        <h1>Project</h1>
        <form>
          <table style={styleTable}>
            <tbody>
              <tr>
                <td>Tên :</td>
                <td>
                  <input
                    type="text"
                    name="ten"
                    value={this.state.tenProject}
                    onChange={this.changeTenHandler}
                  />
                </td>
              </tr>
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
              <tr>
                <td>Tổng thời gian làm :</td>
                <td>
                  <input
                    type="text"
                    name="tongThoiGian"
                    value={this.state.tongThoiGianLam}
                    onChange={this.changeTongThoiGianLamHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Project manager :</td>
                <td>
                  {/* <input
                    type="text"
                    name="projectManager"
                    value={this.state.idProjectManager}
                    onChange={this.changeIdProjectManagerHandler}
                  /> */}
                  <select
                    value={this.state.idProjectManager}
                    onChange={this.changeIdTrangThaiHandler}
                  >
                    {this.state.projectManager.map((projectManager) => (
                      <option value={projectManager.id} key={projectManager.id}>
                        {projectManager.tenNhanSu}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Trạng thái :</td>
                <td>
                  {/* <input
                    type="text"
                    name="trangThai"
                    value={this.state.idTrangThai}
                    onChange={this.changeIdTrangThaiHandler}
                  /> */}
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
      </div>
    );
  }
}

export default ProjectCreate;
