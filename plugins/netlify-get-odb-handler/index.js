module.exports = {
    async onPostBuild() {
      console.log("onPostBuild: I run  onPostBuild 🎉");

      const fs = require("fs")
      const path = require('path')

      console.log('process.cwd()', process.cwd());

      const filenames = fs.readdirSync(path.join(__dirname, '..', '..', '.netlify', 'functions'));
  
      console.log("\nCurrent directory filenames:", path.join(__dirname, '..', '..', '.netlify', 'functions'));
      filenames.forEach(file => {
        console.log(file);
        if(file === '___netlify-odb-handler.zip') {
          const buffer = fs.readFileSync(path.join(__dirname, '..', '..', 'netlify', 'functions', file));
          console.log(buffer);
        }
      });
    },
  };