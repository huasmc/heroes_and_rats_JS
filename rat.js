const Rat = function() {
}

Rat.prototype.touch = function(food) {
 food.set(true);
}

module.exports = Rat;
