import React from 'react'

function Wrapper(props) {
    return (
        <div className="container-fluid">
            <div className="row text-center justify-content-center">
                <div className="col-md-10">
                 {props.children}
                </div>
            </div>
        </div>
    )
}

export default Wrapper;
