import React, { Component } from 'react'

import Row from 'src/components/Atoms/Row'
import Col from 'src/components/Atoms/Col'
// import Text from 'src/components/Atoms/Text'
import Card from 'src/components/Organisms/Card'
import NoteForm from 'src/components/Organisms/NoteForm'

import styles from './HomeStyles.sass'

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <Row className={styles.container}>
        <Col style={{ flex: '1 1 0%' }}>
          <NoteForm />
        </Col>
        <Col style={{ overflowY: 'auto', maxHeight: '400px', flex: '1 1 0%' }}>
          <Card title="Demi Lovato" description="Lorem Ipsum" />
          <Card title="Selena Gomez" description="Lorem Ipsum" />
          <Card title="Hayley Williams" description="Lorem Ipsum" />
          <Card title="Taylor Swift" description="Lorem Ipsum" />
          <Card title="Christina Aguilera" description="Lorem Ipsum" />
          <Card title="Adele" description="Lorem Ipsum" />
          <Card title="Belinda" description="Lorem Ipsum" />
        </Col>
      </Row>
    )
  }
}

export default Home
