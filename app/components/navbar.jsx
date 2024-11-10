
import Link from "next/link";
export default function Navbar() {

    return (


        
        
            <nav className="flex items-center justify-end w-full h-24 gap-7 pr-40 font-bold bg-blue-600" >
            <div className="ml-32 flex justify-start w-full">
                <div>
                    <h1 className="font-serif ">Husban Tech</h1>
                </div>
              </div>
            


                <Link href={"/"} className="mr-5 ">Home</Link>
                <Link href="/about">About</Link><br />
                <Link href="/contact">Contact</Link><br />
                <Link href="/product">Product</Link><br />
                <Link href="/project">Project</Link><br />
                <Link href="/courses">Courses</Link><br />
          
            
            </nav>
        
    )






}