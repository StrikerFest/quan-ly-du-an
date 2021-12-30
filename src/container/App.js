import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/UI/Header/Navbar/Navbar";
import Project from "../components/Projects/Project";
import ProjectDetail from "../components/Projects/ProjectDetail";
import Task from "../components/Tasks/Task";
import Employee from "../components/Employees/Employee";
import axios from "axios";
import ProjectCreate from "../components/Projects/ProjectCreate";
import ProjectService from "../services/Projects/ProjectService";
import EmployeeService from "../services/Employees/EmployeeService";
import EmployeeCreate from "../components/Employees/EmployeeCreate";
import TaskCreate from "../components/Tasks/TaskCreate";
import TaskService from "../services/Tasks/TaskService";
import PhongBanCreate from "../components/PhongBan/PhongBanCreate";
import PhongBan from "../components/PhongBan/PhongBan";
import PhongBanChiTiet from "../components/PhongBan/PhongBanChiTiet";
import PhongBanService from "../services/PhongBan/PhongBanService";
import ProjectUpdate from "../components/Projects/ProjectUpdate";
import TaskUpdate from "../components/Tasks/TaskUpdate";
import EmployeeUpdate from "../components/Employees/EmployeeUpdate";

class App extends Component {
  // Constructor quản lý state và bind phương thức
  constructor(props) {
    super(props);

    this.state = {
      project: [],
      task: [],
      nhanVien: [],
      PM: [],
      phongBan: [],
      phongBanChiTiet: [],
      trangThaiProject: [],
      trangThaiTask: [],
      error: "",
    };

    this.deleteProject = this.deleteProject.bind(this);
    this.deleteNhanVien = this.deleteNhanVien.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deletePhongBan = this.deletePhongBan.bind(this);
  }

  // Phương thức handler delete
  deleteProject(id) {
    ProjectService.deleteProject(id)
      .then((res) => {
        this.setState({
          project: this.state.project.filter((project) => project.id !== id),
        });
      })
      .catch((err) => {
        this.setState({ error: "Không được xóa project này" });
        setTimeout(
          function () {
            this.setState({ error: "" });
          }.bind(this),
          1000
        );
      });
  }

  deleteNhanVien(id) {
    EmployeeService.deleteNhanVien(id)
      .then((res) => {
        this.setState({
          nhanVien: this.state.nhanVien.filter(
            (nhanVien) => nhanVien.id !== id
          ),
        });
      })
      .catch((err) => {
        this.setState({ error: "Không được xóa nhân viên này" });
        setTimeout(
          function () {
            this.setState({ error: "" });
          }.bind(this),
          1000
        );
      });
  }

  deleteTask(id) {
    TaskService.deleteTask(id)
      .then((res) => {
        this.setState({
          task: this.state.task.filter((task) => task.id !== id),
        });
      })
      .catch((err) => {
        this.setState({ error: "Không được xóa công việc này" });
        setTimeout(
          function () {
            this.setState({ error: "" });
          }.bind(this),
          1000
        );
      });
  }
  deletePhongBan(idDuAn, idCongViec, idNhanVien) {
    PhongBanService.deletePhongBan(idDuAn, idCongViec, idNhanVien).then(
      window.location.reload()
    );
  }

  // Lấy API
  componentDidMount() {
    ProjectService.getProjects().then((response) => {
      this.setState({ project: response.data });
    });

    TaskService.getTask().then((response) => {
      this.setState({ task: response.data });
    });

    EmployeeService.getNhanVien()
      .then((response) => {
        this.setState({ nhanVien: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    PhongBanService.getPhongBan().then((response) => {
      this.setState({ phongBan: response.data });
    });

    axios
      .get("http://localhost:8080/api/vi/trangThaiProject")
      .then((response) => {
        this.setState({ trangThaiProject: response.data });
      });

    axios.get("http://localhost:8080/api/vi/trangThaiTask").then((response) => {
      this.setState({ trangThaiTask: response.data });
    });
  }

  render() {
    const styleError = {
      color: "red",
    };
    return (
      // BrowserRouter để sử dụng React Route
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="main-content">
            <h1 style={styleError}>{this.state.error}</h1>
            <Routes>
              {/* Mặc định trang index sẽ xuất list project */}
              <Route
                path="/"
                element={
                  <Project
                    project={this.state.project}
                    deleteProject={this.deleteProject}
                    trangThaiProject={this.state.trangThaiProject}
                    nhanVien={this.state.nhanVien}
                  />
                }
              />
              {/* Đường dẫn đến list project */}
              <Route
                path="/project"
                element={
                  <Project
                    project={this.state.project}
                    deleteProject={this.deleteProject}
                    trangThaiProject={this.state.trangThaiProject}
                    nhanVien={this.state.nhanVien}
                  />
                }
              />
              {/* Đường dẫn đến list công việc */}
              <Route
                path="task"
                element={
                  <Task
                    task={this.state.task}
                    trangThaiTask={this.state.trangThaiTask}
                    deleteTask={this.deleteTask}
                  />
                }
              />
              {/* Đường dẫn đến list nhân viên */}
              <Route
                path="/nhanVien"
                element={
                  <Employee
                    employee={this.state.nhanVien}
                    deleteNhanVien={this.deleteNhanVien}
                  />
                }
              />
              {/* Đường dẫn đến list phòng ban */}
              <Route
                path="/phongBan"
                element={
                  <PhongBan
                    project={this.state.project}
                    phongBan={this.state.phongBan}
                    nhanVien={this.state.nhanVien}
                    trangThaiProject={this.state.trangThaiProject}
                  />
                }
              />
              {/* Đường dẫn xem chi tiết project - Bỏ tạm thời */}
              <Route
                path="/project/chiTiet"
                element={<ProjectDetail project={this.state.project} />}
              />
              {/* Đường dẫn đến phòng ban chi tiết theo id */}
              <Route
                exact
                path={"/phongBan/:id"}
                element={
                  <PhongBanChiTiet
                    getPhongBanChiTiet={this.getPhongBanChiTiet}
                    project={this.state.project}
                    phongBan={this.state.phongBanChiTiet}
                    nhanVien={this.state.nhanVien}
                    trangThaiTask={this.state.trangThaiTask}
                    task={this.state.task}
                    deletePhongBan={this.deletePhongBan}
                  />
                }
              />
              {/* Đường dẫn create của các trang */}
              <Route path="/project/create" element={<ProjectCreate />} />
              <Route path="/nhanVien/create" element={<EmployeeCreate />} />
              <Route path="/task/create" element={<TaskCreate />} />
              <Route path="/phongBan/create" element={<PhongBanCreate />} />
              {/* Đường dẫn update của các trang */}
              <Route path="/project/update/:id" element={<ProjectUpdate />} />
              <Route path="/task/update/:id" element={<TaskUpdate />} />
              <Route path="/nhanVien/update/:id" element={<EmployeeUpdate />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
