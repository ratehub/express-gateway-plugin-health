module.exports = function (adminExpressApp) {
  adminExpressApp.get('/health', (req, res) => {
    res.json({status: 'OK'});
  });
};
