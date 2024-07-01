import React from 'react';
import type { DatePickerProps } from 'antd';
import {
    DatePicker,
    Space,
    theme,
    Button
} from 'antd';
import type { Dayjs } from 'dayjs';

const DateSelect: React.FC = () => {
    let { token } = theme.useToken();

    const style: React.CSSProperties = {
        border: `1px solid ${token.colorPrimary}`,
        borderRadius: '50%',
    };

    const cellRender: DatePickerProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type !== 'date') {
            return info.originNode;
        }
        if (typeof current === 'number' || typeof current === 'string') {
            return <div className="ant-picker-cell-inner">{current}</div>;
        }
        return (
            <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
            {current.date()}
            </div>
        );
    };

    return (
        <Space size={12} direction="vertical" style={{ margin: '20px 0 12px 20px' }}>
            <DatePicker.RangePicker
                cellRender={cellRender}
                inputReadOnly={true}
                placeholder={['开始日期', '结束日期']}
            />
        </Space>
    );
}

const SelectButton: React.FC = () => {
    return (
        <Button type="primary" style={{margin: '20px 0 12px -20px'}}>
            确定
        </Button>
    );
}

export {
    DateSelect,
    SelectButton
};
