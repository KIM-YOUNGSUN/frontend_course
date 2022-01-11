// ProductLi.js

import React from 'react'

export default function ProductLi({data}) {
  const pr = data;
  return (
    <li>
      <dl>
        <dt>{pr.product}</dt>
        <dd>{pr.narr}</dd>
      </dl>
    </li>
  )
}
