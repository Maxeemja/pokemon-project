import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
const Pokemon = ({ pok }) => {
	const [pokemon, setPokemon] = useState({});
	const [loading, setLoading] = useState(true);
	const name = pok.name.charAt(0).toUpperCase() + pok.name.slice(1);
  const colors = ['violet', 'gray', 'blueviolet', 'pink','blue', 'green', 'rose']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  
	useEffect(() => {
		axios.get(pok.url).then(({ data }) => {
			setPokemon({
				img: data.sprites.other['official-artwork'].front_default,
				types: data.types.map((t) => t.type.name),
        exp: data.base_experience
			});
			setLoading(false);
		});
	}, []);

	if (loading) return <Spinner />;
	return (
		<div className='p-3 justify-center items-center border-2 rounded border-violet-700'>
			<div className=''>
				Name: <span style={{'color': `${randomColor}`}}>{name}</span>
			</div>
			<img src={pokemon.img} alt='' />
			<div className='space-x-4'>
				Types:
				<span className='ml-3 font-bold'>{pokemon.types.join(', ')}</span>
			</div>
      <div className="">
        Exp: {pokemon.exp}
      </div>
		</div>
	);
};

export default Pokemon;
