#pragma strict

public var attackSpeed : long = 1;
public var coolDown : long = 0;
public var yValue : long = 0;
public var bullet : GameObject;


function Update () {
	if (Time.time > coolDown) {
		if (Input.GetKeyDown (KeyCode.Space)) {
			Fire();
		}
	}
}

function Fire() {
	// When the spacebar is pressed
    if (Input.GetKeyDown(KeyCode.Space)) {
        // Create a new bullet at “transform.position”
        // Which is the current position of the ship
        Instantiate(bullet, transform.position, Quaternion.identity);
		coolDown = Time.time + attackSpeed;
    }
}