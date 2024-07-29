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

React keeps a track of the state variable 
# Whenever a state variable changes it rerenders the entire component.



2. React is fast because Good in DOM manipulations(efficient DOM Manipulations).

3. React Fibre -> algorithm -> REACT 16 -> is a new way of updating DOM 

Most important Feature is incremental rendering ie. the ability to split rendering work into chunks and spread
it over multiple frames.

4. Reconcilliation -> is the algo that is used by react to diff one tree with another to determine which parts need to be updated.  

5. Virtual DOM -> representation of actual DOM (just an Object) 
The virtual DOM is a lightweight copy of the real DOM that allows React to manage changes more efficiently by minimizing the direct manipulation required on the real DOM.

6. Diffing algo -> Creates two tree -> old tree vs new tree -> finds the difference between the old tree and new Tree and updates the actual DOM. 



Date: 28-07-2024
# Microservices VS Monolithic 
Monolith Architecture is one in which the user has everything in a single file 
like making API calls, Backend, UI, SMS etc.

whereas in microservices we have separate file for each functionality like separate file for Backend, 
separate file for UI, and same for others.


# MAKING AN API CALL 

- Load, API, Render
- Load, Render, API, Render (✅) Better UX 


- useEffect Hook - is used for making an API call
-  SYNTAX
useEffect(()=>{
    we made api call
},[])

- if no dependency array then useEffect will be called everytime whenever our component renders.

[]->empty dependency array which makes sure that the API call will be made only once after initial render

if we want that our api call to be made after something again and again we can specify that in our dependency array 


- Shimmer UI - Loading fake page until we get the actual page data.


- Conditional Rendering means Rendering based on the condition.


- WHen we are changing our local state variable react will render the entire component so fast.


Date- 29-07-2024

# Creating multiple Paths in react 

For creating multiple paths in react we need a router and this is also a browser Router 
So the steps are : 
- First we need to install react-router-dom library which basically provide us Browser Router as well as the 
Router Provider.

- Using command: npm i react-router-dom 

- we have a configuration i.e createBrowserRouter that is used to create configuration -> means to specify the paths
where we want to redirect our page to. 

- Then we need to import one component from react-router-dom that is RouterProvider that will basically provide these routes.

- Syntax is : 

    <RouterProvider router={appRouter}>

- Syntax for creating a browser is: 

const appRouter= createBrowserRouter([here we need to specify the paths and the element ]);

const appRouter= createBrowserRouter([
    path:'\',
    element:<Applayout/>
])


- If we redirect to any path that doesnot exist then it returns an error page we can create our own error page 

- createBrowserRouter provides us errorElement that indicates the error page 

-  We have another hook that is provided to us by react-router-dom that is useRouteError which will basically
    provides us with the information related to the error. 

- Syntax is: 

    const error=useRouteError();
    


# Children Routes - 

When we created a browser router and we want a specific component to be common for all the pages we need to define its children and we can do that using children routes. 


Syntax:

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/body",
                element:<Body>,
            },
            {
                path:"/about",
                element:<About>
            }
        ]
    }
])

So we can see that the applayout will have these children routes inside it now if we can show our children routes in our page using a component that is provided to us and that is <Outlet /> component.


So whenever we move to about us page the outlet will get replaced by the about us component and same for others.



- If we want to create a Link in react we should not use anchor tag as it reloads entire page 

- We have Link provided by react-router-dom so we should use it as it does not reload entire page and improves the 
    response time and is efficient.

- Syntax: 
    <Link to={path} ></Link>


- Thats why React is called single page application. 

- There are two tyes of routing: 

    1. Client Side Routing - means where we are just using components and we are not making an external call via network all the things are there during initial render.
    2. Server side routing -  means we made an external call to the network fetches the page.html and displays that. 

