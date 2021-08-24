import {Component} from 'react';
import Button from '@material-ui/core/Button';


export default class Botao extends Component {
  render() {
    return (
      <Button color="secondary"  disabled={this.props.disabled} onClick= {this.props.onClick} className={this.props.className} >
        {this.props.text} 
      </Button>
    );
  }
}