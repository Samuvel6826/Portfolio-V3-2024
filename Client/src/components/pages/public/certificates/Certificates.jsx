import './Certificates.css';
import guviImg from '../../../../assets/Certificates/GUVI-Certificate.png'
import johnImg from '../../../../assets/Certificates/Paper-John-Certificate.jpeg'
import noorulImg from '../../../../assets/Certificates/Paper-Noorul-Certificate.jpeg'
import uIImg from '../../../../assets/Certificates/UI-UX-Workshop-Certificate.jpeg'
import quizImg from '../../../../assets/Certificates/Quiz-Certificate.png'

function Certificates() {
    return (
        <section id="certificates" className='h-full w-full bg-secondary p-4 lg:p-10'>
            <div id='certificate-container' className="flex h-full w-full flex-col justify-between gap-4">
                <header id='certificate-header' className='text-center text-primary'>
                    <h1 id='certificate-page-title' className='text-3xl font-bold'>Certificates</h1>
                    <p id='certificate-page-desc' className='text-xl'>My Achievements</p>
                </header>
                <div id="certificates-wrapper" className='flex flex-col gap-4'>
                    <div id="certificates-container" className='grid grid-cols-2 gap-4'>
                        <div id='img-card'>
                            <a href={uIImg} target="_blank" rel="noopener noreferrer">
                                <img src={uIImg} alt="UI Certificate" />
                            </a>
                        </div>
                        <div id='img-card'>
                            <a href={noorulImg} target="_blank" rel="noopener noreferrer">
                                <img src={noorulImg} alt="Noorul Certificate" />
                            </a>
                        </div>
                        <div id='img-card'>
                            <a href={johnImg} target="_blank" rel="noopener noreferrer">
                                <img src={johnImg} alt="John Certificate" />
                            </a>
                        </div>
                        <div id='img-card'>
                            <a href={quizImg} target="_blank" rel="noopener noreferrer">
                                <img src={quizImg} alt="Quiz Certificate" />
                            </a>
                        </div>
                    </div>

                    <a
                        href="https://www.guvi.in/verify-certificate?id=E15ri2qD52L30070n4#"
                        target="_blank"
                        rel="noopener noreferrer"
                        id='guvi-certificate'
                    >
                        <img
                            src={guviImg}
                            alt="GUVI"
                            className='h-full w-full rounded-lg shadow-2xl'
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Certificates;