import { FaGithub, FaGoogle } from 'react-icons/fa6'

type Props = {}

const Popup = (props: Props) => {
  return (
    <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white opacity-1 shadow-lg p-6 rounded-lg z-20">
        <div className="p-12">
            <div className="flex flex-col p-6 space-y-1">
                <h3 className="font-semibold tracking-tight text-4xl">Create an account</h3>
                <p className="text-lg text-[#71717a]">Select the account login method</p>
            </div>

            <div className="p-6 pt-0 grid gap-4">
                <div className="flex items-center justify-center">
                    <button
                    onClick={() => {
                        // Handle Google authentication
                    }}
                        className="flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-base font-medium w-full border h-10 px-4 py-6">
                            <FaGoogle className='w-6 h-6'/>
                        Google
                    </button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
                    <div className="relative flex justify-center text-xs uppercase"><span
                            className="bg-white px-2 opacity-70">Or continue with</span>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                    onClick={() => {
                        // Handle GitHub authentication
                    }}
                        className="flex gap-2 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-base font-medium w-full border h-10 px-4 py-6">
                            <FaGithub className='w-6 h-6'/>
                            <span>Github</span>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Popup