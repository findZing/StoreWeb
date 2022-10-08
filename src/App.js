import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './app/routes';
import MenuCustom from './components/MenuCustom';


function App() {

  function renderRouter() {
    var results = null

    if (routes.length > 0) {
      results = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.main()} />
        )
      })
    }

    return results
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          {renderRouter()}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
