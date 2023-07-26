import putTitle from '../title'

describe('App Title', () => {
  test('should show "To do List"', () => {
    expect(putTitle("To do List")).toBe(console.log("To do List"))
  })
  test('shold show ""(nothing)', () => {
    expect(putTitle("")).toBe(console.log(""))
  })
})
