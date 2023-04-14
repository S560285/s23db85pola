var elephant = require('../models/elephant');

// List of all elephant
exports.elephant_list = function(req, res) {
    res.send('NOT IMPLEMENTED: elephant list');
};
// for a specific Costume.
exports.elephant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: elephant detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.elephant_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: elephant create POST');
};
// Handle Costume delete form on DELETE.
exports.elephant_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: elephant delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.elephant_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: elephant update PUT' + req.params.id);
};
// List of all elephant
exports.elephant_list = async function(req, res) {
    try{
        theD = await elephant.find();
        res.send(theD);
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
        theelephant = await elephant.find();
        res.render('elephant', { title: 'elephant Search Results', results: theelephant });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

//POST
// Handle Costume create on POST.
exports.elephant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new elephant();
    document.elephant_color = req.body.elephant_color;
    document.elephant_height = req.body.elephant_height;
    document.elephant_weight = req.body.elephant_weight;

    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
// for a specific Costume.
exports.elephant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await elephant.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Costume update form on PUT.
exports.elephant_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await elephant.findById( req.params.id)
    // Do updates of properties
    if(req.body.elephant_color) toUpdate.elephant_color = req.body.elephant_color;
    if(req.body.elephant_height) toUpdate.elephant_height = req.body.elephant_height;
    if(req.body.elephant_weight) toUpdate.elephant_weight = req.body.elephant_weight;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    //for a specific Costume.
    exports.elephant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await elephant.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };