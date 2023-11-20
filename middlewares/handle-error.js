const { HTTP_STATUS_INTERNAL_SERVER_ERROR } = require('http2').constants;

const handleError = (error, req, res, next) => {
  const { statusCode = HTTP_STATUS_INTERNAL_SERVER_ERROR, message } = error;
  res.status(statusCode).send({
    // проверяем статус и выставляем сообщение в зависимости от него
    message: statusCode === HTTP_STATUS_INTERNAL_SERVER_ERROR
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
};
module.exports = handleError;
