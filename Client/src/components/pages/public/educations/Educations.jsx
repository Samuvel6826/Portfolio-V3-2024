import React, { useState } from 'react';
import './Educations.css'
import { Steps } from 'antd';

const Education = () => {
    const [current, setCurrent] = useState(3);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    return (
        <section id='education' className='p-4 mx-auto bg-primary'>

            <div id="education-container" className="container flex flex-col h-full mx-auto justify-evenly">
                <h1 id="education-page-title" className='mb-3 text-2xl text-center text-tertiary'>Educations & Qualifications</h1>

                <div id="education-wrapper" className="flex h-[90%] justify-center rounded-2xl border-2 border-secondary">

                    <Steps
                        className='w-full h-full p-2'
                        onChange={onChange}
                        current={current}
                        size="default"
                        direction="vertical"
                        items={[
                            {
                                title: <span id="step-title">HSC: 2019</span>,
                                description: <span id="step-description">Christian Matriculation Higher Secondary School, Kallukkoottam (81%) – 2019</span>,
                            },
                            {
                                title: <span id="step-title">SSLC: 2021</span>,
                                description: <span id="step-description">Mother Theresa Higher Secondary School, Mayilode (85%) – 2021</span>,
                            },
                            {
                                title: <span id="step-title">Web Development: 2023</span>,
                                description: <span id="step-description">Full Stack (MERN) Web Development Program in GUVI-Chennai on March 2023 - July 2023</span>,
                            },
                            {
                                title: <span id="step-title">UG: 2023 – 2026</span>,
                                description: <span id="step-description">Pioneer Kumaraswamy College, Vetturnimadam (2023 – 2026 Batch)</span>,
                            }
                        ]}
                    />

                </div>
            </div>
        </section>
    );
}

export default Education;
