export const getAllTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

export const getAllSteps = ({ steps }) => Object.keys(steps).map(id => steps[id]);
