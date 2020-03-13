import React from 'react';
import Roll from 'react-reveal/Roll';

export default function Title({ name, title }) {
    return (
        <div className="row">
            <Roll right>
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize font-weight-bold">
                        {name} <strong className="text-blue">{title}</strong>
                    </h1>
                </div>
            </Roll>
        </div>
    )
}
