# superhero database

This project was created using React JS and tailwind CSS

## technologies

React JS, Tailwind CSS, axios

### `Challenges and approach to solution`

This app has 4 components

`UseFetch()`
This is where i made my API call using axios to fetch the data, which i then stored within a state and passed into my App component

`App()`
This was where i displayed my other components, the Profile() and the Filter().
In this component, I created two state hooks, one for storing my API data and the other for my search bar.

`Profile()`
This was my UI component, here i displayed the rendered data from the API and mapped through the array
to display the necessary information for my characters.

`Filter()`
This was where i had my filter buttons, but was unable to get them functioning
I attempted to make a new array that would contain only the values of the gender category and display them using a map method.
Then use the spread operator so that every value i got by displaying the array would display all the categories as buttons
Afterwards i added a filter inside the butons to display the gender depending on the category.
But was unable to get the function working

### Deployment

I deployed the project to gh-pages: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

