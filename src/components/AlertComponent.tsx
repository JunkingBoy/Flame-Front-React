import React from 'react'
import { Alert, Button } from 'antd';

interface AlertTemplateProps {
    message: string;
    description?: string;
}

const AlertTemplate: React.FC<AlertTemplateProps> = ({ message, description }) => {
    return (
        <Alert
            message={message}
            type="error"
            showIcon
            description={description}
            closable
        />
    );
}

export { AlertTemplate }
