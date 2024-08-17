import { Route, Routes } from 'react-router-dom'
import MiniNavBar from '../screens/MiniNavBar';
import SignIn from '../screens/authentication/SignIn';
import ProfileTab from '../screens/profilePage/ProfileTab';
import Page404 from '../screens/Page404';
import Register from '../screens/authentication/Register';
import CustomersNoContract from '../screens/CustomersNoContract';
import ForgotPass from '../screens/authentication/ForgotPass';
import VehicleTab from '../screens/vehiclePage/VehicleTab';

function RoutesMain() {
  return (
    <Routes >

      <Route path="/" element={<MiniNavBar />}>
        <Route path="/profile" element={<ProfileTab />} />
        <Route path="/customers" element={<CustomersNoContract />} />
        <Route path="vehicles" element={<VehicleTab />} />
      </Route>

      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ForgotPass />} />

      <Route path="/error404" element={<Page404 />} />

    </Routes>)
}

export default RoutesMain;