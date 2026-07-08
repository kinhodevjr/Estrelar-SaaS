import Login from "./pages/Login";
import Consultor_tela from "./pages/painel_consultor";
import{BrowserRouter, Routes, Route} from "react-router-dom";

function App (){
  return(
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} 
      />
      <Route path="/consultor" element={<Consultor_tela />} 
      />
     </Routes>
  
   </BrowserRouter>
  )
}
export default App;