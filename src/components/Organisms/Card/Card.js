import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Row from 'src/components/Atoms/Row'
import Icon from 'src/components/Atoms/Icon'

import styles from './CardStyles.sass'

class Card extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  componentDidMount() {}

  render() {
    const { className } = this.props

    const classNames = classnames(styles.container, {
      [className]: !!className
    })

    return (
      <Row className={classNames}>
        <h2>{ this.props.title }</h2>
        <p>{ this.props.description }</p>
        <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="button" id="edit">
            <Icon name="pencil" style={{ color: 'orange' }} />
          </button>
          <button type="button" id="delete">
            <Icon name="bin" style={{ color: 'red' }} />
          </button>
        </Row>
      </Row>
    )
  }
}

export default Card
