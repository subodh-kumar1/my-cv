const cvData  = {
    myDetails: {
        name: "Subodh Kumar",
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
const createCV = () => {
    const cvBody = document.getElementById("cv-body");
    //cvBody.innerHTML = `<pre>${JSON.stringify(cvData, undefined, 4)}</pre>`;
    const name = getName(cvData?.myDetails?.name);
    const socialLinks = getSocialLinks(cvData?.myDetails?.socialHandles);
    cvBody.append(name);
    cvBody.append(socialLinks);
}

createCV();