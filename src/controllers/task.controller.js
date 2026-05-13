const taskService = require("../services/task.service");

const taskController = {
  getAll(req, res) {
    const tasks = taskService.getAll();
    return res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  },

  getById(req, res) {
    const task = taskService.getById(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: "Tarefa não encontrada." });
    }
    return res.status(200).json({ success: true, data: task });
  },

  create(req, res) {
    try {
      const task = taskService.create(req.body);
      return res.status(201).json({ success: true, data: task });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  },

  update(req, res) {
    try {
      const task = taskService.update(req.params.id, req.body);
      if (!task) {
        return res.status(404).json({ success: false, message: "Tarefa não encontrada." });
      }
      return res.status(200).json({ success: true, data: task });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  },

  complete(req, res) {
    const task = taskService.complete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: "Tarefa não encontrada." });
    }
    return res.status(200).json({ success: true, data: task });
  },

  delete(req, res) {
    const deleted = taskService.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Tarefa não encontrada." });
    }
    return res.status(200).json({ success: true, message: "Tarefa excluída com sucesso." });
  },
};

module.exports = taskController;
