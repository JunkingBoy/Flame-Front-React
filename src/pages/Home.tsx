import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';

import { getUserBugInfo, getUserProBugInfo } from '../apis/UserApi';
import { UserProBugData, UserBugInfoResponse } from '../interface/UserInterface';
import { ProgramReponse } from '../interface/ProgramInterface';
import { ExtractProToPieData } from '../interface/ExtractInterface';
import { extractProNames, extractProToPie } from '../utils/Extract';
import hotflame from '../images/hotflame.png';

import { homeWrapperStyle } from './Home.module';
import { SiderMenu } from '../components/Menu';
import { HomeHeaderDiv, HomeContentDiv, HomeRightDiv } from '../components/HomeDiv';

const { Sider } = Layout;

const Home: React.FC = () => {
    let [pageData, setPageData] = useState<UserProBugData[]>([]);
    let [isLoading, setIsLoding] = useState(true);
    let [collapsed, setCollapsed] = useState(false);
    let [arrayProName, setArrayProName] = useState<string[]>([]);
    let [headerPieData, setHeaderPieData] = useState<ExtractProToPieData[]>([]);
    let [isDataReady, setIsDataReady] = useState(false);

    // 只取前七条数据
    const fetchUserInfo = async () => {
        try {
            let userId: number = Number(localStorage.getItem('user_id'));

            // 这里应该只拿到最近七天的Bug信息 -> 返回值前七条数据
            let response: UserBugInfoResponse = await getUserBugInfo(userId);

            if (response.status == 200) {
                let newBugCount: UserProBugData[] = response.data.slice(0, 7);
                setPageData(newBugCount);
                // 存储
                // let programNameList: string[] = extractDateBugInfo(response.data)
                // localStorage.setItem('program', programNameList.toString());
            } else {
                console.log('Fetch data fail!');
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        } finally {
            setIsLoding(false);
        }
    }

    // 默认是状态为开启的项目
    const fetchUserProInfo = async () => {
        try {
            let response: ProgramReponse = await getUserProBugInfo(Number(localStorage.getItem('user_id')));

            if (response.status == 200) {
                /**
                 * 第一次调用获取到全部status为1的项目数据
                 * 将项目名称转为数组传递到子组件中进行展示
                 */
                let proNameList: string[] = extractProNames(response.data);
                setArrayProName(proNameList);
                let pieDataList: ExtractProToPieData[] = extractProToPie(response.data);
                setHeaderPieData(pieDataList);
            } else {
                console.log('Fetch program data fail!');
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        } finally {
            setIsLoding(false);
        }
    }

    useEffect(() => {
        fetchUserInfo();
        fetchUserProInfo();
    }, []);

    /**
     * collapsible -> 布尔值 -> 表示是否可折叠
     * collapsed -> 布尔值 -> 表示当前折叠状态
     * 给侧边栏加入一个点击事件,来改变当前折叠状态
     * 侧边栏菜单固定
     * defaultSelectedKeys为进来默认选中的侧边栏
     */
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible={true} collapsed={collapsed} onCollapse={(value) => {setCollapsed(value)}}>
                <div style={{ padding: '25px 0 10px 25px', boxSizing: 'border-box' }}>
                    <img width="30px" src={hotflame} alt="" />
                </div>
                <SiderMenu />
            </Sider>
            <div style={homeWrapperStyle}>
                <div>
                    <HomeHeaderDiv programNameList={arrayProName} pagePieDataObj={headerPieData} />
                    <HomeContentDiv pagedata={pageData} />
                </div>
                <HomeRightDiv />
            </div>
        </Layout>
    );
}

export default Home;
