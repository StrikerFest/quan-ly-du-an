import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const TaskUpdate = (props) => {
  // UseParams lấy id của trang cần update hiện tại
  const { id } = useParams();

  // UserState dùng State trong functional component
  let [tenTask, setTenTask] = useState([]);
  let [chiDan, setChiDan] = useState([]);
  let [tongThoiGian, setTongThoiGian] = useState([]);
  let [idTrangThai, setIdTrangThai] = useState([]);
  const [trangThai, setTrangThai] = useState([]);

  // Use effect xử lý side-effect - Lấy thông tin từ HTTP - Api
  useEffect(() => {
    // Lấy api từ update để lấy object project cũ
    axios
      .get("http://localhost:8080/api/vi/task/update/" + id)
      .then((response) => {
        setTenTask(response.data.tenTask);
        setChiDan(response.data.chiDan);
        setTongThoiGian(response.data.tongThoiGian);
        setIdTrangThai(response.data.idTrangThai);
        console.log("response.data");
        console.log(response.data);
      });
    axios.get("http://localhost:8080/api/vi/trangThaiTask").then((response) => {
      setTrangThai(response.data);
    });
  }, []);

  // lưu project - tạo biến và PUT vào api
  const saveTask = (e) => {
    // e.preventDefault();
    let task = {
      tenTask: tenTask,
      chiDan: chiDan,
      tongThoiGian: tongThoiGian,
      idTrangThai: idTrangThai,
    };
    console.log("task => ");
    console.log(JSON.stringify(task));
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.put(`http://localhost:8080/api/vi/task/put/` + id, task, config);
  };

  // Các input handler function - cập nhật lên input khi có thay đổi
  const changeTenHandler = (event) => {
    setTenTask(event.target.value);
  };

  const changeChiDanHandler = (event) => {
    setChiDan(event.target.value);
  };

  const changeTongThoiGianHandler = (event) => {
    setTongThoiGian(event.target.value);
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
      <h1>Công việc</h1>
      <form>
        <table style={styleTable}>
          <tbody>
            {/* Tên task */}
            <tr>
              <td>Tên công việc:</td>
              <td>
                <input
                  type="text"
                  name="tenTask"
                  value={tenTask}
                  onChange={changeTenHandler}
                  placeholder="Nhập tên công việc"
                />
              </td>
            </tr>
            {/* Chỉ dẫn làm việc */}
            <tr>
              <td>Chỉ dẫn :</td>
              <td>
                <input
                  type="textarea"
                  name="chiDan"
                  value={chiDan}
                  onChange={changeChiDanHandler}
                  placeholder="Chỉ dẫn làm việc"
                />
              </td>
            </tr>
            {/* Tổng thời gian làm */}
            <tr>
              <td>Tổng thời gian :</td>
              <td>
                <input
                  type="text"
                  name="tongThoiGian"
                  value={tongThoiGian}
                  onChange={changeTongThoiGianHandler}
                  placeholder="Tổng giờ làm"
                />
              </td>
            </tr>
            {/* Trạng thái */}
            <tr>
              <td>Trạng thái :</td>
              <td>
                <select onChange={changeIdTrangThaiHandler}>
                  {trangThai.map((trangThai) =>
                    idTrangThai === trangThai.id ? (
                      <option value={trangThai.id} key={trangThai.id} selected>
                        {trangThai.tenTrangThaiTask}
                      </option>
                    ) : (
                      <option value={trangThai.id} key={trangThai.id}>
                        {trangThai.tenTrangThaiTask}
                      </option>
                    )
                  )}
                </select>
              </td>
            </tr>
            {/* Submit */}
            <tr>
              <td colSpan="2">
                <button type="submit" onClick={saveTask}>
                  Nhập
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {/* Link quay về */}
      <div>
        <Link to="/task">Quay lại</Link>
      </div>
    </div>
  );
};

export default TaskUpdate;
