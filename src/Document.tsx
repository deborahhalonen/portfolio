import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const DocumentView = () => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div id="document-view">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <Viewer fileUrl={process.env.PUBLIC_URL + '/files/diagram10.pdf'} plugins={[defaultLayoutPluginInstance]}/>
      </Worker>
    </div>
  );
}

export default DocumentView