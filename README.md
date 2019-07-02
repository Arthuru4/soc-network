This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## OWN NOTES ON COURSE REACT JS IT-KAMASUTRA
URL: https://www.youtube.com/watch?v=Zgd9IlbhDcU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8

###CSS MODULES:
  - Need to add '.module' in css file name before '.css' ('Name.module.css')
  css Exaple:
  
  CSS: name 'Name.module.css'
  ```css
  .someClass {
    color: #FFF
  }
  ```
  JSX:
  ```jsx
  import s from './Name.module.css'
  
  <div className={s.someClass}/>
  ```
  
###PROPS:
   - add any property like argument to component function.
   Example: 
 ```
 <Home name='Home' anyProp='someProperty'/>
 ...
 const Home = (props) => {
   return (
     <div>
     {props.name} //Home
     {props.anyProp} //someProperty
     <div />
   )
 }
 ```
#lesson20:
###BASE:
 - evt.preventDefault() (how works NavLink)
 - HTML5 history API (how works NavLink)
###ROUTING:
   - npm module react-router-dom.
   - Need to wrap base tag in 'BrowserRouter'
   Example: 
   ```
   <BrowserRouter>
      <Router path='*/profile*' component={*Profilee*}/>
      <Router path='*/home*' component={*Home*}/>
      
      /////** OR, of you need add props to component
      <Router path='*/home*' render={() => <Profile state={props.state.postData}/>}/>
      <Router path='*/profile*' render={() => <Profile state={props.state.postData}/>}/>
      *//////

      <div className={s.item}><NavLink activeClassName={s.picked} to="/profile">Profile</NavLink></div>
      <div className={s.item}><NavLink activeClassName={s.picked} to="/home">Home</NavLink></div>
   <BrowserRouter/>
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
