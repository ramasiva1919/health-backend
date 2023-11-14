

function doc(req, res, next) {
    res.json( { title: 'Express' });
  }
module.exports = doc;
function docPost(req, res, next) {
  console.log(req,"req")
  res.json( { title: 'Express' });
}
module.exports = docPost;