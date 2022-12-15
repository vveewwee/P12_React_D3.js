import React, { Fragment } from 'react';
import Dashboard from '../../components/Dashboard';
import styled from 'styled-components';
import Error from '../../pages/Error';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Wrapper = styled.main`
    width: 100%;
`;

export default function Profile({ id }) {
    const [userData, setUserData] = useState();
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     const getData = async () => {
    //         console.log('something else maybe?\n');
    //         try {
    //             const responce = await axios.get(
    //                 `http://localhost:3000/user/${id}`
    //             );
    //             const userKeyData = responce.data.data.keyData;
    //             setUserData(userKeyData);
    //             console.log('something in here?\n');
    //             console.log(userKeyData[0].data);
    //         } catch (error) {
    //             console.error('Error\n');
    //             setError(true);
    //             // setLoading(false);
    //         }
    //     };

    //     getData();
    // }, []);
    // useEffect(() => {
    //     const url = 'http://localhost:3000/user/';
    //     const getData = () => {
    //         axios
    //             .get(url + id)
    //             .then((response) => {
    //                 const data = response.data;
    //                 setUserData(data);
    //             })
    //             .catch((error) => setError(true));
    //     };
    //     getData();
    // }, []);
    useEffect(() => {
        const url = 'http://localhost:3000/user/';
        const getData = () => {
            const data = axios.get(url + id);
            const activity = axios.get(url + id + '/activity');
            const avgSession = axios.get(url + id + '/average-sessions');
            const perf = axios.get(url + id + '/performance');
            axios
                .all([data, activity, avgSession, perf])
                .then(
                    axios.spread((...userData) =>
                        setUserData({
                            data: userData[0].data.data,
                            activity: userData[1].data.data,
                            session: userData[2].data.data,
                            perf: userData[3].data.data,
                        })
                    )
                )
                .catch((error) => setError(true));
        };
        getData();
    }, []);

    // console.log('this is the data', userData.session);
    return (
        <Fragment>
            <Wrapper>
                {error ? <Error /> : <Dashboard userData={userData} />}
            </Wrapper>
        </Fragment>
    );
}
