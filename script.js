let pgKaBdy = document.body;

const fillIt = () => {

  if (sessionStorage.getItem("pwdCorrect") == "yes" && sessionStorage.getItem("pwdChecked") == "yes") {
    console.log("called");
    console.log(sessionStorage.getItem("pwdChecked"));
    console.log(sessionStorage.getItem("pwdCorrect"));
    let content = `<div class="container w-full sm:w-3/5 p-2.5 my-5 mx-1.5 mx-auto index-container">
    <h2 class="uppercase tracking-widest text-center font-bold text-2xl">Easy Access</h2>
    <br />

    <h4 class="tracking-wide font-bold">FAMILY</h4>
    <div class="underline-box"></div>
    <br />
    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Familia Navratri {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // 2023 // Navratri</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Familia Diwali {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // Familia // Diwali</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Familia Random {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // Familia // Radom</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Dadi Bday</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // 2023 // Dadi Bday</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Onam + Nana & Mum + Others</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Fam</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Uk {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Fam + Friends // Uk {23}</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Mum + Naina Aunty + Aaron + Vandana Aunty</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Fam + Friends</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Fui & Fua Anni</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Fui & Fua 25</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Nashik + Mumbai (Dada & I) {24}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // 2024 // Nashik + Bumbay</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <br /><br /><br />
    <h4 class="tracking-wide font-bold">PERSONAL</h4>
    <div class="underline-box"></div>
    <br />
    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">College Dusshera</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // 2023 // clg-zindagi // dusshera</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">K-pop + Gandhi Park</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // 2023 // Clg Zindagi // k-pop + ...</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">
        Clg + Everyone + class + ziya + otaku + deepz + anju + anu + nino +
        teachers...
      </div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // 2023 // Clg Zindagi // Others</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">The Final Days</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // 2023 // Clg Zindagi // Final Days</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Airplanes</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Per // Airplanes</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">16th Sep {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Clg Zindagi // 16th Sep {23}</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">19th Jul | Fiza Nexus Jaga {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Clg Zindagi // 19th Jul {23}</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Pratham Cam</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Clg Zindagi // Cam</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Onam + group + teachers + others {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Clg Zindagi // Others</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Freshers {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Clg Zindagi // Freshers</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Teachers</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Clg Zindagi // Teachers</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Talents Day + Panumbur Dariyo {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">
        Alb // Clg Zindagi // Talents.... + Panumbur...
      </div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Traditional Day {23}</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Clg Zindagi // Traditional...</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Nandu + Ramu + Lachu + Anu + Rosh + Amu + Others</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Sab Log</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">
        Shazi + Amru + Nandhanas + Otaku/Darsh + Harsh + Raju
      </div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Mine Hamesha // 2022</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">School Onam + Movies + Farewell + Others</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Mine Hamesha // 2021 & Pehele</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Raju + Aaron + Amru + Suna</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Mine Hamesha // 2023</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Clg Onam {22} + Teachers</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Onam {22}</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <br /><br /><br />
    <h4 class="tracking-wide font-bold">PEOPLE</h4>
    <div class="underline-box"></div>
    <br />
    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Harsh</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Harsh</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Amruta</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Amruta</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Anju</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Anju</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Brino</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Brino</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Deepika</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Deepika</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Darshan</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Darshan</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Jisoo</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Jisoo</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Gayathri (Go3)</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Gayathri (Go3)</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Kishan</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Kishan</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Lakshmi (lachu)</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Lakshmi (lachu)</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Mee</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Mee</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Nazneen</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Nazneen</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Neha (Clg)</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Neha (Clg)</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Olivia</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Olivia</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Rachana</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Rachana</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Shreeraksha</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Shreeraksha</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Suraj (School)</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Suraj (School)</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Trisha</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Trisha</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Shravya</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Shravya</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />

    <div class="flex-area flex my-2.5 text-base">
      <div class="left w-2/5 mr-1.5">Shaziya</div>
      <div class="middle w-2/5 mr-1.5 ml-1.5 font-bold">Alb // Log // Shaziya</div>
      <div class="right w-1/5 ml-1.5 text-center"><span>[DMV5]</span></div>
    </div>

    <hr />
  </div>`;

    pgKaBdy.innerHTML += content;

    let container = document.getElementsByClassName("index-container")[0];

    container.classList.add("");
    container.classList.add("");
    container.classList.add("");
    container.classList.add("");
    container.classList.add("");
    container.classList.add("");

    let hTwo = document.getElementsByTagName("h2")[0];

    hTwo.classList.add("");
    hTwo.classList.add("");
    hTwo.classList.add("");
    hTwo.classList.add("");
    hTwo.classList.add("");

    let hFour = Array.from(document.getElementsByTagName("h4"));

    hFour.forEach((ele) => {
      ele.classList.add("");
      ele.classList.add("");
    });

    let flexArea = Array.from(document.getElementsByClassName("flex-area"));

    flexArea.forEach((elem) => {
      elem.classList.add("");
      elem.classList.add("");
      elem.classList.add("");
    });

    let leftArea = Array.from(document.getElementsByClassName("left"));

    leftArea.forEach((leftEle) => {
      // leftEle.classList.add("w-3/5");
      leftEle.classList.add("");
      leftEle.classList.add("");
    });

    let middleArea = Array.from(document.getElementsByClassName("middle"));

    middleArea.forEach((middleEle) => {
      middleEle.classList.add("");
      middleEle.classList.add("");
      middleEle.classList.add("");
      middleEle.classList.add("");
    });

    let rightArea = Array.from(document.getElementsByClassName("right"));

    rightArea.forEach((rightEle) => {
      // rightEle.classList.add("w-2/5");
      rightEle.classList.add("");
      rightEle.classList.add("");
      rightEle.classList.add("");
    });
  }
  else if (sessionStorage.getItem("pwdCorrect") == null || sessionStorage.getItem("pwdCorrect") == undefined || sessionStorage.getItem("pwdChecked") == null || sessionStorage.getItem("pwdChecked") == undefined) {
    window.location.replace("pwd.html");
  }
  else if (sessionStorage.getItem("pwdCorrect") == "no") {
    pgKaBdy.innerHTML = "<h2>ACCESS DENIED</h2>";
  }
}

const fillBdays = () => {
  if (sessionStorage.getItem("pwdCorrect") == "yes" && sessionStorage.getItem("pwdChecked") == "yes") {
    let bdayArray = [["Jan", 8, "Trisha"], ["Jan", 8, "Vaishnavi"], ["Jan", 16, "Didi"], ["Jan", 25, "Rajal"], ["Jan", 27, "Snehal"], ["Mar", 10, "Aishu (SIMS)"], ["Apr", 11, "Abhiram"], ["Apr", 19, "Brino"], ["Apr", 22, "Rachana"], ["Apr", 23, "Kumar"], ["May", 11, "Shravya"], ["May", 24, "Neha (SIMS)"], ["Jun", 12, "Raksha (GF)"], ["Jun", 16, "Darshan"], ["Jun", 20, "Vaishnavi (Goa)"], ["Jun", 23, "Deepz"], ["Jul", 1, "Ziya"], ["Jul", 14, "Anju"], ["Jul", 31, "Wizz"], ["Aug", 1, "Pratham"], ["Sep", 12, "Akash V"], ["Sep", 19, "Aaron"], ["Oct", 3, "Nivedh"], ["Nov", 3, "Otaku"], ["Nov", 5, "Nandu"], ["Nov", 14, "Anu Behen"], ["Nov", 20, "Sanjay (SIMS)"], ["Nov", 27, "Vinti"], ["Dec", 8, "Janani Miss"], ["Dec", 21, "Rohit (SIMS)"]];

    let printedArr = [];

    let bdaysContainer = document.getElementsByClassName("bdays-container")[0];

    bdayArray.forEach((detArr) => {
      let date = "";
      if (detArr[1] < 10) {
        date = "0" + detArr[1];
      } else {
        date = detArr[1];
      }

      if (!(printedArr.includes(detArr[0])) && detArr[0] != "Jan") {
        bdaysContainer.innerHTML += "<div class='w-1/5 h-1 mx-auto' style='background: black;'></div><br />";
        printedArr.push(detArr[0]);
      }

      bdaysContainer.innerHTML += `<div class="flex-area flex my-2.5 text-base"><div class="left w-1/3 mr-1.5 text-center uppercase">${detArr[0]}</div><div class="middle  w-1/3 mr-1.5 ml-1.5 text-center">${date}</div><div class="right  w-1/3 ml-1.5 text-center font-bold">${detArr[2]}</div></div>`;
    });

    bdaysContainer.innerHTML += "<div class='w-1/5 h-1 mx-auto' style='background: black;'>";

  } else if (sessionStorage.getItem("pwdCorrect") == "no") {
    pgKaBdy.innerHTML = "<h2>ACCESS DENIED</h2>";
  } else if (sessionStorage.getItem("pwdCorrect") == null || sessionStorage.getItem("pwdCorrect") == undefined || sessionStorage.getItem("pwdChecked") == null || sessionStorage.getItem("pwdChecked") == undefined) {
    window.location.replace("pwd.html");
  }

}