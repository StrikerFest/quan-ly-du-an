import React, { Component } from "react";
import "./App.css";
// import ProjectService from "../services/Projects/ProjectService";
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: [],
      task: [],
      nhanVien: [],
      phongBan: [],
      trangThaiProject: [],
      trangThaiTask: [],
    };

    this.deleteProject = this.deleteProject.bind(this);
    this.deleteNhanVien = this.deleteNhanVien.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deletePhongBan = this.deletePhongBan.bind(this);
  }

  deleteProject(id) {
    ProjectService.deleteProject(id).then((res) => {
      this.setState({
        project: this.state.project.filter((project) => project.id !== id),
      });
    });
  }

  deleteNhanVien(id) {
    EmployeeService.deleteNhanVien(id).then((res) => {
      this.setState({
        nhanVien: this.state.nhanVien.filter((nhanVien) => nhanVien.id !== id),
      });
    });
  }

  deleteTask(id) {
    TaskService.deleteTask(id).then((res) => {
      this.setState({
        task: this.state.task.filter((task) => task.id !== id),
      });
    });
  }
  deletePhongBan(id) {
    // PhongBanService.deletePhongBan(id).then((res) => {
    //   this.setState({
    //     phongBan: this.state.phongBan.filter((phongBan) => phongBan.id !== id),
    //   });
    // });
    console.log(`Phong ban id ${id} deleted`);
  }

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

    axios.get("http://localhost:8080/api/vi/phongBan").then((response) => {
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
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="main-content">
            <Routes>
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
              <Route
                path="/project/chiTiet"
                element={<ProjectDetail project={this.state.project} />}
              />
              <Route path="/project/create" element={<ProjectCreate />} />
              <Route path="/nhanVien/create" element={<EmployeeCreate />} />
              <Route path="/task/create" element={<TaskCreate />} />
              <Route path="/phongBan/create" element={<PhongBanCreate />} />
              <Route
                path="/congViec"
                element={
                  <Task task={this.state.task} deleteTask={this.deleteTask} />
                }
              />
              <Route
                path="/nhanVien"
                element={
                  <Employee
                    employee={this.state.nhanVien}
                    deleteNhanVien={this.deleteNhanVien}
                  />
                }
              />
              <Route
                path="/phongBan"
                element={
                  <PhongBan
                    project={this.state.project}
                    phongBan={this.state.phongBan}
                    nhanVien={this.state.nhanVien}
                    trangThaiTask={this.state.trangThaiTask}
                    task={this.state.task}
                    deletePhongBan={this.deleteNhanVien}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
