import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col} from "antd";

import CategoryDetail from "./CategoryDetail";
import { getCategories } from "../../actions/category";
const Category = () =>
  // { getCategories, category: { categories } }
  {
    //   useEffect(() => {
    //     getCategories();
    //   }, [getCategories]);
    return (
      <section className="container">
        <Row className="f-color d-flex justify-content-center f-40">
          Select Category
        </Row>
        <div className="category">
          <div className="category-box">
            <Row>
              <Link class="button-sm m-1" to="/category-detail">
                Category 1
              </Link>
            </Row>
            <Row>
              <Link class="button-sm m-1" to="/category-detail">
                Category 2
              </Link>
            </Row>
            <Row>
              <Link class="button-sm m-1" to="/category-detail">
                Category 3
              </Link>
            </Row>
            <Row>
              <Link class="button-sm m-1" to="/category-detail">
                Category 4
              </Link>
            </Row>
            <Row>
              <Link class="button-sm m-1" to="/category-detail">
                Category 5
              </Link>
            </Row>
            
      
          </div>
        </div>
      </section>
    );
  };
// Category.propTypes = {
//   getCategories: PropTypes.func.isRequired,
//   category: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   category: state.category
// });

export default // connect(mapStateToProps, { getCategories })
Category;
