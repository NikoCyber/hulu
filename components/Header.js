import { HomeIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, 
    UserIcon, LightningBoltIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import HeaderItems from './HeaderItems'

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between 
        items-center h-auto"> 
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title="HOME" Icon={HomeIcon}/>
                <HeaderItems title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItems title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItems title="SEARCH" Icon={SearchIcon}/>
                <HeaderItems title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image 
            src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" 
            className="object-contain" width={200} height={100}/>
        </header>
    )
}
