import React, { useState, useEffect } from 'react';
import { Modal as AntdModal } from 'antd';
import { MdDownloadForOffline } from "react-icons/md"
import { resume } from '@assets';
import { FiDownload } from "react-icons/fi"




type Props = {
    children?: React.ReactNode
    onClose?: Function
    open?: boolean
}

const Modal: React.FC<Props> = ({ children, open = true, onClose = () => { } }: Props) => {
    const [visible, setVisible] = useState<boolean>(open);


    useEffect(() => {
        setVisible(open)
    }, [open])

    const onFinishClosing = () => {
        onClose(false)
        setVisible(false)
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'downloadedFile.pdf';
        link.target = '_blank'; // Opens the link in a new tab
        link.rel = 'noopener noreferrer';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };



    return (
        <div>

            <AntdModal className='modal-pdf' onCancel={onFinishClosing} title={null} closeIcon={null} footer={null} open={visible}>
                <div className='download-button' style={{ height: 60 }}>
                    <div onClick={() => handleDownload()} className="download-button-icon">
                        <FiDownload style={{ color: "#ef0454" }} size={20} />
                    </div>
                </div>
                {children}
            </AntdModal>
        </div>
    );
};

export default Modal