/**
 * OOP in javascript
 *  -    As we all know everything in javascript is object and it's not having anything like class.
 *  - An building an application with OOP allows us to implement the code with 3 techniques.
 *      1. Inheritance
 *          -   objects can inherit features from other objects
 *      2. Polymorphism
 *          -   objects can share the same interface—how they are accessed and used—while their underlying implementation of the interface may differ
 *      3. Encapsulation
 *          -   each object is responsible for specific tasks
 *
 * In javascript we only can achieve the two techniques first : Inheritance / Encapsulation
 *      Encapsulation [Object creation pattern]
 *          - Refers to enclosing all the functionalities of an object within that object.
 *          so that the object’s internal workings (its methods and properties) are hidden from the rest of the application
 *      Inheritance [Code reuse pattern]
 *          - Refers to an object being able to inherit methods and properties from a parent object
 * */

/**
 *  Encapsulation :
 *      use prototype to assign the properties and methods to function / object.
 *      use new keyword to create instance of that and use accordingly.
 *  Inheritance :
 *      making the call on parent function with context as child one.
 *
 *  example :
 *
 *  === Encapsulation ===
 *      function User(name, age){
 *          this.name = name;
 *          this.age = age;
 *      };
 *      User.prototype.getName = function(){
 *          return this.name
 *      }
 *      User.prototype.getAge = function(){
 *          return this.age
 *      }
 *  ==== Inheritance ====
 *      function localUser (User, role, name) {
 *          this.role = role;
 *          User.call(this, name);
 *      }
 *
 *  ==== then we will make call to inheritPrototype ====
 *      inheritPrototype(localUser, User);
 *
 *  ==== Inherits prototype function ====
 *      function inheritPrototype(childO, parentO){
 *          var copyOfParent = Object.create(prentO.prototype);
 *          copyOfParent.constructor = childO;
 *          childO.prototype = copyOfParent;
 *      }
 *
 * */