// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
}

function distanceFromHqInFeet(feet) {
    return Math.abs(feet - 42) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)

}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(((start - destination) * 264))
    if (distance <= 400) {
        return 0
    }

    else if (distance > 400 && distance < 2000) {
        return ((distance - 400) * 0.02)
    }
    else if (distance > 2000 && distance < 2500) {
        // return Math.abs((distance - 400)) * 25
        return 25
    }

    else {
        return `cannot travel that far`
    }
    return distance
}







