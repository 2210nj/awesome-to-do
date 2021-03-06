import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';
import Tasks from '../tasks/tasks.jsx';

export default class Main extends Component {
  constructor() {
    super();
  }

  render() {
    const {itemsData, menuDefault, onDoneSwitch, onTaskFixed, onTaskDelete} = this.props;

    return (
      <main className="main">

        <div className="container">
          <Menu menuDefault={menuDefault}></Menu>
        </div>

        <div className="container">
          <Tasks itemsData={itemsData} onDoneSwitch={onDoneSwitch} onTaskFixed={onTaskFixed} onTaskDelete={onTaskDelete}></Tasks>
        </div>

      </main>
    );
  }
}

Main.propTypes = {
  itemsData: PropTypes.array.isRequired,
  menuDefault: PropTypes.bool.isRequired,
  onDoneSwitch: PropTypes.func.isRequired,
  onTaskFixed: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired
};
