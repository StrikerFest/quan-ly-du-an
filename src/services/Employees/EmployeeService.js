import axios from "axios";

const EMPLOYEES_REST_API_URL = "http://localhost:8080/api/vi/nhanVien";

class EmployeeService {
  getNhanVien() {
    axios.get(EMPLOYEES_REST_API_URL);
  }

  createNhanVien(nhanVien) {
    return axios.post(EMPLOYEES_REST_API_URL, nhanVien);
  }

  deleteNhanVien(nhanVienId) {
    return axios.delete(EMPLOYEES_REST_API_URL + "/" + nhanVienId);
  }
}

export default new EmployeeService();
