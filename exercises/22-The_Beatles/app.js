function sing() {
    let newArr = [];
    for (let i = 0; i < 4; i++) {
      newArr.push("let it be")
        if (newArr.length === 4) {
          newArr.push("whisper words of wisdom, let it be")
        } if (newArr.length === 5) {
          for (let j = 0; j < 4; j++) {
          newArr.push("let it be")
          }
        } if (newArr.length === 9) {
            newArr.push("there will be an answer, let it be")
          }
        }
    return newArr.join(", ");
  }
  
  /* let it be (x4)
   * whisper words of wisdom, let it be,
   * let it be (x4)
   * there will be an answer, let it be
   */
  
  //Your code above ^^^
  
  console.log(sing());