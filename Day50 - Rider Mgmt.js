var rideLine = ['Vivian', 'Ava', 'Josh', 'Patrick', 'Mike'];

function addNewRider(rider) {
	rideLine.push(rider);
	return rideLine;
}

function findRider(rider) {
	var riderIndex = rideLine.indexOf(rider);
	if (riderIndex === -1) {
		riderIndex = 'No such rider';
	}
	return riderIndex;
}

function cutInFrontOf(currentRider, newRider) {
	currentRiderIndex = findRider(currentRider);
	rideLine.splice(currentRiderIndex, 0, newRider);
	return rideLine;
}

function removeRider(rider) {
	riderIndex = findRider(rider);
	rideLine.splice(riderIndex, 1);
	return rideLine;
}

addNewRider('Mary');
findRider('Josh');
findRider('Emily');
cutInFrontOf('Ava', 'Melissa');
removeRider('Patrick');
