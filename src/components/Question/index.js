import React from 'react';
import './Question.scss';

const Question = ( {lists, progress, toResult, getScores }) => {
    return (
        <div className='question-area'>
            <h2 className='question-title'>{lists[progress].title}</h2>
            <div className='question-img-area'>
                <div className='question-img'></div>
            </div>
            <div className='question-option-area'>
                <div className='question-option-box'>
                {lists[progress].options.map((o) => 
                    <div 
                        key={o.opt} 
                        className='question-options pointer' 
                        onClick={() => {
                            getScores(o.score)
                            toResult()
                        }} 
                    >{o.opt}</div>
                )}
                </div>
            </div>
        </div>       
    )   
}

export default Question;