import React from 'react';
import './style.css'
function Main() {
   return (
      <>
         <div className='container'>
            <div className='row'>
               <div className='col-md-8 px-3'>
                  <h5 className='fst-italic fw-bold m-0'>From the firehose</h5>
                  <hr />
                  <h2 className='fw-bold mb-0'>Sample blog post</h2>
                  <p>February 16, 2022 by <a href="javascrip:void(0)" className='text-decoration-none'>Hamza</a></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet pellentesque felis, sit amet iaculis risus interdum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo mi, cursus quis dolor in, posuere tempor nunc.</p>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="javascript:void(0)" className='text-display-none'>Praesent leo mi</a> cursus quis dolor in, posuere tempor nunc. Donec rhoncus scelerisque egestas. Quisque auctor eros quis convallis sagittis. Donec ac ultricies odio. Curabitur dapibus in nisl eleifend consectetur. Fusce maximus massa ac risus hendrerit congue. Fusce mollis dui a arcu rhoncus iaculis.
                     <br />
                     <br />
                     Fusce eget massa est. Mauris efficitur turpis ullamcorper, ultrices sapien at, pretium quam. Etiam egestas porttitor erat, quis sollicitudin risus vulputate et. Proin consequat imperdiet ante, rhoncus rutrum leo pretium scelerisque. Praesent nec aliquam nisi. Phasellus tempor lectus nec urna varius maximus. Etiam pretium finibus pharetra. Ut condimentum eleifend tristique.
                     <br />
                     <br />
                     Vivamus eget tincidunt libero, non mollis nisl. Curabitur sed mi dictum, interdum tellus at, rhoncus lacus. Aliquam at sapien varius, fringilla elit at, fermentum erat. Morbi rutrum ex ut velit efficitur condimentum.</p>
                  <h4 className='fw-bold'>Heading</h4>
                  <p>Fusce eget massa est. Mauris efficitur turpis ullamcorper, ultrices sapien at, pretium quam. Etiam egestas porttitor erat, quis sollicitudin risus vulputate et. Proin consequat imperdiet ante, rhoncus rutrum leo pretium scelerisque. Praesent nec aliquam nisi. Phasellus tempor lectus nec urna varius maximus. Etiam pretium finibus pharetra. </p>
                  <h4 className='fw-bold'>Sub-heading</h4>
                  <p>Fusce eget massa est. Mauris efficitur turpis ullamcorper, ultrices sapien at, pretium quam. Etiam egestas porttitor erat, quis sollicitudin risus vulputate et.
                     <br />
                     <br />
                     Phasellus tempor lectus nec urna varius maximus. Etiam pretium finibus pharetra.  Proin consequat imperdiet ante, rhoncus rutrum leo pretium scelerisque. Praesent nec aliquam nisi. </p>
                  <h4 className='fw-bold'>Sub-heading</h4>
                  <p>Fusce eget massa est. Mauris efficitur turpis ullamcorper, ultrices sapien at, pretium quam. Etiam egestas porttitor erat, quis sollicitudin risus vulputate et.
                     Phasellus tempor lectus nec urna varius maximus. Etiam pretium finibus pharetra.  Proin consequat imperdiet ante, rhoncus rutrum leo pretium scelerisque. Praesent nec aliquam nisi. </p>
                  <ul>
                     <li>Lorem ipsum dolor sit amet.</li>
                     <li>consectetur adipiscing elit.</li>
                     <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <p>Phasellus tempor lectus nec urna varius maximus. Etiam pretium finibus pharetra.</p>
                  <ol>
                     <li>Lorem ipsum dolor sit amet.</li>
                     <li>consectetur adipiscing elit.</li>
                     <li>Lorem ipsum dolor sit amet.</li>
                  </ol>
                  <p>Phasellus tempor lectus nec urna varius maximus. Etiam pretium finibus pharetra.</p>
                  <br />
                  <br />

                  <h2 className='fw-bold mb-0'>Another blog post</h2>
                  <p>February 16, 2022 by <a href="javascrip:void(0)" className='text-decoration-none'>Hamza</a></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet pellentesque felis, sit amet iaculis risus interdum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo mi, cursus quis dolor in, posuere tempor nunc.</p>
                  <br />
                  <br />

                  <h2 className='fw-bold mb-0'>New Feature</h2>
                  <p>February 16, 2022 by <a href="javascrip:void(0)" className='text-decoration-none'>Hamza</a></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet pellentesque felis, sit amet iaculis risus interdum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo mi, cursus quis dolor in, posuere tempor nunc.</p>
                  <ul>
                     <li>Lorem ipsum dolor sit amet.</li>
                     <li>consectetur adipiscing elit.</li>
                     <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <p>Phasellus tempor lectus nec urna varius maximus. Etiam pretium finibus pharetra.</p>
                  <button type="button" className="btn btn-outline-info m-2 rounded-pill">Older</button>
                  <button type="button" className="btn btn-outline-dark m-2 rounded-pill">Never</button>
               </div>
               <div className='col-md-4 my-3'>
                  <div className='p-2 mainAbout'>
                     <h5 className='fst-italic fw-bold'>About</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet pellentesque felis, sit amet iaculis risus interdum ac.Suspendisse laoreet pellentesque felis, sit amet iaculis risus interdum ac.</p>
                  </div>
                  <div className='p-2'>
                  <h5 className='fst-italic fw-bold mt-3'>Archivcs</h5>
                  <a href="javascrip:void(0)" className='text-decoration-none'>February 2022</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>January 2022</a>
                  <br /> 
                  <a href="javascrip:void(0)" className='text-decoration-none'>December 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>November 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>October 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>September 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>August 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>July 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>Jun 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>April 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>March 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>February 2021</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>January 2021</a>

                  <h5 className='fst-italic fw-bold mt-5'>Elsewhere</h5>
                  <a href="javascrip:void(0)" className='text-decoration-none'>Facebook</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>Instagram</a>
                  <br />
                  <a href="javascrip:void(0)" className='text-decoration-none'>twitter</a>
                  </div>
                  
               </div>
            </div>
         </div>
      </>
   );
}

export default Main;