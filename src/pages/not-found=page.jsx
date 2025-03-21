import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{
            width : "100%",
            height:"75vh",
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'column'

        }}>
            <img src="/public/error (2).gif" alt="error" />
            <h1>Page Not Found</h1>
            <button className='btn btn-secondary' style={{marginTop: '20px'}}>
                <Link to={'/'}>
                Home page
                </Link>
               
             </button>
        </div>
    );
};

export default NotFoundPage;