import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div>
            <div className='flex flex-col gap-4 items-start'>
                <Link to="/settings" className='rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline'>Profile</Link>
                <Link to="/settings/account" className='rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline'>Account</Link>
                <Link to="/settings/notifications" className='rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline'>Notifications</Link>
                <Link to="/settings/apperance" className='rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline'>Appearance</Link>
                <Link to="/settings/display" className='rounded-md font-medium transition-colors hover:text-accent-foreground h-9 focus:bg-muted hover:underline'>Display</Link>
            </div>
        </div>
    )
}

export default Sidebar