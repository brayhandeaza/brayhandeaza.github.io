import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '@styles/PDF.scss';

import { useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { resume } from '@assets';
import type { PDFDocumentProxy } from 'pdfjs-dist';

type Props = {
    width?: number
}

export default ({ }: Props = {}): JSX.Element => {
    const [numPages, setNumPages] = useState<number>();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const onLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy) => {
        setNumPages(nextNumPages);
    }

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize]);


    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
            'pdfjs-dist/build/pdf.worker.min.js',
            import.meta.url,
        ).toString();
    }, [])

    return (
        <div className="Example" style={{ position: 'relative', top: -100 }}>
            <div className="Example__container" >
                <div className="Example__container__document" >
                    <Document file={resume} onLoadSuccess={onLoadSuccess}>
                        {Array.from(new Array(numPages), (_el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={windowSize.width < 600 ? windowSize.width * 0.85 : windowSize.width * 0.55}
                                className='Example__container__document__page'
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}