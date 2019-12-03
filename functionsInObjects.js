// What will the output be?

var hero = {
   _name: 'John Doe',
   getSecretIdentity: function(){
     return this._name;
   }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// this returns

//undefined
//John Doe


// if you use .bind, you can attach an object to a function and then reference the attached (binded) object using the 'this' keyword. It allows you to make functions that'll work across many objects with ease.


var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// this will return 

//undefined
//John Doe
