// TODO
var GroceryList = (props) => (
  <ul> 
    {props.items.map(items =>
      <GroceryListItem items={items} /> 
    )}
  </ul>
);
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    }
  }
  render () {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    var mouseAction = this.onHoverItem.bind(this)
    return (
      <li style ={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={mouseAction} onMouseLeave={mouseAction} > {this.props.items} </li>
    );
  } 
  onListItemClick (event) {
    this.setState({
      done: !this.state.done
    });
  };
  onHoverItem (event) {
    this.setState({
      hover: !this.state.hover
    });
  }
};
ReactDOM.render(<GroceryList items={['stuff', 'andThings', 'andMoreStuff']}/>, document.getElementById('app'));

