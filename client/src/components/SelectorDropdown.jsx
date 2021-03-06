import {
  styleMain, styleDropdownBg, styleDropdownText, styleDropdownSelect, styleCategory}
  from '../styles/SelectorDropdown.css';

const React = require('react');


const SelectorDropdown = ({ images, cb }) => (
  <div className={styleMain}>
    {images ? (
      <div>
        { /* category name */ }
        {<span className={styleCategory}>Size:</span>}

        {/* if there is more than one option, render dropdown. otherwise render empty string */}

        <div className={styleDropdownBg}>
          <span className={styleDropdownText}>
            Select
          </span>
          <select className={styleDropdownSelect} onChange={cb}>
            { /* first default option is the text "Select" */ }
            <option>Select</option>
            { /* each option in the dropdown */ }
            {Object.entries(images).map(x => <option value={x[0]} key={x}>{ x[0] }</option>)}
          </select>
        </div>
      </div>
    )
      : ''
    }
  </div>
);

export default SelectorDropdown;
