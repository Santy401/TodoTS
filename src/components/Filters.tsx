import { FILTERS_BUTTONS } from "../const"
import { type FilterValue } from '../Types'

interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
}

export const Filters = ({ filterSelected, onFilterChange }: Props) => {
  const handleClick = (filter: FilterValue) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()
    onFilterChange(filter)
  }
    return (
        <ul className="filters">
            {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                const isSelected = key === filterSelected
                const className = isSelected ? 'selected' : ''
                return (
                    <li key={key}>
                      <a 
                        href={href}
                        className={className}
                        onClick={handleClick(key as FilterValue)}
                      >{literal}</a>
                    </li>
                )
            })}
        </ul>
    )
}