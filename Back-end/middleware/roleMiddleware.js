module.exports = (requiredRole) => {

return (req, res, next) => {

try {

if (req.user.role !== requiredRole) {
  return res.status(403).json({
    message: "Access denied: insufficient permissions"
  });
}

next();

} catch (error) {
res.status(500).json(error.message);
}

};

};