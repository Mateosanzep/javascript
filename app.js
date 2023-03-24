function sinLawForA (a,b,B){
    let aRad=a*Math.PI/180;
    let bRad=b*Math.PI/180;
    return (B*Math.sin(aRad)/Math.sin(bRad));
}

function sinLawForB (b,A,B){
    let bRad = b*Math.PI/180;
    return (Math.asin(Math.sin(bRad)*A/B))*180/Math.PI;
}