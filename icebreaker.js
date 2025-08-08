const favMovie  = "Peaky Blinders";
const numSiblings = 2;
const hasSeenInception = false;
const dreamVecation  = " My dream vecation spot is in Las Vegas While in the U.S state having a bachelor party for one of my friends partying all night"

console.log(`I am patner 1 , my favorite movie is ${favMovie} , i have ${numSiblings} siblings and its ${hasSeenInception} that i have seen the Inception movie. ${dreamVecation}`)

//===== Partner 2 ========

//=== Scenario 5
let favFood = ["StreetWize","Inyama","Nkomazi"];
//=== Scenario 6 
let discountCode = "";
//==== Scenario 7 
let proflePic = null;
//==== Scenario 8
let starID = BigInt("1234567890123456789012345678901234567890");
console.log(`My favourate meals are ${favFood} and I got them with a discount offer of ${discountCode}. The profile url is ${proflePic}
             and the star Id is ${starID}           `);


//==== Part 3 =========

let questLog = ["Collect 10 Firefly Wings","Defeat the Goblin King","Find the Lost Sword of Oakhaven"];
console.log(questLog);

//== step2 ===
let x = questLog.length;
console.log(`The hero has ${x} quests.`);

//== step3 ====
console.log(questLog[0]);

//== step4 ====
questLog.push("Deliver the Royal Scroll");
console.log(questLog);

//== step5 =====
let completedQuest = questLog.pop();
console.log("Removed quest:", completedQuest);
console.log("Updated questLog:", questLog);

//== step6 =====
questLog.unshift("Rescue the Blacksmith's Cat");
console.log("Updated questLog:", questLog);

//== step7 =====
let removedQuest = questLog.shift();
console.log("Removed quest:", removedQuest);
console.log("Updated questLog:", questLog);

//== step8 =====
questLog.splice(1, 1);
console.log("Updated questLog:", questLog);


//== step9 ======
questLog.splice(1, 0, "Slay the Dragon of Mount Doom");
console.log("Updated questLog:", questLog);

//== step10 ======
let questSummary = questLog.join(" | ");
console.log("Quest Summary:", questSummary);





