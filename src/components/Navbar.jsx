import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Card,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";

function Header(props) {
  console.log(props.isFetching);
  const [searchText, setSearchTex] = React.useState("");
  const [resultdata, setResultData] = useState([]);
  var searchString = searchText.replace(" ", "+");
  console.log(searchString);
  const [sortType, setSortType] = React.useState("");
  const [pageCount, setPageCount] = React.useState(1);

  let dispatch = useDispatch();
  const setData = useCallback(
    (data) => dispatch({ type: "GET_IMAGES", data }),
    [dispatch]
  );

  const setLoadData = useCallback(
    (data) => dispatch({ type: "LOAD_IMAGES", data }),
    [dispatch]
  );
  //   function viewSort() {
  //     dispatch({ type: "SORT_VIWES", data: resultdata });
  //   }

  // const completeData=useSelector(state=> state.firstreducer,shallowEqual)

  console.log(searchString);

  async function loadImages(searchText) {
    let url = `https://pixabay.com/api/?key=20434978-d7e9466fc3292a133634524e6&q=${searchString}&image_type=photo&page=${pageCount}`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        setLoadData(response.data.hits);
        props.setIsFetching(false);
        setResultData(response.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getPhotos(searchText) {
    const URL = `https://pixabay.com/api/?key=20434978-d7e9466fc3292a133634524e6&q=${searchString}&image_type=photo`;
    console.log("URL", URL);
    axios
      .get(URL)
      .then((response) => {
        setData(response.data.hits);
        setResultData(response.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(pageCount);
  useEffect(() => {
    console.log("get photos load more: ======> ", pageCount, props.isFetching);
    if (props.isFetching) {
      setPageCount(pageCount + 1);
      loadImages();
    }
  }, [props.isFetching]);

  useEffect(() => {
    console.log("get photos: ======> ", pageCount, props.isFetching);
      getPhotos();
  }, [searchText]);

  const clearText = () => {
    console.log("inst");
    setSearchTex("");
    dispatch({ type: "CLEAR_IMAGES" });
  };

  return (
    <>
      <Navbar bg="primary" fixed="top" variant="light">
        <Navbar.Brand href="#home">Kiran Gallery</Navbar.Brand>
        <Nav className="mx-auto navbar-center">
          <Form inline>
            <FormControl
              type="text"
              value={searchText}
              onChange={(e) => setSearchTex(e.target.value)}
              placeholder="Search for an Image"
              className="mr-sm-2"
            />
            {searchText === "" ? null : (
              <Button variant="outline-info" onClick={clearText}>
                Clear
              </Button>
            )}
          </Form>
        </Nav>
        <Nav className="ml-auto" style={{ marginRight: "5%" }}>
          <Dropdown id="dropdown-basic-button">
            <Dropdown.Toggle
              className="fa fa-bars"
              variant="secondary btn-sm"
              id="dropdown-basic"
            ></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() =>
                  dispatch({ type: "SORT_VIWES", data: resultdata })
                }
              >
                Views
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  dispatch({ type: "SORT_SIZE", data: resultdata })
                }
              >
                Image Size
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
