# Namaste-react 
Points to be noted: 
# NOTE
Date-20-07-2024
React.createElement()-> object -> which is then converted to HTML element by the DOM 

Date-21-07-2024


package.json -> configuration file for npm 
^ does the minor upgradation on its own where as ~ does the major upgradation on its own if some new version came in.
package-lock.json -> contains the exact version of all the packages that are required by us.
node modules contain all the code of the packages-> it is like the databases -> as we require parcel as a dependency 
parcel also further has some other dependencies and so on. This is known as transitive dependencies.
if we have package.josn and package-lock.json we can recreate our node modules.


Dependency is basically library that a project needs to function effectively.
Dev Dependency are the packages that a developer needs during development. 


What is a Bundler?
A bundler is a tool that takes all your JavaScript code, along with any other assets like CSS or images, and combines them into a single file (or a few files) that can be served to the browser

What is HMR?

Hot Module Replacement (HMR) is a powerful feature designed to enhance the development process by providing real-time updates to modules within a running application.

Using File Watching Algorithm written in C++.


Development Build and Production Build.

Date-22-07-2024
JSX - JSX is not a part of React 
JSX is not HTML inside JS it is HTML/XML like syntax 
Behind the scene JSX is converted into React.createElement by Babel which is a jS compiler or a transpiler which is a package used by our Bundler.

JSX -> transpiled -> React.createElement() -> by BABEL -> Object -> converted into HTML Before it is fed to the DOM.
 
What is Component Composition in React?
Component Composition means when you insert one component inside other component and vice versa.
Combining smaller, independent components to create complex UI's.


Cross Site scripting -> if some hacker sends some malicious data via an API JSX {} these braces helps in sanitizing the data and prevents our application. 


Date-23-07-2024

# Config Driven UI

Controlling UI using data 
UI is driven by config. -> API data 


# Why we need keys in map?

We need keys while we are using map because if we dont have keys then DOM will re render the entire component from scratch and it will be a costly operation whereas if we use keys it will just move the other elements and place it at its correct position without re rendering the entire DOM tree.


Date- 25-07-2024

Whenever you have hardcoded data store it in config.js or constants.js or utils.js (like src)

import vs export 

if multiple things you want to export use named export and if you want to export a single thing use default export 

Note: in a single file there should be only single default export 


# REACT HOOKS

They are normal JS functions (utility functions)-> written inside react 

1. useState() -> hook used to create super powerful state variable 

Syntax is => const [variableName,setVariableName]= useState(defaultvalue);

setVariable name is used to modify the variable 

# Whenever a state variable changes it rerenders the entire component.



2. React is fast because Good in DOM manipulations(efficient DOM Manipulations).

3. React Fibre -> algorithm -> REACT 16 -> is a new way of updating DOM 

Most important Feature is incremental rendering ie. the ability to split rendering work into chunks and spread
it over multiple frames.

4. Reconcilliation -> is the algo that is used by react to diff one tree with another to determine which parts need to be updated.  

5. Virtual DOM -> representation of actual DOM (just an Object) 
The virtual DOM is a lightweight copy of the real DOM that allows React to manage changes more efficiently by minimizing the direct manipulation required on the real DOM.

6. Diffing algo -> Creates two tree -> old tree vs new tree -> finds the difference between the old tree and new Tree and updates the actual DOM. 

