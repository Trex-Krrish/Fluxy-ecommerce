import React from 'react'
import Link from 'next/link'
export const HeroDropdown = () => {
    return (
        <div className="flex justify-center items-center gap-4 px-4">
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn px-4 py-2 ">Mobiles</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-neutral text-neutral-content hover:text-base-100 rounded-box w-52">
                    <li><Link href={'#'}>Mobiles</Link></li>
                    <li><Link href={'#'}>Fasion</Link></li>
                    <li><Link href={'#'}>Electronics</Link></li>
                    <li><Link href={'#'}>Furniture</Link></li>
                    <li><Link href={'#'}>Beauty & Toys</Link></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn px-4 py-2 ">Fashion</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-neutral text-neutral-content hover:text-base-100 rounded-box w-52">
                    <li><Link href={'#'}>Mobiles</Link></li>
                    <li><Link href={'#'}>Fasion</Link></li>
                    <li><Link href={'#'}>Electronics</Link></li>
                    <li><Link href={'#'}>Furniture</Link></li>
                    <li><Link href={'#'}>Beauty & Toys</Link></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn px-4 py-2 ">Electronics</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-neutral text-neutral-content hover:text-base-100 rounded-box w-52">
                    <li><Link href={'#'}>Mobiles</Link></li>
                    <li><Link href={'#'}>Fasion</Link></li>
                    <li><Link href={'#'}>Furniture</Link></li>
                    <li><Link href={'#'}>Beauty & Toys</Link></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn px-4 py-2 ">Furniture</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-neutral text-neutral-content hover:text-base-100 rounded-box w-52">
                    <li><Link href={'#'}>Mobiles</Link></li>
                    <li><Link href={'#'}>Fasion</Link></li>
                    <li><Link href={'#'}>Electronics</Link></li>
                    <li><Link href={'#'}>Beauty & Toys</Link></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn px-4 py-2 ">Beauty & Toys</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-neutral text-neutral-content hover:text-base-100 rounded-box w-52">
                    <li><Link href={'#'}>Mobiles</Link></li>
                    <li><Link href={'#'}>Fasion</Link></li>
                    <li><Link href={'#'}>Electronics</Link></li>
                    <li><Link href={'#'}>Furniture</Link></li>
                </ul>
            </div>
        </div>
    )
}