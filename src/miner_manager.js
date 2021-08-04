var miner = {
    coin: 0,
    ruby: 0,
};

function Dig(){
    var prob = Math.random();
    if (prob < 0.05) {
        miner.ruby++;
    } else {
        miner.coin+=getRandomInt(10);
    }
}

function GetMiner(){
    return miner
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

module.exports = {
    Dig,
    GetMiner,
}