import React from 'react';
import { Button, type ButtonProps } from 'antd';

export interface BaseButtonProps extends ButtonProps {
    label: React.ReactNode;
    icon?: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({ label, icon, ...rest }) => {
    return (
        <Button icon={icon} {...rest}>
            {label}
        </Button>
    );
};

export default BaseButton;
