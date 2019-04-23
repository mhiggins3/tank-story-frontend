import React from 'react';

class Navigation extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="ml-auto">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Setup</button>
                </div>
            </nav>
        );
    }
}

export default Navigation;
