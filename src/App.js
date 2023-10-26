import './App.css';
import Browse from './Pages/BrowsePage';
import Genre from './Pages/Genre';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
function App() {
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element:<Home/>
      },
      {
        path:"/genre",
        element:<Genre/>
      },
      {
        path:"/browse",
        element:<Browse/>
      },
      {
        path:"/movies",
        element:<Movies/>
      }
    ]
  );
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
