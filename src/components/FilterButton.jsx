function FilterButton(){
    return(
    <div className="flex justify-center items-center mt-7 text-black transition-all">   
        <button className="bg-slate-300 hover:text-white hover:bg-slate-900 px-7 py-1.5 m-2 rounded-md" type="button">Now Playing</button>
        <button className="bg-slate-300 hover:text-white hover:bg-slate-900 px-7 py-1.5 m-2 rounded-md" type="button">Popular</button>
        <button className="bg-slate-300 hover:text-white hover:bg-slate-900 px-7 py-1.5 m-2 rounded-md" type="button">Top Rated</button>
        <button className="bg-slate-300 hover:text-white hover:bg-slate-900 px-7 py-1.5 m-2 rounded-md" type="button">Upcoming</button>
    </div>
    );
}

export default FilterButton