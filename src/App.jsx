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
 import EditJobPage from './pages/EditJobPage';

 

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
    return;
   };
  
   //Delete Job
   const deleteJob = async (id) => {
    const res = await fetch (`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
   };


   //Update Job
   const updateJob = async(job) => {
    const res = await fetch (`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(job),
    });
    return;
   }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route 
        path='/add-job' 
        element={<AddJob addJobSubmit={addJob}/>} 
      />
       <Route 
        path='/edit-job/:id' 
        element={<EditJobPage updateJobSubmit={updateJob}/>}  
        loader={jobLoader}
      /> 
       <Route 
        path='/jobs/:id' 
        element={<JobPage deleteJob={ deleteJob }/>}  
        loader={jobLoader}
      /> 

      <Route path='*' element={<NotFoundPage />} />
      
    </Route>
     )
  )


  return <RouterProvider router={router} />
};

export default App;



// {
//   "name": "job-site",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "homepage": "https://helenid.github.io/jobsite",

  
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "lint": "eslint .",
//     "preview": "vite preview",
//     "server": "json-server --watch src/jobs.json --port 8000",
//     "start": "react-scripts start"
   
//   },
//   "dependencies": {
//     "json-server": "^1.0.0-beta.2",
//     "react": "^18.3.1",
//     "react-dom": "^18.3.1",
//     "react-icons": "^5.3.0",
//     "react-router-dom": "^6.26.2",
//     "react-spinners": "^0.14.1",
//     "react-toastify": "^10.0.5"
//   },
//   "devDependencies": {
//     "@eslint/js": "^9.9.0",
//     "@types/react": "^18.3.3",
//     "@types/react-dom": "^18.3.0",
//     "@vitejs/plugin-react": "^4.3.1",
//     "autoprefixer": "^10.4.20",
//     "eslint": "^9.9.0",
//     "eslint-plugin-react": "^7.35.0",
//     "eslint-plugin-react-hooks": "^5.1.0-rc.0",
//     "eslint-plugin-react-refresh": "^0.4.9",
//     "globals": "^15.9.0",
//     "postcss": "^8.4.45",
//     "tailwindcss": "^3.4.10",
//     "vite": "^5.4.1"
//   }
  
// }
