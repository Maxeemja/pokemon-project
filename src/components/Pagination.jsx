const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
	return (
		<div className="my-4 flex justify-center gap-5 w-full">
			{gotoPrevPage && <button className="border-2 rounded border-violet-600 p-2" onClick={gotoPrevPage}>Prev</button>}
			{gotoNextPage && <button className="border-2 rounded border-violet-600 p-2" onClick={gotoNextPage}>Next</button>}
		</div>
	);
};

export default Pagination;
