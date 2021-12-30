import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProjectUpdate = (props) => {
  // UseParams lấy id của trang cần update hiện tại
  const { id } = useParams();

  // UserState dùng State trong functional component
  let [tenProject, setTenProject] = useState([]);
  let [ngayBatDau, setNgayBatDau] = useState([]);
  let [tongThoiGianLam, setTongThoiGianLam] = useState([]);
  let [idProjectManager, setIdProjectManager] = useState([]);
  let [idTrangThai, setIdTrangThai] = useState([]);
  const [projectManager, setProjectManager] = useState([]);
  const [trangThai, setTrangThai] = useState([]);

  // Use effect xử lý side-effect - Lấy thông tin từ HTTP - Api
  useEffect(() => {
    // Lấy api từ update để lấy object project cũ
    axios
      .get("http://localhost:8080/api/vi/project/update/" + id)
      .then((response) => {
        setTenProject(response.data.tenProject);
        setNgayBatDau(response.data.ngayBatDau);
        setTongThoiGianLam(response.data.tongThoiGianLam);
        setIdProjectManager(response.data.idProjectManager);
        setIdTrangThai(response.data.idTrangThai);
        console.log("response.data");
        console.log(response.data);
      });
    axios
      .get("http://localhost:8080/api/vi/trangThaiProject")
      .then((response) => {
        setTrangThai(response.data);
      });
    axios
      .get("http://localhost:8080/api/vi/projectManager")
      .then((response) => {
        setProjectManager(response.data);
      });
  }, []);

  // lưu project - tạo biến và PUT vào api
  const saveProject = (e) => {
    // e.preventDefault();
    let project = {
      tenProject: tenProject,
      ngayBatDau: ngayBatDau,
      tongThoiGianLam: tongThoiGianLam,
      idProjectManager: idProjectManager,
      idTrangThai: idTrangThai,
    };
    console.log("project => ");
    console.log(JSON.stringify(project));
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.put(
      `http://localhost:8080/api/vi/project/put/` + id,
      project,
      config
    );
  };

  // Các input handler function - cập nhật lên input khi có thay đổi
  const changeTenHandler = (event) => {
    setTenProject(event.target.value);
  };

  const changeNgayBatDauHandler = (event) => {
    setNgayBatDau(event.target.value);
  };

  const changeTongThoiGianLamHandler = (event) => {
    setTongThoiGianLam(event.target.value);
  };

  const changeIdProjectManagerHandler = (event) => {
    setIdProjectManager(event.target.value);
  };

  const changeIdTrangThaiHandler = (event) => {
    setIdTrangThai(event.target.value);
  };
  // Css tạm cho table
  const styleTable = {
    border: "1px solid black",
    margin: "0 auto",
    color: "crimson",
    fontWeight: "bold",
  };

  return (
    <div>
      <h1>Project</h1>
      <form>
        <table style={styleTable}>
          <tbody>
            {/* Tên */}
            <tr>
              <td>Tên :</td>
              <td>
                <input
                  type="text"
                  name="ten"
                  value={tenProject}
                  onChange={changeTenHandler}
                  placeholder="Nhập tên project"
                />
              </td>
            </tr>
            {/* Ngày bắt đầu */}
            <tr>
              <td>Ngày bắt đầu :</td>
              <td>
                <input
                  type="date"
                  name="ngayBatDau"
                  value={ngayBatDau}
                  onChange={changeNgayBatDauHandler}
                />
              </td>
            </tr>
            {/* Tổng thời gian làm */}
            <tr>
              <td>Tổng thời gian làm :</td>
              <td>
                <input
                  type="text"
                  name="tongThoiGian"
                  value={tongThoiGianLam}
                  onChange={changeTongThoiGianLamHandler}
                  placeholder="Nhập tổng giờ làm"
                />
              </td>
            </tr>
            {/* Project manager */}
            <tr>
              <td>Project manager :</td>
              <td>
                <select
                  value={idProjectManager}
                  onChange={changeIdProjectManagerHandler}
                >
                  {projectManager.map((projectManager) => (
                    <option value={projectManager.id} key={projectManager.id}>
                      {projectManager.tenNhanSu}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* Trạng thái */}
            <tr>
              <td>Trạng thái :</td>
              <td>
                <select value={idTrangThai} onChange={changeIdTrangThaiHandler}>
                  {trangThai.map((trangThai) => (
                    <option value={trangThai.id} key={trangThai.id}>
                      {trangThai.tenTrangThai}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* Submit */}
            <tr>
              <td colSpan="2">
                <button type="submit" onClick={saveProject}>
                  Nhập
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {/* Link quay lại */}
      <div>
        <Link to="/project">Quay lại</Link>
      </div>
    </div>
  );
};

export default ProjectUpdate;
