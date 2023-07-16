const checkRole = (role) => (req, res, next) => {
  if (!req.user || !req.user.role) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  if (req.user.role !== role) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  return next();
};

export default checkRole;
