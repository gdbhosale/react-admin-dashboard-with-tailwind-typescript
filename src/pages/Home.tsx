function Home() {
  return (
    <>
      <section className="body-font text-black lg:pt-20">
        <div className="container mx-auto px-5 pt-32 lg:px-4 lg:py-4">
          <div className="mb-2 flex w-full flex-col text-left md:text-center ">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-black dark:text-white md:text-7xl lg:text-8xl">
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
        <div className="container mx-auto flex flex-col items-center justify-center rounded-lg p-3 py-8 md:p-1">
          <img
            className="g327 mb-10 w-full rounded-lg  object-cover object-center shadow-md"
            alt="WebApps"
            src="https://unsplash.com/photos/JKUTrJ4vK00/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkxNzQ5NzY0fA&force=true&w=1920"
          ></img>
        </div>
        <section className="body-font text-gray-600">
          <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-10">
              <div className="-m-4 flex flex-wrap text-center">
                <div className="w-1/2 p-4 sm:w-1/3">
                  <h2 className="title-font text-3xl font-medium text-black dark:text-white sm:text-5xl">555</h2>
                  <p className="leading-relaxed">Users</p>
                </div>
                <div className="w-1/2 p-4 sm:w-1/3">
                  <h2 className="title-font text-3xl font-medium text-black dark:text-white sm:text-5xl">760</h2>
                  <p className="leading-relaxed">Subscribes</p>
                </div>
                <div className="w-1/2 p-4 sm:w-1/3">
                  <h2 className="title-font text-3xl font-medium text-black dark:text-white sm:text-4xl">1289</h2>
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
    </>
  );
}

export default Home;
