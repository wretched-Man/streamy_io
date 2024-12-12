import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const HomePage = () => {
    const headerStyles = "absolute h-20 top-0 left-0 right-0"
    return (
        <>
            <main className="">
                <div
                    className="w-full relative flex justify-center lg:justify-start items-center px-4 sm:px-6 md:px-8 min-h-svh"
                >
                    <Header headerStyles={headerStyles} />
                    <img src="../../public/pexels-olly-3811867.jpg" alt="" className="w-full h-svh absolute top-0 left-0 right-0 object-cover -z-10" />
                    <section className="">
                        <h1 className="text-4xl mobile:text-5xl md:text-6xl text-white font-black h-fit py-4 text-center lg:text-left">
                            <span>Share your world,</span>
                            <br />
                            <span className="text-slate-300">one video at a time.</span>
                        </h1>
                        <div>
                            <p className="text-base mobile:text-lg lg:text-xl text-white w-[40ch] text-center lg:text-left mx-auto lg:mx-0">
                                Discover, share, and explore the world through videos with Streamy.io—the platform designed to bring your stories to life.
                            </p>
                        </div>
                        <div className="my-6 text-center lg:text-left">
                            <Link
                                className="border-white rounded-xl border-2 bg-none text-white hover:bg-slate-300 hover:text-black py-2 px-4"
                                to="/videos">
                                Checkout
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HomePage