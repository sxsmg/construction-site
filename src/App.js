import logo from './logo.svg';
import './App.css';
import const_logo from './Assets/const_logo.jpg'
import banner from './Assets/back_banner.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

import Card_layout from './Components/Card';
function App() {
  return (
    <div className="App">
      
      <div className=' header '>
        <br/>
									<img src={const_logo} className="logo_image" alt="Const Site IMG" />

								
									<h2 className='heading'>Construction Site</h2>
                <br/>
                
								</div>

        <Card_layout/>

    </div>
  );
}

export default App;