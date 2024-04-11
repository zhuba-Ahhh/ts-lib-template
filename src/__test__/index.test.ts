import { describe, beforeEach, afterAll, test, expect, vi } from 'vitest'
import func from '@/index'

describe('index.ts test', () => {
  const { log } = console
  const { warn } = console

  beforeEach(() => {
    console.log = vi.fn()
    console.warn = vi.fn()
  })
  afterAll(() => {
    console.log = log
    console.warn = warn
  })

  test('index.ts is work', () => {
    func()

    // @ts-expect-error console is mocked
    const logs = console.log.mock.calls

    expect(logs).toEqual([
      ['Hello World!']
    ])
  })
})
