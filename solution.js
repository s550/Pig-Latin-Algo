function translatePigLatin(str) {
  var arr1 = str.split("");
  var arr2 = str;
  var vowels = ["a","e","i","o","u"];
  var part = "";
  var complete = "";
  var index = [];
  var cut ="";
  var arr = [];
  

for(var i = 0; i < arr1.length; i++){
  arr.push(arr1[i]);
}
  
  
  for(var v = 0; v < vowels.length; v++){
      index.push(arr.indexOf(vowels[v]));
      
    }

  index = index.sort();

  
  var positives = index.filter(function(val){
    return val > -1;
  });
 
  
if(positives[0] === 0){
  arr1.push("way");
  arr1 = arr1.join("");
}
  else{
    cut = arr2.substr(positives[0]);
    part = arr1.slice(0,positives[0]);
    part.push("ay");
    cut = cut.split("");
    complete = cut.concat(part);
    arr1 = complete.join("");
  }
  
  
  return arr1;
}

translatePigLatin("glove");
