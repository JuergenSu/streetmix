/**
 * MiscHTMLStuff.jsx
 *
 * Temporary: Renders all the non-React HTML.
 *
 * @module MiscHTMLStuff
 */
import React from 'react'

class MiscHTMLStuff extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <section id="street-section-outer">
          <section id="street-section-inner">
            <section id="street-section-canvas">
              <section id="street-section-left-building" className="street-section-building">
                <div className="hover-bk" />
              </section>
              <section id="street-section-right-building" className="street-section-building">
                <div className="hover-bk" />
              </section>
              <div id="street-section-editable" />
              <div id="street-section-left-empty-space" className="segment empty" />
              <div id="street-section-right-empty-space" className="segment empty" />
              <section id="street-section-dirt" />
            </section>
          </section>
        </section>
        <section id="street-section-sky">
          <div className="rear-clouds" />
          <div className="front-clouds" />
        </section>
        <div id="street-scroll-indicator-left" />
        <div id="street-scroll-indicator-right" />
      </React.Fragment>
    )
  }
}

export default MiscHTMLStuff
