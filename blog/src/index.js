const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hds = require('express-handlebars');
const app = express();
const port = 3000;
const SortMiddewares = require('./app/middewares/SortMiddewares.x')

const methodOverride = require('method-override');
const db = require('./config/db/index');

// connect db
db.connect();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(SortMiddewares);

// HTTP logger
app.use(morgan('combined'));

// template engine
app.engine(
    'hbs',
    hds.engine({
        extname: '.hbs',
        helpers: require('./helpers/handblebars')
    }),
);

app.set('view engine', 'hbs');

app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('PATH: ',path.join(__dirname, 'resources/views') )

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
