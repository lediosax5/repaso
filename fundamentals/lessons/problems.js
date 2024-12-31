let familySize = 2;
let plannedDistanceToDrive = 100;
let recommended = "Deberías escoger un ";

function recommendedCar(familySize, plannedDistanceToDrive) {
    if (familySize <= 4 && plannedDistanceToDrive < 200) {
        return recommended + "Tesla";
    } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
        return recommended + "Toyota Camry";
    } else if (familySize > 4 || plannedDistanceToDrive > 200) {
        return recommended + "Minivan";
    }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));
