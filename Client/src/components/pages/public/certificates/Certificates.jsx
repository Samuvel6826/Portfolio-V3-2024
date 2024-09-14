import './Certificates.css';
import guviImg from '../../../../assets/Certificates/GUVI-Certificate.png';
import novitechMERNImg from '../../../../assets/Certificates/MERN-MasterClass.png';
import noorulImg from '../../../../assets/Certificates/Paper-Noorul-Certificate.jpeg';
import uIImg from '../../../../assets/Certificates/UI-UX-Workshop-Certificate.jpeg';
import quizImg from '../../../../assets/Certificates/Quiz-Certificate.png';

const certificateData = [
    {
        img: novitechMERNImg,
        alt: "MERN MasterClass Certificate",
        description: "MERN MasterClass Certificate",
        link: novitechMERNImg,
    },
    {
        img: uIImg,
        alt: "UI Certificate",
        description: "UI/UX Workshop Certificate",
        link: uIImg,
    },
    {
        img: noorulImg,
        alt: "Noorul Certificate",
        description: "Paper Presentation: Noorul",
        link: noorulImg,
    },
    {
        img: quizImg,
        alt: "Quiz Certificate",
        description: "Quiz Competition Certificate",
        link: quizImg,
    },
];

function Certificates() {
    return (
        <section id="certificates" className="h-full w-full bg-secondary p-4 lg:p-10">
            <div id="certificate-container" className="flex h-full w-full flex-col justify-between gap-4">
                <header id="certificate-header" className="text-center text-primary">
                    <h1 id="certificate-page-title" className="text-3xl font-bold">Certificates</h1>
                    <p id="certificate-page-desc" className="text-xl">My Achievements</p>
                </header>

                <div id="certificates-wrapper" className="flex flex-col gap-4 overflow-hidden lg:flex-row">
                    <div id="certificates-container" className="grid w-full grid-cols-2 gap-4 lg:w-1/5 lg:grid-cols-1" data-aos="fade-right">
                        {certificateData.map((certificate, index) => (
                            <div key={index} id="img-card" className="group">
                                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                    <img src={certificate.img} alt={certificate.alt} />
                                    <div className="overlay">
                                        <p>{certificate.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div id="guvi-certificate-wrapper" className="w-full lg:w-4/5" data-aos="fade-left">
                        <a
                            href="https://www.guvi.in/verify-certificate?id=E15ri2qD52L30070n4#"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="guvi-certificate"
                        >
                            <img
                                src={guviImg}
                                alt="GUVI"
                                className="h-full w-full rounded-lg object-fill shadow-2xl"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certificates;