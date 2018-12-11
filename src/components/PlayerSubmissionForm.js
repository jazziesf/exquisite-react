import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1: "",
      adj2: "",
      adv: "" ,
      noun1: "",
      noun2: "",
      verb: "",
      }
    }

  onFiledChangeHandler = (event, fieldToGetValueFrom = "value") => {
    const updateState = {};

    const fieldName = event.target.name;
    const value = event.target[fieldToGetValueFrom];

    updateState[fieldName] = value;

    this.setState(updateState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm__form">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <p>The</p>
            <input
              name="adj1"
              placeholder="adjective"
              type="text"
              className={this.state.adj1.length < 1 ? "PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionFormt__input" }
              value={this.state.adj1}
              onChange={this.onFiledChangeHandler}
              />

            <input
              name="noun1"
              placeholder="noun"
              type="text"
              className={this.state.noun1.length < 1 ? "PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionFormt__input" }
              value={this.state.noun1}
              onChange={this.onFiledChangeHandler}
              />

            <input
              placeholder="adverb"
              name="adv"
              type="text"
              className={this.state.adv.length < 1 ? "PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionFormt__input" }
              value={this.state.adv}
              onChange={this.onFiledChangeHandler}
              />

            <input
              name="verb"
              placeholder="verb"
              type="text"
              className={this.state.verb.length < 1 ? "PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionFormt__input" }
              value={this.state.verb}
              onChange={this.onFiledChangeHandler} />

            <p>the</p>

            <input
              name="adj2"
              placeholder="adjective"
              type="text"
              className={this.state.adj2.length < 1 ? "PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionFormt__input" }
              value={this.state.adj2}
              onChange={this.onFiledChangeHandler}
              />

            <input
              name="noun2"
              placeholder="noun"
              type="text"
              className={this.state.noun2.length < 1 ? "PlayerSubmissionFormt__input--invalid" : "PlayerSubmissionFormt__input" }
              value={this.state.noun2}
              onChange={this.onFiledChangeHandler}
              />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

// PlayerSubmissionForm.propTypes = {
//   addLineSubmission: PropTypes.func.isRequired
// }


export default PlayerSubmissionForm;
