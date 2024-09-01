import React, { useState } from 'react';
import './Education.css';
import { Steps } from 'antd';
import { educationData } from './EducationData';

const Education = () => {
    const [current, setCurrent] = useState(educationData.length - 1);
    const onChange = (value) => {
        setCurrent(value);
    };

    return (
        <section id="education" className="h-full w-full bg-primary p-4 lg:p-10">
            <div id="education-container" className="flex h-full w-full flex-col justify-between gap-4">

                <header id='education-header' className='text-center text-tertiary'>
                    <h1 id='education-page-title' className='text-3xl font-bold'>Education</h1>
                    <p id='education-page-desc' className='text-xl'>My Qualifications</p>
                </header>

                <div id="education-wrapper" className="flex h-[90%] justify-center rounded-2xl border-2 border-secondary">
                    <Steps
                        className="h-full w-full p-2"
                        onChange={onChange}
                        current={current}
                        size="default"
                        direction="vertical"
                        items={educationData.map((item) => ({
                            title: <span id="step-title">{item.title}</span>,
                            description: (
                                <ul id="step-description">
                                    {item.details.map((detail, index) => (
                                        <li key={index}>
                                            {detail.link ? (
                                                <a href={detail.link} target="_blank" rel="noopener noreferrer">
                                                    {detail.text}
                                                </a>
                                            ) : (
                                                detail.text
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ),
                        }))}
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;