// imageUrls.jsx
import netlifyLogo from '../../../../assets/logo-netlify-large-fullcolor-lightmode.png'
import reactLogo from '../../../../assets/logo_React_light.svg'
import mongodbLogo from '../../../../assets/MongoDB_Fores-Green.svg'
import mongooseLogo from '../../../../assets/Mongoose.js.svg'
import githubLogo from '../../../../assets/github-mark.svg'
import renderLogo from '../../../../assets/render-community.svg'
import postmanLogo from '../../../../assets/Postman-logo-orange-2021.svg'

const imageUrls = {
    frontend: {
        html: 'https://img.icons8.com/color/480/html-5--v1.png',
        css: 'https://img.icons8.com/color/480/css3.png',
        javascript: 'https://img.icons8.com/color/480/javascript--v1.png',
        bootstrap: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg',
        tailwind: 'https://img.icons8.com/fluency/480/tailwind_css.png',
        react: reactLogo,
    },
    backend: {
        nodejs: 'https://nodejs.org/static/logos/nodejsDark.svg',
        expressjs: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        mysql: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
        mongodb: mongodbLogo,
        mongoose: mongooseLogo,
        jwt: 'https://jwt.io/img/logo.svg',
    },
    cloudDeployment: {
        aws: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
        surge: 'https://surge.sh/images/logos/svg/surge-logo.svg',
        render: renderLogo,
        firebase: 'https://www.gstatic.com/devrel-devsite/prod/vb04bc6a770b206c5880569d039fa6eaa90ca0850e1afe1934dab7999e04ac53a/firebase/images/lockup.svg',
        netlify: netlifyLogo,
    },
    other: {
        github: githubLogo,
        git: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.svg',
        postman: postmanLogo,
        googleAnalytics: 'https://developers.google.com/static/analytics/images/terms/lockup_ic_Analytics_horiz_272px_clr.png',
        vsCode: 'https://code.visualstudio.com/assets/images/code-stable.png'
    },
};

export default imageUrls;