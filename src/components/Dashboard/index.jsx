import React from 'react';
import NutriCard from '../NutriCard';
import { nutritionIcons } from '../../assets/icons';
// import {
//     user_main_data,
//     user_performance as sperf,
//     user_average_session as stession,
// } from '../../mock_data/data';
import colors from '../../style/colors';
// import { useParams } from 'react-router-dom';
import ChartBar from '../Charts/ChartBar';
import RadarGraph from '../Charts/RadarGraph';
import RadialGraph from '../Charts/RadialGraph';
import LineGraph from '../Charts/LineGraph';

import {
    Container,
    HeaderTitle,
    Greeting,
    MotivationText,
    UserContainer,
    CardHolder,
    GraphContainer,
    MainChartContainer,
    MiniChartContainer,
    RadialChartContainer,
    LineChartContainer,
    ChartContainer,
    RadarChartContainer,
} from '../StyledComponents';

/**
 * The dashboard material, containing all the users infos in graphs.
 * @param {number} id
 * @returns {JSX.element}
 */

export default function Dashboard({ userData }) {
    console.log("UserData in Dashboard:", userData);
    //when using the mock_data:
    // const name = user_main_data[0].userInfos.firstName;
    // const score = user_main_data[0].todayScore;

    // console.log('userData l44', userData);
    //when calling the api:
    const sname = userData.data.userInfos.firstName;
    const session = userData.session.sessions;
    const perf = userData.perf;
    const sscore = userData.data.todayScore;
    const activity = userData.activity;
    const count = userData.data.keyData;
    console.log("count", count);

    return (
        <Container>
            <HeaderTitle>
                <Greeting>
                    <h1>
                        Bonjour
                        <span style={{ color: `${colors.primary}` }}>
                            {' '}
                            {sname}
                        </span>
                    </h1>
                </Greeting>
                <div>
                    <MotivationText>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </MotivationText>
                </div>
            </HeaderTitle>
            <UserContainer>
                <GraphContainer>
                    <MainChartContainer>
                        <ChartContainer>
                            <ChartBar height={200} width={650} info={activity}/>
                        </ChartContainer>
                    </MainChartContainer>
                    <MiniChartContainer>
                        <LineChartContainer>
                            <LineGraph
                                width={'100%'}
                                height={'100%'}
                                data={session}
                            />
                        </LineChartContainer>

                        <RadarChartContainer>
                            <RadarGraph
                                height={'100%'}
                                width={'100%'}
                                data={perf}
                            />
                        </RadarChartContainer>
                        <RadialChartContainer>
                            <RadialGraph
                                height={'100%'}
                                width={'100%'}
                                data={sscore}
                            />
                        </RadialChartContainer>
                    </MiniChartContainer>
                </GraphContainer>
                <CardHolder>
                    {nutritionIcons.map((icons, index) => (
                        <NutriCard
                            key={`nutricard-${index}`}
                            index={index}
                            nutricon={icons}
                            data={count}
                        />
                    ))}
                </CardHolder>
            </UserContainer>
        </Container>
    );
}
