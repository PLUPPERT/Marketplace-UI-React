import React from "react";
import Container from "react-bootstrap/Container";

const SearchFilter = (props) => {
  const { getSearchInput } = props;

  const handleInput = (event) => {
    getSearchInput(event.target.value);
  };

  return (
    <Container>
      <div class="input-group mb-3">
        <span class="input-group-text" id="input-addon">
          Filter by Title:
        </span>
        <input
          type="text"
          id="inputText"
          class="form-control"
          placeholder="Enter title"
          onChange={handleInput}
        />
      </div>
    </Container>
  );
};

export default SearchFilter;
