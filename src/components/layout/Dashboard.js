import React from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from "antd";

import Category from '../category/Category';
import start_img from '../../img/start_img.png';

const Dashboard = ({ }) => {
  
  return (
    <section className="container-fluid">
      <Row className='background-img'>
        <Col span={12}>
          <Category />
        </Col>
        <Col span={12}>
          <Row className="content-end">
            <div className="fixed-end">
              <Link className="button-sm-white" to="/add-question">+ Add Question</Link>
            </div>
          </Row>
          <Row className="content-center">
            <img src={start_img} className="start-img" alt="start-img" />
          </Row>
          <Row className="content-center">
            <button class="button-lg ">Start</button>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Dashboard);
