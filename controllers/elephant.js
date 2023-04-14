var elephant = require('../models/elephant');
// List of all elephant
exports.elephant_list = function(req, res) {
 res.send('NOT IMPLEMENTED: elephant list');
};
// for a specific elephnat.
exports.elephant_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: elephant detail: ' + req.params.id);
};
// Handle elephant create on POST.
exports.elephant_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: elephant create POST');
};
// Handle elephant delete form on DELETE.
exports.elephant_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: elephant delete DELETE ' + req.params.id);
};
// Handle elephant update form on PUT.
exports.elephant_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: elephant update PUT' + req.params.id);
};
// List of all elephants
exports.elephant_list = async function(req, res) {
try{
theelephants = await elephant.find();
res.send(theelephants);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.elephant_view_all_Page = async function(req, res) {
    try{
        theelephants = await elephant.find();
        res.render('elephant', { title: 'elephant Search Results', results: theelephants });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }
