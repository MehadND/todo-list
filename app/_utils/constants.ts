import { generateUniqueID } from './helper';

export const defaultTodoList = [
  {
    id: generateUniqueID(),
    name: 'Default List',
    tasks: [],
  },
];
