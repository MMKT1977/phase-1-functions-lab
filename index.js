// Code your solution in this file!

function distanceFromHqInBlocks(pickup,headQuarters=42){
    let distance;
     //console.log(distance);
     if(pickup < 42){
        distance =(headQuarters-pickup);
     }
        else if(pickup>42){
            distance = (pickup - headQuarters);
        }
        return distance;
     }
distanceFromHqInBlocks();

function distanceFromHqInFeet(pickup,headQuarters=42){
    let distance;
    if(pickup < 42){
        distance =((headQuarters-pickup)*264);
     }
        else if(pickup>42){
            distance = ((pickup - headQuarters)*264);
        }
        return distance;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, stop){
    let distance;
    if(start>stop){
        distance = ((start-stop)*264);
    }
    else if (start< stop){
        distance =((stop-start)*264);
    }
    return distance;
}
distanceTravelledInFeet();

function calculatesFarePrice(start, stop){
    let distance;

    if(start>stop){
        distance = ((start-stop)*264);
    }
    else if (start< stop){
        distance =((stop-start)*264);
    }
   // return distance;

    let fare;

    if(distance < 400){
        fare = (distance *0);
    }else if(distance >=400 && distance <=2000){
        fare = (((distance -400)*2)/100);

    }else if(distance >2000 && distance <=2500){
        fare = 25;
    }else{
        return 'cannot travel that far';
    }
    return fare;

}
calculatesFarePrice();
