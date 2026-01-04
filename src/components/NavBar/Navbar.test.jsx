import React from 'react'
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import NavBar from './Navbar'

// mock image import
vi.mock('../../assets/home.png', () => ({
  default: 'home.png',
}))

describe('NavBar', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    expect(container.firstChild).not.toBeNull()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
