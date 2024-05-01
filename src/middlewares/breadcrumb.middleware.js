const getBreadcrumbs = require('../utils/breadcrumb');
function addBreadcrumbs(req, res, next) {
  req.breadcrumbs = getBreadcrumbs(req.originalUrl);
  next();
}

module.exports = addBreadcrumbs;
