import './Certificates.css';
import guviImg from '../../../../assets/Certificates/GUVI-Certificate.png';
import johnImg from '../../../../assets/Certificates/Paper-John-Certificate.jpeg';
import noorulImg from '../../../../assets/Certificates/Paper-Noorul-Certificate.jpeg';
import uIImg from '../../../../assets/Certificates/UI-UX-Workshop-Certificate.jpeg';
import quizImg from '../../../../assets/Certificates/Quiz-Certificate.png';

function Certificates() {
    return (
        <section id="certificates" className='h-full w-full bg-secondary p-4 lg:p-10'>
            <div id='certificate-container' className="flex h-full w-full flex-col justify-between gap-4">
                <header id='certificate-header' className='text-center text-primary'>
                    <h1 id='certificate-page-title' className='text-3xl font-bold'>Certificates</h1>
                    <p id='certificate-page-desc' className='text-xl'>My Achievements</p>
                </header>

                <div id="certificates-wrapper" className='flex flex-col gap-4 lg:flex-row'>
                    <div id="certificates-container" className='grid w-full grid-cols-2 gap-4 lg:w-1/5 lg:grid-cols-1'>
                        <div id='img-card' className="group">
                            <a href={uIImg} target="_blank" rel="noopener noreferrer">
                                <img src={uIImg} alt="UI Certificate" />
                                <div className="overlay">
                                    <p>UI/UX Workshop Certificate</p>
                                </div>
                            </a>
                        </div>
                        <div id='img-card' className="group">
                            <a href={noorulImg} target="_blank" rel="noopener noreferrer">
                                <img src={noorulImg} alt="Noorul Certificate" />
                                <div className="overlay">
                                    <p>Paper Presentation: Noorul</p>
                                </div>
                            </a>
                        </div>
                        <div id='img-card' className="group">
                            <a href={johnImg} target="_blank" rel="noopener noreferrer">
                                <img src={johnImg} alt="John Certificate" />
                                <div className="overlay">
                                    <p>Paper Presentation: John</p>
                                </div>
                            </a>
                        </div>
                        <div id='img-card' className="group">
                            <a href={quizImg} target="_blank" rel="noopener noreferrer">
                                <img src={quizImg} alt="Quiz Certificate" />
                                <div className="overlay">
                                    <p>Quiz Competition Certificate</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div id='guvi-certificate-wrapper' className='w-full lg:w-4/5'>
                        <a
                            href="https://www.guvi.in/verify-certificate?id=E15ri2qD52L30070n4#"
                            target="_blank"
                            rel="noopener noreferrer"
                            id='guvi-certificate'
                        >
                            <img
                                src={guviImg}
                                alt="GUVI"
                                className='h-full w-full rounded-lg object-fill shadow-2xl'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certificates;