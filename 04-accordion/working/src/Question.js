import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question: {info, title, id, opened}, handleToggle}) => {
    // const [opened, setOpened] = useState(false)
    const infoArea = opened ? <p>{info}</p> : null

  return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={()=> handleToggle(id)}>
              {opened ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
          {infoArea}
      </article>
  );
};

export default Question;
