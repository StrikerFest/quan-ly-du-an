import React from "react";

const ProjectDetail = (props) => {
  return (
    <div>
      <h1>Project</h1>
      <table className="main-content" border="2">
        <thead>
          <tr className="font-blue">
            <th>Tên dự án</th>
            <th>Project Manager</th>
            <th>Ngày bắt đầu</th>
            <th>Tổng thời gian làm</th>
            <th>Xem chi tiết</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ProjectDetail;
