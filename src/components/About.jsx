import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    display: 'flex',
  },
  img: {
    height: 'auto',
    width: 'auto',
    resize: 'scale',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);
  // const [width, setWidth] = useState('50vw');
  // const [imgReset, setImgReset] = useState(styles.img);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    // if (window?.innerWidth < 576) {
    //   setWidth('50vw');
    //   setImgReset({
    //     height: 'auto',
    //     width: 'auto',

    //   })
    // } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
    //   setWidth('90vw');
    // } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
    //   setWidth('75vw');
    // } else {
    //   setWidth('50vw');
    // }
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row className="flex-column-reverse flex-md-row">
                  <Col style={styles.introTextContainer} responsive>
                    {parseIntro(data.about)}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <Image src={data?.imageSource} thumbnail responsive style={styles.img} alt="profile" />
                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
