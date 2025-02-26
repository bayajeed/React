/* eslint-disable react/prop-types */

export const NoteFilterOptions = (props) => {
  const {filteredTerm, setFilteredTerm} = props;
  return (
    <>
        <select name="" id="" value={filteredTerm} onChange={(e)=> setFilteredTerm(e.target.value)}>
            <option value="all">All Item</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </>
  )
}
