<!-- TODO: -->

# Employee Poll

### State tree

###### NOTE: Keyword `Polls` is used instead of Questions and `Votes` instead of Answers

```
{
  authedUser: '',
  polls: {}
  users: {}
}
```

### `_DATA.js`

- Content of this file has been moved to `actions/shared.js` file, to make things look cleaner

### Starting the project

1. `git clone url` # To clone repo
2. cd into project directory
3. `npm i` # dependency installation
4. `npm run start` # Start dev mode locally
5. `npm run build` # Generate build (`build/` directory)

### Running test cases

1. `npm run test` # Run test cases
2. Test cases are written in `src/test` directory

### Packages used

1.  redux // State management
2.  react-redux // State management for react
3.  react-redux-loading-bar // Loader used along with Redux
4.  react-router-dom // Router
5.  redux-thunk // Async operation with Redux
6.  jest // Test cases
7.  jest-watch-typeahead // Support package for Jest
