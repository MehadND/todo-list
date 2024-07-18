import { generateUniqueID } from './helper';

const id = generateUniqueID();
export const defaultTodoList = [
  {
    id: generateUniqueID(),
    name: 'Default List',
    tasks: [],
  },
];

export const reducerDefaultState : TaskListCollectionState = {
  taskLists : defaultTodoList,
  selectedListId: id,
}
