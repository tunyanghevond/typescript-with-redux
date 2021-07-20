import  { useState } from "react";
import { useTypedSelectore } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions"; 


const RepositoriesList:React.FC = () => {
    const [term,setTerm] = useState('');
    const {loading,data,error} = useTypedSelectore ((state) => state.repositories)
    const {searchRepositories} = useActions();

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        searchRepositories(term)
    }

    return <div>
        <form onSubmit = {onSubmit}>
            <input type="text" value={term} onChange = {e => setTerm(e.target.value)} />
            <button>Search</button>
            <div>
            {error && <h3>{error}</h3> }
            {loading && <h3>Loading...</h3> }
            {!error && !loading && data.map(name => <div key={name}>{name}</div> ) }
            </div>
        </form>
    </div>
}
export default RepositoriesList;