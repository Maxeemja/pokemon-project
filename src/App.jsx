import { useState, useEffect } from 'react';
import PokeList from './components/PokeList';
import axios from 'axios';
import Spinner from './components/Spinner';
import Pagination from './components/Pagination';

function App() {
	const [pokemon, setPokemon] = useState([]);
	const offset = Math.floor(Math.random() * 1100);
	const [currentPageUrl, setCurrentPageUrl] = useState(
		`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
	);
	const [nextPageUrl, setNextPageUrl] = useState();
	const [prevPageUrl, setPrevPageUrl] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		let cancel;
		axios
			.get(currentPageUrl, {
				cancelToken: new axios.CancelToken((c) => (cancel = c))
			})
			.then((res) => {
				setNextPageUrl(res.data.next);
				setPrevPageUrl(res.data.previous);
				setPokemon(res.data.results.map((p) => ({ name: p.name, url: p.url })));
				setLoading(false);
			});

		return () => cancel();
	}, [currentPageUrl]);

	function gotoNextPage() {
		setCurrentPageUrl(nextPageUrl);
	}
	function gotoPrevPage() {
		setCurrentPageUrl(prevPageUrl);
	}

	return (
		<div className=''>
			<div className='container w-5/6 mx-auto p-4'>
				<div className='text-center mx-auto my-4 text-[22px]'>Amazing PokemonApp by MXMJ</div>
				{loading ? <Spinner /> : <PokeList pokemon={pokemon} />}
				<Pagination
					gotoNextPage={nextPageUrl ? gotoNextPage : null}
					gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
				/>
			</div>
		</div>
	);
}

export default App;
