import React from 'react';
import { useState} from 'react';
const TourList = ({ toury, deleteTour }) => {
  const { image, price, name, info, id } = toury;
  const [readMore, setReadMore] = useState(false);
  return (
    <section className='hedha'>
      <div className='block'>
        <div className='imgBlock'>
          <img src={image} alt={name} />
          <p className='price'>
            <span>$</span>
            {price}
          </p>
        </div>
        <div className='donnerr'>
          <p className='title'>{name}</p>
          <p>

          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='readMore' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : '  Read More'}
          </button>

        </p>
          <button className='btn' onClick={() => deleteTour(id)}>
            Not Interested
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourList;



