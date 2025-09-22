import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'

export default function Home() {
    return (
        <div className='w-full h-screen items-center justify-center flex flex-col space-y-16 p-10'>
            <Image src='/images/seed-a-bit.png' alt='Seed a Bit - logo' width={500} height={175} priority loading='eager' quality={100} />
            <Button>primary button</Button>
            <Button variant={'outline'}>secondary button</Button>
            <Button variant={'link'}>link button</Button>
            <Card>Card Example</Card>
            <Input></Input>
            <div className='flex flex-col space-y-1.5 items-center justify-center text-center'>
                <h1>Psicólogos no Nordeste</h1>
            </div>
            <div>
                <Link
                    className='text-blue-400 hover:underline visited:text-purple-600 flex items-center gap-1'
                    href='https://github.com/seedabit/nextjs-react-typescript'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Template Github
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                    </svg>
                </Link>
            </div>
            <footer className='w-full absolute bottom-4 flex flex-col space-y-2 items-center'>
                <hr className='w-64' />
                <p className='text-sm'>© 2025 <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' href='https://seedabit.org.br' target='_blank' rel='noopener noreferrer'>Seed a Bit</a>. All rights reserved.</p>
            </footer>
        </div>
    )
}
