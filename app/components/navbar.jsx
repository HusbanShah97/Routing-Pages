
import Link from "next/link"
export default function Navbar(){

    return (
        
        <div>
            <Link href="/about">About</Link><br />
            <Link href="/contact">Contact</Link><br />
            <Link href="/product">Product</Link><br />
            <Link href="/project">Project</Link><br />
            <Link href="/courses">Courses</Link><br />
       </div>
    )
}