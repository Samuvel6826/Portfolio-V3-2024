import React, { useState } from 'react';
import './Educations.css'
import { Steps } from 'antd';

const Education = () => {
    const [current, setCurrent] = useState(4);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    return (
        <section id='education' className=' bg-secondary mx-auto p-4'>

            <div id="education-container" className="container h-full mx-auto flex flex-col justify-evenly">


                <h1 id="education-page-title" className='text-center text-2xl text-tertiary mb-3'>Educations & Qualifications</h1>


                <div id="education-wrapper" className="h-[90%] flex justify-center border-2 border-primary rounded-2xl">
                    <Steps

                        className='h-full w-full p-2'
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
