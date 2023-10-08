const modal = document.querySelector('.modal')
const modalContent = document.querySelector('#content-modal')
const body = document.body 


function ModalWindow(boolean) {
    if (boolean) {
        modal.style.display = 'block'
        body.style.overflow = 'hidden'
        modal.style.animation = 'modalAnimateOpen .4s'

    } else {
        body.style.overflow = ''
        modal.style.animation = 'modalAnimateClose .4s'
        setTimeout(() => {
            modal.style.display = ''
        }, 400)
    }
}
  

const tabButtons = document.querySelectorAll(".module");
const tabContents = document.querySelectorAll(".modulesDiscription");

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function(event) {
    for (let j = 0; j < tabContents.length; j++) {
      tabContents[j].classList.remove("active");
    }

    for (let j = 0; j < tabButtons.length; j++) {
      tabButtons[j].classList.remove("active");
    }

    this.classList.add("active");

    const tabId = this.getAttribute("data-tab");
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add("active");
  });
}

const tabButtons2 = document.querySelectorAll(".module2");
const tabContents2 = document.querySelectorAll(".priceDiscription");

for (let i = 0; i < tabButtons2.length; i++) {
  tabButtons2[i].addEventListener("click", function(event) {
    for (let j = 0; j < tabContents2.length; j++) {
      tabContents2[j].classList.remove("active");
    }

    for (let j = 0; j < tabButtons2.length; j++) {
      tabButtons2[j].classList.remove("active");
    }

    this.classList.add("active");

    const tabId = this.getAttribute("data-tab");
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add("active");
  });
}





// код professor

// обробтка модулей
// const modules = document.querySelectorAll(".module");
// const choosen = [1, 0, 0, 0];
// const moduleNumber = document.querySelector(".number");
// const moduleDiscription = document.querySelector(".moduleInscription");
// const moduleText = document.querySelector(".moduleText");
// const txts = document.querySelectorAll(".txt");
// let index = 0;

// modules[0].addEventListener("click", () => {
//   choosen[0] = 1;
//   for (index = 0; index < 4; index++) {
//     if (choosen[index] === 1 && index !== 0) {
//       if (modules[index].classList.contains("background1")) {
//         modules[index].classList.remove("background1");
//         txts[index].classList.remove("color1");
//       }
//       if (!modules[index].classList.contains("background2")) {
//         modules[index].classList.add("background2");
//         txts[index].classList.add("color2");
//       }
//       choosen[index] = 0;
//     }
//   }
//   if (modules[0].classList.contains("background2")) {
//     modules[0].classList.remove("background2");
//     txts[0].classList.remove("color2");
//   }
//   if (!modules[0].classList.contains("background1")) {
//     modules[0].classList.add("background1");
//     txts[0].classList.add("color1");
//   }
//   moduleNumber.innerHTML = `Module 1:`;
//   moduleDiscription.innerHTML = `Introduction to Marketing`;
//   moduleText.innerHTML = `Basic concepts and definitions in marketing <br />
//   Market research and consumer analysis <br />
//   Developing a marketing strategy <br />
//   Module objectives and expected outcomes`;
// });

// modules[1].addEventListener("click", () => {
//   choosen[1] = 1;
//   for (index = 0; index < 4; index++) {
//     if (choosen[index] === 1 && index !== 1) {
//       if (modules[index].classList.contains("background1")) {
//         modules[index].classList.remove("background1");
//         txts[index].classList.remove("color1");
//       }
//       if (!modules[index].classList.contains("background2")) {
//         modules[index].classList.add("background2");
//         txts[index].classList.add("color2");
//       }
//       choosen[index] = 0;
//     }
//   }
//   if (modules[1].classList.contains("background2")) {
//     modules[1].classList.remove("background2");
//     txts[1].classList.remove("color2");
//   }
//   if (!modules[1].classList.contains("background1")) {
//     modules[1].classList.add("background1");
//     txts[1].classList.add("color1");
//   }
//   moduleNumber.innerHTML = `Module 2:`;
//   moduleDiscription.innerHTML = `Product and Pricing`;
//   moduleText.innerHTML = `Product development and management <br />
//   Market segmentation and product positioning <br />
//   Determining the price and pricing strategy <br />
//   Module objectives and expected outcomes`;
// });

// modules[2].addEventListener("click", () => {
//   choosen[2] = 1;
//   for (index = 0; index < 4; index++) {
//     if (choosen[index] === 1 && index !== 2) {
//       if (modules[index].classList.contains("background1")) {
//         modules[index].classList.remove("background1");
//         txts[index].classList.remove("color1");
//       }
//       if (!modules[index].classList.contains("background2")) {
//         modules[index].classList.add("background2");
//         txts[index].classList.add("color2");
//       }
//       choosen[index] = 0;
//     }
//   }
//   if (modules[2].classList.contains("background2")) {
//     modules[2].classList.remove("background2");
//     txts[2].classList.remove("color2");
//   }
//   if (!modules[2].classList.contains("background1")) {
//     modules[2].classList.add("background1");
//     txts[2].classList.add("color1");
//   }
//   moduleNumber.innerHTML = `Module 3:`;
//   moduleDiscription.innerHTML = `Promotion and Communication`;
//   moduleText.innerHTML = `Development of marketing communications <br />
//     Advertising, PR and promotion through social media <br />
//     Brand building and management <br />
//     Module objectives and expected outcomes`;
// });

// modules[3].addEventListener("click", () => {
//   choosen[3] = 1;
//   for (index = 0; index < 4; index++) {
//     if (choosen[index] === 1 && index !== 3) {
//       if (modules[index].classList.contains("background1")) {
//         modules[index].classList.remove("background1");
//         txts[index].classList.remove("color1");
//       }
//       if (!modules[index].classList.contains("background2")) {
//         modules[index].classList.add("background2");
//         txts[index].classList.add("color2");
//       }
//       choosen[index] = 0;
//     }
//   }
//   if (modules[3].classList.contains("background2")) {
//     modules[3].classList.remove("background2");
//     txts[3].classList.remove("color2");
//   }
//   if (!modules[3].classList.contains("background1")) {
//     modules[3].classList.add("background1");
//     txts[3].classList.add("color1");
//   }
//   moduleNumber.innerHTML = `Module 4:`;
//   moduleDiscription.innerHTML = `Marketing Research and Analytics`;
//   moduleText.innerHTML = `Methods of data collection and research <br />
//     Market and competitor analysis <br />
//     Measuring the effectiveness of marketing campaigns <br />
//     Module objectives and expected outcomes`;
// });

// // обработка цен

// const priceBlock = document.querySelectorAll(".pricePoint");
// const choosen2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const priceInscription = document.querySelectorAll(".sizesPoint");
// const nameCourse = document.querySelector(".nameCourse");
// const extraInfo = document.querySelector(".extraInfo");
// const money = document.querySelector(".money");

// priceBlock[0].addEventListener("click", () => {
//   choosen2[0] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 0) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[0].classList.contains("background2-2")) {
//     priceBlock[0].classList.remove("background2-2");
//     priceInscription[0].classList.remove("color2-2");
//   }
//   if (!priceBlock[0].classList.contains("background2-1")) {
//     priceBlock[0].classList.add("background2-1");
//     priceInscription[0].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Low`;
//   extraInfo.innerHTML = `Access to module 1 <br /> <br />
//   Registration in the affiliate programme`;
//   money.innerHTML = `50$`;
// });

// priceBlock[1].addEventListener("click", () => {
//   choosen2[1] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 1) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[1].classList.contains("background2-2")) {
//     priceBlock[1].classList.remove("background2-2");
//     priceInscription[1].classList.remove("color2-2");
//   }
//   if (!priceBlock[1].classList.contains("background2-1")) {
//     priceBlock[1].classList.add("background2-1");
//     priceInscription[1].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Beginner`;
//   extraInfo.innerHTML = `Access to module 1, 2 <br /> <br />
//     Registration in the affiliate <br />
//     programme <br /> <br />
//     Access to pre-training`;
//   money.innerHTML = `100$`;
// });

// priceBlock[2].addEventListener("click", () => {
//   choosen2[2] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 2) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[2].classList.contains("background2-2")) {
//     priceBlock[2].classList.remove("background2-2");
//     priceInscription[2].classList.remove("color2-2");
//   }
//   if (!priceBlock[2].classList.contains("background2-1")) {
//     priceBlock[2].classList.add("background2-1");
//     priceInscription[2].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Fan`;
//   extraInfo.innerHTML = `Access to module 1, 2 <br /> <br />
//     Registration in the affiliate <br />
//     programme <br /> <br />
//     Access to pre-training <br /> <br />
//     Access to the library of <br />
//     promotional materials`;
//   money.innerHTML = `150$`;
// });

// priceBlock[3].addEventListener("click", () => {
//   choosen2[3] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 3) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[3].classList.contains("background2-2")) {
//     priceBlock[3].classList.remove("background2-2");
//     priceInscription[3].classList.remove("color2-2");
//   }
//   if (!priceBlock[3].classList.contains("background2-1")) {
//     priceBlock[3].classList.add("background2-1");
//     priceInscription[3].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Intermediate`;
//   extraInfo.innerHTML = `Access to module 1, 2, 3 <br /> <br />
//     Registration in the affiliate <br />
//     programme
//     Access to pre-training <br /> <br />
//     Access to the library <br />
//     of promotional materials`;
//   money.innerHTML = `200$`;
// });

// priceBlock[4].addEventListener("click", () => {
//   choosen2[4] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 4) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[4].classList.contains("background2-2")) {
//     priceBlock[4].classList.remove("background2-2");
//     priceInscription[4].classList.remove("color2-2");
//   }
//   if (!priceBlock[4].classList.contains("background2-1")) {
//     priceBlock[4].classList.add("background2-1");
//     priceInscription[4].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Base`;
//   extraInfo.innerHTML = `Access to Base Module <br /> <br />
//     Registration in the affiliate <br />
//     programme <br /> <br />
//     Access to pre-training <br /> <br />
//     Access to the library <br /> 
//     of promotional materials`;
//   money.innerHTML = `250$`;
// });

// priceBlock[5].addEventListener("click", () => {
//   choosen2[5] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 5) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[5].classList.contains("background2-2")) {
//     priceBlock[5].classList.remove("background2-2");
//     priceInscription[5].classList.remove("color2-2");
//   }
//   if (!priceBlock[5].classList.contains("background2-1")) {
//     priceBlock[5].classList.add("background2-1");
//     priceInscription[5].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Advanced`;
//   extraInfo.innerHTML = `Base package privileges <br /> <br />
//     Access to private chat`;
//   money.innerHTML = `300$`;
// });

// priceBlock[6].addEventListener("click", () => {
//   choosen2[6] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 6) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[6].classList.contains("background2-2")) {
//     priceBlock[6].classList.remove("background2-2");
//     priceInscription[6].classList.remove("color2-2");
//   }
//   if (!priceBlock[6].classList.contains("background2-1")) {
//     priceBlock[6].classList.add("background2-1");
//     priceInscription[6].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Pro`;
//   extraInfo.innerHTML = `Base package privileges <br /> <br />
//     Access to private chat <br /> <br />
//     Support of a personal <br />
//     business consultant`;
//   money.innerHTML = `350$`;
// });

// priceBlock[7].addEventListener("click", () => {
//   choosen2[7] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 7) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[7].classList.contains("background2-2")) {
//     priceBlock[7].classList.remove("background2-2");
//     priceInscription[7].classList.remove("color2-2");
//   }
//   if (!priceBlock[7].classList.contains("background2-1")) {
//     priceBlock[7].classList.add("background2-1");
//     priceInscription[7].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Boss`;
//   extraInfo.innerHTML = `Base package privileges <br /> <br />
//     Access to private chat <br /> <br /> 
//     Support of a personal <br />
//     consultant <br />
//     Access to the bonus <br />
//     module`;
//   money.innerHTML = `400$`;
// });

// priceBlock[8].addEventListener("click", () => {
//   choosen2[8] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 8) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[8].classList.contains("background2-2")) {
//     priceBlock[8].classList.remove("background2-2");
//     priceInscription[8].classList.remove("color2-2");
//   }
//   if (!priceBlock[8].classList.contains("background2-1")) {
//     priceBlock[8].classList.add("background2-1");
//     priceInscription[8].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Business`;
//   extraInfo.innerHTML = `Boss package privileges <br /> <br />
//     Personalised session with a <br />
//     smm coach (4 hours)`;
//   money.innerHTML = `450$`;
// });

// priceBlock[9].addEventListener("click", () => {
//   choosen2[9] = 1;
//   for (index = 0; index < 10; index++) {
//     if (choosen2[index] === 1 && index !== 9) {
//       if (priceBlock[index].classList.contains("background2-1")) {
//         priceBlock[index].classList.remove("background2-1");
//         priceInscription[index].classList.remove("color2-1");
//       }
//       if (!priceBlock[index].classList.contains("background2-2")) {
//         priceBlock[index].classList.add("background2-2");
//         priceInscription[index].classList.add("color2-2");
//       }
//       choosen2[index] = 0;
//     }
//   }
//   if (priceBlock[9].classList.contains("background2-2")) {
//     priceBlock[9].classList.remove("background2-2");
//     priceInscription[9].classList.remove("color2-2");
//   }
//   if (!priceBlock[9].classList.contains("background2-1")) {
//     priceBlock[9].classList.add("background2-1");
//     priceInscription[9].classList.add("color2-1");
//   }
//   nameCourse.innerHTML = `Millionare`;
//   extraInfo.innerHTML = `Boss package privileges <br /> <br />
//     Personalised session with <br />
//     a smm coach (8 hours) <br /> <br />
//     Help with finding orders`;
//   money.innerHTML = `500$`;
// });
