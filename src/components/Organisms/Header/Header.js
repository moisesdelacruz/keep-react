import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Row from 'src/components/Atoms/Row'
import Col from 'src/components/Atoms/Col'
import Search from 'src/components/Organisms/SearchForm'
import Icon from 'src/components/Atoms/Icon'

import styles from './HeaderStyles.sass'

const Header = ({ className, ...rest }) => {
  const classNames = classnames({
    [styles.container]: true,
    [className]: !!className
  })

  return (
    <header className={classNames} {...rest} style={{ height: '70px' }}>
      <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Row style={{ display: 'flex', alignItems: 'center', flex: 'initial' }}>
          <Col spacing={{ left: 20, right: 20 }}>
            <Icon name="menu" theme="medium" />
          </Col>
          <p>Keep</p>
        </Row>
        <Search />
        <a href="https://github.com/moisesdelacruz/keep-react" style={{ display: 'flex', alignItems: 'center' }}>
          <p>Github</p>
          <Col spacing={{ left: 10, right: 20 }}>
            <Icon name="github" theme="medium" style={{ color: 'black' }} />
          </Col>
        </a>
      </Row>
    </header>
  )
}

Header.defaultProps = {
  className: ''
}

Header.propTypes = {
  className: PropTypes.string,
}

export default Header
