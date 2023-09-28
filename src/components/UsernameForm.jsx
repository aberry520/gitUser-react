export const UsernameForm = ({search, handleChange, usernameInput})=>{
   
    return (
        <>
        <form>
            <input type="text" placeholder="enter username" value={usernameInput} onChange={(e) => { handleChange(e) }}/>
            <button type="button" onClick={()=>search()}>Search</button>
        </form>
            
        </>
    )
};