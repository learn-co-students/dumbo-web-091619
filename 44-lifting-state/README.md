# Key Questions

## Inverse data flow
* What if one of my child components needs to read data in its parent's state?
* What if one of my child components needs to write data into its parent's state?
  * Can't I just like `import` or something easier than this so I don't have to think about function invocation vs. reference AGAIN?

## If we get to forms
* How do forms work in React?
* What is an uncontrolled form input? What is a controlled form input? 
  * Which kind should I use, and why?
* What kind of event listeners should I use with my form?
* What kind of event listeners should I use with my form inputs?
* How can I share one event listener between all my form inputs?
  * What are computed properties again?
* What should I do when the form gets submitted?
  * What if my state for the thing I just created / updated is in a different component?
  
## Lifting up state
* Why is it important to have a single source of truth for data in a react state?
* Will having all my data in a single place sometimes make my state updates harder?
* What are the easiest ways to create, update, and delete data in an array of objects without directly mutating state?