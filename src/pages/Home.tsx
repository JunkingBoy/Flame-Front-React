import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../apis/UserApi';
import { UserProData, UserInfoResponse } from '../interface/UserInterface';

const Home: React.FC = () => {
    let [pageData, setPageData] = useState<UserProData[]>([]);
    let [isLoading, setIsLoding] = useState(true);

    const fetchUserInfo = async () => {
        try {
            let userId: number = Number(localStorage.getItem('user_id'));

            let response: UserInfoResponse = await getUserInfo(userId);

            if (response.status == 200) {
                setPageData(response.data);
            } else {
                console.log('Fetch data fail!');
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        } finally {
            setIsLoding(false);
        }
    }

    useEffect(() => {
        fetchUserInfo();
    });

    return (
        <div>Home</div>
    );
}

export default Home;
