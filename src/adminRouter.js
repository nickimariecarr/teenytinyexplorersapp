import Admindashboard from './adminDashboard';
import AdminGroups from './adminGroups';
import AdminMembers from './adminMembers';

import {
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";


function AdminRouter() {
    return(
        <Routes>
        <Route path=".adminDashboard" element={<Admindashboard />}>
          <Route path="./adminGroups" element={<AdminGroups />} />
          <Route path="./adminMembers" element={<AdminMembers />} />
        </Route>
      </Routes>
    );
}
export default AdminRouter;
    
