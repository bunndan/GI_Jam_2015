#pragma strict

// Public variable that contains the speed of the enemy
public var speed : int = 50;
private var currentDirection : float = 3;

// Variable to dtetermine what 
public var fireTime : float = 3;

// Function called when the enemy is created
function Start () {  
    // Add a speed to the enemy
    randomizeDirection();
    
    InvokeRepeating("fire", fireTime, fireTime);
    // rigidbody2D.velocity.y = speed;
}

function randomizeDirection() {
	currentDirection = Mathf.Floor(Random.Range(1,5));
	if (currentDirection == 5) {
		currentDirection = 4;
	}
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	//Debug.Log("dir = " + currentDirection);
}


function fire() {
	Debug.Log("Firing");
}

function addVelociy() {
	// Debug.Log("Adding velocity = " + currentDirection);
	if (currentDirection == 1) {		// up
    	rigidbody2D.velocity.x = 0;
    	rigidbody2D.velocity.y = -speed;
    	
    } else if (currentDirection == 2) {	// left
    	rigidbody2D.velocity.x = speed;
    	rigidbody2D.velocity.y = 0;
    	
    } else if (currentDirection == 3) {	// down
    	rigidbody2D.velocity.x = 0;
    	rigidbody2D.velocity.y = speed;
    	
    } else if (currentDirection == 4) {	// right
    	rigidbody2D.velocity.x = -speed;
    	rigidbody2D.velocity.y = 0;
    	
    }
}

function Update() {
	addVelociy();
	
	
	if (currentDirection == 1) {
		// Cast a ray.
		var hit: RaycastHit2D = Physics2D.Raycast(new Vector3 (transform.position.x, transform.position.y + 1.0001, transform.position.z), Vector2.up);
		
		// If it hits something...
		if (hit.collider != null) {
			// Calculate the distance from the surface and the "error" relative to the floating height.
			var distance = Mathf.Abs(hit.point.y - transform.position.y);
			// Debug.Log("raycasting - distance " + distance);
			if (distance <= 1.03) {
				randomizeDirection();
			}
		}
	}
	
	if (currentDirection == 3) {
		// Cast a ray.
		var hit3: RaycastHit2D = Physics2D.Raycast(new Vector3 (transform.position.x, transform.position.y - 1.0001, transform.position.z), -Vector2.up);
		
		// If it hits something...
		if (hit3.collider != null) {
			// Calculate the distance from the surface and the "error" relative to the floating height.
			distance = Mathf.Abs(-hit3.point.y + transform.position.y);
			// Debug.Log("raycasting - distance " + distance);
			if (distance <= 1.1) {
				randomizeDirection();
			}
		} 
	}
	
	if (currentDirection == 2) {
		// Cast a ray.
		var hit2: RaycastHit2D = Physics2D.Raycast(new Vector3 (transform.position.x - 1.0001, transform.position.y, transform.position.z), -Vector2.right);
		
		// If it hits something...
		if (hit2.collider != null) {
			// Calculate the distance from the surface and the "error" relative to the floating height.
			distance = Mathf.Abs(-hit2.point.x + transform.position.x);
			// Debug.Log("raycasting - distance " + distance);
			if (distance <= 1.05) {
				randomizeDirection();
			}
		}
	}
	
	if (currentDirection == 4) {
		// Cast a ray.
		var hit4: RaycastHit2D = Physics2D.Raycast(new Vector3 (transform.position.x + 1.0001, transform.position.y, transform.position.z), Vector2.right);
		
		// If it hits something...
		if (hit4.collider != null) {
			// Calculate the distance from the surface and the "error" relative to the floating height.
			distance = Mathf.Abs(hit4.point.x - transform.position.x);
			// Debug.Log("raycasting - distance " + distance);
			if (distance <= 1.05) {
				randomizeDirection();
			}
		}
	}
}

// Function called when the enemy collides with another object
function OnTriggerEnter2D(obj : Collider2D) {
    var name = obj.gameObject.name;

    // If it collided with a bullet
    if (name == "PlayerBullet_v2(Clone)") {
        // Destroy itself (the enemy)
        Destroy(gameObject);

        // And destroy the bullet
        Destroy(obj.gameObject);
    }
}	

// Gets called when the object goes out of the screen
function OnBecameInvisible() {  
    // Destroy the bullet 
    Destroy(gameObject);
}
