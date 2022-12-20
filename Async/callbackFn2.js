//promise, kumpulan beberapa proses yang berjalan secara async dan saling membutuhkan satu sama lain.
//seperti membuat donat. ada proses penyiapan bakan, proses pencampuran, proses pengadukan, proses panggang.
//tidak mungkin proses panggang dilakukan kecuali jika proses sebelumnya telah dilakukan secara berurutan

//penulisan fungsi jika dilakukan secara sync
function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients); //parameter yang dimasukkan adalah hasil dari proses sebelumnya
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
}

//penulisan fungsi jika dilakukan secara async
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        //terdiri dari 2 parameter:parameter pertama adalah yang dimiliki sekarang, parameter selanjutnya adalah proses selanjutnya
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pouredDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}

//dibuatlah promise untuk memudahkan proses pembacaan
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}