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