import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = (props) => {

    const {
        history
    } = props

    console.log("page 404",props);
    return (
        <div>
             <Link to="/dashboard">Dashboard</Link>

                    <button type="button" onClick={() => {
                        history.action === "REPLACE" ? history.push('/login'): history.goBack 
                    }}> test</button>
        </div>
    );
};

export default Page404;