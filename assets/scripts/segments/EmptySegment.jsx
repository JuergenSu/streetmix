import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MeasurementText from '../ui/MeasurementText'
import TILE_SIZE from '../segments/view'

class EmptySegment extends React.Component {
  static propTypes = {
    remainingWidth: PropTypes.number,
    occupiedWidth: PropTypes.number,
    units: PropTypes.number,
    position: PropTypes.string
  }

  constructor (props) {
    super(props)

    this.state = {
      width: 0
    }
  }

  componentDidUpdate (prevProps) {
    const { remainingWidth, occupiedWidth } = this.props
    if ((remainingWidth && prevProps.remainingWidth !== remainingWidth) ||
        (occupiedWidth && prevProps.occupiedWidth !== occupiedWidth)) {
      this.repositionEmptySegment()
    }
  }

  hideEmptySegment = () => {
    this.streetEmptySegment.classList.remove('visible')
  }

  showEmptySegment = (width) => {
    this.streetEmptySegment.classList.add('visible')
    if (this.props.position === 'right') {
      width--
    }
    this.streetEmptySegment.style.width = width + 'px'
  }

  repositionEmptySegment = () => {
    const { remainingWidth, occupiedWidth, position } = this.props
    let width

    if (remainingWidth <= 0) {
      this.hideEmptySegment()
    } else {
      if (!occupiedWidth) {
        width = remainingWidth * TILE_SIZE
        if (position === 'right') {
          this.hideEmptySegment()
        } else {
          this.showEmptySegment(width)
        }
      } else {
        width = remainingWidth / 2 * TILE_SIZE
        this.showEmptySegment(width)
      }
    }
  }

  render () {
    const { position } = this.props
    const id = 'street-section-' + position + '-empty-space'

    return (
      <div id={id} className="segment empty" ref={(ref) => { this.streetEmptySegment = ref }}>
        <span className="name" />
        <span className="width">
          <MeasurementText width={this.state.width} units={this.props.units} />
        </span>
        <span className="grid" />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    remainingWidth: state.street.remainingWidth,
    occupiedWidth: state.street.occupiedWidth,
    units: state.street.units
  }
}

export default connect(mapStateToProps)(EmptySegment)
