import "../styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
export default function App({Component,ComponentProps}){
    return(
        <>
            <Link href={'/'}>Home</Link>
            <Component {...ComponentProps}/>
        </>
    )
}