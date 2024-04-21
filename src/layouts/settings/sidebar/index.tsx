import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div>
            <div className='flex flex-col gap-4 items-start'>
                <Link to="/settings" className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-10 focus:bg-muted hover:underline px-4'>Ayarlar</Link>
                <Link to="/settings/post" className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline px-4'>Yazılar</Link>
                <Link to="/settings/users" className='flex items-center rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline px-4'>Kullanıcılar</Link>
                
            </div>
        </div>
    )
}

export default Sidebar