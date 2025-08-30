const averageScoreDolphins=(96+108+89)/3;
console.log(averageScoreDolphins);
const averageScoreKoalas=(88+91+110)/3;
console.log(averageScoreKoalas);
if(averageScoreDolphins>averageScoreKoalas){
    console.log("the dolphins are winner");
}else if(averageScoreDolphins<averageScoreKoalas){
    console.log("the koalas are winner")}else if(averageScoreDolphins===averageScoreKoalas){
        console.log("is the draw ")
    }
    // BONUS1
    if((averageScoreDolphins>averageScoreKoalas) && ( averageScoreDolphins-averageScoreKoalas)>=100) { 
    console.log("the dolphins are winner");
 }else if((averageScoreDolphins<averageScoreKoalas) && (averageScoreKoalas-averageScoreDolphins)>=100){
    console.log("the koalas are winner")}else {
        console.log("there is no winner")}
        //bonus2
        if(averageScoreDolphins===averageScoreKoalas>=100){
            console.log("there is the draw")}else{
                console.log("thereis no winner")
            }