import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Skeleton } from '../index'

test('Renders', async () => {
  const { getByRole } = render(<Skeleton />)
  expect(getByRole('heading')).toHaveTextContent('library-skeleton')
})
