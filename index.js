function superbowlWin(array) {
   const winObj = array.find(obj => obj.result === "W");
   return !!winObj ? winObj.year : undefined;
}
 



