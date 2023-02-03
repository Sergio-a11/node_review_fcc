const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'sergio') {
    req.user = { name: 'sergio', id: 3 };
    next(); //call next method and continue with the callback method
    //if you only put 'next()' you are calling the previous function that invoced this method
  } else {
    res.status(401).send('Unauthorized');
  }

  console.log('authorize');
  next();
};

module.exports = authorize;
