import "../styles/global.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({Component,ComponentProps}){
    return(
        <Component {...ComponentProps}/>
    )
}