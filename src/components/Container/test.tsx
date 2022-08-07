import { render, screen } from 'utils/test-utils'

import Container from '.'

describe('<Container/ >', () => {
  it('should render with children', () => {
    render(
      <Container>
        <div data-testid="Mock Element" />
      </Container>
    )

    expect(screen.getByTestId('Mock Element')).toBeInTheDocument()
  })
})
