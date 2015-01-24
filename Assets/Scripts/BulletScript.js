#pragma strict

// Public variable 
public var speed : int = 6;

// Gets called once when the bullet is created
function Start () {
	// Set the velocity to make the bullet move depending on the direction of the ship
	
	var bulletDirection = gameObject.GetComponent(PlayerStats2D).currentDirection;
	
	Debug.Log(bulletDirection);
	
	if (bulletDirection == 1) {
		rigidbody2D.velocity.y = speed;
		Debug.Log(bulletDirection);
	} else if (bulletDirection == 2) {
		rigidbody2D.velocity.x = -speed;
		Debug.Log(bulletDirection);
	} else if (bulletDirection == 3) {
		rigidbody2D.velocity.y = -speed;
		Debug.Log(bulletDirection);
	} else if (bulletDirection == 4) {
		rigidbody2D.velocity.x = speed;
		Debug.Log(bulletDirection);
	}
}

// Gets called when the object goes out of the screen
function OnBecameInvisible() {  
    // Destroy the bullet 
    Destroy(gameObject);
    Debug.Log("bullet destroyed");
}

// Function called when the bullet collides with another object
function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;

    // If it collided with a wall
    if (name.ToLower().Contains("wall")) {
        // Destroy itself (the enemy)
        Destroy(gameObject);
    }
}
