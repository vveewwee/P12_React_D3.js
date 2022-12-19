import React from 'react';
import NutriCard from '../NutriCard';
import { nutritionIcons } from '../../assets/icons';
import {
    user_main_data,
    user_performance as perf,
    user_average_session as session,
} from '../../mock_data/data';
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
    const name = user_main_data[0].userInfos.firstName;
    const score = user_main_data[0].todayScore;

    // const [loading, setLoading] = useState(true);
    // console.log('userData l44', userData);
    //when calling the api:
    // const sname = userData.data.userInfos.firstName;
    // const stession = userData.session.sessions;
    // const sperf = userData.perf;
    // const sscore = userData.data.score;
    // console.log('session:', stession);
    // console.log(sname);
    // console.log('sperf l53', sperf);
    // console.log(sscore);

    function fixData(array) {
        let newData = [];
        let days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        array.map((d, i) => {
            console.log('arraymap:', d.sessionLength);
            newData.push({ day: days[i], time: d.sessionLength });
        });
        return newData;
    }
    const info = fixData(session);
    // console.log('info', info);
    return (
        <Container>
            <HeaderTitle>
                <Greeting>
                    <h1>
                        Bonjour
                        <span style={{ color: `${colors.primary}` }}>
                            {' '}
                            {name}
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
                            <ChartBar height={200} width={650} />
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
                                data={score}
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
                        />
                    ))}
                </CardHolder>
            </UserContainer>
        </Container>
    );
}
