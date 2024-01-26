const Navigation = () => {
	return (
		<nav className='bg-[linear-gradient(90deg,#672280_1.18%,#A626D3_100%)] text-white flex justify-between items-center px-[29px] py-[26px] w-full'>
			<div className='flex gap-[7px]'>
				<img
					src='../public/images/Troll.svg'
					alt='Troll Face'
					className='w-9'
				/>
				<h1 className='text-[21px] font-bold tracking-[-2.075px]'>
					Meme Generator
				</h1>
			</div>
			<span>React Course - Project 3</span>
		</nav>
	)
}

export default Navigation
