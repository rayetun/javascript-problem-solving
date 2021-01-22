// https://github.com/rayetun/javascript-problem-solving

// Problem -1 (Convert KM to Meter)

function kilometerToMeter(km) {
    var meter = km * 1000;

    if (km <= 0 || km == undefined) {
        console.log("Error : Please write a positive value to see the result");
    }
    else {
        return meter;
    }
}

// Problem - 2 Shopping Budget Calculator

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    if (watchPrice > 0 && phonePrice > 0 && laptopPrice > 0) {
        var totalCost = watchPrice + phonePrice + laptopPrice;
        return totalCost;
    }
    else {
        console.log("Error : Please write positive number and don't leave any information empty.");
    }
}

// Problem - 3 Hotel Bi ll calculator

function hotelCost(days) {
    if (days >= 1 && days <= 10) {
        var hotelBill = days * 100;

        return hotelBill;
    }
    else if (days >= 11 && days <= 20) {
        var hotelBill = (10 * 100) + ((days - 10) * 80);

        return hotelBill;
    }
    else if (days >= 20) {
        var hotelBill = (10 * 100) + (10 * 80) + ((days - 20) * 50);

        return hotelBill;
    }
    else {
        console.log("Error : Please write a positive value to see the Hotel Bill");
    }
}

// Problem - 4 Find the longest name from a list

function megaFriend(names) {
    if (names == undefined || names.length == 0) {
        console.log("Error : Please write the name correctly")
    }
    else {
        var longestName = names[0];
        for (var i = 0; i < names.length; i++) {
            var currentName = names[i];
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        return longestName;
    }
}