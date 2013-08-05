
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.deej = function(req, res){
  res.render('deej2', { title: 'deej' });
};