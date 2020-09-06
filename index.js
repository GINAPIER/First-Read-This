var inquirer = require("inquirer");
var fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions =[

    {
        type: "input",
        name: "badge",
        message: "input badge code?"
    },

    {
        type: "input",
        name: "title",
        message: "What is your project name?"  
    },

    {
        type: "input",
        name: "description",
        message: "write a description" 
    },

    {
        type: "input",
        name: "installation",
        message: "installation instructions"
    },

    {
        type: "input",
        name: "usage",
        message: "usage information"
    },

    {
        type: "input",
        name: "license",
        message: "provide license"
    },
{
    type: "input",
    name: "contributing",
    message: "write the contribution guidelines" 
},

{
    type: "input",
    name: "test",
    message: "test instructions" 
},

{
    type: "input",
    name: "username",
    message: "what is your github user name?" 
},

{
    type: "input",
    name: "email",
    message: "enter your email" 
},

{
    type: "input",
    name: "toc",
    message: "enter Table of Contents separated by commas" 
},
]
console.clear();

inquirer
.prompt(questions).then(response =>{
fs.appendFileSync("README.md",("## Title" + response.title) + "\n", function(err){
    if(err){
return console.log(err);
    }
console.log("Success");
}); 

fs.appendFileSync("README.md",("\n" + response.badge) + "\n", function(err){
    if(err){
return console.log(err);
    }
console.log("Success");
}); 

fs.appendFileSync("README.md",("## Description" + response.description) + "\n", function(err){
    if(err){
return console.log(err);
    }
console.log("Success");
}); 

fs.appendFileSync("README.md",("## Table of Contents" +  "\n" + response.toc.split (", ").join("\n" + "- ")) + "\n", function(err){
    if(err){
return console.log(err);
    }
console.log("Success");
}); 

fs.appendFileSync("README.md",("## Installation Instructions" + response.installation) + "\n", function(err){
    if(err){
return console.log(err);
    }
console.log("Success");
}); 

fs.appendFileSync("README.md",("## Installation Usage" + response.usage) + "\n", function(err){
    if(err){
return console.log(err);
    }
console.log("Success");
}); 

fs.appendFileSync("README.md",("## License" + response.license) + "\n", function(err){
    if(err){
return console.log(err);
    }
console.log("Success");
}); 

})



  

