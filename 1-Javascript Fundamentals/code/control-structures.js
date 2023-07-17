
function developerOutput(developerName, language) {
  let output = "";
  if (language === "nodejs") {
    output = `console.log("Hello ${developerName}!")`
  } else if (language === "python") {
    output = `print("Hello ${developerName}!")`
  } else if (language === "java") {
    output = `System.out.println("Hello ${developerName}!")`
  } else {
    output = `Unsupported language: ${language}`
  }
}

// ---------------------------------------------
function shamioutput(developer,language){
   let output = "";
   if (language === "node.js"){
    output = `console.log("Hello ${developer}")`
   }else if (language === "java") {
    output = `console.log("Hello ${developer}")`
   }else if (language === "python") {
    output = `console.log("Hello ${developer}")`
    } else{
      output= `unsupported language: ${language}`
    }
}


function developer(name, language) {
  let output;
  switch (language) {
    case 'nodejs':
      output = `console.log("Hello ${name}!")`;
      break;
    case 'python':
      output = `print("Hello ${name}!")`;
      break;
    case 'java':
      output = `System.out.println("Hello ${name}!")`;
      break;
    default:
      output = `Unsupported language: ${language}`
      break;
  }
  return output;
}
// -----------------------------------------------
function shopping_sites (Costume,designer){
   let output = "";
   switch(designer){
    case "designer ravi in node.js way " :
      output = `console.log("hello ${ designer }")`
      break ;
     case "designer suresh in python way" :
      output =`print ("Hello ${designer}")`
     case "designer hari in java" :
      output = `system.out.printIn("Hello ${designer}")`
     default:
      output = `unsupported language: ${designer}`
      break; 
   }
   return output;
}

const numbers = [1,2,3,4,5];
const fruits = ['apple','banana','kiwi']
const mixed = ['apple',{key:'value'},[2,3,4]]