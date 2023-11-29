import {Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import DrugResistant from './component/DrugResistant/Dashboard'
import SearchDrugResistant from './component/DrugResistant/searchDrugResistant'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Dashboard />} /> 
      <Route path='/drugresistant' element={<DrugResistant />} /> 
      <Route path='/searchdrugresistant' element={<SearchDrugResistant />} />
    </Routes>
    </div>
  );
}

export default App;
