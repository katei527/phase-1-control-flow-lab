function scuberGreetingForFeet(distance){
  // Write your code here!
  return (distance <= 400) ? 'This one is on me!' :
  (distance <= 2000) ? 'That will be twenty bucks.' :
  (distance <= 2500) ? 'I will gladly take your thirty bucks.' :
  'No can do.';
}

function ternaryCheckCity(city){
   // Write your code here!
   return city === "NYC" ? "Ok, sounds good." : "No go."
}
 


function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}