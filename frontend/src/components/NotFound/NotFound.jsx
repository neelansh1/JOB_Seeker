// import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <div>
        <img src='/notfound.png' alt='notfound' />
        <Link to={'/'} >Return to Home page</Link>
      </div>
    </section>
  );
};

export default NotFound;
