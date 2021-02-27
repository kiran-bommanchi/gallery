import React from 'react'
import Container from "react-bootstrap/Container";
import {
  Row,
  Col,
  Card,
} from "react-bootstrap";

function FullImage(props) {
    console.log("singleImage",props.selectedImage)
    console.log("setShowDetail",props.setShowDetail);

    // const hideDetail = () => {
    //     props.setShowDetail(false);
    // }

    const singleImage = props.selectedImage;

    return (
        <>
    <Container style={{textTransform:"capitalize"}}>
    <Card  bg="dark" text="white" style={{ width: "30rem", height: "100vh" }}>
  <Card.Img variant="top" src={singleImage.webformatURL} style={{height:"50%"}}/>
  <Card.Body>
    <Card.Title><Row>
    <Col onClick={()=>props.setShowDetail(false)} style={{color:"red" }}>Close X</Col></Row></Card.Title>
    <Row className="mt-2">
        <Col>Likes: {singleImage.likes}</Col>
        <Col>views: {singleImage.views}</Col>
    </Row>
    <Row className="mt-2" >
        <Col>downloads :{singleImage.downloads}</Col>
        <Col>Favourites:{singleImage.favorites}</Col>
    </Row>
    <Row className="mt-2">
        <Col>userid: {singleImage.user_id}</Col>
        </Row>
    <Row className="mt-2">
        <Col>user: {singleImage.user}</Col>
        </Row>
    <Row className="mt-2">
        <Col>Image id:{singleImage.id}</Col>
    </Row>
    <Row className="mt-2">
        <Col>type:{singleImage.type}</Col>
        <Col>tags:{singleImage.tags}</Col>
        </Row>
    <Row className="mt-2">
        <Col>downloads:{singleImage.downloads}</Col>
    </Row>
    <Row className="mt-2">
        <Col><a href={singleImage.pageURL} target="_blank"> PageUrl</a></Col>
        <Col><a href={singleImage.largeImageURL} target="_blank"> large Image Url</a></Col>
        </Row>
    <Row className="mt-2">    
        <Col><a href={singleImage.previewURL} target="_blank"> Preview </a></Col>
        <Col><a href={singleImage.webformatURL} target="_blank"> webformatURL </a></Col>
    </Row>
  </Card.Body>
</Card>


    </Container>
            
        </>
    )
}

export default FullImage
