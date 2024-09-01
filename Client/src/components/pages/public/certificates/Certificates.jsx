import './Certificates.css';
import certificateImg from '../../../../assets/GUVI-Certificate.png'

function Certificates() {
    return (
        <section id="certificate-section" className='section-container h-full w-full bg-secondary p-4 lg:p-8'>
            <div className="certificate-container container">
                <div className="certificate-image-container">
                    <a
                        href="https://www.guvi.in/verify-certificate?id=E15ri2qD52L30070n4#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={certificateImg}
                            alt="Certificate"
                            className="certificate-image"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Certificates;