import axios from "axios";

const TASK_REST_API_URL = "http://localhost:8080/api/vi/task";

class TaskService {
  getTask() {
    axios.get(TASK_REST_API_URL);
  }

  createTask(task) {
    return axios.post(TASK_REST_API_URL, task);
  }

  deleteTask(taskId) {
    return axios.delete(TASK_REST_API_URL + "/" + taskId);
  }
}

export default new TaskService();
