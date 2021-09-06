export function getColorByLetter(letter) {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const colors = ['#163AF5', '#1D566E', '#21ABA5', '#163AF5', '#1D566E', '#21ABA5', '#163AF5', '#1D566E', '#21ABA5', 
    '#163AF5', '#1D566E', '#21ABA5','#163AF5', '#1D566E', '#21ABA5', '#163AF5', '#1D566E', '#21ABA5', '#163AF5', '#1D566E', '#21ABA5', '#163AF5', '#1D566E', '#21ABA5', '#163AF5', '#1D566E', '#21ABA5', ] 
    let upperLetter = letter.toUpperCase();
    return colors[alphabets.indexOf(upperLetter)];
  }