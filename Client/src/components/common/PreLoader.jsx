// PreLoader.jsx
import './PreLoader.css';

const PreLoader = () => {
    return <div id='preloader'>
        <div className='preloaderBody'>
            <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div className='preloaderBase'>
                <span></span>
                <div className='preloaderFace'></div>
            </div>
        </div>
        <div className='preloaderLongfazers'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h1 className='preloaderH1'>LOADING...</h1>

    </div>
};

export default PreLoader;