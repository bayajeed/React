import {useState} from 'react'
import { NoteFilterOptions } from './NoteFilterOptions';
import { NoteList } from './NoteList';

export const NoteSection = (props) => {
  const [filteredTerm, setFilteredTerm] = useState('all');
  
  const propsForNoteList = { ...props, filteredTerm, setFilteredTerm }; 
  return (
    <>
        <h3>All Task</h3>
        < NoteFilterOptions
        filteredTerm={filteredTerm}
        setFilteredTerm={setFilteredTerm}     
        />
        < NoteList
        {...propsForNoteList}
        />
    </>
  )
}
