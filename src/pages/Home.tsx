import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div className="text-black bg-white dark:text-white dark:bg-black">
      <Header />
      <main>
        <section className="text-black body-font lg:pt-20">
          <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
            <div className="flex flex-col w-full mb-2 text-left md:text-center ">
              <h1 className="mb-2 text-6xl font-bold tracking-tighter text-black dark:text-white lg:text-8xl md:text-7xl">
                <span>We make </span>
                <br className="hidden lg:block"></br>
                Stunning WebApps
              </h1>
              <br></br>
              <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
                React Admin is open-source Admin Panel Boilerplate with ReactJS + Typescript & Tailwind CSS
              </p>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
            <img
              className="object-cover object-center w-full mb-10  g327 rounded-lg shadow-md"
              alt="WebApps"
              src="https://unsplash.com/photos/JKUTrJ4vK00/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkxNzQ5NzY0fA&force=true&w=1920"
            ></img>
          </div>
          <section className="text-gray-600 body-font">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 sm:w-1/3 w-1/2">
                    <h2 className="title-font font-medium sm:text-5xl text-3xl text-black dark:text-white">
                      555
                    </h2>
                    <p className="leading-relaxed">Users</p>
                  </div>
                  <div className="p-4 sm:w-1/3 w-1/2">
                    <h2 className="title-font font-medium sm:text-5xl text-3xl text-black dark:text-white">
                      760
                    </h2>
                    <p className="leading-relaxed">Subscribes</p>
                  </div>
                  <div className="p-4 sm:w-1/3 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-black dark:text-white">
                      1289
                    </h2>
                    <p className="leading-relaxed">Downloads</p>
                  </div>
                </div>
              </div>
              <div className="text-center text-black dark:text-white">
                .<br />
                .<br />
                .<br />
                .<br />
                .<br />
                .<br />
                .<br />
              </div>
              {/* New Sections Here */}
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
