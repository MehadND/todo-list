// reducer states
interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdDate: string;
  updatedDate?: string;
  deletedDate?: string;
  isDeleted: boolean;
}

interface TaskList {
  id: string;
  name: string;
  tasks: Task[];
}

interface TaskListCollectionState {
  taskLists: TaskList[];
}
