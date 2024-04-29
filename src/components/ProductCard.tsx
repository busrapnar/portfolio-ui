import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className="flex flex-col bg-accent/15">
	<div
		className="relative flex  md:flex-row  rounded-xl shadow-lg p-3  mx-auto border border-border">
		<div className="w-1/3 h-full rounded-lg grid ">
			<img src="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="tailwind logo" className="rounded-xl w-full h-full" />
    </div>
			<div className="w-full md:w-2/3 justify-center flex flex-col space-y-2 p-3">
				
				<h3 className="font-bold md:text-3xl text-xl">Sanal Mağazalar</h3>
                <div className='flex gap-2'>
                    <span className='bg-accent px-2 py-1'>#Frontend</span>
                    <span className='bg-accent px-2 py-1'>#Backend</span>
                </div>
				<p className="md:text-lg text-gray-500 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod.</p>
				<Link to={"/#"} className='border border-indigo-500/40 rounded-sm px-4 py-2 w-32 text-center'>Görüntüle</Link>
			</div>
		</div>
	</div>
  )
}

export default ProductCard