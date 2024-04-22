function Header() {
	return ( 
		<div className="bg-[rgb(255,247,226)] flex items-center  px-4 py-6 sm:h-[60px]">
			<button className="sm:hidden" id='top'>
				<img src='/images/hamburger.png' alt='Hamburger' />
			</button>
			<a href="top" className='mx-auto sm:hidden'>
				<img src='/images/amrutam.png'  alt='Amrutam' />
			</a>
		</div>
		
	);
}

export default Header;