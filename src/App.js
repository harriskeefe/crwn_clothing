import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>This is the shop.</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/> 
      </Route>
    </Routes>
  );
}

export default App;

/*
  Imports all components from the routes folder.
  <Routes /> allows/tells the application to register <route />
  <Route /> is the actual route. 
  <Route /> is like an if statement.
  If the path attr matches the URL, the element attr renders the component.

  <Navigation /> is the parent component of the route.
  Anything nested in the <Navigation /> are it's children.

  The attr index means that <Home /> will be rendered with the parent when the parents path is used in the URL.
  <App /> is exported and will be imported into index.js
*/