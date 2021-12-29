import axios from "axios";

const PHONG_BAN_REST_API_URL = "http://localhost:8080/api/vi/phongBan";

class PhongBanService {
  getPhongBan() {
    axios.get(PHONG_BAN_REST_API_URL);
  }

  getPhongBanChiTiet(id) {
    axios.get(PHONG_BAN_REST_API_URL + "/" + id);
  }

  createPhongBan(phongBan) {
    return axios.post(PHONG_BAN_REST_API_URL, phongBan);
  }

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
