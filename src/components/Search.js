export const Search = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <div className="search">
            <label htmlFor="search">Search: </label>
            <input onChange={handleChange} id="search" type="text" />
        </div>
    );
};

export default Search;
