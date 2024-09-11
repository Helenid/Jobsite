import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
 } from 'react-router-dom';
 import HomePage from './pages/HomePage';
 import MainLayout from './layouts/MainLayout';
 import JobsPage from './pages/JobsPage';
 import AddJob from './pages/AddJob';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<JobsPage/>} />
    <Route path='/add-job' element={<AddJob/>} />
  </Route>
   )
)

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
