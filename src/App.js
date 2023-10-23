import './App.css';
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
