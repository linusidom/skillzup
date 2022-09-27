import { Layout } from "./components/Layout/Layout";
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home/Home'
import { SelfPaced } from "./components/SelfPaced/SelfPaced";
import { Process } from "./components/Process/Process";
import { ContactUs } from "./components/Contact/ContactUs";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/selfpaced' element={<SelfPaced/>}/>
          <Route exact path='/process' element={<Process/>}/>
          <Route exact path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
