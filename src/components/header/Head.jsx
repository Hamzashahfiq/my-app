import React from 'react';
import './style.css'


function Head() {
    return(
      <>
        <div className='container bg-color text-white p-3'>
        <div className='row'>
          <div className='col-6'>
            <p className="fs-4 fst-italic fw-bold m-0 p-0">Title of a longer Featured blog post</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet pellentesque felis, sit amet iaculis risus interdum ac.</p>
            <a href='javascript:void(0)' className='text-white fw-bold text-decoration-none'>Countinue reading...</a>
           </div>
           <div className='col-6'></div>
        </div>
      </div>
      </>
    );
}

export default Head;