import axios from "axios";

const TASK_REST_API_URL = "http://localhost:8080/api/vi/task";

class TaskService {
  // Phương thức lấy công việc
  getTask() {
    return axios.get(TASK_REST_API_URL);
  }

  // Phương thức tạo công việc
  createTask(task) {
    return axios.post(TASK_REST_API_URL, task);
  }

  // Phương thức xóa công việc
  deleteTask(taskId) {
    return axios.delete(TASK_REST_API_URL + "/" + taskId);
  }
}

export default new TaskService();
