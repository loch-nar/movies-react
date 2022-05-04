import {FaSearch} from "react-icons/fa";
import styles from "./Search.module.css";
// import {useEffect, useState} from "react"; 
// import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";

export function Search() {
	const [query, setQuery] = useSearchParams();
	const search = query.get("search");
	// const [searchText, setSearchText] = useState("");
	// const navigate = useNavigate();


	// useEffect(() => {
	// 	setSearchText(search || "");
	// }, [search]);


	const handleSubmit = (e) =>{
		e.preventDefault();
		// history.push("/?search=" + searchText);
	}
	return (
		<form className={styles.searchContainer} onSubmit= {handleSubmit}>
			<div className={styles.searchBox}>
				<input 
					className={styles.searchInput} 
					type="text" 
					value = {search} 
					placeholder = "Title"
					aria-label="Search Movies"
					onChange ={(e) => {
						const value = e.target.value;
						// setSearchText(value);
						setQuery({search: value});
						// navigate("/?search=" + value);
					}}
				/>
				<button className={styles.searchButton} type="submit">
					<FaSearch size={20}/>
				</button>
			</div>
		</form>
	)
}