let aspects = ["sleep", "diet", "activity", "emotional", "social", "occupational", "spiritual", "intellectual"]
function scoreCalc(quizResults, currentScore) {
  let dailyScores = {};
  let scoreMap = {1:-2, 2:-1, 3:0, 4:1, 5:2}
  //aspect scores
  aspects.forEach((aspect) => {
    if (quizResults[aspect]) {
      let points = scoreMap[quizResults[aspect]]
      let score = sampleScore[aspect] + points;
      dailyScores[aspect] = score;
    }
  })
  //total score
  let totalScore = Object.values(dailyScores).reduce( (acc, val) => {
    return acc + val
  },0)
  dailyScores.total = totalScore;
  //streak score
  let today = Date.parse(quizResults.date);
  let lastTime = Date.parse(currentScore.date);
  let diff = today - lastTime;
  let days = diff/86400000;
  let streak;
  if (days >= 2) {
    dailyScores.streak = 0;
    dailyScores.total = dailyScores.total - (3 * days);
  }
  else if (days >= 1) {
    dailyScores.streak = currentScore.streak++
  }
  return dailyScores;
}

function tierCalc(scores) {
  let totalTiers = {0:"level one",28:"level two", 42:"level three", 63:"level four", 95:"level five", 142:"level six", 214:"level seven", 320:"level eight", 480:"level nine", 720:"level ten"};
  let aspectTiers = {0:"level one",10:"level two", 20:"level three", 30:"level four", 40:"level five", 50:"level six", 60:"level seven", 70:"level eight", 80:"level nine", 90:"level ten"};
  let streakTiers = {0:"level one",1:"level two", 2:"level three", 3:"level four", 4:"level five", 5:"level six", 6:"level seven", 7:"level eight", 8:"level nine", 9:"level ten"};
  let userTiers = {}

//aspect tiers
  aspects.forEach( (aspect) => {
    if (scores[aspect]) {
      let brackets = Object.keys(aspectTiers);
      let tier;
      brackets.forEach( (bracket) => {
        if (scores[aspect] > bracket) {
          tier = aspectTiers[bracket]
        }
      })
      userTiers[aspect] = tier;
    }
  })
  //total tier
  let totalBrackets = Object.keys(totalTiers);
  let totaltier;
  totalBrackets.forEach( (bracket) => {
    if (scores.total > bracket) {
      totaltier = totalTiers[bracket];
    }
  })
  userTiers.total = totaltier;

  //streak tier
  let streakBrackets = Object.keys(streakTiers);
  let streaktier;
  streakBrackets.forEach( (bracket) => {
    if (scores.streak > bracket) {
      streaktier = streakTiers[bracket];
    }
  })
  userTiers.streak = streaktier;

  return userTiers;
}

let sampleQuiz = {date: "2018-02-01T06:00:00.000Z", sleep: 3, diet: 1, activity: 3, emotional: 3, social: 4, occupational: 2, spiritual: 4, intellectual: 3}
let sampleScore = {date: "2018-01-31T06:00:00.000Z", total: 0, streak: 1, sleep: 13, diet: 11, activity: 13, emotional: 13, social: 14, occupational: 12, spiritual: 14, intellectual: 13}

let newScores = scoreCalc(sampleQuiz, sampleScore)
console.log('todays scores', newScores);
let newTiers = tierCalc(newScores);
console.log('todays tiers', newTiers);
