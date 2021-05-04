import React from 'react'

function Wrapper(props) {
    return (
        <div className="container-fluid">
            <div className="row text-center justify-content-center">
                <div className="col-md-11 text-center justify-content-center">
                 {props.children}
                </div>
            </div>
        </div>
    )
}

export default Wrapper;
