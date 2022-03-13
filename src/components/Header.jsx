import Carrusel from "./Carrusel";
import Categorias from "./Categorias";

const Header = () => {
    return (
        <div className="flex flex-col ">
            <div className=" flex flex-row  bg-gray-200 py-2">
                <div class="basis-1/2 text-center">Welcome to Store!</div>
                <div class="basis-1/2 text-right  ">
                    <nav className="">
                        <ul className="text-center">
                            <li className="inline-block mr-20">
                                <a className="" aria-current="page" href="#">MiCuenta</a>
                            </li>
                            <li className="inline-block mr-20">
                                <a className="" aria-current="page" href="#">Checkout</a>
                            </li>
                            <li className="inline-block mr-20">
                                <a className="" aria-current="page" href="#">Sign in</a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <div className=" flex flex-row py-12 bg-gray-100">
                <div className="basis-1/3 text-right">Welcome to Store!</div>
                <div className="basis-1/3 text-center">  Welcome to Store!</div>
                <div className="basis-1/3 text-center">Welcome to Store!</div>
            </div>
            <div className=" flex flex-row py-3 bg-gray-200">
                <div className="basis-1/3 text-center"><Categorias /></div>
                <div className="basis-1/3 text-center">
                    <nav className="
                            relative
                            w-full
                            flex flex-wrap
                            items-center
                            justify-between
                            py-4
                            bg-gray-200
                            text-gray-500
                            hover:text-gray-700
                            focus:text-gray-700
                           
                            navbar navbar-expand-lg navbar-light
                            ">
                        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                            <button className="
                                        navbar-toggler
                                        text-gray-500
                                        border-0
                                        hover:shadow-none hover:no-underline
                                        py-2
                                        px-2.5
                                        bg-transparent
                                        focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                                    className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                                    </path>
                                </svg>
                            </button>
                            <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                                <a className="text-xl text-black mr-10" href="#">HOME</a>
                                {/* <!-- Left links --> */}
                                <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                                    <li className="nav-item px-2 ">
                                        <a className="nav-link active" aria-current="page" href="#">PRODUCTOS</a>
                                    </li>
                                    <li className="nav-item pr-2 ">
                                        <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">BLOG</a>
                                    </li>
                                    <li className="nav-item pr-2 ">
                                        <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">ABOUT US</a>
                                    </li>
                                    <li className="nav-item pr-2 ">
                                        <a className="nav-link disabled text-gray-300 p-0"
                                        >CONTAC</a>
                                    </li>
                                </ul>
                                {/* <!-- Left links --> */}
                            </div>
                            {/* <!-- Collapsible wrapper --> */}
                        </div>
                    </nav>
                </div>
                <div className="basis-1/3 text-center"></div>
            </div>
            <Carrusel />
        </div>

    );
}

export default Header;

