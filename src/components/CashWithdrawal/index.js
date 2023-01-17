// Write your code here

import './index.css'

import {Component} from 'react'

import DenominationItems from '../DenominationItem/index'

const denomList = [
  {id: 1, value: 50},
  {id: 2, value: 100},
  {id: 3, value: 200},
  {id: 4, value: 400},
]

class CashWithdrawal extends Component {
  state = {price: 2000}

  onClicker = value => {
    const {price} = this.state
    const val = price - value
    this.setState({price: val})
  }

  render() {
    const {price} = this.state
    console.log(price)
    return (
      <div className="container">
        <div className="card">
          <div className="card-hold">
            <h1 className="profile">s</h1>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="card-hold">
            <div>
              <p className="balance">Your Balance</p>
            </div>

            <div className="amount-div">
              <p className="amount">{price}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="chosoe">Choose Sum (in Rupees)</p>
          <ul className="card-hold">
            {denomList.map(each => (
              <li type="none" key={each.id}>
                <DenominationItems
                  value={each.value}
                  onClicker={this.onClicker}
                  key={each.value}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
