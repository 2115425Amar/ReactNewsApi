import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import useNewsData from "../hooks/useNewsData";  //for the api data from useState hooks
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {    
  const { category, searchTerm } = props;
  // destructuring assignment to extract specific properties from the props object.
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;  //no of div boxes on one page

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);
  const { newsData, loading, error } = useNewsData(category, searchTerm);   //from NewsList.js

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  // for the pagination------------->

  //const totalArticles = newsData.length;
  const totalArticles = Array.isArray(newsData) ? newsData.length : 0;
  const totalPages = Math.ceil(totalArticles / pageSize);    //total page recquirement
  // let total article =100 no of news per page=4 
  // total page recquirement =100/4=5
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  //const currentArticles = newsData.slice(startIndex, endIndex);
  const currentArticles = Array.isArray(newsData) ? newsData.slice(startIndex, endIndex) : [];

  return (
    <Container>
    {/* horizontal layout. Each child component (in this case, a column containing a card) 
    will be placed within this row. */}
      <Row>
      {/* map function to iterate over an array called currentArticles */}
        {currentArticles?.map((article) => ( 
          <Col xs={12} md={6} lg={4} key={article.url}>
            <Card>
              <Card.Img src={article.image} variant="top" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url}>Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
    </Container>
  );
};

export default NewsList;