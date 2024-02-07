import React from 'react'

const Jumbotron = () => {
  return (
    <>
      <div className='p-5 mb-4 bg-body-tertiary rounded-3 ' style={{background: "#EAECEF", margin:"0px 30px", textAlign: "left"}}>
        <div className='container-fluid '></div>
          <h1 className='display-5'>A Warm Welcome!</h1>
          <p className='cold-md-8 fs-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, libero? Voluptatibus cumque voluptates soluta saepe maiores magni, labore ipsa! Ullam quo sit suscipit nesciunt labore obcaecati sint eos perferendis iusto.
          </p>
          <button className='btn btn-primary btn-lg' type='button'>Call to action!</button>
      </div>
    </>
  )
};

export default Jumbotron