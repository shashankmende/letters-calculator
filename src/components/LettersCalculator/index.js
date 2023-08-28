// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, searchInput: ''}

  onChangeSearchInput = event => {
    const textlength = event.target.value.length
    this.setState({
      count: textlength,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg_container">
        <div className="container">
          <h1 className="heading">
            Calculate the
            <br /> Letters you
            <br /> enter
          </h1>
          <label htmlFor="inputelement" className="paragraph">
            Enter the phrase
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeSearchInput}
            id="inputelement"
          />
          <p className="button">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
