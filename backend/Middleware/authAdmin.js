const jwt = require('jsonwebtoken');
const user = require('../Model/user');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_ADMIN');
        const userId = decodedToken.userId;
        user.findOne(req.params.id)
        .then((user) => {
          if (req.body.userId && req.body.userId !== userId && user.is_admin !== false) {
              throw 'Invalid user ID';  
            } else {
              next();
            }
        })
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
          });
    }
};