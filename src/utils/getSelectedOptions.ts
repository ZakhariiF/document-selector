import { IFilterItem } from "types"

export function getSelectedOptions(options: IFilterItem[]) {
  return options.reduce<string[]>(
    (accumulator, filter) => accumulator.concat(filter.selectedOptions),
    []
  )
}
