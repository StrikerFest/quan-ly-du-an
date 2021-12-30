import axios from "axios";

const EMPLOYEES_REST_API_URL = "http://localhost:8080/api/vi/nhanVien";

class EmployeeService {
  // Phương thức lấy nhân viên
  getNhanVien() {
    axios.get(EMPLOYEES_REST_API_URL);
  }

  // Phương thức tạo nhân viên
  createNhanVien(nhanVien) {
    return axios.post(EMPLOYEES_REST_API_URL, nhanVien);
  }

  // Phương thức xóa nhân viên
  deleteNhanVien(nhanVienId) {
    return axios.delete(EMPLOYEES_REST_API_URL + "/" + nhanVienId);
  }
}

export default new EmployeeService();
