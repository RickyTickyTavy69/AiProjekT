import classNames from "src/shared/lib/classNames/classNames.ts";
describe('test classnames', () => {
  it('should return the class from params', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  it('should add additional classes', () => {
    expect(classNames('someClass', {}, ['additionalClass'])).toBe('someClass additionalClass')
  })

  it('should add classes from mods', () => {
    expect(classNames('someClass', { modClass: true })).toBe('someClass modClass')
  })

  it('should not add classes from mods if value is false', () => {
    expect(classNames('someClass', { modClass: false })).toBe('someClass')
  })
})
