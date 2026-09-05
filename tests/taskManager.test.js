/**
 * Pruebas unitarias para TaskManager
 */
import { TaskManager } from '../src/taskManager.js';

export function runTests(assert) {
  const manager = new TaskManager();

  // Test 1: Crear tarea exitosamente
  const task1 = manager.addTask('Aprender Conventional Commits', 'high');
  assert(task1.title === 'Aprender Conventional Commits', 'El título debe coincidir');
  assert(task1.priority === 'high', 'La prioridad asignada debe ser high');
  assert(task1.completed === false, 'El estado inicial debe ser no completado');

  // Test 2: Obtener lista de tareas
  const allTasks = manager.getTasks();
  assert(allTasks.length === 1, 'Debe haber exactamente 1 tarea registrada');
  assert(allTasks[0].id === task1.id, 'El ID de la tarea debe coincidir');

  // Test 3 (Fix): Validar rechazo de títulos vacíos
  let errorLanzado = false;
  try {
    manager.addTask('   ');
  } catch (err) {
    errorLanzado = true;
  }
  assert(errorLanzado === true, 'Debe lanzar error al intentar crear una tarea con título vacío');
}
