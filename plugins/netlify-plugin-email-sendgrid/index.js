module.exports = {
    async onPostBuild() {
      console.log("onPostBuild: I run  onPostBuild 🎉");

      const fs = require("fs")
      const path = require('path')

      const filenames = fs.readdirSync(path.join(__dirname, '..', '..'));
  
      console.log("\nCurrent directory filenames:");
      filenames.forEach(file => {
        console.log(file);
      });
    },
  };