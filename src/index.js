module.exports = function toReadable (number) {
    number = number +'';
    let numbersObj = {
        'zeroToNine': ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        'tenToNineteen': ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        'tens': ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    };

    if (number < 10) {
        return numbersObj['zeroToNine'][number];
    }    
    if (number < 20) {
        return numbersObj['tenToNineteen'][+(number.split('')[1])];
    } 
    if (number % 10 === 0 && number < 100) {
        return numbersObj['tens'][+(number.split('')[0])];
    }    
    if (number < 100) {
        return numbersObj['tens'][+(number.split('')[0])] + ' ' + numbersObj['zeroToNine'][+(number.split('')[1])];
    }
    if (number % 100 === 0) {
        return numbersObj['zeroToNine'][+(number.split('')[0])] + ' hundred';
    }    
    if (number % 10 === 0) {
        return numbersObj['zeroToNine'][+(number.split('')[0])] + ' hundred' + ' ' + numbersObj['tens'][+(number.split('')[1])];
    }
    if (number % 100 < 10) {
        return numbersObj['zeroToNine'][+(number.split('')[0])] + ' hundred' + ' ' + numbersObj['zeroToNine'][+(number.split('')[2])];
    }
    if (number % 100 < 20) {
        return numbersObj['zeroToNine'][+(number.split('')[0])] + ' hundred' + ' ' + numbersObj['tenToNineteen'][+(number.split('')[2])]
    }
        return numbersObj['zeroToNine'][+(number.split('')[0])] + ' hundred' + ' ' + numbersObj['tens'][+(number.split('')[1])] + ' ' + numbersObj['zeroToNine'][+(number.split('')[2])];

}
