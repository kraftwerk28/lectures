'use strict';

function doStuff(callback, ...params) {
  callback.apply(null, params);
}

doStuff((arg1, arg2) => {
  doStuff(() => {
    doStuff(() => {
      doStuff(() => {
        doStuff(() => {
          doStuff(() => {
            doStuff(() => {
              console.log('Arguments are:', arg1, arg2);
            });
          });
        });
      });
    });
  });
}, 1, 2);

const fs = require('fs');

fs.readdir('test-dir', { withFileTypes: true }, (err, data) => {
  console.log(data);
  fs.readFile(data[0].name, (err) => {
    fs.writeFile('./test-dir/file2', '', (err) => {
      fs.unlink('test-dir/' + data[0].name, (err) => {
        fs.rename('./test-dir/file2', './test-dir/file1', (err) => {
          if (err) throw err;
        });
      });
    });
  });
});
