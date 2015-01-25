#pragma strict

import System.Collections.Generic;


// Variable to store the bullet prefab
public var bullet : GameObject;

// Variable to know how fast we should shoot
public var shootTime : float = 5;

function Start () {
    InvokeRepeating("Fire", shootTime, shootTime);
}

function Fire() {
	// When the spacebar is pressed
	// Create a new bullet at “transform.position”
	// Which is the current position of the ship
	//GameObject childObject = Instantiate(bullet, new Vector3(transform.position.x, transform.position.y, transform.position.z + 0.5), Quaternion.identity) as GameObject;
	//childObject.tranform.parent = parentObject.transform;
	
	Instantiate(bullet, new Vector3(transform.position.x, transform.position.y, transform.position.z + 0.5), Quaternion.identity);
}
