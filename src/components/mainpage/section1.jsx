import TypeIt from "typeit-react";
function Section1() {
    return (
        <section id='section1'  >
            <div><h1><TypeIt options={{

                speed: 2,
                waitUntilVisible: true,
            }}>
                Selam ben Rıdvan 👋<br></br> Amatör fotoğrafçı 📷 & Web Developer 💻
                <br></br><br></br><br></br><br></br>
                📌  Gaziosmanpaşa/İstanbul
                <br></br>
                📅  {new Date().getFullYear() - 2003}
                <br></br><br></br><br></br>
                <a href="https://github.com/RidvanCalik">GitHub</a> • <a href="https://www.linkedin.com/in/rıdvan-ç-7793941b2">LinkedIn</a>



            </TypeIt></h1></div>


            <div className='profileImg' />

        </section >

    )
}
export default Section1;