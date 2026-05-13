import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { StateSearch } from './pages/StateSearch';
import { Description } from './components/Description';
import { AdminDashboard } from './pages/AdminDashboard';
import { Login } from './pages/Login';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { ViewPlacesByAdmin } from './pages/ViewPlacesByAdmin';
import { AdminUpdate } from './pages/AdminUpdate';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/states' element={<StateSearch/>}></Route>
      <Route path='/states/description' element={<Description/>}></Route>
      <Route path='/admin/login' element={<Login/>}></Route>
      <Route path='/admin/dashboard' element={
        <ProtectedRoutes>
          <AdminDashboard/>
        </ProtectedRoutes>
        }></Route>
      <Route path='/admin/viewPlaces' element={
        <ProtectedRoutes>
          <ViewPlacesByAdmin/>
        </ProtectedRoutes>
      }></Route>
    <Route path='/admin/update/:objectId' element={
      <ProtectedRoutes>
        <AdminUpdate/>
      </ProtectedRoutes>
    }></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
