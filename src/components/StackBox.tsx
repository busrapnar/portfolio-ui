
import { FaJava, FaReact } from 'react-icons/fa'


const StackBox = () => {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='flex flex-col gap-2 items-center absolute top-0 left-20'>
      <FaJava size={72}/>
      <span>JAVA</span>
      </div>
      <div className='text-6xl absolute top-20'>❤️</div>
      <div className='flex flex-col gap-2 items-center absolute top-32 right-20'>
      <FaReact size={72}/>
      <span>REACT</span>
      </div>
    </div>
  )
}

export default StackBox
