const Card = (props) => {
	return (
		<div className='bg-blue-200 rounded-lg shadow-lg w-60 p-4 mb-4 transform cursor-pointer duration-300 hover:scale-105'>
			<img
				src={`https://robohash.org/${props.name}?size=200x200&set=set4`}
				alt={props.name}
			/>
			<div>
				<h2 className='text-2xl font-bold mt-2'>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	)
}

export default Card
