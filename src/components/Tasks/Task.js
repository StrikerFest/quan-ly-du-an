import React from "react";

const Task = (props) => {
  return (
    <div>
      <h1>Công việc</h1>
      <table className="main-content" border="2">
        <thead>
          <tr className="font-red">
            <th>Tên công việc</th>
            <th>Chỉ dẫn</th>
            <th>Nhân viên phụ trách công việc</th>
            <th>Tổng thời gian làm</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {props.task.map((task) => (
            <tr key={task.id}>
              <td>{task.tenTask}</td>
              <td>{task.chiDan}</td>
              <td>{task.idNhanVien}</td>
              <td>{task.tongThoiGian}</td>
              <td>Xem chi tiết</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
