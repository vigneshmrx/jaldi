let checkPwdPage = document.getElementsByClassName("pwd-page")[0];

const fillIt = (boolVal) => {
    let content = `<div class="container">
    <h2>Easy Access</h2><br><br>

    <h4>FAMILY</h4>
    <div class="underline-box"></div>
    <br />
    <hr>

    <div class="flex-area">
      <div class="left">Familia Navratri {23}</div>
      <div class="middle">Per // 2023 // Navratri</div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">Familia Diwali {23}</div>
      <div class="middle">
          Per // Familia // Diwali
      </div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">Familia Random {23}</div>
      <div class="middle">
          Per // Familia // Radom
      </div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">Dadi Bday</div>
      <div class="middle">Per // 2023 // Dadi Bday</div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area">
      <div class="left">Onam + Nana & Mum + Others</div>
      <div class="middle">
        Alb // Fam
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Uk {23}
      </div>
      <div class="middle">
        Alb // Fam + Friends // Uk {23}
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Mum + Naina Aunty + Aaron + Vandana Aunty
      </div>
      <div class="middle">
        Alb // Fam + Friends
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Fui & Fua Anni
      </div>
      <div class="middle">
        Alb // Fui & Fua 25
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <br><br><br>
    <h4>PERSONAL</h4>
    <div class="underline-box"></div>
    <br />
    <hr>

    <div class="flex-area">
      <div class="left">College Dusshera</div>
      <div class="middle">Per // 2023 // clg-zindagi // dusshera</div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area">
      <div class="left">K-pop + Gandhi Park</div>
      <div class="middle">Per // 2023 // Clg Zindagi // k-pop + ...</div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area">
      <div class="left">
        Clg + Everyone + class + ziya + otaku + deepz + anju + anu + nino +
        teachers...
      </div>
      <div class="middle">Per // 2023 // Clg Zindagi // Others</div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area">
      <div class="left">The Final Days</div>
      <div class="middle">Per // 2023 // Clg Zindagi // Final Days</div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">Airplanes</div>
      <div class="middle">Per  // Airplanes</div>
      <div class="right"><span>[DGMM]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        16th Sep {23}
      </div>
      <div class="middle">
        Alb // Clg Zindagi // 16th Sep {23}
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        19th Jul | Fiza Nexus Jaga {23}
      </div>
      <div class="middle">
        Alb // Clg Zindagi // 19th Jul {23}
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Pratham Cam
      </div>
      <div class="middle">
        Alb // Clg Zindagi // Cam
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Onam + group + teachers + others {23}
      </div>
      <div class="middle">
        Alb // Clg Zindagi // Others
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Freshers {23}
      </div>
      <div class="middle">
        Alb // Clg Zindagi // Freshers
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Teachers
      </div>
      <div class="middle">
        Alb // Clg Zindagi // Teachers
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Talents Day + Panumbur Dariyo {23}
      </div>
      <div class="middle">
        Alb // Clg Zindagi // Talents.... + Panumbur...
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Traditional Day {23}
      </div>
      <div class="middle">
        Alb // Clg Zindagi // Traditional...
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Nandu + Ramu + Lachu + Anu + Rosh + Amu + Others
      </div>
      <div class="middle">
        Alb // Sab Log
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Shazi + Amru + Nandhanas + Otaku/Darsh + Harsh + Raju
      </div>
      <div class="middle">
        Alb // Mine Hamesha // 2022
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        School Onam + Movies + Farewell + Others
      </div>
      <div class="middle">
        Alb // Mine Hamesha // 2021 & Pehele
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Raju + Aaron + Amru + Suna
      </div>
      <div class="middle">
        Alb // Mine Hamesha // 2023
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Clg Onam {22} + Teachers
      </div>
      <div class="middle">
        Alb // Onam {22}
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <br><br><br>
    <h4>PEOPLE</h4>
    <div class="underline-box"></div>
    <br />
    <hr>

    <div class="flex-area">
      <div class="left">
        Harsh
      </div>
      <div class="middle">
        Alb // Log // Harsh
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Amruta
      </div>
      <div class="middle">
        Alb // Log // Amruta
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Anju
      </div>
      <div class="middle">
        Alb // Log // Anju
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Brino
      </div>
      <div class="middle">
        Alb // Log // Brino
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Deepika
      </div>
      <div class="middle">
        Alb // Log // Deepika
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Darshan
      </div>
      <div class="middle">
        Alb // Log // Darshan
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Jisoo
      </div>
      <div class="middle">
        Alb // Log // Jisoo
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Gayathri (Go3)
      </div>
      <div class="middle">
        Alb // Log // Gayathri (Go3)
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Kishan
      </div>
      <div class="middle">
        Alb // Log // Kishan
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Lakshmi (lachu)
      </div>
      <div class="middle">
        Alb // Log // Lakshmi (lachu)
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Mee
      </div>
      <div class="middle">
        Alb // Log // Mee
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Nazneen
      </div>
      <div class="middle">
        Alb // Log // Nazneen
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Neha (Clg)
      </div>
      <div class="middle">
        Alb // Log // Neha (Clg)
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Olivia
      </div>
      <div class="middle">
        Alb // Log // Olivia
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Rachana
      </div>
      <div class="middle">
        Alb // Log // Rachana
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Shreeraksha
      </div>
      <div class="middle">
        Alb // Log // Shreeraksha
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Suraj (School)
      </div>
      <div class="middle">
        Alb // Log // Suraj (School)
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Trisha
      </div>
      <div class="middle">
        Alb // Log // Trisha
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Shravya
      </div>
      <div class="middle">
        Alb // Log // Shravya
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Shaziya
      </div>
      <div class="middle">
        Alb // Log // Shaziya
      </div>
      <div class="right"><span>[DMV5]</span></div>
    </div>

    <hr>

  </div>`;

  let pgKaBdy = document.body;
  
  if (boolVal) {
    checkPwdPage.style.visibility = "hidden";
    pgKaBdy.innerHTML = content;

    let container = document.getElementsByClassName("container")[0];

    container.classList.add("w-full");
    container.classList.add("sm:w-3/5");
    container.classList.add("p-2.5");
    container.classList.add("my-5");
    container.classList.add("mx-1.5");
    container.classList.add("mx-auto");

    let hTwo = document.getElementsByTagName("h2")[0];

    hTwo.classList.add("uppercase");
    hTwo.classList.add("tracking-widest");
    hTwo.classList.add("text-center");
    hTwo.classList.add("font-bold");
    hTwo.classList.add("text-2xl");

    let hFour = Array.from(document.getElementsByTagName("h4"));

    hFour.forEach((ele) => {
      ele.classList.add("tracking-wide");
      ele.classList.add("font-bold");
    });

    let flexArea = Array.from(document.getElementsByClassName("flex-area"));

    flexArea.forEach((elem) => {
      elem.classList.add("flex");
      elem.classList.add("my-2.5");
      elem.classList.add("text-base");
    });

    let leftArea = Array.from(document.getElementsByClassName("left"));

    leftArea.forEach((leftEle) => {
      // leftEle.classList.add("w-3/5");
      leftEle.classList.add("w-2/5");
      leftEle.classList.add("mr-1.5");
    });

    let middleArea = Array.from(document.getElementsByClassName("middle"));

    middleArea.forEach((middleEle) => {
      middleEle.classList.add("w-2/5");
      middleEle.classList.add("mr-1.5");
      middleEle.classList.add("ml-1.5");
      middleEle.classList.add("font-bold");
    });

    let rightArea = Array.from(document.getElementsByClassName("right"));

    rightArea.forEach((rightEle) => {
      // rightEle.classList.add("w-2/5");
      rightEle.classList.add("w-1/5");
      rightEle.classList.add("ml-1.5");
      rightEle.classList.add("text-center");
    });
  } else {
    pgKaBdy.innerHTML = "<h2>ACCESS DENIED</h2>";
  }
}

const a = (theNo) => {
    return (theNo * theNo);
}

const b = (theNo) => {
    let n = 0;
    while (theNo > 0) {
        d = theNo % 10;
        n = n * 10 + d;
        theNo = parseInt(theNo / 10);
    }

    return n;
}

const checkPwd = () => {
    const l = ["hello", "72525", "namaste", "030916"];
    let enteredPwd = document.getElementsByTagName("input")[0].value;
    
    let aNo = parseInt(enteredPwd.substr(0, 2));
    aNo = b(a(aNo));

    let bNo = parseInt(enteredPwd.substr(-2, 2));
    bNo = a(b(bNo));

    let theRest = enteredPwd.substr(2, enteredPwd.length - 4);

    if ((aNo == bNo) && l.includes(theRest)) {
        fillIt(true);
    } else {
        fillIt(false);
    }
}

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

