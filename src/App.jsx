import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';

const App = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((current) => {
      const newIndex = (current + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((current) => {
      const newIndex = (current - 1 + people.length) % people.length;
      console.log(newIndex);
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(randomNum % people.length);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          random person
        </button>
      </article>
    </main>
  );
};
export default App;
