require('dotenv').config();
let express = require('express');
var mongoose = require('mongoose');
let app = express();
let RouterPage = require('./routers/RouterPage');
let RouterWiki = require('./routers/RouterWiki');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/wiki', RouterWiki);
app.use('/', RouterPage);
app.use((req, res) => {
    res.redirect('/')
})

app.listen(6464, async () => {
    await mongoose.connect(process.env.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Server is running on port 6464');
});