import React from "react";
import './AdminHero.css'

const AdminHero = () => {

    return <section id='hero' className='mx-auto flex bg-primary p-4 text-white'>

        <div id='admin-hero-container' className='container mx-auto flex w-full flex-col gap-3'>

            <header id='admin-hero-header' className='w-full text-center text-secondary'>
                <h1 id='admin-hero-page-title'>Admin Hero</h1>
            </header>

            <main id="main-wrapper" className="flex justify-between">

                <div id="content-container" className="w-1/2 p-4">

                    <form className="form-example flex flex-col gap-6">
                        <div id="text-wrapper" className="flex flex-col gap-3">
                            <h2>Hero Descriptions</h2>
                            <div>
                                <label htmlFor="caption">Caption: </label>
                                <input type="text" name="caption" id="caption" />
                            </div>

                            <div>
                                <label htmlFor="description">description: </label>
                                <textarea name="description" id="description" cols="20" rows="1"></textarea>
                            </div>
                        </div>

                        <div id="social-links-wrapper" className="flex flex-col gap-3">
                            <h2>Social Links</h2>
                            <div>
                                <label htmlFor="whatsapp">Whatsapp: </label>
                                <input type="url" name="whatsapp" id="whatsapp" />
                            </div>
                            <div>
                                <label htmlFor="teleCall">TeleCall: </label>
                                <input type="url" name="teleCall" id="teleCall" />
                            </div>
                            <div>
                                <label htmlFor="mail">Mail: </label>
                                <input type="url" name="mail" id="mail" />
                            </div>
                            <div>
                                <label htmlFor="instagram">Instagram: </label>
                                <input type="url" name="instagram" id="instagram" />
                            </div>
                            <div>
                                <label htmlFor="facebook">Whatsapp: </label>
                                <input type="url" name="facebook" id="facebook" />
                            </div>
                            <div>
                                <label htmlFor="x">X: </label>
                                <input type="url" name="x" id="x" />
                            </div>
                            <div>
                                <label htmlFor="linkedin">Linkedin: </label>
                                <input type="url" name="linkedin" id="linkedin" />
                            </div>
                            <div>
                                <label htmlFor="github">Github: </label>
                                <input type="url" name="github" id="github" />
                            </div>
                            <div>
                                <label htmlFor="discord">Discord: </label>
                                <input type="url" name="discord" id="discord" />
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>

                </div>

                <div id="dp-container" className="flex w-1/2 flex-col gap-3 p-4">
                    <h2>Profile Pic</h2>
                    <img src="" alt="Profile Pic" />
                    <div>
                        <label htmlFor="profileURL">Profile Pic URL: </label>
                        <input type="url" name="profileURL" id="profileURL" />
                    </div>
                    <button type="submit">Submit</button>
                </div>

            </main>
        </div>

    </section>
};

export default AdminHero;