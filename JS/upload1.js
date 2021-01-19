// const fs = require('fs');
// const path = require('path');
const fleek = require('@fleekhq/fleek-storage-js');  

fs.readFile(filePath, async (error, fileData) => {
    const uploadedFile = await fleekStorage.upload({
      apiKey: '78mH7Xos1NXz87I72e4HMQ==my-key',
      apiSecret: '1vzkKqAgF2GA943tClrunCGEfh7gDKUHd1g05rfaW/A=',
      key: '1.jpg',
      data: myFile,
    });
  })

//   const input = {
//     apiKey: '78mH7Xos1NXz87I72e4HMQ==my-key',
//     apiSecret: '1vzkKqAgF2GA943tClrunCGEfh7gDKUHd1g05rfaW/A=',
//     key: `1.jpg`,
//     data: myFile,
//   };

 