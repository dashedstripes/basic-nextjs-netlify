module.exports = {
    async onPostBuild() {
      console.log("onPostBuild: I run  onPostBuild 🎉");

      const fs = require("fs")

      const filenames = fs.readdirSync(__dirname);
  
      console.log("\nCurrent directory filenames:");
      filenames.forEach(file => {
        console.log(file);
      });
    },
  };