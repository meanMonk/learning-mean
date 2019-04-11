/**
 * Iterators, Generators, modules, class.
 * */

/**
 * Generators :
 *  - In js when we declare the regular function it will continuously get executed till end so which can't for some kind of async
 *      operations so for that generators comes in pictures
 *  - Generators always return's an iterators
 *  - Generators is function which we can pause from it's execution using the yeild keyword's
 *  example :
 *      function *foo() {
 *          yield console.log("a");
 *          yield console.log("b");
 *      }
 *
 *      - on calling the function it will return an iterators not going execute the function.
 *      var it = foo();
 *      it.next();      // a
 *      it.next();      // b
 *      it.next();      // undefined
 *
 * */