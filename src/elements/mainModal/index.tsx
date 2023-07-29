interface MainModalProps {
  filters: string[];
  switchFilter: (index: number) => void;
  activeFilter: string;
}

const MainModal = ({ filters, switchFilter, activeFilter }: MainModalProps) => {
  return (
    <ul className='places__options places__options--custom places__options--opened'>
    {filters.map((item, index) => (
      <li 
      key={index} 
      className={`places__option ${activeFilter === filters[index] && 'places__option--active'}`} 
      onClick={() => switchFilter(index)} 
      tabIndex={undefined}
    >{item}</li>
    ))}
  </ul>
  )
}

export default MainModal