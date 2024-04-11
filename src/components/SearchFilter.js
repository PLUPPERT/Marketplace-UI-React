import React from "react";
import Container from "react-bootstrap/Container";

const SearchFilter = (props) => {
  return (
    <Container>
      <div class="input-group mb-3">
        <span class="input-group-text" id="input-addon">
          Filter by Title:
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Enter title"
          aria-label="SearchTitle"
          aria-describedby="input-addon"
        />
      </div>
    </Container>
  );
};

export default SearchFilter;
