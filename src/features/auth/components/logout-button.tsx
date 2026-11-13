import { LogoutButtonProps } from '@/features/dashboard/types'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutButton = ({children}:LogoutButtonProps) => {

    const router = useRouter()
    const onLogout = async () => {
        await signOut()
        router.refresh()
    }
  return (
    <span onClick={onLogout} className='cursor-pointer'>LogoutButton</span>
  )
}

export default LogoutButton