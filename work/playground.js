
// Learn ES6 better
// promises and assynchronous calls
// https://www.typingclub.com/sportal/program-3/117.play
// destructuring for es6
// currying javascript
// linked lists and double linked lists, trees
// tail call optimization
// tail recursive non tail recursive


// Keep the same color scheme
// text should be easy to read in different light
// single colors is better

var str = "Double Hearts Bracelet Set SGD 336 SGD 199";



function transform(x){

      if (x.match(/\£\d+\s\£\d+/)){
        return x.replace(/(\£\d+\s)(\£\d+)/,"WAS $1NOW $2")
      }
      if (x.match(/SGD \d+ SGD \d+\.\d+/)){
        return x.replace(/(SGD \d+\s)(SGD \d+\.\d+)/,"WAS $1NOW $2")
      }
      if (x.match(/HK\$\d+\sHK\$\d+/)){
        return x.replace(/(HK\$\d+\s)(HK\$\d+)/,"WAS $1NOW $2")
      }
      if (x.match(/HK\$\d+\,\d+\sHK\$\d+\,\d+/)){
        return x.replace(/(HK\$\d+\,\d+\s)(HK\$\d+\,\d+)/,"WAS $1NOW $2")
      }
     // if (x.match(/\w+\sSGD \d+/)){
     //   return x.replace(/.*SGD.*/,"")
     // }
     if (x.match(/Free Jewelry Box/)){
       return x.replace(/.*(Free)/,"$1").replace(/(with Purchase).*/,"$1")
     }
     if (x.match(/Final Day to/)){
       return x.replace(/.*(Final)/,"$1").replace(/(to Save).*/,"$1")
     }
     if (x.match(/FREE Ring/)){
       return x.replace(/.*(FREE)/,"$1").replace(/(or Bracelet).*/,"$1").replace(/(with Purchase).*/,"$1")
     }
     if (x.match(/Exclusively Online/)){
       return x.replace(/.*(\d+\d+\%\sOff)/,"$1").replace(/(Exclusively Online).*/,"$1")
     }
     if (x.match(/Charm \£\d+/)){
       return x.replace(/.*Charm.*/,"")
     }
     if (x.match(/Necklace \£\d+/)){
       return x.replace(/.*Necklace.*/,"")
     }
     if (x.match(/EXCLUSIVE LOCKET OFFER/)){
       return x.replace(/(PANDORA jewellery).*/,"$1")
     }
     if (x.match(/\_/)){
       return x.replace(/\_/g," ")
     }
    else {
   return x
  }
}
