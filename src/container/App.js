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
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: [
        {
          id: 1,
          name: "P1",
          PM: "Jeff",
          startDate: "2021-12-21",
          totalHour: 3.7,
        },
        {
          id: 2,
          name: "P2",
          PM: "John",
          startDate: "2021-12-21",
          totalHour: 1.7,
        },
      ],
      task: [
        {
          id: 1,
          name: "Work",
          instruction: "Keep working",
          totalHour: 3.7,
        },
        {
          id: 2,
          name: "Die",
          instruction: "Keep dying",
          totalHour: 13.7,
        },
      ],
      employee: [
        {
          id: 1,
          name: "Jeff",
          phone: "0987654321",
          email: "Jeff@Work",
          role: "Dev",
        },
        {
          id: 2,
          name: "John",
          phone: "0857853111",
          email: "John@Work",
          role: "PM",
        },
      ],
      items: [],
      isLoaded: false,
    };
  }

  // fetch("projectView.php")
  //   .then((res) => res.json())
  //   .then(
  //     (result) => {
  //       const
  //       this.setState({
  //         isLoaded: true,
  //         items: result,
  //       });
  //     },
  //     (error) => {
  //       this.setState({
  //         isLoaded: true,
  //         error,
  //       });
  //     }
  //   );
  componentDidMount() {
    axios.get("http://localhost:8080/api/vi/project").then((response) => {
      this.setState({ project: response.data });
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
                exact
                path="/project"
                element={<Project project={this.state.project} />}
              />
              <Route
                exact
                path="/project/chiTiet"
                element={<ProjectDetail project={this.state.project} />}
              />
              <Route
                exact
                path="/congViec"
                element={<Task task={this.state.task} />}
              />
              <Route
                exact
                path="/nhanVien"
                element={<Employee employee={this.state.employee} />}
              />
            </Routes>
          </div>
        </div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              {item.tenProject} {item.ngayBatDau}
            </li>
          ))}
        </ul>
      </BrowserRouter>
    );
  }
}

export default App;
