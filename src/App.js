import React from 'react';
import './App.css';

const questions = [
  {
    title: 'People were amazed that the burglary took place in _____ daylight.',
    variants: ['wide', 'broad', 'large', 'open'],
    correct: 1,
  },
  {
    title: 'I _____ remember putting my briefcase down on that shelf',
    variants: ['clearly', 'entirely', 'deeply', 'strongly'],
    correct: 0,
  },
  {
    title: 'He turned _____ to be considerably older than I had imagined.',
    variants: ['over', 'up', 'out', 'round'],
    correct: 2,
  },
  {
    title: 'The windows in this house are in urgent _____ of replacement',
    variants: ['need', 'help', 'want', 'demand'],
    correct: 0,
  },
  {
    title: 'Life is a _____ deal easier for immigrants who can speak the local language.',
    variants: ['far', 'great', 'big', 'huge'],
    correct: 1,
  },
  {
    title: 'The experiment _____ testing people’s responses before and after drinking coffee',
    variants: ['contained', 'incorporated', 'consisted', 'involved'],
    correct: 3,
  },
  {
    title: 'We may be a bit late. We’re _____ in a traffic jam',
    variants: ['stuck', 'stack', 'stock', 'stick'],
    correct: 0,
  },
  {
    title: 'Having _____ his driving test several times, Paul finally passed at the fourth attempt.',
    variants: ['made', 'attented', 'passed', 'taken'],
    correct: 3,
  },
  {
    title: 'Maintaining an accurate balance sheet is essential. _____ business you’re in.',
    variants: ['however', 'whatever', 'whenever', 'wherever'],
    correct: 1,
  },
  {
    title: 'She invested a lot of time _____ researching the most appropriate university course',
    variants: ['to', 'for', 'with', 'in'],
    correct: 3,
  },
  {
    title: 'The police claimed that they acted in self _____.',
    variants: [
      'interest',
      'confidence',
      'defence',
      'discipline'
    ],
    correct: 2,
  },
  {
    title: 'Very rarely _____ here in July.',
    variants: ['it rains', 'is it raining', 'it is raining', 'does it rain'],
    correct: 3,
  },
  {
    title: 'I don’t think the colours in Julia’s outfit _____ together.',
    variants: ['go','fit','match','suit'],
    correct: 0,
  },
  {
    title: 'I’d lived in Australia, so I was used to __________ on the left side of the road.',
    variants: ['driving','drive','drove','having drive'],
    correct: 0,
  },
  {
    title: 'It’s no __________ for me to get Brad’s phone number - I’ll be seeing him tonight.',
    variants: ['point', 'wonder','secret','problem'],
    correct: 3,
  }
];

function Result({correct}) {

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You've guessed {correct} out of {questions.length} questions</h2>
      <a href="/">
        <button>Try again!</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
const procent = Math.round(step / questions.length * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${procent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => 
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = React.useState(0);
  const question = questions[step];
  const [correct, setCorrect] = React.useState(0);
  

  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? (<Game question={question} step={step} onClickVariant={onClickVariant}/>) 
        : (<Result correct={correct} />)
      }
    </div>
  );
}

export default App;
