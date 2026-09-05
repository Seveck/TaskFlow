/**
 * Módulo de gestión de tareas para TaskFlow
 */
export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, priority = 'medium') {
    const task = {
      id: `task_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      title,
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    };
    this.tasks.push(task);
    return task;
  }

  getTasks() {
    return [...this.tasks];
  }
}
