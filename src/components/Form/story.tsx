import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '.';
import Readme from './README.md';

storiesOf('Uncategorized/Form', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Overview',
    () => (
      <Form
        initialValues={{ nameInput: 'james r. cat' }}
        // eslint-disable-next-line no-alert
        onSubmit={(values) => alert(JSON.stringify(values))}
        validationSchema={{
          nameInput: {
            message: 'No empty strings',
            validate: (value) => value !== '',
          },
        }}
      >
        {({ formState, values, handleChange, handleBlur, handleCustom }) => (
          <>
            <label htmlFor="nameInput">
              Name
              <br />
              <input
                type="text"
                name="nameInput"
                value={values.nameInput}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <br />

            <button
              type="button"
              onClick={handleCustom('nameInput', (name) => name.toUpperCase())}
            >
              Click to capitalize
            </button>
            <br />

            <button
              disabled={formState.validationErrors.nameInput}
              data-testid="submit-button"
              type="submit"
            >
              Submit
            </button>
          </>
        )}
      </Form>
    ),
    {
      info: {
        inline: true,
        source: true,
      },
    }
  );