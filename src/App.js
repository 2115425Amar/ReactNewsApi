import { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";

import NewsList from "./Components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4"> News App</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryClick("world")}>World</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("business")}>Business</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("technology")}>Technology</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>Sports</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("entertainment")}>Entertainment</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl type="text" placeholder="Search" className="me-2" name="search"/>
              <Button variant="outline-primary" type="submit">Search</Button>
              {/* submit: Submits the current form data to the server. The form-handler,
               which is usually a server page with a script to process the input data, 
               is specified in the form's action attribute. */}
            </Form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
      {/* <Row>: This is a Bootstrap row component that is used to create a horizontal group of columns. */}
        <Row>
          <Col xs={12} md={3}>
          {/* 12 columns (full width) on extra small screens and 
          3 columns (one-fourth of the width) on medium and larger screens. */}
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleCategoryClick("world")}>World</Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("business")}> Business</Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("technology")}> Technology</Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("sports")}>Sports</Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("entertainment")}>Entertainment</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={9}>
            <NewsList category={category} searchTerm={searchTerm} />   
            {/* category and serchTerm from the use State hook */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
