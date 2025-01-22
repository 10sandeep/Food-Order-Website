# important commands to create react app manually

1. npm init
2.npm install -D parcel
3.npx parcel index.html
4. npm install react-dom


# Props

props are the normal arguments to our functions.
When we have to dynamically  passes data to the components we pass it as props.

React wrapping this into a object and passing through the props.

 config driven ui-all the ui driven by the config file.config files are the json files/data.

 we dont need to create different different ui for different cities.

 in any react application there are two layers 1.ui layer and data layer.
 these two makes a frontend application.

 /**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
 

there are two type of exports
1. named export/import-export -export const component.import {component} from './component'. 
2. default export/import-export default component name.import component name from "path".

named export/import is used when we have imported or exported multiple components in a file.
default export/import is used when we have only one component in a file.

A library is like a toolbox—you pick the tools you need and decide how to use them.

 A framework is like a template for a building—you're given the structure, and you add the details.
 

 CDN-keeps local copy of content geography nearer to the user.


 # React Hooks

 React hooks are normal js utility function.
There are two types of react hooks:
1.useState
2.useEffect

hook is used to create state variable.
state variable maintain the state of the component.
state variable scope is inside its component.
//local state variable
const [listofRestaturant] = useState([]);

//normal js variable
let listofRestaturant;

if we do it in normal js variable then it will change the data but not change our ui of application.

if we use state variable then it will change our data as well as ui.

whenever the state variable update react re-render the component.


react will keep your ui sync with data layer.

# how react run behind the scene
in react16 
react uses something known as reconciliation algorithm.

it is also known as react fiver

virtual dom is the representation of actual DOM.
whenever something change in the ui known as reconciliation.

react fiver is the new way of finding the div and updating the dom.
# diff algorithm
 


react is doing effient dom manipulation.


why react is fast?

it is fast beacause of virtual dom.
it uses diff algorithm which is very efficiant.
it can do efficiant dom manupulation.
it can find out the div and update the ui.



