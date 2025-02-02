import React from 'react'
import FormGroup from '../../deprecated/FormGroup'
import {behavesAsComponent, checkExports} from '../../utils/testing'
import {render as HTMLRender} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('FormGroup', () => {
  behavesAsComponent({Component: FormGroup})

  checkExports('deprecated/FormGroup', {
    default: FormGroup,
  })

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(
      <FormGroup>
        <FormGroup.Label htmlFor="example-text">Example text</FormGroup.Label>
        <input id="example-text" value="Example Value" readOnly />
      </FormGroup>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('FormGroup.Label', () => {
  behavesAsComponent({Component: FormGroup.Label})

  it('should have no axe violations', async () => {
    const {container} = HTMLRender(<FormGroup.Label htmlFor="example-text">Example text</FormGroup.Label>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
