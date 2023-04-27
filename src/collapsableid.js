import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse'
import NestedGrid from './tablegrid'

export default function CollapseId() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <h2
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          LS013B3SY02
        </h2>
        <Collapse in={open}>
          <div id="example-collapse-text">
           <NestedGrid/>
          </div>
        </Collapse>
      </>
    );
  }