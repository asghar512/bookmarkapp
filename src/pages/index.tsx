import React,{useEffect,useState} from "react"
import LinkList from '../components/LinkList';
import LinkForm from '../components/LinkForm';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Container,Row,Col} from 'react-bootstrap';

const IndexPage = () => {
    const [links, setLinks] = useState([]);
    const loadLinks = async () => {
        try {
            const res = await fetch('/.netlify/functions/getLinks');
            const links = await res.json();
            setLinks(links);
            console.log(links)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadLinks();
    }, []);
    
  return (
      <div>
    <div className="py-5 landing">
    <Container>
    <Row>
      <Col sm={8}>
      <h3 className="text">Add your bookmark site </h3>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3 className="text1">Muhammad Asghar</h3>
      </Col>
      <Col sm={4}>
      <LinkForm refreshLinks={loadLinks} />
      </Col>
    </Row>
  </Container>
  </div>
  <div className="linkslist">
      <Container className="container-sm">
  <LinkList links={links} refreshLinks={loadLinks} />
  </Container>
  </div>
  </div>
  )
}

export default IndexPage
