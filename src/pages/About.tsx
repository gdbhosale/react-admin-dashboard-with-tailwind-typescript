import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div className="text-black bg-white dark:text-white dark:bg-black min-h-screen">
      <Header />
      <main>
        <section className="text-black body-font lg:pt-20">
          <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
            <div className="flex flex-col w-full mb-2 text-left md:text-center ">
              <h1 className="mb-2 text-6xl font-bold tracking-tighter text-black dark:text-white lg:text-8xl md:text-7xl">
                <span>About Us</span>
              </h1>
              <br></br>
              <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
                React Admin is open-source Admin Panel Boilerplate with ReactJS + Typescript & Tailwind CSS
              </p>
              <div className="text-center text-black dark:text-white">
                .<br />
                .<br />
                .<br />
                .<br />
                .<br />
                .<br />
                .<br />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
