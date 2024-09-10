import React, { useState, useEffect } from 'react'

import { getUserBugInfo, getUserProBugInfo, getUserCareerInfo, getUserProBugDetail } from '../apis/UserApi';
import { UserProBugData, UserCareerData, UserCarDataResponse } from '../interface/UserInterface';
import { ProgramInfo, ProgramBugDetail, ProgramBugDetailResponse } from '../interface/ProgramInterface';
import { ExtractProToPieData } from '../interface/ExtractInterface';
import { extractProNames, extractProToPie, extractAllProName } from '../utils/Extract';
import { DataContainer } from '../utils/InterfaceClass';

import { homeWrapperStyle } from '../pages/Home.module'
import { HomeHeaderDiv, HomeContentDiv, HomeRightDiv } from './HomeDiv'

const PC: React.FC = () => {
    let [pageData, setPageData] = useState<UserProBugData[]>([]);
    let [isLoading, setIsLoding] = useState(true);
    let [arrayProName, setArrayProName] = useState<string[]>([]);
    let [headerPieData, setHeaderPieData] = useState<ExtractProToPieData[]>([]);
    let [userCareerData, setUserCareerData] = useState<UserCareerData[]>([]);
    let [userName, setUserName] = useState<string>('');
    let [underData, setUnderData] = useState<ProgramBugDetail[]>([]);
    let [allProName, setAllProName] = useState<string[]>([]);


    // 只取前七条数据
    const fetchUserInfo = async () => {
          try {
              // 这里应该只拿到最近七天的Bug信息 -> 返回值前七条数据
              let response: DataContainer<UserProBugData> = await getUserBugInfo(Number(localStorage.getItem('user_id')));
  
              if (response.code == 200) {
                  let newBugCount: UserProBugData | UserProBugData[] = response.getFullObject().serializedData;
                  if (Array.isArray(newBugCount)) {
                    setPageData(newBugCount);
                  } else {
                    setPageData([newBugCount]);
                  }
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
  
    // // 默认是状态为开启的项目
    // const fetchUserProInfo = async () => {
    //     try {
    //         let response: DataContainer<ProgramInfo> = await getUserProBugInfo(Number(localStorage.getItem('user_id')));

    //         if (response.code == 200) {
    //             /**
    //              * 第一次调用获取到全部status为1的项目数据
    //              * 将项目名称转为数组传递到子组件中进行展示
    //              */
    //             let proNameList: string[] = extractProNames(response.data);
    //             setArrayProName(proNameList);
    //             let pieDataList: ExtractProToPieData[] = extractProToPie(response.data);
    //             setHeaderPieData(pieDataList);
    //         } else {
    //             console.log('Fetch program data fail!');
    //         }
    //     } catch (error) {
    //         console.log('Error fetching data:', error);
    //     } finally {
    //         setIsLoding(false);
    //     }
    // }

    // const fetchUserCareerInfo = async () => {
    //     try {
    //         let response: UserCarDataResponse = await getUserCareerInfo(Number(localStorage.getItem('user_id')));

    //         if (response.status == 200) {
    //             setUserName(response.user);
    //             setUserCareerData(response.data);
    //         } else {
    //             console.log('Fetch user career data fail!');
    //         }
    //     } catch (error) {
    //         console.log('Error fetching data:', error);
    //     } finally {
    //         setIsLoding(false);
    //     }
    // }

    // const fetchUserUnderInfo = async () => {
    //     try {
    //         let response: ProgramBugDetailResponse = await getUserProBugDetail(Number(localStorage.getItem('user_id')));

    //         if (response.status == 200) {
    //             let proNameList: string[] = extractAllProName(response.data);
    //             setAllProName(proNameList);
    //             setUnderData(response.data);
    //         } else {
    //             console.log('Fetch user bug program detail data fail!');
    //         }
    //     } catch (error) {
    //         console.log('Error fetching data:', error);
    //     } finally {
    //         setIsLoding(false);
    //     }
    // }

    useEffect(() => {
        fetchUserInfo();
        // fetchUserProInfo();
        // fetchUserCareerInfo();
        // fetchUserUnderInfo();
    }, []);

    return (
      <div style={homeWrapperStyle}>
          <div>
              <HomeHeaderDiv programNameList={arrayProName} pagePieDataObj={headerPieData} />
              <HomeContentDiv pagedata={pageData} />
          </div>
          <HomeRightDiv user={userName} radarData={userCareerData} allProList={allProName} proDetailData={underData} />
      </div>
    );
}

export default PC;
