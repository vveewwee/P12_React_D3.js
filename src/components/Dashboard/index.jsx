import React from 'react';
import styled from 'styled-components';
import NutriCard from '../NutriCard';
import { nutritionIcons } from '../../assets/icons';
import { user_main_data } from '../../mock_data/data';
import BarChart from '../Charts/BarChart';
import LineChart from '../Charts/LineChart';
import colors from '../../style/colors';
import TimeSeries from '../Charts/TimeSeries';
import Histogram from '../Charts/Histogram';
//import { useParams } from 'react-router-dom';
//import axios from 'axios';
import ChartBar from '../Charts/ChartBar';

const Container = styled.div`
    width: 80%;
    position: absolute;
    left: 110px;
    display: flex;
    flex-direction: column;
    padding: 2%;
`;

const HeaderTitle = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Greeting = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

const MotivationText = styled.p`
    font-weight: 400;
    font-size: 18px;
    margin-top: 0;
`;

const UserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    align-items: center;
    width: 30%;
`;

const GraphContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
`;

const MainChartContainer = styled.div`
    width: 100%;
    margin-bottom: 2%;
`;
const MiniChartContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: space-between;
`;
const ChartContainer = styled.div`
    background-color: ${colors.cardC};
    border-radius: 6px;
    width: 100%;
`;

export default function Profile() {
    const name = user_main_data[0].userInfos.firstName;
    /*
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(false);
    const {id} = useParams();

    useEffect(() => {
      const getData = async ()=> {
        try{
            const responce = await axios.get(`http://localhost:3000/user/${id}`);
            const userKeyData = responce.data.data.keyData; 
        }catch(error){
            setError(true)
        }finally{
            setLoading(false)
        }
      }
    
      return () => {
        second
      }
      getData();
    }, [])
    
*/
    //console.log(userKeyData[0].keyData[0]);
    //const { keyData } = userKeyData[0];
    // console.log(typeof keyData);
    return (
        <Container>
            <HeaderTitle>
                <Greeting>
                    <h1>Bonjour</h1>
                    <h1 style={{ color: `${colors.primary}` }}> {name}</h1>
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
                            <ChartBar height={300} width={500} />
                        </ChartContainer>
                    </MainChartContainer>
                    {/* <MiniChartContainer>
                        <ChartContainer>
                            <LineChart height={100} width={100} />
                        </ChartContainer>
                        <ChartContainer>
                            <TimeSeries height={100} width={100} />
                        </ChartContainer>
                        <ChartContainer></ChartContainer>
                    </MiniChartContainer> */}
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
