# Development

### Link to Deployed Website
`https://drowningdolphin123.github.io/development`

### Goal and Value of the Application
The goal of this application was to provide Club Penguin enthusiasts an easy way to add food from 
multiple different vendors to their cart, as well as to see which foods may be considered desserts,
meals, snacks, and drinks.

The value of this application to a user is relatively low since Club Penguin no longer exists, however,
if it can provide some nostalgia then the app has succeeded.
### Usability Principles Considered
Everything is clearly labeled for the user to understand what happens when they click on different elements. The filtering elements are on the left of the screen and the cart is on the right of the screen to follow a left-to-right reading pattern.
### Organization of Components
The components are in a grid size 3x3. The header takes up the top three sections, then the second row contains a left side-bar, main, and cart element, and then there is a footer on the bottom row. 
### How Data is Passed Down Through Components
The side-bar is its own component (mostly because the main App.js file was getting cluttered and this made the code cleaner). The side bar has props for a filtering function and a sorting function, which take in the object elements for name and type to sort or filter on.
The main section includes a component for displaying the shop items. It uses the item name, image, and price and sends that to ShopItem.js which gets the data directly from the Json.
The cart is contained within the App.js file and didn't require its own component file.
### How the User Triggers State Changes
The user triggers state changes by clicking on any of the buttons or checkboxes on the app.
-> Clicking on the "reset" buttons for either filter of cart will reset the state of the filters or cart without refreshing the page.
-> Adding and removing items from the cart will set the state of the total in the cart.
-> Selecting different filters will change the state of the displayed items.
I had a useEffect for the SideBar component but realized it worked the same without the useEffect so took it out.
