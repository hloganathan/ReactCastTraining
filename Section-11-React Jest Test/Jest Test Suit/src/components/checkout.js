var React = require('react');

var Checkout = React.createClass({
  render: function() {
    var listItems = this.props.items.map(function(item, i) {
      return <li key={"selectedItem" + i}>{item.title}</li>
    });
    var count = listItems.length;
    return (
      <div>
        <ul>
          {listItems}
        </ul>
        <span>{count}</span>
      </div>
    );
  }
});

module.exports = Checkout;