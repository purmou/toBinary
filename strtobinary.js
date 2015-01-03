function numToBinary(num) {
    if (num == 1) {
        return "1";
    } else if (num % 2 == 0) {
        return numToBinary(num / 2) + "0";
    } else {
        return numToBinary((num - 1) / 2) + "1";
    }
}

function strToBinary(str) {
    var binary = "";
    for (var i = 0; i < str.length; i++) {
        var num = str.charCodeAt(i);
        if (i > 0) binary += " ";
        binary += numToBinary(num);
    }
    return binary;
}