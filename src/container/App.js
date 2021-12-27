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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: [],
      task: [],
      nhanVien: [],
    };

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
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="main-content">
            
            <Routes >
              <Route
                path="/"
                element={<Project project={this.state.project} />}
              />
              <Route
                path="/project"
                element={<Project project={this.state.project} />}
              />
              <Route  
                path="/project/chiTiet"
                element={<ProjectDetail project={this.state.project} />}
              />
              <Route
                path="/project/create"
                element={
                  <ProjectCreate/>
                }
              />
              <Route
                path="/congViec"
                element={<Task task={this.state.task} />}
              />
              <Route
                path="/nhanVien"
                element={<Employee employee={this.state.nhanVien} />}
              />
            </Routes>
          </div>
        </div>
                
      </BrowserRouter>
    );
  }
}

export default App;
