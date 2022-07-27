import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./FilterBar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  filterByLocation,
  filterBySex,
  filterBySize,
  fullFilterAge,
  fullFilterLocation,
  fullFilterSex,
  fullFilterSize,
  orderByAge,
  getPetFilters
} from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import FilterbarSelect from "../FilterBarSelectedButton/FilterBarSelectedButton";
import { useLocation } from "react-router-dom";

function FiltersBar() {
    const dispatch = useDispatch();
    let [searchName,setSearchName]=useState("")
    const petType = useLocation().search?.replace("?type=", "");

  useEffect(() => {
  // dispatch(fullFilterAge("age"));
  }, [dispatch]);

  function handleOrderByAge(e) {
    dispatch(orderByAge(e));
    dispatch(fullFilterAge(e))
  }

  function handleFilterBySex(e) {
    dispatch(filterBySex(e));
    dispatch(fullFilterSex(e))
  }
  function handleFilterBySize(e) {
    dispatch(filterBySize(e));
    dispatch(fullFilterSize(e))
  }
  function handleFilterByLocation(e) {
    dispatch(filterByLocation(e));
    dispatch(fullFilterLocation(e))
  }
function handleSearchName(){
  dispatch(getPetFilters(petType,searchName))
}
  return (
    <React.Fragment>
    <div className="filtBar">
      <DropdownButton
      onSelect={(e) => {
        handleFilterByLocation(e);
      }}
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="LOCATION"
        className="ms-2"
      ><Dropdown.Item eventKey={"All"} href="#/action-1" >
      All
    </Dropdown.Item>
        <Dropdown.Item eventKey={"Buenos Aires"}href="#/action-1" >
          Buenos Aires
        </Dropdown.Item>
        <Dropdown.Item eventKey={"San José"}href="#/action-2">San José</Dropdown.Item>
        <Dropdown.Item eventKey={"Cordoba"}href="#/action-2">Cordoba</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        onSelect={(e) => {
          handleOrderByAge(e);
        }}
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="AGE"
        className="ms-2"
      >
        <Dropdown.Item eventKey="young">young</Dropdown.Item>
        <Dropdown.Item eventKey="old">old</Dropdown.Item>
      </DropdownButton>

      <InputGroup className="ms-2 w-50">
        <Form.Control
          placeholder="Search by name"
          aria-label="Search by name"
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearchName(e.target.value)}
          value={searchName}        />
        <Button className="btn-pink" onClick={e=>{handleSearchName()}}>Search</Button>
      </InputGroup>

      <DropdownButton
        onSelect={(e) => {
          handleFilterBySex(e);
        }}
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="SEX"
        className="ms-2"
      >
        <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="male">Male</Dropdown.Item>
        <Dropdown.Item eventKey="female">Female</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        onSelect={(e) => {
          handleFilterBySize(e);
        }}
        id="dropdown-button-light"
        variant="light"
        menuVariant="light"
        title="SIZE"
        className="ms-2"
      >
        <Dropdown.Item eventKey="Any">Any</Dropdown.Item>
        <Dropdown.Item eventKey="small">Small</Dropdown.Item>
        <Dropdown.Item eventKey="medium">Medium</Dropdown.Item>
        <Dropdown.Item eventKey="big">Big</Dropdown.Item>
      </DropdownButton>
    </div>
    <FilterbarSelect/>
    </React.Fragment>
  );
}

export default FiltersBar;
