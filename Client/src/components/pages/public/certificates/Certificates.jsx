import './Certificates.css';

function Certificates() {
    return (
        <section id="certificate-section" className='section-container bg-secondary'>
            <div className="certificate-container">
                <div className="certificate-details">
                    <a
                        href="https://www.guvi.in/ai-for-india/?utm_source=fntge&utm_medium=referral"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1 className="certificate-title">GUVI Geek Networks, IITM Research Park</h1>
                    </a>
                    <h4 className="certificate-description">
                        Reputed Edtech platform for Vernacular Languages. GUVI is an IIT-M & IIM-A incubated Ed-tech company
                        that focuses on providing personalized learning solutions for its learners right from online learning,
                        upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort
                        of your native language.
                    </h4>
                    <a
                        id='reference-link'
                        className='reference-link'
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.guvi.in/ai-for-india/?utm_source=fntge&utm_medium=referral"
                    >
                        Learn more about GUVI
                    </a>
                </div>
                <div className="certificate-image-container">
                    <a
                        href="https://www.guvi.in/verify-certificate?id=E15ri2qD52L30070n4#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://res.cloudinary.com/dgsucveh2/image/upload/v1703076952/Sam_s_Full_Stack_Development_Certificate_by_GUVI_ljlvbm.jpg"
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