import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import './Files.css'
import {
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
import { useDispatch, useSelector, connect, shallowEqual } from "react-redux";
import Navbar from "./Navbar";
import FullImage from "./FullImage";

function Files(props) {
  const [result, setResult] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const arrayOfPost = useSelector((state) => state.firstreducer, shallowEqual);

  function handleScroll() {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;
    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight){
      setIsFetching(true);
    }
    console.log("Fetch more list items!");
  }

  const handleOnClick = (singleImage) => {
    console.log("setSelectedImage", singleImage);
    setShowDetail(true);
    setSelectedImage(singleImage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const listOfImages = arrayOfPost.map((singleImage) => {
  //   return (
  //     <>
      
  //       <Col className="flex-fill"  style={{ margin: "3px 0px 2px 0px",width:"300px",height:"193px" }}>
  //         <Card key={singleImage.id}>
  //           <Card.Img
  //             onClick={() => handleOnClick(singleImage)}
  //             src={singleImage.previewURL}
  //           ></Card.Img>
  //         </Card>
  //       </Col>
  //     </>
  //   );
  // });

  // return (
  //   <>
  //     <header>
  //       <Navbar isFetching={isFetching} />
  //     </header>
  //     <main style={{ marginTop: "65px", marginBottom: "80px" }}>
  //       <Container fluid>
  //       {showDetail ? (
  //       <Row className="d-flex">
  //           <Col  >
  //           {listOfImages}
  //           </Col>
  //           <Col>
  //           <FullImage selectedImage={selectedImage} setShowDetail={setShowDetail} />
  //           </Col>
  //       </Row>
  //       ):(
  //           // <Col
  //         <Row className="d-flex">
  //           {listOfImages}
  //         </Row>
  //           ) }
  //       </Container>
  //     </main>
  //   </>
  // );

  /** TESTINGGGGGGGGGGGG */
  const listOfImages = arrayOfPost.map((singleImage) => {
    return (
        <div key={singleImage.id} className="rowFlex" >
          <img className="imgFlex" key={singleImage.id}
              onClick={() => handleOnClick(singleImage)}
              src={singleImage.previewURL} 
              style={{ margin: "3px 0px 2px 0px",height:"193px",width:"200px" }}
              />
          {/* </img> */}
        </div>
    );
  });
  
  return (
    <>
      <header>
        <Navbar isFetching={isFetching} setIsFetching={setIsFetching} />
      </header>
      <main style={{ marginTop: "65px", marginBottom: "80px" }}>
        <Container fluid>
       
           <Row>
           <Col xs={showDetail? 8 : 12} id="page-content-wrapper">
           <Row>

           {listOfImages}
           </Row>
           <Row>

           {isFetching? (<div>loading...</div>) : null}
           </Row>
           </Col>
           {showDetail ? (<Col xs={4} id="sidebar-wrapper">      
            <FullImage selectedImage={selectedImage} setShowDetail={setShowDetail} />
           </Col>) : null}
       </Row>
        </Container>
      </main>
    </>
  );
  /** TESTINGGGGGGGGGGGG */


}

// const mapStateToProps =(state)=>{
//     return{
//         firstreducer:state.firstreducer
//     }
// };

// export default connect(mapStateToProps)(Files)

export default Files;
