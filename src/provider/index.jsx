import axios from "axios";
import { Fragment } from "react";
import Error from "../pages/Error";
import Profile from "../pages/Profile";
import { useState, useEffect } from "react";
import Load from "../components/Load";

export default function Provider({id}){

    const [userData, setUserData] = useState();
    const [error, setError] = useState(false);
    const [isNotLoading, setLoading] = useState(false);

    useEffect(() => {
        const url = 'http://localhost:3000/user/';
        const getData = async () => {
            const data = await axios.get(url + id);
            const activity = await axios.get(url + id + '/activity');
            const avgSession = await axios.get(url + id + '/average-sessions');
            const perf = await axios.get(url + id + '/performance');
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
                setLoading(true);
        };
        getData();
    },[id]);

    return (
        <Fragment>
            {isNotLoading ? 
            (error ? <Error/> : <Profile userData={userData}/>) : ( <Load/>)
                }
        </Fragment>
    )
}