import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import SearchFilter from "./SearchFilter";
import AdvertCard from "./AdvertCard";

const AdvertList = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const getSearchInput = (textInput) => {
    setSearchInput(textInput);
  };

  return (
    <div className="mx-5">
      <Container className="pt-2 pb-1">
        <h2>Advertisment List</h2>
      </Container>
      <SearchFilter getSearchInput={getSearchInput} />
      <AdvertCard searchInput={searchInput} />
    </div>
  );
};

export default AdvertList;
