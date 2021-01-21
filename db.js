const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connectd");
  setup();
});

function setup(){
  const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
  silence.save(err => {
    if(err){
      console.log(err)
    }
    else{
      console.log("log created");
    }
  })

}



