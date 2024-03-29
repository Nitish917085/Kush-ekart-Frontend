import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column',
  })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
