import React from 'react';
import './States.css';
import cs142models from '../../modelData/states';
/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    //console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
  }

  state = {
    value: '',
    resultValue: null
  }

  handChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handClick = () => {
    this.setState({
      resultValue: this.state.value
    })
  }

  getResults(str) {
    var model = cs142models.statesModel();
    // 没有解决获取input值得问题，str应为input得值
    return this.getInsert(str, model);
  }

  getInsert(str, array) {
    var newArray = [];
    if (str == null) {
      return array;
    } else {
      for (var i = 0; i < array.length; i++) {
        if (this.isSame(str, array[i])) {
          newArray.push(array[i])
        }
      }
    }
    if (newArray.length == 0) {
      return ['There is no result']
    }
    if (newArray == null) {
      return ['Please input some words']
    }
    return newArray;
  }

  isSame(str1, str2) {
    var index = 0;
    for (var i = 0; i < str1.length; i++) {
      for (var j = 0; j < str2.length; j++) {
        if (str1.charAt(i) == str2.charAt(j)) {
          index++;
          break;
        }
      }
    }
    if (index >= str1.length) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className='States'>
        <div className='search'>
          <input type='text' value={this.state.value} onChange={this.handChange} className='searchbar'></input>
          <input type='submit' onClick={this.handClick} className='searchbtn'></input>
        </div>

        <br />
        <ul>
          {
            this.getResults(this.state.resultValue).map((key) => {
              return <li key={key}>{key}</li>
            })
          }
        </ul>

      </div>
    );
  }
}

export default States;
