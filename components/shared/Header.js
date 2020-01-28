import Link from "next/link";



const Header = (props) =>{
    return(
        <React.Fragment>
            {props.children}
            <Link href="/">
                <a>Home </a>
            </Link>
            <Link href="/about">
                <a>about </a>
            </Link>
            <Link href="/cv">
                <a>cv </a>
            </Link>
            <Link href="/blogs">
                <a>blogs </a>
            </Link>
            <Link href="/portfolios">
                <a>portfolios </a>
            </Link>
        </React.Fragment>
    )
}

export default Header;