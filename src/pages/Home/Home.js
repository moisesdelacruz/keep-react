import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

import Row from 'src/components/Atoms/Row'
import Col from 'src/components/Atoms/Col'
// import Text from 'src/components/Atoms/Text'
import Card from 'src/components/Organisms/Card'
import NoteForm from 'src/components/Organisms/NoteForm'
import * as actions from 'src/store/actions';

import styles from './HomeStyles.sass'

class Home extends Component {
  static propTypes = {
    data: PropTypes.array,
    actions: PropTypes.object.isRequired
  }

  static defaultProps = {
    data: []
  }

  componentDidMount() {}

  render() {
    return (
      <Row className={styles.container}>
        <Col style={{ flex: '1 1 0%' }}>
          <NoteForm action={this.props.actions.addNote} />
        </Col>
        <Col style={{ overflowY: 'auto', maxHeight: '400px', flex: '1 1 0%' }}>
          {
            this.props.data.reverse().map((item) => {
              return <Card key={item.id} title={item.title} description={item.description} />
            })
          }
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
