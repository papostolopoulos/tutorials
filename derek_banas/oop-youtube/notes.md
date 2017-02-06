**This is a title**

- Object properties can include values or functions
- We can put objects inside objects-
- When you want to run a key-value (property) of an object and this is a function, then remember to put the parenthesis -- `customer.speak()` -- if speak is a key with a value of a function declaration.
- A constructor function is used for the creation of multiple objects of the SAME type
- We can check if an object is a specific instance of an object type with `instanceof`.
Likewise, we can do that with array values
- double equal checks on the value but triple equal checks on the type as well.
Example:
`2 == "2" // true
2 === 2 --> false`

**Prototypes**
- Every function contains a prototype property that contains an object
- Every function contains a prototype object - `grover.hasOwnProperty("name")`
- If a property belongs to the prototype of an Object, we can do that by using
- "hasOwnProperty"
- We can add methods to objects we created or methods to built in Objects.
Example: Array.prototype.inArray

**Private properties**
- All properties in an object are public in the sense that any function can delete or modify these properties.
- We can make properties private by declaring them as variables inside of a constructor.

**Getters and setters**
- Help you protect your data, and also provide useful ways to set values (inputs)

**Inheritance**
- After we override a prototype, it's constructor is going to point to the main Object Object so we have to reset the constructor

**Polymorphism and intermediate functions**
