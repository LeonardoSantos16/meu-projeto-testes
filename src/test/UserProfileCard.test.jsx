import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import axios from 'axios'
import UserProfileCard from '../components/UserProfileCard'
describe('UserProfileCard', () => {
  test('should display loading message initially', () => {
    render(<UserProfileCard userId={1} />)
    expect(screen.getByText(/carregando perfil.../i)).toBeInTheDocument()
  })
})
