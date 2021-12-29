import React from "react";
import { Link } from "react-router-dom";

const Task = (props) => {
  return (
    <div>
      <h1>Công việc</h1>
      <table className="main-content" border="2">
        <thead>
          <tr className="font-red">
            <th>Tên công việc</th>
            <th>Chỉ dẫn</th>
            <th>Tổng thời gian làm</th>
            <th>Thay đổi</th>
            <th>Xóa</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {props.task.map((task) => (
            <tr key={task.id}>
              <td>{task.tenTask}</td>
              <td>{task.chiDan}</td>
              <td>{task.tongThoiGian}</td>
              <td></td>
              <td>
                <button
                  onClick={() => {
                    props.deleteTask(task.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>Xem chi tiết</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/task/create">Tạo công việc mới</Link>
      </div>
    </div>
  );
};

export default Task;
