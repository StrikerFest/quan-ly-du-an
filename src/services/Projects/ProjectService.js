import axios from "axios";

const PROJECTS_REST_API_URL = "http://localhost:8080/api/vi/project";

class ProjectService {
  getProjects() {
    axios.get("http://localhost:8080/api/vi/project");
  }

  createProject(project) {
    return axios.post(PROJECTS_REST_API_URL, project);
  }

  deleteProject(projectId) {
    return axios.delete(PROJECTS_REST_API_URL + "/" + projectId);
  }
}

export default new ProjectService();
