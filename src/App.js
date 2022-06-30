import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PDFViewer from './reactpdfviewer';
import DOCSViewer from './pdfdocsciewer';

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PDFViewer />}></Route>
          <Route path="/docsviewer" exact element={<DOCSViewer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
