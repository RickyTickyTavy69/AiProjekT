type Mods = Record<string, string | boolean>
const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods).filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className)
  ].join(' ')
}

export default classNames
