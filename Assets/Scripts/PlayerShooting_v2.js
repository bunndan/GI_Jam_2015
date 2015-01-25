#pragma strict

public var attackSpeed : long = 0.5;
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
        // Create a new bullet at “transform.position”, which is the current position of the ship        
        var bulletDirection = gameObject.GetComponent(PlayerStats2D).currentDirection;
        
        if (bulletDirection == 1) {
			Instantiate(bullet, new Vector3(transform.position.x, transform.position.y + 1.2, transform.position.z + 0.5), Quaternion.identity);
		} else if (bulletDirection == 2) {
			Instantiate(bullet, new Vector3(transform.position.x - 1.2, transform.position.y, transform.position.z + 0.5), Quaternion.identity);
		} else if (bulletDirection == 3) {
			Instantiate(bullet, new Vector3(transform.position.x, transform.position.y - 1.2, transform.position.z + 0.5), Quaternion.identity);
		} else if (bulletDirection == 4) {
			Instantiate(bullet, new Vector3(transform.position.x + 1.2, transform.position.y, transform.position.z + 0.5), Quaternion.identity);
		}
        
		coolDown = Time.time + attackSpeed;
    }
}