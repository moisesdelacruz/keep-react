import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import uuidv1 from 'uuid/v1'

import Row from 'src/components/Atoms/Row'
import Icon from 'src/components/Atoms/Icon'

import styles from './NoteFormStyles.sass'


class NoteForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    action: PropTypes.func.isRequired
  }

  static defaultProps = {
    className: ''
  }

  addNewNote = () => {
    const data = {
      id: uuidv1(),
      title: 'Test',
      description: 'Lorem Ipsum'
    }
    this.props.action(data)
  }

  render() {
    const { className } = this.props
    const classNames = classnames(styles.container, {
      [className]: !!className
    })

    return (
      <Row className={classNames}>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="description" rows="4" placeholder="Description..." />
        <button type="button" onClick={this.addNewNote}>
          <Icon name="plus" style={{ paddingLeft: '7px', paddingRight: '7px', color: 'green' }} />
          Create
        </button>
      </Row>
    )
  }
}

export default NoteForm
