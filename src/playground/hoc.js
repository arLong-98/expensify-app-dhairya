//higher order component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=> (
    <div>
        <h1>Info</h1>
        <p>This info is : {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            <p>This is private info. Please dont share</p>
            <WrappedComponent {...props} />
        </div>
    );
};

const RequireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            { props.isAuthenticated? <WrappedComponent {...props} />:<p>Please authenticate</p> }
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = RequireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="cancer" />, document.getElementById('app'))