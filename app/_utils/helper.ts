import { v4 as uuidv4 } from 'uuid';

export const findTaskList = (
  state: TaskListCollectionState,
): TaskList | undefined => {
  return state.taskLists.find((taskList) => {
    return taskList.id === state.selectedListId
  });
};

export const findTask = (
  taskList: TaskList,
  taskId: string,
): Task | undefined => {
  return taskList.tasks.find((task) => task.id === taskId);
};

export const generateUniqueID = () => {
  return uuidv4();
};


export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const formattedTime = date
    .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    .toLowerCase();
  return formattedTime;
}