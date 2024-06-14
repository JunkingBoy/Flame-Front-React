import React, { useEffect, useState } from 'react';
import { getUserBugInfo, getUserProBugInfo } from '../apis/UserApi';
import { UserProBugData, UserBugInfoResponse } from '../interface/UserInterface';
import { ProgramReponse } from '../interface/ProgramInterface';
import { extractProNames } from '../utils/Extract';

const Home: React.FC = () => {
    let [pageData, setPageData] = useState<UserProBugData[]>([]);
    let [isLoading, setIsLoding] = useState(true);

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
                let programNameList: string[] = extractProNames(response.data)
                localStorage.setItem('program', programNameList.toString());
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
                // 设置data为数据展示部分
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

    return (
        <div>Home</div>
    );
}

export default Home;
