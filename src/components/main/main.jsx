import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// import Task from '../task/task.jsx';

// import './main.css';

export default class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();
  }

  render() {
    const {menuDefault} = this.props;

    let menuClassName = menuDefault ? `menu` : `menu menu--active`;

    return (
      <main className="main">

        <div className="container">
          <section className={menuClassName}>
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="#">Все задачи</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Текущие</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">Выполненные</a>
              </li>
              <li className="menu__item menu__item--fixed">
                <a className="menu__link" href="#">
                  <svg className="menu__icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.51544 17C6.37979 17 6.2441 16.9476 6.13984 16.8425C5.92908 16.6299 5.92636 16.2827 6.13383 16.0667L15.0578 6.7786C16.2179 5.57109 16.2228 3.61139 15.0685 2.41004L14.6665 1.99158C14.1122 1.41467 13.3749 1.09702 12.5902 1.09702C11.7995 1.09702 11.0549 1.41885 10.4935 2.00316L1.62363 11.135C0.886152 11.9025 0.883013 13.1515 1.61845 13.917L1.89638 14.2063C2.2669 14.5919 2.78729 14.8131 3.3241 14.8131C3.82535 14.8131 4.28537 14.6216 4.61953 14.2739L12.582 5.98643C12.8819 5.67424 12.8837 5.16801 12.5858 4.85796L12.4373 4.70342C12.2966 4.55697 12.1097 4.47632 11.911 4.47632C11.7102 4.47632 11.5207 4.55852 11.3773 4.70771L4.01775 12.3679C3.81028 12.5837 3.47131 12.5865 3.26049 12.3741C3.04973 12.1616 3.04701 11.8143 3.25448 11.5984L10.6142 3.93821C10.9605 3.57779 11.4211 3.3793 11.911 3.3793C12.399 3.3793 12.8569 3.57629 13.2006 3.93398L13.349 4.08857C14.0545 4.82276 14.0528 6.01939 13.3452 6.75588L5.38285 15.0434C4.84578 15.6023 4.11473 15.9102 3.32421 15.9102C2.50235 15.9102 1.70382 15.5696 1.13322 14.9757L0.855288 14.6865C-0.287915 13.4966 -0.284672 11.5574 0.862507 10.3634L9.73235 1.23152C10.4946 0.438067 11.5103 0 12.5903 0C13.6641 0 14.6726 0.434048 15.4298 1.22214L15.8318 1.64059C17.3936 3.26624 17.3888 5.91634 15.821 7.54815L6.89704 16.8362C6.79227 16.9453 6.65385 17 6.51544 17Z"
                      fill="#F9E4B0" />
                  </svg>
                  Закреплённые</a>
              </li>
              <li className="menu__item menu__item--add">
                <a className="menu__link" href="#">
                  <svg className="menu__icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.3359 7.83594H9.16406V0.664062C9.16406 0.297301 8.86676 0 8.5 0C8.13324 0 7.83594 0.297301 7.83594 0.664062V7.83594H0.664062C0.297301 7.83594 0 8.13324 0 8.5C0 8.86676 0.297301 9.16406 0.664062 9.16406H7.83594V16.3359C7.83594 16.7027 8.13324 17 8.5 17C8.86676 17 9.16406 16.7027 9.16406 16.3359V9.16406H16.3359C16.7027 9.16406 17 8.86676 17 8.5C17 8.13324 16.7027 7.83594 16.3359 7.83594Z"
                      fill="#85DC9D" />
                  </svg>
                  Добавить задачу</a>
              </li>
            </ul>
          </section>
        </div>

      </main>
    );
  }
}

// Main.propTypes = {
//   isMenuOpen: PropTypes.bool.isRequired
// };
