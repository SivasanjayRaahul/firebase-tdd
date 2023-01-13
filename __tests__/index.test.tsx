import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /next\.js with firebase/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
