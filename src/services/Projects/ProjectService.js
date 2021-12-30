import axios from "axios";

const PROJECTS_REST_API_URL = "http://localhost:8080/api/vi/project";

class ProjectService {
  // Phương thức lấy project
  getProjects() {
    axios.get("http://localhost:8080/api/vi/project");
  }

  // Phương thức tạo project
  createProject(project) {
    return axios.post(PROJECTS_REST_API_URL, project);
  }

  // Phương thức xóa project
  deleteProject(projectId) {
    return axios.delete(PROJECTS_REST_API_URL + "/" + projectId);
  }
}

export default new ProjectService();
