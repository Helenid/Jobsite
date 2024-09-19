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
 import NotFoundPage from './pages/NotFoundPage';
 import JobPage, {jobLoader} from './pages/JobPage';

 

const App = () => {
  //Add New Job
  const addJob = async (newJob) => {
    const res = await fetch ('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newJob),
    });
   };
  
   //Delete Job
   const deleteJob =async (id) => {
    const res = await fetch (`api/jobs/${id}`, {
      method: 'DELETE'
    });
   }
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='/add-job' element={<AddJob addJobSubmit={addJob}/>} />
       <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob }/>}  loader={jobLoader}/> 
      <Route path='*' element={<NotFoundPage />} />
    </Route>
     )
  )


  return <RouterProvider router={router} />
};

export default App;
