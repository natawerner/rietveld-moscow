annotations = ["images/ARENDTAA-43.png",
"<span class='squiggle'>1</span>Participants from Moscow will be selected through this open call.",
"<span class='squiggle'>2</span>The Gerrit Rietveld Academie is an international university of applied sciences for Fine Arts and Design in Amsterdam, the Netherlands. Its graphic design course is world renowned for its innovative and international program, with many of the most prominent figures in contemporary graphic design having graduated from the Rietveld Academie. The course aims to educate graphic designers who can contribute to the development of the discipline, that are prepared to use their work to engage in debate, adopt an investigative and reflective approach to media, find an own method of working, and can express themselves in their own visual language.",
"<span class='squiggle'>3</span>The MMOMA Education Center on 17 Ermolaevsky Lane was opened in the winter 2017 on the one of the four venues of the Moscow Museum of Modern Art. MMOMA Education Center is a platform for self-education, creative and social initiatives and academic research. Its aim is to contribute to the integration of wide social groups into the cultural life. The center supports young art as well as innovative creative initiatives in the fields of science, history, philosophy and literature.",
"<span class='squiggle'>4</span>Workshop groups will be guided by <a href='http://arbeitskollektiv.ru/aga/' target='_blank'>Natasha&nbspAgapova</a> (RU), <a href='http://bartdebaets.nl/' target='_blank'>Bart&nbspde&nbspBaets</a> (NL), <a href='http://ermolaeva.co/' target='_blank'>Tanya&nbspErmolaeva</a> (RU), <a href='http://writtenrecords.info/index.html' target='_blank'>Paul&nbspGangloff</a> (FR), <a href='http://typefaces.temporarystate.net/preview/' target='_blank'>Roman&nbspGornitsky</a> (RU) and <a href='http://elisabethklement.com/' target='_blank'>Elisabeth&nbspKlement</a> (EE).",
"<span class='squiggle'>5</span>The title of the workshop is inspired by a personal account of Russian artist Ariadna Arendt’s (1906-1970) time studying at the Vkhutemas, Russia’s revolutionary state art school of the 1920s, and following its abrupt dissolution in 1930 at INPII – the Institute of Proletarian Fine Art. The account has an objectivity – or distance that only reflection might allow – that describes a seemingly absurdist sequence of events related to political, ideological and structural change in an art school. From a today’s perspective it reads as a completely relatable account about what it means (and feels like) studying art and design in an institution. The text can be read <a href='https://www.colta.ru/articles/art/19850-steklyannyy-sovsluzhaschiy-i-opportunist-v-keramike/' target='_blank'>here</a> (in Russian). An English translation is available <a href='https://drive.google.com/file/d/182810lq_p-xesMgSGWnX1aB53nbG3F5-/view?usp=sharing' target='_blank'>here</a>.",
"<span class='squiggle'>6</span>To apply for ‘We begin with a squiggle’ please write a motivation letter (no more that 300 words) about:<br><br>1. Why you would like to join <br>2. How the workshop is relevant to your interests<br>3. What you hope to get out of the experience <br><br>Please include images of three works that you feel represent you. <br>Format of application: PDF (under 8MB)<br><br>Attention: The application must be in English. All workshops will be held in English, fluent knowledge of English is therefor essential.",
"<span class='squiggle'>7</span>All applications will be reviewed by David Bennewith, Claudia Doms, Natasha Agapova, Tatiana Ermolaeva, Roman Gornitsky, Bart de Baets, Elisabeth Klement and Paul Gangoff. Every applicant has an equal opportunity. You will be informed about your application status before April 13th.",
"<span class='squiggle'>8</span>Claudia Doms is a graphic designer and educator from Germany. She is a graduate of the Rietveld graphic design program and currently teaches at the British Higher School of Art and Design in Moscow.<br><br>David Bennewith is a graphic designer and typedesign researcher originally from New Zealand. He is the head of the graphic design department at the Rietveld Acadmie.  <br> <br>The workshop organisation is assisted by Bram van den Berg.  <br> <br>Website by Vasily Dyakonov and Natalia Kukina."];


/*function image() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("img");
  content.src = annotations[0];
  content.setAttribute("id","rightContent");
  x.appendChild(content);
}*/

function one() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("p");
  content.innerHTML = annotations[1];
  x.appendChild(content);
  content.setAttribute("id","rightContent");
}

function two() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("p");
  content.innerHTML = annotations[2];
  x.appendChild(content);
  content.setAttribute("id","rightContent");
}

function three() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("p");
  content.innerHTML = annotations[3];
  x.appendChild(content);
  content.setAttribute("id","rightContent");
}

function four() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("p");
  content.innerHTML = annotations[4];
  x.appendChild(content);
  content.setAttribute("id","rightContent");
}

function five() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("p");
  content.innerHTML = annotations[5];
  x.appendChild(content);
  content.setAttribute("id","rightContent");
}

function six() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("p");
  content.innerHTML = annotations[6];
  x.appendChild(content);
  content.setAttribute("id","rightContent");
}

function seven() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("p");
  content.innerHTML = annotations[7];
  x.appendChild(content);
  content.setAttribute("id","rightContent");
}

function eight() {
  var x = document.getElementById("right");
  x.removeChild(rightContent);
  var content = document.createElement("p");
  content.innerHTML = annotations[8];
  x.appendChild(content);
  content.setAttribute("id","rightContent");
}
