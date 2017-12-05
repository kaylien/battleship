import React from 'react';

class Letter extends React.Component {
  click() {
    this.props.c(this.props.v.toLowerCase());
  }

  render() {
    return (
        <button onClick={this.click.bind(this)} disabled={this.props.d}>
          {this.props.v}
        </button>
    );
  }
}

export default class Letters extends React.Component {
  click(letter) {
    this.props.guess(letter);
  }

  d(letter) {
    let xs = this.props.game.goods.concat(this.props.game.bads);
    return xs.includes(letter.toLowerCase());
  }

  render() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let buttons = _.map(letters, ll => (
        <Letter v={ll} key={ll} c={this.click.bind(this)} d={this.d(ll)} />
    ));
    return (
      <div className="buttons">
        {buttons}
      </div>
    );
  }
}
