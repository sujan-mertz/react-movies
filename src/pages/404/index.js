import React from 'react';
import { CgArrowLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <div className="page-error">
            <div className="content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <Link to="/" className="btn btn-danger"><CgArrowLeft/> Go to Home Page</Link>
            </div>
        </div>
    )
}

export default ErrorPage;