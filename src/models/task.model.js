const { v4: uuidv4 } = require("uuid");

/**
 * Creates a new Task object.
 * @param {Object} data
 * @param {string} data.title
 * @param {string} [data.description]
 * @returns {Object} task
 */
function createTask({ title, description = "" }) {
  return {
    id: uuidv4(),
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

module.exports = { createTask };
