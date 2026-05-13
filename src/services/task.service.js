const tasks = require("../data/tasks.store");
const { createTask } = require("../models/task.model");

const taskService = {
  getAll() {
    return tasks;
  },

  getById(id) {
    return tasks.find((t) => t.id === id) || null;
  },

  create({ title, description }) {
    if (!title || typeof title !== "string" || title.trim() === "") {
      throw new Error("O campo 'title' é obrigatório e não pode estar vazio.");
    }
    const task = createTask({ title: title.trim(), description });
    tasks.push(task);
    return task;
  },

  update(id, { title, description }) {
    const task = this.getById(id);
    if (!task) return null;

    if (title !== undefined) {
      if (typeof title !== "string" || title.trim() === "") {
        throw new Error("O campo 'title' não pode estar vazio.");
      }
      task.title = title.trim();
    }

    if (description !== undefined) {
      task.description = description;
    }

    task.updatedAt = new Date().toISOString();
    return task;
  },

  complete(id) {
    const task = this.getById(id);
    if (!task) return null;

    task.completed = true;
    task.updatedAt = new Date().toISOString();
    return task;
  },

  delete(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
  },
};

module.exports = taskService;
