import React from "react"

const homeWrapperStyle: React.CSSProperties = {
    display: "flex", // 启用Flex布局
    // flexDirection: "row", // 默认值就是row，这里可以省略，但为了清晰起见保留
    justifyContent: "space-between", // 分割两列
    width: '100%', // 假设这是您想要的总宽度，与子元素对齐
};

const homeHeaderStyle: React.CSSProperties = {
    minHeight: 250,
    width: 1000,
    margin: '20px 20px 10px 20px',
    padding: 24,
    paddingBottom: 0,
    boxShadow: '0 4px 10px 2px rgba(0, 0, 0, 0.5)'
}

const homeContentStyle: React.CSSProperties = {
    minHeight: 600,
    width: 1000,
    margin: '20px 20px 20px 20px',
    padding: 24,
    paddingBottom: 0,
    boxShadow: '0 4px 10px 2px rgba(0, 0, 0, 0.5)'
}

const homeContentRightStyle: React.CSSProperties = {
    minHeight: 600,
    width: 580,
    margin: '20px 20px 34px 10px',
    padding: 24,
    paddingBottom: 0,
    boxShadow: '0 4px 10px 2px rgba(0, 0, 0, 0.5)'
}

export {homeWrapperStyle, homeHeaderStyle, homeContentStyle, homeContentRightStyle}