# Course Explorer

A React web application that helps students explore and navigate their academic schedule.

To see the web app: https://dry-gorge-87869.herokuapp.com/

## Components

This project is comprised of several components:

### `App.js`

The main application environment that stores the course list, keeps a state on what courses are in the user's cart, performs the action of adding/removing items from the cart, and renders both the `FilteredList` and the `CourseCart`. 

### `FilteredList.js`

Contains various filter functions on Teaching Mode and WRIT qualifications of courses, as well as a sorting order. It also renders the navigation bar that holds buttons/dropdowns for choosing filters/sorting orders. It then dynamically renders a sorted, filtered `DisplayList` object based on the corresponding filters & sorts selected.

### `DisplayedList.js`

Takes in a list of courses, and renders a list of courses by wrapping each item in the list into a `Card` item. Each card item would contain the course image, course name, course number, department, time committment, WRIT qualification, mode of instruction, and a button that allows users to add that a course to their cart.

### `CourseCart.js`

Takes in a list of "added courses" and renders a list of added courses in a `ListGroup`. Each course in the cart is rendered with the course number, course name, and a button to remove it from the cart. 

## Data Transfer Between Components

Since most of the components have a parent/child relationship, data is passed between components through `props`. 

The data travels both ways: sometimes the parent (`App.js`) passes data to the child (either `FilteredList`, `DisplayList`, or `CourseCart`), and other times the child invokes a function that modifies data in the parent.

`App.js` holds and passes a list of all available courses as well as a `addCourse` function to `FilteredList` as `props`. `FilteredList` then filters and sorts the list, and passes the data to `DisplayList` as `props`. 

When the "Add to Cart" button in items in the `DisplayList` is clicked, it invokes `this.props.addCourse` and passes the course item back to `App.js`, which then adds it to the cart. 

`App.js` also passes a list for the course cart and a `removeFromCart` function to `CourseCart`. `CourseCart` then accesses and renders the course cart from `this.props.list`. When clicking the "Remove" button of an item in the cart, `CourseCart` removes the course by using `removeFromCart`, which modifies the cart list in `App.js`.

### User Interactions

#### Select Filter
Selecting a filter changes the state in `FilteredList`, which depends on its state to know what to filter on.

#### Select Sorting Order
Selecting a sorting order changes the state in `FilteredList`, which depends on its state to know in what ordering the list passed on to `DisplayList` should have.

#### Add/Remove Course to/from Cart
Adding and removing courses from the course cart affects the list of courses in cart kept track in the state of `App.js`.