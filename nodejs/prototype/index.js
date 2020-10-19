var scout_prototype = require('./scout_prototype');

var john = scout_prototype.clone();
john.name = 'John Shaw';
john.addItemToList('slingshot');

var lina = scout_prototype.clone();
lina.name = 'Lina Shaw';
lina.addItemToList('reading light');

console.log( `${john.name}: ${john.shoppingList}` );
console.log( `${lina.name}: ${lina.shoppingList}` );
