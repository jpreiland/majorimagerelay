const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qualitySchema = new Schema({
  name: String,
  isArmor: Boolean,
  isClothing: Boolean,
  isContainer: Boolean,
  isFurniture: Boolean,
  isMisc: Boolean,
  isTreasure: Boolean,
  isWeapon: Boolean,
  isWriting: Boolean
})

module.exports = mongoose.model('Quality', qualitySchema);