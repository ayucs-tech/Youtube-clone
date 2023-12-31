import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Watchpage from './components/Watchpage';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const appRouter = createHashRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <Watchpage />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;
