import '@testing-library/jest-dom/vitest'
import { server } from './mocks/node'
import { afterAll, afterEach, beforeAll } from 'vitest'

beforeAll(() => {
  server.listen()
  server.printHandlers()
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
