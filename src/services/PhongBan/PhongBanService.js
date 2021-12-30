import axios from "axios";

const PHONG_BAN_REST_API_URL = "http://localhost:8080/api/vi/phongBan";

class PhongBanService {
  // Phương thức lấy phòng ban
  getPhongBan() {
    return axios.get(PHONG_BAN_REST_API_URL);
  }

  // Phương thức lấy chi tiết phòng ban
  getPhongBanChiTiet(id) {
    return axios.get(PHONG_BAN_REST_API_URL + "/" + id);
  }

  // Phương thức tạo phòng ban
  createPhongBan(phongBan) {
    return axios.post(PHONG_BAN_REST_API_URL, phongBan);
  }

  // Phương thức xóa phòng ban
  deletePhongBan(idDuAn, idCongViec, idNhanVien) {
    return axios.delete(
      PHONG_BAN_REST_API_URL +
        "/" +
        idDuAn +
        "/" +
        idCongViec +
        "/" +
        idNhanVien
    );
  }
}

export default new PhongBanService();
