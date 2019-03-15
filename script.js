<<<<<<< HEAD
annotations = ["images/ARENDTAA-43.png", "Participants from Moscow will be selected through this open call.", "The Gerrit Rietveld Academie is an international university of applied sciences for Fine Arts and Design in Amsterdam, the Netherlands. Its graphic design course is world renowned for its innovative and international program, with many of the most prominent figures in contemporary graphic design having graduated from the Rietveld Academie. The course aims to educate graphic designers who can contribute to the development of the discipline, that are prepared to use their work to engage in debate, adopt an investigative and reflective approach to media, find an own method of working, and can express themselves in their own visual language. ", "The MMOMA Education Center on 17 Ermolaevsky Lane was opened in the winter 2017 on the one of the four venues of the Moscow Museum of Modern Art. MMOMA Education Center is a platform for self-education, creative and social initiatives and academic research. Its aim is to contribute to the integration of wide social groups into the cultural life. The center supports young art as well as innovative creative initiatives in the fields of science, history, philosophy and literature.", "Workshop groups will be guided by Natasha Agapova (RU), Bart de Baets (NL), Tanya Ermolaeva (RU), Paul Gangloff (F), Roman Gornitsky (RU) and Elisabeth Klement (EE).", "The title of the workshop is inspired by a personal account of Russian artist Ariadna Arendt’s (1906-1970) time studying at the Vkhutemas, Russia’s revolutionary state art school of the 1920s, and following its abrupt dissolution in 1930 at INPII – the Institute of Proletarian Fine Art. The account has an objectivity – or distance that only reflection might allow – that describes a seemingly absurdist sequence of events related to political, ideological and structural change in an art school. From a today’s perspective it reads as a completely relatable account about what it means (and feels like) studying art and design in an institution.", "To apply for ‘We begin with a squiggle’ please write a motivation letter (no more that 300 words) about:<br><br>1. Why you would like to join <br>2. How the workshop is relevant to your interests and <br>3. What you hope to get out of the experience <br><br>Please include images of three works that you feel represent you. <br>Format of application: PDF (under 8MB)<br><br>Attention: The application must be in English. All workshops will be held in English, fluent knowledge of English is therefor essential. ", "All applications will be reviewed by David Bennewith, Claudia Doms, Natasha Agapova, Tatiana Ermolaeva, Roman Gornitsky, Bart de Baets, Elisabeth Klement and Paul Gangoff. Every applicant has an equal opportunity. You will be informed about your application status before April 13th.", "Claudia Doms is a graphic designer and educator from Germany. She is a graduate of the Rietveld graphic design program and currently teaches at the British Higher School of Art and Design in Moscow.  <br> <br>David Bennewith is a graphic designer and typedesign researcher originally from New Zealand. He is the head of the graphic design department at the Rietveld Acadmie.  <br> <br>The workshop organisation is assisted by Bram van den Berg.  <br> <br>Website by Vasily Dyakonov and Natalia Kukina."];
=======
annotations = ["images/ARENDTAA-43.png", "Participants from Moscow will be selected through this open call.", "The Gerrit Rietveld Academie is an international university of applied sciences for Fine Arts and Design in Amsterdam, the Netherlands. Its graphic design course is world renowned for its innovative and international program, with many of the most prominent figures in contemporary graphic design having graduated from the Rietveld Academie. The course aims to educate graphic designers who can contribute to the development of the discipline, that are prepared to use their work to engage in debate, adopt an investigative and reflective approach to media, find an own method of working, and can express themselves in their own visual language. ", "The MMOMA Education Center on 17 Ermolaevsky Lane was opened in the winter 2017 on the one of the four venues of the Moscow Museum of Modern Art. MMOMA Education Center is a platform for self-education, creative and social initiatives and academic research. Its aim is to contribute to the integration of wide social groups into the cultural life. The center supports young art as well as innovative creative initiatives in the fields of science, history, philosophy and literature.", "Workshop groups will be guided by Natasha Agapova (RU), Bart de Baets (NL), Tanya Ermolaeva (RU), Paul Gangloff (F), Roman Gornitsky (RU) and Elisabeth Klement (EE).", "The title of the workshop is inspired by a personal account of Russian artist Ariadna Arendt’s (1906-1970) time studying at the Vkhutemas, Russia’s revolutionary state art school of the 1920s, and following its abrupt dissolution in 1930 at INPII – the Institute of Proletarian Fine Art. The account has an objectivity – or distance that only reflection might allow – that describes a seemingly absurdist sequence of events related to political, ideological and structural change in an art school. From a today’s perspective it reads as a completely relatable account about what it means (and feels like) studying art and design in an institution. The text can be read here (in Russian). An English translation is available here. ", "To apply for ‘We begin with a squiggle’ please write a motivation letter (no more that 300 words) about:<br><br>1. Why you would like to join <br>2. How the workshop is relevant to your interests and <br>3. What you hope to get out of the experience <br><br>Please include images of three works that you feel represent you. Format of application: PDF (under 8MB)<br><br>Attention: The application must be in English. All workshops will be held in English, fluent knowledge of English is therefor essential. ", "All applications will be reviewed by David Bennewith, Claudia Doms, Natasha Agapova, Tatiana Ermolaeva, Roman Gornitsky, Bart de Baets, Elisabeth Klement and Paul Gangoff. Every applicant has an equal opportunity. You will be informed about your application status before April 13th.", "Claudia Doms is a graphic designer and educator from Germany. She is a graduate of the Rietveld graphic design program and currently teaches at the British Higher School of Art and Design in Moscow.  <br> <br>David Bennewith is a graphic designer and typedesign researcher originally from New Zealand. He is the head of the graphic design department at the Rietveld Acadmie.  <br> <br>The workshop organisation is assisted by Bram van den Berg.  Website by Vasily Dyakonov and Natalia Kukina."];
>>>>>>> a128c4fa4d8a1802754645d16f336449070651c0

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
