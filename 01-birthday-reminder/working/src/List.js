import React from 'react';

const List = (props) => {
  let data = props.data;
  // console.log(data);
  const list = data.map((item, index) => {
    return (
      <div key={item.id} className='person'>
        <img src={item.image} alt="avatar" />
        <div>
            <h4>{item.name}</h4>
            <p>{item.age}</p>
        </div>
      </div>
    )
  })
  return (
    <>
      <section className="list">
        {list}
      </section>
    </>
  );
};

export default List;
