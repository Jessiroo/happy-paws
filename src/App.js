import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import FilterProvider from './context/FilterProvider';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import InfoPage from './pages/Info';
import PetListPage from './pages/PetList';
import PetPage from './pages/Pet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, },
      { path: '/about', element: <AboutPage />, },
      { path: '/adoption-information', element: <InfoPage /> },
      { 
        path: '/pets', 
        children: [
          { index: true, element: <PetListPage />, },
          { path: ':petId', element: <PetPage />, },
        ],
      },
    ],
  }
]);

function App() {
  return (
    <FilterProvider>
      <RouterProvider router={router}/>
    </FilterProvider>
  );
}

export default App;
