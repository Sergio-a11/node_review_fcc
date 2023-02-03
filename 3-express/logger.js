//express provide the values of the params
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); //you must say what's the next function to execute,
  //if you only put 'next()' you are calling the previous function that invoced this method
};

module.exports = logger;
