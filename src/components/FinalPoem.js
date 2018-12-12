import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const poem = props.poem.map((line) => {
    return <p>{line}</p>
  })

  return (
    <div className="FinalPoem">
      { props.isRevealed &&
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          <section>
            {poem}
          </section>
      </section> }

      {!props.isRevealed &&
      <div className="FinalPoem__reveal-btn-container" >
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.viewFinalPoemCallback} />
      </div> }
    </div>
  );
}

FinalPoem.propTypes = {
  viewFinalPoemCallback: PropTypes.func.isRequired,
  poem: PropTypes.array,
  isRevealed: PropTypes.bool,
}

export default FinalPoem;
