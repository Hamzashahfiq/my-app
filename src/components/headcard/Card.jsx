import React from 'react';
import cardimg from '../../images/cardthumbnailpic.jpg';
import './style.css'

function Card() {
    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col-12 col-md-6 p-0'>
                    <div className="card mb-3 me-md-4" style={{ minWidth: "350px" }}>
                        <div className="row g-0">
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={cardimg} className="img-fluid rounded imgwidth" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 p-0'>
                    <div className="card mb-3 ms-md-4" style={{minWidth: "350px" }}>
                        <div className="row g-0">
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={cardimg} className="img-fluid rounded imgwidth" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;