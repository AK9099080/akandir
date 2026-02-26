let counter = {
  clicks: 0
};
let cookies = 1;
let superCookiesAmount = 0;
let superCookies = 0;
let clicksAmount = cookies;
let redCookiesAmount = 0;
let redCookies = 0;
let multiplier = 1;
function countClicks() {
  if (document.querySelector(".button").onclick) {
  counter.clicks += clicksAmount;
  }
}
function determineSuperCookieBonus() {
  superCookies = superCookiesAmount * 10;
}
function determineRedCookieBonus() {
  redCookies = redCookiesAmount * 50;
}
// function shh() { counter.clicks += 100000; displayClicks();}
function displayClicks() {
  return document.querySelector(".counter").innerHTML = `You have ${counter.clicks} click(s)`;
};
function buyCookie() {
  if (document.querySelector(".cookie").onclick && counter.clicks >= 50) {
  counter.clicks -= 50;
  document.querySelector(".buyingError").innerHTML = "Thanks for buying me a cookie!";
  document.querySelector(".counter").innerHTML = `You have ${counter.clicks} click(s) left.`;
  cookies += 1; 
  document.querySelector(".cookieAmount").innerHTML = `You have ${cookies} cookies.`;
  determineClicks();
  }
  else if (document.querySelector(".cookie").onclick && counter.clicks < 50) {
  document.querySelector(".buyingError").innerHTML = "You don't have enough clicks!";
  }
}
function disableCookie() {
  if (cookies === 50) {
  document.querySelector(".cookie").disabled = true;
  document.querySelector(".cookie").innerHTML = "MAX";
  }
}
function disableSuperCookie() {
  if (superCookiesAmount === 25) {
  document.querySelector(".superCookie").disabled = true;
  document.querySelector(".superCookie").innerHTML = "MAX";

  }
}
function disableRedCookie() {
  if (redCookiesAmount === 10) {
  document.querySelector(".redCookie").disabled = true;
  document.querySelector(".redCookie").innerHTML = "MAX";
  }
}
function buySuperCookie() {
  if (document.querySelector(".superCookie").onclick && counter.clicks >= 1000) {
  counter.clicks -= 1000; 
  superCookiesAmount += 1;
  document.querySelector(".counter").innerHTML = `You have ${counter.clicks} click(s) left.`; 
  document.querySelector(".superCookieAmount").innerHTML = `You have ${superCookiesAmount} supercookies(s).`; 
  determineClicks(); determineSuperCookieBonus();
  }
  else if (document.querySelector(".superCookie").onclick && counter.clicks < 1000) {
  return document.querySelector(".buyingError").innerHTML = "You don't have enough clicks!";
  }
}
function determineClicks() {
  clicksAmount = (cookies + superCookies + redCookies) * multiplier;
}
function buyRedCookie() {
  if (document.querySelector(".redCookie").onclick && counter.clicks >= 25000) {
  counter.clicks -= 25000; 
  redCookiesAmount += 1;
  document.querySelector(".counter").innerHTML = `You have ${counter.clicks} click(s) left.`; 
  document.querySelector(".redCookieAmount").innerHTML = `You have ${redCookiesAmount} red cookies(s).`; 
  determineClicks(); determineRedCookieBonus(); alert("Congrats on getting the red cookie!");
  }
  else if (document.querySelector(".redCookie").onclick && counter.clicks < 25000) {
  return document.querySelector(".buyingError").innerHTML = "You don't have enough clicks!";
  }
}

let futureCookies = 0;
let futureSuperCookies = 0;
let futureRedCookies = 0;
let cookieString = `You can afford ${futureCookies} cookies.`;
let superCookieString = `You can afford ${futureSuperCookies} cookies.`;
let redCookieString = `You can afford ${futureRedCookies} cookies.`;

function determineFutureCookies() {
  futureCookies = Math.floor((counter.clicks) / 50);
  cookieString = `You can afford ${futureCookies} cookie(s).`
  document.querySelector(".futureDisplay").innerHTML = cookieString;
}
function determineFutureSuperCookies() {
  futureSuperCookies = Math.floor((counter.clicks) / 1000);
  superCookieString = `You can afford ${futureSuperCookies} super cookie(s).`
  document.querySelector(".futureDisplay").innerHTML = superCookieString;
}
function determineFutureRedCookies() {
  futureRedCookies = Math.floor((counter.clicks) / 25000);
  redCookieString = `You can afford ${futureRedCookies} red cookie(s).`
  document.querySelector(".futureDisplay").innerHTML = redCookieString;
}
function twoMultiplier() {
  if (document.querySelector(".twoTimesMultiplier").onclick && counter.clicks >= 500000) {
    counter.clicks -= 500000;
    document.querySelector(".twoTimesMultiplier").disabled = true;
    multiplier += 1;
  }
  else if (document.querySelector(".twoTimesMultiplier").onclick && counter.clicks < 500000) {
  document.querySelector(".buyingError").innerHTML = "You don't have enough clicks!";
  }
}

