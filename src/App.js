import './App.css';
import Browse from './Pages/Browse';
import Genre from './Pages/Genre';
import Home from './Pages/Home';
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
