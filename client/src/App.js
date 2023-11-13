import {Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import DrugResistant from './component/DrugResistant/Dashboard'
import AddDrugResistant from './component/DrugResistant/addDrugResistant'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Dashboard />} /> 
      <Route path='/drugresistant' element={<DrugResistant />} /> 
      <Route path='/adddrugresistant' element={<AddDrugResistant />} />
    </Routes>
    </div>
  );
}

export default App;
