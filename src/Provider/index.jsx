import axios from "axios";
import { Fragment } from "react";
import Error from "../pages/Error";
import Profile from "../pages/Profile";
import { useState, useEffect } from "react";

export default function Provider({id}){

    const [userData, setUserData] = useState();
    const [error, setError] = useState(false);

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

    console.log("userData: ",userData)
    return (
        <Fragment>
            {error ? <Error/> : <Profile userData={userData}/>}
        </Fragment>
    )
}