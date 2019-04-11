/**
 * Concept to be covered
 * let , const , block-scoped functions, spread, rest
 * computed property name.
 * destructuring
 * template literals, Arraw functions, for...of loop
 * */

/**
 * LET :  previously we were using IIFE to declare the block level scope.
 *     - using let we can create variable which will be bound to block called scope.
 *     - declaration ordering will always matters no hoisting will taken place.
 *     - accessing the variable too early leads to error called Temporal Dead Zone.
 *     {
 *          console.log(a) // 2
 *          console.log(b) // ReferenceError
 *
 *          var a = 2;
 *          let b = 3;
 *     }
 * LET + FOR : most imp feature of ES6 like let declaration in header of FOR loop.
 *      - The let i in FOR header declares i not just for the FOR loop itself but it redeclare i for each iteration of loop.
 *      var funcs = [];
 *      for(let i=0; i<4 ; i++){
 *          funcs.push(function(){
 *              console.log(i);
 *          })
 *      }
 *
 * */

/**
 *  CONST :
 *      - You r not allowed to change the value of const variable once it declared it will be read only.
 *      - The value is not immutable bcs of const rather than it just frozen the assignment of it if frozen.
 *      - if Value is complex such as array or object the we can modify the content of it.
 *      const a = [1,3,4,5]; a[1] = 2
 *
 * */

/**
 * Block-scoped Functions :
 *  functions declaration specified in the block now are only scope specific to the block.
 *      example ;
 *          if (something) {
 *              function foo() {
 *                  console.log( "1" );
 *              }
 *          }
 *          else {
 *             function foo() {
 *                  console.log( "2" );
 *               }
 *          }
 *
 *          foo(); // error
 * */

/***
 * # Rest and spread operators = just like ... depending on where and how it's getting use
 *  case-1 [spread] : When ... use in front of an array it acts to spread it out into it's individual values.
 *      - ... acts to give us simpler syntactic replacement for the apply functions
 *      example ;
 *          foo(x,y,z){
 *              console.log(x,y,z) // print 1,2,3
 *          }
 *          using spread : foo(...[1,2,3])
 *     pre-es6  foo.apply(null, [1,2,3]);
 *  case-2 [spread] :  can be use in the case of array and just replacement fo the concat operator
 *      example ;
 *      var  a = [3,4]; var b = [1,2, ...a ,5] // 1,2,3,4,5
 *
 *  case-3 [Rest] : can work opposite instead of spreading value it collect values in rest eg.
 *      - this will be replacement for arguments array which is not an array.
 *      example :
 *          baz(x,y, ...z){
 *              console.log(x,y,z);  // 1,2,[3,4,5,6];
 *          }
 *          baz(1,2,3,4,5,6)
 *
 *  NOTES : The ...args in the foo(..) function declaration gathers arguments,
 *          The ...args in the console.log(..) call spreads them out.
 *
 * */

/**
 * Destructuring :
 *      function foo (){
 *          return [1,2,3];
 *      }
 *      var {a,b,c} = foo()
 *      function baz(){
 *          return {
 *              x : 2,
 *              y: 3, z:4
 *          }
 *      }
 *      var {x:baz,y:bar,z:far} = baz(); console.log(baz, bar, far) // 2,3,4 console.log(x, y, z) // error
 *
 *
 * */

/**
 * Template literals :
 *      use `hello ${name}!` // hello sahil!
 * */

/**
 * Arraw function :
 *      - will not have this context and arguments
 *      - it;s just dropping function () {} return from regular function
 *      - if more than one params there we need to wrap it with ()
 *      - if more than two lines in function then need to wrap with {}
 *      - if single line operation then we can exclude return keyword as well {}
 *      example : ()=>{
 *      }
 * */

/**
 * for...of loop : loops over set off values produce by iterator.
 *
 * */