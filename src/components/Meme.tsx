import { ChangeEvent, useEffect, useState } from 'react'
import styles from '../global.module.css'

interface IMeme {
	topText: string
	bottomText: string
	randomImage: string
}

interface IMemeApiResponse {
	data: {
		memes: { url: string }[]
	}
}

const Meme = () => {
	const [meme, setMeme] = useState<IMeme>({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg'
	})

	const [allMemes, setAllMemes] = useState<{ url: string }[]>([])

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then(res => res.json())
			.then((res: IMemeApiResponse) => setAllMemes(res.data.memes))
	}, [])

	const getMemeImage = () => {
		const index = Math.floor(Math.random() * allMemes.length)
		const url = allMemes[index].url
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}))
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value
		}))
	}

	return (
		<main className='mt-7 mb-[47px] px-9'>
			<form className='grid gap-[17px] grid-rows-2 grid-cols-2'>
				<input
					type='text'
					placeholder='Shut up'
					className={styles.input}
					name='topText'
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='And take my money'
					className={styles.input}
					name='bottomText'
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button
					className='col-start-1 col-end-[-1] rounded-[5px] bg-[linear-gradient(90deg,#711F8D_1.14%,#A818DA_100%)] text-white h-10'
					onClick={getMemeImage}
					type='button'
				>
					Get a new meme image 🖼
				</button>
			</form>
			<div className='relative'>
				<img
					src={meme.randomImage}
					alt=''
					className='mt-2 rounded-sm w-[477px] {meme.topText}h-[268px] max-h-[300px]'
				/>
				<h2 className={`top-0 ${styles.shadow} ${styles.meme_text}`}>
					{meme.topText}
				</h2>
				<h2 className={`bottom-0 ${styles.shadow} ${styles.meme_text}`}>
					{meme.bottomText}
				</h2>
			</div>
		</main>
	)
}

export default Meme
