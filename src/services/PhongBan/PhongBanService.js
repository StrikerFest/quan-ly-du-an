import axios from "axios";

const PHONG_BAN_REST_API_URL = "http://localhost:8080/api/vi/phongBan";

class PhongBanService {
  getProjects() {
    axios.get(PHONG_BAN_REST_API_URL);
  }

  createProject(phongBan) {
    return axios.post(PHONG_BAN_REST_API_URL, phongBan);
  }

  deleteProject(phongBanId) {
    return axios.delete(PHONG_BAN_REST_API_URL + "/" + phongBanId);
  }
}

export default new PhongBanService();
