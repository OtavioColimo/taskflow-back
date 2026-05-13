/**
 * Standard success response
 * @param {import('express').Response} res
 * @param {*} data
 * @param {number} [status=200]
 */
function success(res, data, status = 200) {
  return res.status(status).json({ success: true, data });
}

/**
 * Standard error response
 * @param {import('express').Response} res
 * @param {string} message
 * @param {number} [status=400]
 */
function error(res, message, status = 400) {
  return res.status(status).json({ success: false, message });
}

module.exports = { success, error };
