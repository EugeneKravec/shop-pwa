import { PureComponent } from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header/Header';
import ProductListPage from './components/PLP/ProductListPage';
import ProductDiscriptionPage from './components/PDP/ProductDiscriptionPage'

class App extends PureComponent {
  render() {
    return <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/PDP" element={<ProductDiscriptionPage />} />
      </Routes>
    </div>
  }
}

export default App;