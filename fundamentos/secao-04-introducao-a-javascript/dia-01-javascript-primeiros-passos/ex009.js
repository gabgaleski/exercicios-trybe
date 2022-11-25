const angulo1 = 50;
const angulo2 = 60;
const angulo3 = 55;
if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("True");
    return true;
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("[ERRO] Angulo invalido");
} else {
    console.log("False");
    return false;
}
