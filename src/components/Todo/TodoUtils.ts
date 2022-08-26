export enum Filters {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed'
}

export const TodoUtils = {
  todos: [
    {
      id: 1,
      name: 'Setup project',
      isCompleted: true
    },
    {
      id: 2,
      name: 'Implement the design',
      isCompleted: false
    }
  ]
};
