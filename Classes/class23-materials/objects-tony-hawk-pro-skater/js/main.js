//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

 function TonyHawkCharacter (chName, chStance, chSponser, chMove) {
   this.characterName = chName
   this.stance = chStance
   this.sponser = chSponser
   this.specialMove = chMove

   this.flip = function(){
     console.log('Kickflip');
   }
   this.taunt = function(){
     console.log(`Don't make me use my ${this.specialMove}`);
   }
   this.grab = function(){
     console.log('MELON GRABBB');
   }
 }

let kareemCampbell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element', 'Ghetto Bird')
