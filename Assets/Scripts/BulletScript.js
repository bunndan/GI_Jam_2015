#pragma strict

// Public variable 
public var speed : int = 6;

// Gets called once when the bullet is created
function Start () {
	// Set the velocity to make the bullet move depending on the direction of the ship
	
	var bulletDirection = gameObject.GetComponent(PlayerStats2D).currentDirection;
	
	if (bulletDirection == 1) {
		rigidbody2D.velocity.y = speed;
	} else if (bulletDirection == 2) {
		rigidbody2D.velocity.x = -speed;
	} else if (bulletDirection == 3) {
		rigidbody2D.velocity.y = -speed;
	} else if (bulletDirection == 4) {
		rigidbody2D.velocity.x = speed;
	}
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
   			Destroy(obj.gameObject);
   			GameObject.Find("Game_Over").GetComponent(GameOverScript).gameOver();
   		}
    }
}
