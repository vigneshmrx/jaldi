let checkPwdPage = document.getElementsByClassName("pwd-page")[0];
const l = ["hello", "72525", "namaste", "030916"];

const fillIt = (boolVal) => {
    let content = `<div class="container">
    <h2>Easy Access</h2><br><br>

    <h4>FAMILY</h4>
    <div class="underline-box"></div>
    <br />
    <hr>

    <div class="flex-area">
      <div class="left">Familia Navratri {23}</div>
      <div class="right">Per // 2023 // Navratri<span>[DGMM]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">Familia Diwali {23}</div>
      <div class="right">
          Per // Familia // Diwali<span>[DGMM]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">Familia Random {23}</div>
      <div class="right">
          Per // Familia // Radom<span><span>[DGMM]</span></span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">Dadi Bday</div>
      <div class="right">Per // 2023 // Dadi Bday<span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area">
      <div class="left">Onam + Nana & Mum + Others</div>
      <div class="right">
        Alb // Fam<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Uk {23}
      </div>
      <div class="right">
        Alb // Fam + Friends // Uk {23}<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Mum + Naina Aunty + Aaron + Vandana Aunty
      </div>
      <div class="right">
        Alb // Fam + Friends<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Fui & Fua Anni
      </div>
      <div class="right">
        Alb // Fui & Fua 25<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <br><br><br>
    <h4>PERSONAL</h4>
    <div class="underline-box"></div>
    <br />
    <hr>

    <div class="flex-area">
      <div class="left">College Dusshera</div>
      <div class="right">Per // 2023 // clg-zindagi // dusshera<span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area">
      <div class="left">K-pop + Gandhi Park</div>
      <div class="right">Per // 2023 // Clg Zindagi // k-pop + ...<span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area">
      <div class="left">
        Clg + Everyone + class + ziya + otaku + deepz + anju + anu + nino +
        teachers...
      </div>

      <div class="right">Per // 2023 // Clg Zindagi // Others<span>[DGMM]</span></div>
    </div>

    <hr />

    <div class="flex-area">
      <div class="left">The Final Days</div>

      <div class="right">Per // 2023 // Clg Zindagi // Final Days<span>[DGMM]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">Airplanes</div>
      <div class="right">Per  // Airplanes<span>[DGMM]</span></div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        16th Sep {23}
      </div>
      <div class="right">
        Alb // Clg Zindagi // 16th Sep {23}<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        19th Jul | Fiza Nexus Jaga {23}
      </div>
      <div class="right">
        Alb // Clg Zindagi // 19th Jul {23}<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Pratham Cam
      </div>
      <div class="right">
        Alb // Clg Zindagi // Cam<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Onam + group + teachers + others {23}
      </div>
      <div class="right">
        Alb // Clg Zindagi // Others<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Freshers {23}
      </div>
      <div class="right">
        Alb // Clg Zindagi // Freshers<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Teachers
      </div>
      <div class="right">
        Alb // Clg Zindagi // Teachers<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Talents Day + Panumbur Dariyo {23}
      </div>
      <div class="right">
        Alb // Clg Zindagi // Talents.... + Panumbur...<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Traditional Day {23}
      </div>
      <div class="right">
        Alb // Clg Zindagi // Traditional...<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Nandu + Ramu + Lachu + Anu + Rosh + Amu + Others
      </div>
      <div class="right">
        Alb // Sab Log<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Shazi + Amru + Nandhanas + Otaku/Darsh + Harsh + Raju
      </div>
      <div class="right">
        Alb // Mine Hamesha // 2022<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        School Onam + Movies + Farewell + Others
      </div>
      <div class="right">
        Alb // Mine Hamesha // 2021 & Pehele<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Raju + Aaron + Amru + Suna
      </div>
      <div class="right">
        Alb // Mine Hamesha // 2023<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Clg Onam {22} + Teachers
      </div>
      <div class="right">
        Alb // Onam {22}<span>[DMV5]</span>
      </div>
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
      <div class="right">
        Alb // Log // Harsh<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Amruta
      </div>
      <div class="right">
        Alb // Log // Amruta<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Anju
      </div>
      <div class="right">
        Alb // Log // Anju<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Brino
      </div>
      <div class="right">
        Alb // Log // Brino<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Deepika
      </div>
      <div class="right">
        Alb // Log // Deepika<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Darshan
      </div>
      <div class="right">
        Alb // Log // Darshan<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Jisoo
      </div>
      <div class="right">
        Alb // Log // Jisoo<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Gayathri (Go3)
      </div>
      <div class="right">
        Alb // Log // Gayathri (Go3)<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Kishan
      </div>
      <div class="right">
        Alb // Log // Kishan<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Lakshmi (lachu)
      </div>
      <div class="right">
        Alb // Log // Lakshmi (lachu)<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Mee
      </div>
      <div class="right">
        Alb // Log // Mee<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Nazneen
      </div>
      <div class="right">
        Alb // Log // Nazneen<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Neha (Clg)
      </div>
      <div class="right">
        Alb // Log // Neha (Clg)<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Olivia
      </div>
      <div class="right">
        Alb // Log // Olivia<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Rachana
      </div>
      <div class="right">
        Alb // Log // Rachana<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Shreeraksha
      </div>
      <div class="right">
        Alb // Log // Shreeraksha<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Suraj (School)
      </div>
      <div class="right">
        Alb // Log // Suraj (School)<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Trisha
      </div>
      <div class="right">
        Alb // Log // Trisha<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Shravya
      </div>
      <div class="right">
        Alb // Log // Shravya<span>[DMV5]</span>
      </div>
    </div>

    <hr>

    <div class="flex-area">
      <div class="left">
        Shaziya
      </div>
      <div class="right">
        Alb // Log // Shaziya<span>[DMV5]</span>
      </div>
    </div>

    <hr>

  </div>`;

  let pgKaBdy = document.body;
  
  if (boolVal) {
    checkPwdPage.style.visibility = "hidden";
    pgKaBdy.innerHTML = content;
  } else {
    pgKaBdy.innerHTML = "<h2>ACCESS DENIED</h2>";
  }
}

// fillIt();

const a = (theNo) => {
    return (theNo * theNo);
}

const b = (theNo) => {
    let n = 0;
    console.log(theNo);
    while (theNo > 0) {
        d = theNo % 10;
        console.log(d);
        n = n * 10 + d;
        console.log(n);
        theNo = parseInt(theNo / 10);
    }

    return n;
}

const checkPwd = () => {
    let enteredPwd = document.getElementsByTagName("input")[0].value;
    
    let aNo = parseInt(enteredPwd.substr(0, 2));
    aNo = b(a(aNo));

    let bNo = parseInt(enteredPwd.substr(-2, 2));
    bNo = a(b(bNo));

    let theRest = enteredPwd.substr(2, enteredPwd.length - 4);
    console.log(theRest);

    console.log(aNo + " " + bNo);

    if ((aNo == bNo) && l.includes(theRest)) {
        fillIt(true);
    } else {
        fillIt(false);
    }
}