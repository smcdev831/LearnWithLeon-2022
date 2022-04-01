//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

 function characters (charStance, charSex, charSigMove, charBrand) {
   this.stance = charStance
   this.sex = charSex
   this.sigMove = charSigMove
   this.brand = charBrand
   this.rank = function(){
     alert(Math.random * 100)
   }
   this.push = function(){
     alert("You're rolling now")
   }
 }
