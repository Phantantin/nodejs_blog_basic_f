class NewController {
    // get /new
    index(req, res) {
        res.render('new');
    }

    // get
    show(req, res) {
        res.send('new detal');
    }
}

module.exports = new NewController();
