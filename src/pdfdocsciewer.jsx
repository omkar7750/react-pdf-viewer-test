import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocViewer, {DocViewerRenderers, PDFRenderer } from "react-doc-viewer";



function DOCSViewer() {
    const docs = [
        { uri: '/sample.docx'}
      ];
  return (
    <div className="DOCSViewer">
        <DocViewer
            pluginRenderers={ DocViewerRenderers}
            documents={docs}
        />
    </div>
  );
}

export default DOCSViewer;
