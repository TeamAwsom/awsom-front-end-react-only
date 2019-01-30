import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const federatedStates = [
  { id: 0, federatedState: 'AL' },
  { id: 1, federatedState: 'AK' },
  { id: 2, federatedState: 'AZ' },
  { id: 3, federatedState: 'AR' },
  { id: 4, federatedState: 'CA' },
  { id: 5, federatedState: 'CO' },
  { id: 6, federatedState: 'CT' },
  { id: 7, federatedState: 'DE' },
  { id: 8, federatedState: 'DC' },
  { id: 9, federatedState: 'FL' },
  { id: 10, federatedState: 'GA' },
  { id: 11, federatedState: 'HI' },
  { id: 12, federatedState: 'ID' },
  { id: 13, federatedState: 'IL' },
  { id: 14, federatedState: 'IN' },
  { id: 15, federatedState: 'IA' },
  { id: 16, federatedState: 'KS' },
  { id: 17, federatedState: 'KY' },
  { id: 18, federatedState: 'LA' },
  { id: 19, federatedState: 'ME' },
  { id: 20, federatedState: 'MD' },
  { id: 21, federatedState: 'MA' },
  { id: 22, federatedState: 'MI' },
  { id: 23, federatedState: 'MN' },
  { id: 24, federatedState: 'MS' },
  { id: 25, federatedState: 'MO' },
  { id: 26, federatedState: 'MT' },
  { id: 27, federatedState: 'NE' },
  { id: 28, federatedState: 'NV' },
  { id: 29, federatedState: 'NH' },
  { id: 30, federatedState: 'NJ' },
  { id: 31, federatedState: 'NM' },
  { id: 32, federatedState: 'NY' },
  { id: 33, federatedState: 'NC' },
  { id: 34, federatedState: 'ND' },
  { id: 35, federatedState: 'OH' },
  { id: 36, federatedState: 'OK' },
  { id: 37, federatedState: 'OR' },
  { id: 38, federatedState: 'PA' },
  { id: 39, federatedState: 'RI' },
  { id: 40, federatedState: 'SC' },
  { id: 41, federatedState: 'SD' },
  { id: 42, federatedState: 'TN' },
  { id: 43, federatedState: 'TX' },
  { id: 44, federatedState: 'UT' },
  { id: 45, federatedState: 'VT' },
  { id: 46, federatedState: 'VA' },
  { id: 47, federatedState: 'WA' },
  { id: 48, federatedState: 'WV' },
  { id: 49, federatedState: 'WI' },
  { id: 50, federatedState: 'WY' }
];

export default class SelectFederatedState extends Component {
  render() {
    return (
      <Fragment>
        <Field
          component="select"
          name="state"
          className="app__form_dropdownbox"
        >
          <option value="">Select</option>
          {federatedStates.map(element => (
            <option key={element.id} value={element.federatedState}>
              {element.federatedState}
            </option>
          ))}
        </Field>
        <ErrorMessage name="state">
          {msg => <div className="field-error">{msg}</div>}
        </ErrorMessage>
      </Fragment>
    );
  }
}
