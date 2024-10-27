/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title: "Advances in AI-Driven Medical Image Analysis",
        authors: "John Doe, Jane Smith, Michael Johnson, Emily Davis",
        conferences: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
        researchYr: 2023,
        citebox: "popup1",
        image: "assets/images/research-page/medicalImageAnalysis.jpeg",
        citation: {
            vancouver: "John Doe, Jane Smith, Michael Johnson, Emily Davis. Advances in AI-Driven Medical Image Analysis. International Conference on Medical Image Computing and Computer-Assisted Intervention 2023."
        },
        abstract: "This research explores recent advancements in AI-driven techniques for medical image analysis, focusing on improving diagnostic accuracy and efficiency in healthcare.",
        absbox: "absPopup1"
    },

    {
        title: "Enhancing Natural Language Processing with Machine Learning Techniques",
        authors: "Alice Brown, Bob White, Carol Green, David Black",
        conferences: "Annual Conference of the Association for Computational Linguistics",
        researchYr: 2022,
        citebox: "popup2",
        image: "assets/images/research-page/nlpMachineLearning.png",
        citation: {
            vancouver: "Alice Brown, Bob White, Carol Green, David Black. Enhancing Natural Language Processing with Machine Learning Techniques. Annual Conference of the Association for Computational Linguistics 2022."
        },
        abstract: "This study delves into the integration of machine learning algorithms with natural language processing (NLP) to enhance language understanding and generation capabilities.",
        absbox: "absPopup2"
    },

    {
        title: "Deep Learning Approaches for Autonomous Driving",
        authors: "Eve Martin, Frank Thompson, Grace Wilson, Henry Adams",
        conferences: "IEEE Conference on Computer Vision and Pattern Recognition",
        researchYr: 2024,
        citebox: "popup3",
        image: "assets/images/research-page/autonomousDriving.png",
        citation: {
            vancouver: "Eve Martin, Frank Thompson, Grace Wilson, Henry Adams. Deep Learning Approaches for Autonomous Driving. IEEE Conference on Computer Vision and Pattern Recognition 2024."
        },
        abstract: "This paper presents innovative deep learning methodologies for enhancing the perception and decision-making processes in autonomous vehicles.",
        absbox: "absPopup3"
    },

    {
        title: "AI-Powered Predictive Analytics in Finance",
        authors: "Ivy Scott, Jack Lee, Karen Moore, Liam Taylor",
        conferences: "International Conference on Financial Data Science",
        researchYr: 2023,
        citebox: "popup4",
        image: "assets/images/research-page/financeAnalytics.png",
        citation: {
            vancouver: "Ivy Scott, Jack Lee, Karen Moore, Liam Taylor. AI-Powered Predictive Analytics in Finance. International Conference on Financial Data Science 2023."
        },
        abstract: "This research examines the application of AI and machine learning techniques in predictive analytics to enhance financial forecasting and risk management.",
        absbox: "absPopup4"
    },

    {
        title: "Computer Vision in Agricultural Automation",
        authors: "Mark Brown, Nancy Davis, Oliver Clark, Paula Harris",
        conferences: "IEEE International Conference on Robotics and Automation",
        researchYr: 2023,
        citebox: "popup5",
        image: "assets/images/research-page/agriculturalAutomation.jpg",
        citation: {
            vancouver: "Mark Brown, Nancy Davis, Oliver Clark, Paula Harris. Computer Vision in Agricultural Automation. IEEE International Conference on Robotics and Automation 2023."
        },
        abstract: "This study explores the role of computer vision technologies in automating agricultural processes, improving efficiency and crop management.",
        absbox: "absPopup5"
    },

    {
        title: "Transforming Healthcare with AI and Data Science",
        authors: "Quinn Robinson, Rachel Lewis, Sam Turner, Tina Williams",
        conferences: "Healthcare Information and Management Systems Society Conference",
        researchYr: 2023,
        citebox: "popup6",
        image: "assets/images/research-page/healthcareAI.jpg",
        citation: {
            vancouver: "Quinn Robinson, Rachel Lewis, Sam Turner, Tina Williams. Transforming Healthcare with AI and Data Science. Healthcare Information and Management Systems Society Conference 2023."
        },
        abstract: "This paper discusses the transformative impact of AI and data science on healthcare, focusing on patient care, predictive analytics, and operational efficiency.",
        absbox: "absPopup6"
    },

    {
        title: "Advanced Techniques in Image Recognition Using Deep Learning",
        authors: "Uma Patel, Victor Hernandez, Wendy Zhao, Xavier Kim",
        conferences: "IEEE Conference on Computer Vision and Pattern Recognition",
        researchYr: 2024,
        citebox: "popup7",
        image: "assets/images/research-page/imageRecognition.jpg",
        citation: {
            vancouver: "Uma Patel, Victor Hernandez, Wendy Zhao, Xavier Kim. Advanced Techniques in Image Recognition Using Deep Learning. IEEE Conference on Computer Vision and Pattern Recognition 2024."
        },
        abstract: "This research investigates cutting-edge deep learning techniques for image recognition, aiming to improve accuracy and computational efficiency.",
        absbox: "absPopup7"
    },

    {
        title: "Innovations in AI-Based Fraud Detection Systems",
        authors: "Yara Johnson, Zachary Evans, Amelia Brown, Benjamin Walker",
        conferences: "International Conference on Cyber Security",
        researchYr: 2024,
        citebox: "popup8",
        image: "assets/images/research-page/fraudDetection.jpeg",
        citation: {
            vancouver: "Yara Johnson, Zachary Evans, Amelia Brown, Benjamin Walker. Innovations in AI-Based Fraud Detection Systems. International Conference on Cyber Security 2024."
        },
        abstract: "This paper explores novel AI-based techniques for detecting and preventing fraudulent activities in various industries.",
        absbox: "absPopup8"
    }
];

AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

