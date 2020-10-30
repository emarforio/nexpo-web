import React from 'react';

import Option from './option';

export default function({ field }) {
  switch (field.type) {
    case 'OPTION':
      return <Option field={field} />;

    default:
      return <div />;
  }
}
