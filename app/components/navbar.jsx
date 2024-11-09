
import Link from "next/link";
export default function Navbar(){

    return (
        
                   
        <div>
        <div className="flex items-center justify-end w-full h-24 gap-5 mr-10 font-bold bg-blue-600" >
                <div>
           <h1 className="">Husban Tech</h1>
                </div>           
            <Link href={"/"} className="mr-5 border-black">Home</Link>
            <Link href="/about">About</Link><br />
            <Link href="/contact">Contact</Link><br />
            <Link href="/product">Product</Link><br />
            <Link href="/project">Project</Link><br />
            <Link href="/courses">Courses</Link><br />
            
       </div>
        </div>
    )





   
}