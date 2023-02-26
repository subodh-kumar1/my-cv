const cvData  = {
    myDetails: {
        name: "Subodh Kumar",
        intro:[
            'Associate Consultant at Globallogic!!',
            'Frontend Developer by profession!!',
            'Problem Solver by Passion!!'
        ],
        contact: {
            call: 8076561176
        },
        socialHandles:{
            linkedin: "https://www.linkedin.com/in/subodh-kr/",
            whatsapp:"https://wa.me/919449210852",
            github:"https://github.com/subodh-kumar1",
            mail:"mailto:subodh.subodhkumar1@gmail.com"
        }
    }
};

const iconClasses = {
    linkedin:"fa fa-linkedin",
    mail:"fa fa-envelope-o",
    whatsapp:"fa fa-whatsapp",
    github:"fa fa-github"
}
const getName = (name) => {
    const nameTag = document.createElement('h1');
    nameTag.setAttribute("class","name");
    nameTag.append(name);
    return nameTag;
}

const getIntro = () => {
    const iAm = document.createElement('div');
    iAm.append('I am ');
    iAm.setAttribute("class","iam");
    const nameTag = document.createElement('h3');
    nameTag.setAttribute("class","intro");
    iAm.append(nameTag);
    return iAm;
}
const getLink = (content, type) => {
    const linkTag = document.createElement('a');
    linkTag.setAttribute('href', content);
    linkTag.setAttribute('target', '_blank');

    const icon = document.createElement('i');
    icon.setAttribute('class',iconClasses[type]);

    linkTag.append(icon)
    return linkTag;
}
const getSocialLinks = (socialHandles) =>{
    const {linkedin, whatsapp, github, mail} = socialHandles;
    const socialTag = document.createElement('div');
    socialTag.setAttribute("class","social-links");
    socialTag.append(getLink(linkedin, 'linkedin'));
    socialTag.append(getLink(whatsapp,'whatsapp'));
    socialTag.append(getLink(github,'github'));
    socialTag.append(getLink(mail,'mail'));
    return socialTag;
}
const getFooterContent = (number) => {
    const footerContent = document.createElement('div');
    footerContent.setAttribute("class","footer-content");
    footerContent.innerHTML = `<div>Call me at ${number}</div><div>All Rights reserved &copy; 2023</div>`;
    return footerContent;
}
const createCV = () => {
    const cvBody = document.getElementById("cv-body");
    //cvBody.innerHTML = `<pre>${JSON.stringify(cvData, undefined, 4)}</pre>`;
    const name = getName(cvData?.myDetails?.name);
    const nameTitle = getIntro()
    const socialLinks = getSocialLinks(cvData?.myDetails?.socialHandles);
    const footerContent = getFooterContent(cvData?.myDetails?.contact?.call)
    cvBody.append(name);
    cvBody.append(nameTitle)
    cvBody.append(socialLinks);
    const footer = document.getElementById('footer');
    footer.append(footerContent);
    var typed = new Typed(".intro", {
        strings: cvData?.myDetails?.intro,
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}

createCV();