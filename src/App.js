import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './formSource';
function App() {
  return (
<div className="App">
<BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>}/>
        <Route path="users">
          <Route index element={<List/>} />
          <Route path=":userId" element={<Single/>} />
          <Route path="new" element={<New inputs={userInputs} title="Add New GSO"/>} />
        </Route>
        <Route path="product">
          <Route index element={<List/>} />
          <Route path=":productId" element={<Single/>} />
          <Route path="new" element={<New inputs={productInputs} title="Add New Branch"/>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
</div>
  );
}

export default App;
