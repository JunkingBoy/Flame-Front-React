import React from 'react'
import { Input } from 'antd';

import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const SearchSelf: React.FC = () => {
    return (
        <Search placeholder="请输入搜索内容" onSearch={onSearch} enterButton style={{ margin: '24px 0 12px', width: '80%' }} />
    );
}

export default SearchSelf;
