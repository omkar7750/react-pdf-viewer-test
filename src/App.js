import logo from './logo.svg';
import './App.css';

import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

function App() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="App">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl='/sample.pdf'
          plugins={[
              // Register plugins
              defaultLayoutPluginInstance
          ]}
        />
      </ Worker>
    </div>
  );
}

export default App;
