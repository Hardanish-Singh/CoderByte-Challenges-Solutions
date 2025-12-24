function PolynomialExpansion(str) {
    str = str.replace(/[a-z]/g, "x");
    let polynomials = new Array();
    let temp = new Array();
    for (let i = 0; i < str.match(/\((.*?)\)/g).length; i++) {
        str.match(/\((.*?)\)/g)
            [i].match(/(\+|\-)?[a-z0-9.^]+/gi)
            .map((item) => {
                temp.push(item);
            });
        polynomials.push(temp);
        temp = new Array();
    }
    let before1, after1, before2, after2;
    let sortArray = [];
    for (let i = 0; i < polynomials[0].length; i++) {
        let fs = "";
        for (let j = 0; j < polynomials[1].length; j++) {
            fs = "";
            if (polynomials[0][i].includes("x^")) {
                before1 = +polynomials[0][i].split("x^")[0];
                after1 = +polynomials[0][i].split("x^")[1];
            } else if (polynomials[0][i].includes("x")) {
                before1 = +polynomials[0][i].split("x")[0];
                after1 = +polynomials[0][i].split("x")[1] ? polynomials[0][i].split("x")[1] : 1;
            } else {
                before1 = +polynomials[0][i];
                after1 = 0;
            }
            if (polynomials[1][j].includes("x^")) {
                before2 = +polynomials[1][j].split("x^")[0];
                after2 = +polynomials[1][j].split("x^")[1];
            } else if (polynomials[1][j].includes("x")) {
                before2 = +polynomials[1][j].split("x")[0];
                after2 = +polynomials[1][j].split("x")[1] ? polynomials[0][i].split("x")[1] : 1;
            } else {
                before2 = +polynomials[1][j];
                after2 = 0;
            }
            if (before1 * before2 == 0) {
                continue;
            }
            fs += before1 * before2 != 1 ? before1 * before2 : "";
            if (polynomials[0][i].includes("x^") || polynomials[1][j].includes("x^")) {
                fs += "x^";
            } else if (polynomials[0][i].includes("x") || polynomials[1][j].includes("x")) {
                fs += "x";
            }
            if (after1 + after2 == 0 || after1 + after2 == 1) {
                sortArray.push(fs);
                continue;
            }
            fs += after1 + after2;
            sortArray.push(fs);
        }
    }
    let vals = 0,
        cals = 0,
        temps = "";
    if (sortArray[0].includes("x^")) {
        vals = +sortArray[0].split("x^")[1];
    } else if (sortArray[0].includes("x")) {
        vals = 1;
    }
    for (let i = 1; i < sortArray.length; i++) {
        if (sortArray[i].includes("x^")) {
            cals = +sortArray[i].split("x^")[1];
        } else if (sortArray[i].includes("x")) {
            cals = 1;
        } else {
            cals = 0;
        }
        if (cals > vals) {
            temp = sortArray[i];
            sortArray[i] = sortArray[i - 1];
            sortArray[i - 1] = temp;
        } else {
            vals = cals;
        }
    }
    fs = "";
    for (let i = 0; i < sortArray.length; i++) {
        if (i == 0) {
            fs += sortArray[i];
        } else {
            if (!sortArray[i].startsWith("-")) {
                fs += "+";
            }
            fs += sortArray[i];
        }
    }
    return fs;
}

// KEEP THIS FUNCTION CALL HERE
console.log(PolynomialExpansion(readline()));
