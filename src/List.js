import { Component } from "react";
import moment from "moment";

const data = [
  "Cactus", "Apple Tree", "Tomato Plant", "Hosta"
]

export default class List extends Component {
  constructor(props) {
		super(props);
		this.state = {
			count: 0,
      updated: moment()
		};
	}

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      updated: moment()
		});
  }

  render() {
    return (
      <div>
        <p>Total Number of Plants in Cart: {this.state.count}</p>
        <p>Time Cart Last Updated: {this.state.updated.toString()}</p>
        {data.map(item => <LItem name={item} clickFun={this.handleClick} />)}
      </div>)
  }
}

export class LItem extends Component {
    render() {
      return (
        <div>
          <h3>{this.props.name}</h3>
          <button onClick={this.props.clickFun}>Add to Cart</button>
        </div>)
    }
}
