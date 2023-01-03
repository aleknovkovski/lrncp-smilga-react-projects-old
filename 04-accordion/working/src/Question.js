import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
  return (
      <article className="question">
        <header>
          <h4>{question.title}</h4>
          <button className="btn"><AiOutlinePlus /></button>
        </header>
      </article>
  );
};

export default Question;
