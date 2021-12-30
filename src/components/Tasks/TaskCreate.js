import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class TaskCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenTask: "",
      chiDan: "",
      tongThoiGian: "",
      idTrangThai: "1",
      trangThai: [],
    };
    this.changeTenHandler = this.changeTenHandler.bind(this);
    this.changeChiDanHandler = this.changeChiDanHandler.bind(this);
    this.changeTongThoiGianHandler = this.changeTongThoiGianHandler.bind(this);
    this.changeIdTrangThaiHandler = this.changeIdTrangThaiHandler.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/vi/trangThaiTask").then((response) => {
      this.setState({ trangThai: response.data });
    });
  }
  //
  saveTask = (e) => {
    // e.preventDefault();
    let task = {
      tenTask: this.state.tenTask,
      chiDan: this.state.chiDan,
      tongThoiGian: this.state.tongThoiGian,
      idTrangThai: this.state.idTrangThai,
    };
    console.log("task => " + JSON.stringify(task));
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.post(`http://localhost:8080/api/vi/task/create`, task, config);
  };

  changeTenHandler = (event) => {
    this.setState({ tenTask: event.target.value });
  };

  changeChiDanHandler = (event) => {
    this.setState({ chiDan: event.target.value });
  };

  changeTongThoiGianHandler = (event) => {
    this.setState({ tongThoiGian: event.target.value });
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
        <h1>Công việc</h1>
        <form>
          <table style={styleTable}>
            <tbody>
              <tr>
                <td>Tên công việc:</td>
                <td>
                  <input
                    type="text"
                    name="tenTask"
                    value={this.state.tenTask}
                    onChange={this.changeTenHandler}
                    placeholder="Nhập tên công việc"
                  />
                </td>
              </tr>
              <tr>
                <td>Chỉ dẫn :</td>
                <td>
                  <input
                    type="textarea"
                    name="chiDan"
                    value={this.state.chiDan}
                    onChange={this.changeChiDanHandler}
                    placeholder="Chỉ dẫn làm việc"
                  />
                </td>
              </tr>
              <tr>
                <td>Tổng thời gian :</td>
                <td>
                  <input
                    type="text"
                    name="tongThoiGian"
                    value={this.state.tongThoiGian}
                    onChange={this.changeTongThoiGianHandler}
                    placeholder="Tổng giờ làm"
                  />
                </td>
              </tr>
              <tr>
                <td>Trạng thái :</td>
                <td>
                  <select onChange={this.changeIdTrangThaiHandler}>
                    {this.state.trangThai.map((trangThai) => (
                      <option value={trangThai.id} key={trangThai.id}>
                        {trangThai.tenTrangThaiTask}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit" onClick={this.saveTask}>
                    Nhập
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div>
          <Link to="/task">Quay lại</Link>
        </div>
      </div>
    );
  }
}

export default TaskCreate;
