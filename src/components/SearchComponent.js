import React from 'react'

import { Input, Table } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const dataSource = [
  {
    key: "1",
    question: "Question1",
    category: "Category1",
  },
  {
    key: "2",
    question: "Question2",
    category: "Category2",
  },
  {
    key: "2",
    question: "Question3",
    category: "Category3",
  },
  {
    key: "2",
    question: "Question4",
    category: "Category4",
  },
  {
    key: "2",
    question: "Question5",
    category: "Category5",
  },
];

const columns = [
  {
    title: "Question",
    dataIndex: "question",
    key: "question",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
];


 const SearchComponent = ()=> {
    return (
      <section className="container">
        <h3 className="content-center">Search</h3>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <Table dataSource={dataSource} columns={columns} />;
      </section>
    );
}
export default SearchComponent;