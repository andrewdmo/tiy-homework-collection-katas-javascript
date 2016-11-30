/**
 * Created by andrewdmo on 9/25/16.
 */

console.log("\n__________ _____\nCollection Katas \n__________ _____\n");


//Arrays

firstLast6 = function (a) {
    if (((a[0]) == 6) || (6 == a[a.length - 1])) {
        return true;
    }
    else {
        return false;
    }
};

sameFirstLast = function (a) {
    if (a[0] == a[a.length - 1] && a.length >= 1) {
        return true;
    }
    else{
        return false;
    }
};

rotateLeft3 = function (a) {
    a.push(a.shift());
    return a;
};

reverse3 = function (a) {
    var temp = [];
    for (var i = a.length - 1; i < a.length && i >= 0; i--) {
        temp.push(a[i])
    }
    return temp;
};

sumFirstPenultimate = function (a) {
    if (a.length >= 2) {
        return (a[0] + a[a.length - 2])
    }
    else if (a.length == 1) {
        return a[0];
    }
    else {
        return 0;
    }
};


//Objects


mapBully = function (a) {
    if (a.a != null) {
        a.b = a.a;
        a.a = "";
    }
    return a
};

mapShare = function (a) {
    if (a.a != null) {
        a.b = a.a
    }
    delete a.c;

    return a
};

mapAB = function (a) {
    if (a.hasOwnProperty("a") && (a.hasOwnProperty("b"))) {
        var temp = a.a + a.b;
        a.ab = temp;
    }
    return a;
};

wordLen = function (a) {
    var aMap = {};

    a.forEach(function (currentValue, index, array) {
        aMap[array[index]] = array[index].length
    });
    return aMap;
};

indexWords = function (a) {
    var aMap = {};

    if ((a.length > 0) && a[0] != "") {
        for (var i = 0; i < a.length; i++) {
            var tempList = [];

            var theKey = a[i].charAt(0);

            a.forEach(function (currentValue, index, array) {

                if (currentValue.length <= 0) {
                    //do nothing
                } else if (currentValue.charAt(0) == theKey) {
                    tempList.push(currentValue);
                }
            });

            aMap[theKey] = tempList;
        }
    }
    return aMap;
};



//Arrays

//firstLastSix

var list1 = [1, 2, 6];
var result = firstLast6(list1);
console.log("firstLast6(%s) -> %s", list1, result);

var list2 = [6, 1, 2, 3];
var result2 = firstLast6(list2);
console.log("firstLast6(%s) -> %s", list2, result2);

var list3 = [13, 6, 1, 2, 3];
var result3 = firstLast6(list3);
console.log("firstLast6(%s) -> %s", list3, result3 + "\n");

var list4 = [6, 2, 7];
var result4 = firstLast6(list1);
console.log("firstLast6(%s) -> %s", list4, result4);

var list5 = [6, 6, 7];
var result5 = firstLast6(list2);
console.log("firstLast6(%s) -> %s", list5, result5);

var list6 = [1, 6, 4, 2, 3];
var result6 = firstLast6(list3);
console.log("firstLast6(%s) -> %s", list6, result6 + "\n\n");


//sameFirstLast

var list7 = [1, 2, 3];
var result7 = sameFirstLast(list7);
console.log("sameFirstLast(%s) -> %s", list7, result7);

var list8 = [1, 2, 3, 1];
var result8 = sameFirstLast(list8);
console.log("sameFirstLast(%s) -> %s", list8, result8);

var list9 = [1, 2, 1];
var result9 = sameFirstLast(list9);
console.log("sameFirstLast(%s) -> %s", list9, result9 + "\n");

var list10 = [3, 2, 1];
var result10 = sameFirstLast(list10);
console.log("sameFirstLast(%s) -> %s", list10, result10);

var list11 = [4, 5, 4, 4];
var result11 = sameFirstLast(list11);
console.log("sameFirstLast(%s) -> %s", list11, result11);

var list12 = [1000000, 2, 1000000];
var result12 = sameFirstLast(list12);
console.log("sameFirstLast(%s) -> %s", list12, result12 + "\n\n");


//rotateLeft3

var list13 = [1, 2, 3];
var result13 = rotateLeft3(list13);
console.log("rotateLeft3([1,2,3]) -> %s", result13);

var list14 = [5, 11, 9];
var result14 = rotateLeft3(list14);
console.log("rotateLeft3([5,11,9]) ->%s ", result14);

var list15 = [7, 0, 0];
var result15 = rotateLeft3(list15);
console.log("rotateLeft3([7,0,0]) -> %s", result15 + "\n\n");

var list16 = [4, 414, 4];
var result16 = rotateLeft3(list16);
console.log("rotateLeft3([4,414,4]) -> %s", result16);

var list17 = [3, 3, 3];
var result17 = rotateLeft3(list17);
console.log("rotateLeft3([3,3,3]) ->%s ", result17);

var list18 = [11, 1, 11];
var result18 = rotateLeft3(list18);
console.log("rotateLeft3([11,1,11]) -> %s", result18 + "\n\n");


//reverse3

var list19 = [1, 2, 3];
var result19 = reverse3(list19);
console.log("reverse3(%s) -> %s", list19, result19);

var list20 = [5, 11, 9];
var result20 = reverse3(list11);
console.log("reverse3(%s) -> %s", list20, result20);

var list21 = [7, 0, 0];
var result21 = reverse3(list21);
console.log("reverse3(%s) -> %s", list21, result21 + "\n");

var list22 = [1, 2, 1];
var result22 = reverse3(list22);
console.log("reverse3(%s) -> %s", list22, result22);

var list23 = [4, 2, 0];
var result23 = reverse3(list23);
console.log("reverse3(%s) -> %s", list23, result23);

var list24 = [1, 5, 9];
var result24 = reverse3(list24);
console.log("reverse3(%s) -> %s", list24, result24 + "\n");


//sumFirstPenultimate

var list25 = [1, 2, 3];
var result25 = sumFirstPenultimate(list25);
console.log("sumFirstPenultimate(%s) -> %s", list25, result25);

var list26 = [1, 1, 1, 1];
var result26 = sumFirstPenultimate(list26);
console.log("sumFirstPenultimate(%s) -> %s", list26, result26);

var list27 = [1, 2, 3, 4];
var result27 = sumFirstPenultimate(list27);
console.log("sumFirstPenultimate(%s) -> %s", list27, result27 + "\n");

var list28 = [5, 4, 3];
var result28 = sumFirstPenultimate(list28);
console.log("sumFirstPenultimate(%s) -> %s", list28, result28);

var list29 = [2, 2, 2, 2];
var result29 = sumFirstPenultimate(list29);
console.log("sumFirstPenultimate(%s) -> %s", list29, result29);

var list30 = [100, 100, 100];
var result30 = sumFirstPenultimate(list30);
console.log("sumFirstPenultimate(%s) -> %s", list30, result30 + "\n\n");


//Objects

//mapBully

var map1 = {
    "b": "dirt",
    "a": "candy"
};


util = require("util");
map_to_String = util.inspect(map1);

var result31 = mapBully(map1);
map_to_newString = util.inspect(result31);

//var aString = map1.b.toString();
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString);

var map2 = {
    "a": "candy"
};

map_to_String = util.inspect(map2);
var result32 = mapBully(map2);
map_to_newString = util.inspect(result32);
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString);


var map3 = {
    "b": "carrot",
    "c": "meh",
    "a": "candy"
};
var result33 = mapBully(map3);
map_to_newString = util.inspect(result33);
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString + "\n");

var map4 = {
    "b": "soysage",
    "a": "pork sausage"
};
map_to_String = util.inspect(map4);
var result34 = mapBully(map4);
map_to_newString = util.inspect(result34);

//var aString = map1.b.toString();
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString);

var map5 = {
    "b": "dirt",
    "a": ""
};
map_to_String = util.inspect(map5);
var result35 = mapBully(map5);
map_to_newString = util.inspect(result35);
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString);

var map6 = {
    "b": "Yugo",
    "c": "Fiat",
    "a": "Honda"
};
map_to_String = util.inspect(map6);
var result36 = mapBully(map6);
map_to_newString = util.inspect(result36);
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString + "\n");


//mapShare

var map7 =
{
    "b": "bbb",
    "c": "ccc",
    "a": "aaa"
};
map_to_String = util.inspect(map7);
var result37 = mapShare(map7);
map_to_newString = util.inspect(result37);
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString);

var map8 = {
    "b": "xyz",
    "c": "ccc"
};
map_to_String = util.inspect(map8);
var result38 = mapShare(map8);
map_to_newString = util.inspect(result38);
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString);

var map9 = {
    "d": "hi",
    "c": "meh",
    "a": "aaa"
};

map_to_String = util.inspect(map9);
var result39 = mapShare(map9);
map_to_newString = util.inspect(result39);
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString + "\n");

var map10 =
{
    "b": "duck",
    "c": "duck",
    "a": "goose"
};
map_to_String = util.inspect(map10);
var result40 = mapShare(map10);
map_to_newString = util.inspect(result40);
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString);

var map11 = {
    "b": "right",
    "c": "left"
};
map_to_String = util.inspect(map11);
var result41 = mapShare(map11);
map_to_newString = util.inspect(result41);
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString);

var map12 = {
    "d": "boo",
    "c": "ya",
    "a": "fuego"
};
map_to_String = util.inspect(map12);
var result42 = mapShare(map12);
map_to_newString = util.inspect(result42);
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString + "\n");


//mapAB

var map13 = {
    "b": "There",
    "a": "Hi"
};
map_to_String = util.inspect(map13);
var result43 = mapAB(map13);
map_to_newString = util.inspect(result43);
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString);

var map14 = {
    "a": "Hi"
};
map_to_String = util.inspect(map14);
var result44 = mapAB(map14);
map_to_newString = util.inspect(result44);
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString);

var map15 = {
    "b": "There"
};
map_to_String = util.inspect(map15);
var result45 = mapAB(map15);
map_to_newString = util.inspect(result45);
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString + "\n");

var map16 = {
    "b": "Face",
    "a": "Book"
};
map_to_String = util.inspect(map16);
var result46 = mapAB(map16);
map_to_newString = util.inspect(result46);
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString);

var map17 = {
    "a": "De",
    "b": "bug"
};
map_to_String = util.inspect(map17);
var result47 = mapAB(map17);
map_to_newString = util.inspect(result47);
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString);

var map18 = {
    "a": "Almost",
    "b": "There"
};
map_to_String = util.inspect(map18);
var result48 = mapAB(map18);
map_to_newString = util.inspect(result48);
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString + "\n");


//wordLength

var aList1 = ["a", "bb", "a", "bb"];
var result49 = wordLen(aList1);
map_to_newString = util.inspect(result49);
console.log("wordLen(%s) -> %s", aList1, map_to_newString);

var aList2 = ["this", "and", "that", "and"];
var result50 = wordLen(aList2);
map_to_newString = util.inspect(result50);
console.log("wordLen(%s) -> %s", aList2, map_to_newString);

var aList3 = ["code", "code", "code", "bug"];
var result51 = wordLen(aList3);
map_to_newString = util.inspect(result51);
console.log("wordLen(%s) -> %s", aList3, map_to_newString + "\n");

var aList4 = ["step", "in", "step", "out"];
var result52 = wordLen(aList4);
map_to_newString = util.inspect(result52);
console.log("wordLen(%s) -> %s", aList4, map_to_newString);

var aList5 = ["Kris", "Kross", "jump", "jump"];
var result53 = wordLen(aList5);
map_to_newString = util.inspect(result53);
console.log("wordLen(%s) -> %s", aList5, map_to_newString);

var aList6 = ["veto", "vote ", "vet"];
var result54 = wordLen(aList6);
map_to_newString = util.inspect(result54);
console.log("wordLen(%s) -> %s", aList6, map_to_newString + "\n");


//indexWords

var aList7 = ["aardvark", "apple", "zamboni", "phone"];
var result55 = indexWords(aList7);
map_to_newString = util.inspect(result55);
console.log("indexWords(%s) -> %s", aList7, map_to_newString);

var alist8 = ["elephant"];
var result56 = indexWords(alist8);
map_to_newString = util.inspect(result56);
console.log("indexWords(%s) -> %s", alist8, map_to_newString);

var alist9 = [];
var result57 = indexWords(alist9);
map_to_newString = util.inspect(result57);
console.log("indexWords(%s) -> %s", alist9, map_to_newString);

var alist10 = [""];
var result58 = indexWords(alist10);
map_to_newString = util.inspect(result58);
console.log("indexWords(%s) -> %s", alist10, map_to_newString);

var aList11 = ["my", "very", "excellent", "mother"];
var result59 = indexWords(aList11);
map_to_newString = util.inspect(result59);
console.log("indexWords(%s) -> %s", aList11, map_to_newString);

var alist12 = ["how", "much", "wood", "could", "a", "woodchuck chuck"];
var result60 = indexWords(alist12);
map_to_newString = util.inspect(result60);
console.log("indexWords(%s) -> %s", alist12, map_to_newString);

var alist13 = ["see", "the", "sea"];
var result61 = indexWords(alist13);
map_to_newString = util.inspect(result61);
console.log("indexWords(%s) -> %s", alist13, map_to_newString);