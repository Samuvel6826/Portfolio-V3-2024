import React, { useEffect, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';

// Set the worker source to the locally hosted worker file
GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs'; // Ensure this file exists in your public directory

const PdfThumbnail = () => {
    const [thumbnail, setThumbnail] = useState(null);

    useEffect(() => {
        const fetchPdfThumbnail = async () => {
            try {
                // Path to your PDF file in the public folder
                const pdfUrl = '/Samuvel-Resume.pdf';
                const loadingTask = getDocument(pdfUrl);
                const pdf = await loadingTask.promise;

                // Get the first page
                const page = await pdf.getPage(1);

                // Set up canvas
                const scale = 2.0; // Increase scale for better quality
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render the page into the canvas
                await page.render({ canvasContext: context, viewport }).promise;

                // Set thumbnail image URL
                setThumbnail(canvas.toDataURL('image/png')); // Specify format for better quality
            } catch (error) {
                console.error('Error generating thumbnail:', error);
            }
        };

        fetchPdfThumbnail();
    }, []);

    return (
        <div className="pdf-thumbnail">
            <h1 className="mb-4 text-2xl font-bold">PDF Thumbnail Viewer</h1>
            {thumbnail ? (
                <img src={thumbnail} alt="PDF Thumbnail" className="w-full max-w-md" />
            ) : (
                <p>Loading thumbnail...</p>
            )}
        </div>
    );
};

export default PdfThumbnail;