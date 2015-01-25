#pragma strict

// Public variable 
public var speed : int = 6;

// Gets called once when the bullet is created
function Start () {
	// Set the velocity to make the bullet move depending on the direction of the ship
	// var temp = gameObject.GetComponentInParent(float).currentDirection;
	var bulletDirection = this.transform.parent.gameObject.GetComponent(EnemyScript).currentDirection;
	
	// var bulletDirection = gameObject.GetComponent(PlayerStats2D).currentDirection;
	
	// Debug.Log("enemy bullet = " + bulletDirection);
	
	if (bulletDirection == 1) {
		this.rigidbody2D.velocity.y = speed;
		// Debug.Log("shoot up");
	} else if (bulletDirection == 2) {
		this.rigidbody2D.velocity.x = -speed;
		// Debug.Log("shoot left");
	} else if (bulletDirection == 3) {
		this.rigidbody2D.velocity.y = -speed;
		// Debug.Log("shoot down");
	} else if (bulletDirection == 4) {
		this.rigidbody2D.velocity.x = speed;
		// Debug.Log("shoot right");
	}
	
	/*
	this.transform.parent = 
	childObject = Instantiate(bullet, new Vector3(transform.position.x + 1.5, transform.position.y, transform.position.z + 0.5), Quaternion.identity) as GameObject;
	childObject.transform.parent = gameObject.transform;
	*/
}

// Gets called when the object goes out of the screen
function OnBecameInvisible() {  
    // Destroy the bullet 
    Destroy(gameObject);
    // Debug.Log("bullet destroyed");
}

// Function called when the bullet collides with another object
function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name.ToLower();
	
    // If it collided with a wall
    if (name.Contains("wall")) {
        // Destroy itself (the enemy)
        Destroy(gameObject);
        
   		// If the bullet hits a wood wall, destroy part of the wooden wall
   		if (name.Contains("wood")) {
   			Destroy(obj.gameObject);
   		}
   		
   		// Game is over if the bullet hits the base
   		if (name.Contains("base")) {
   			Debug.Log("GAME OVER");
   			Destroy(obj.gameObject);
   		}
    }
}
