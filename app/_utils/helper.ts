export const findTaskList = (
  state: TaskListCollectionState,
  taskListId: string,
): TaskList | undefined => {
  return state.taskLists.find((taskList) => taskList.id === taskListId);
};

export const findTask = (
  taskList: TaskList,
  taskId: string,
): Task | undefined => {
  return taskList.tasks.find((task) => task.id === taskId);
};
