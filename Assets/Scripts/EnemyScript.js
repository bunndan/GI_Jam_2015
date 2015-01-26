#pragma strict

// Public variable that contains the speed of the enemy
public var speed : int = 50;
public var currentDirection : float = 3;


// Variable to store the bullet prefab
public var bullet : GameObject;

// Variable to know how fast we should shoot
public var shootTime : float = 2;

var spriteImageUp : Sprite;
var spriteImageDown : Sprite;
var spriteImageLeft : Sprite;
var spriteImageRight : Sprite;

var explodeSound : AudioClip;

// Function called when the enemy is created
function Start () {
    randomizeDirection();
    this.transform.FindChild("FrontCollider").gameObject.GetComponent(EnemyColliderScript).colliderChange();
    
    InvokeRepeating("fire", shootTime, shootTime);
    
    spriteImageUp    = Resources.Load("enemy2_v1_up", typeof(Sprite)) as Sprite;
    spriteImageDown  = Resources.Load("enemy2_v1_down", typeof(Sprite)) as Sprite;
    spriteImageLeft  = Resources.Load("enemy2_v1_left", typeof(Sprite)) as Sprite;
    spriteImageRight = Resources.Load("enemy2_v1_right", typeof(Sprite)) as Sprite;
}

function randomizeDirection() {
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	
	currentDirection = Mathf.Floor(Random.Range(1,5));
	if (currentDirection == 5) {
		currentDirection = 4;
	}
	
	yield WaitForSeconds (2);
	addVelociy();
}

function randomizeDirection(dontUseNum) {
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	do {
		currentDirection = Mathf.Floor(Random.Range(1,5));
		if (currentDirection == 5) {
			currentDirection = 4;
		}
	} while (currentDirection == dontUseNum);
	// Debug.Log("new direction = " + currentDirection + "  |  " + dontUseNum);
	
	if (currentDirection == 1) {		// up
	    GetComponent(SpriteRenderer).sprite = spriteImageUp;
    	
    } else if (currentDirection == 2) {	// left
	    GetComponent(SpriteRenderer).sprite = spriteImageLeft;
		
    } else if (currentDirection == 3) {	// down
	    GetComponent(SpriteRenderer).sprite = spriteImageDown;
    	
    } else if (currentDirection == 4) {	// right
	    GetComponent(SpriteRenderer).sprite = spriteImageRight;
    	
    }
	yield WaitForSeconds (0.75);
	
	addVelociy();
}

var objs : GameObject [];
     
var SpawnPoint : Transform;


function fire() {
	if (currentDirection == 1) {
		var childObject = Instantiate(bullet, new Vector3(transform.position.x, transform.position.y + 1.5, transform.position.z + 0.5), Quaternion.identity) as GameObject;
		childObject.transform.parent = gameObject.transform;
	} else if (currentDirection == 2) {
		childObject = Instantiate(bullet, new Vector3(transform.position.x - 1.5, transform.position.y, transform.position.z + 0.5), Quaternion.identity) as GameObject;
		childObject.transform.parent = gameObject.transform;
	} else if (currentDirection == 3) {
		childObject = Instantiate(bullet, new Vector3(transform.position.x, transform.position.y - 1.5, transform.position.z + 0.5), Quaternion.identity) as GameObject;
		childObject.transform.parent = gameObject.transform;
	} else if (currentDirection == 4) {
		childObject = Instantiate(bullet, new Vector3(transform.position.x + 1.5, transform.position.y, transform.position.z + 0.5), Quaternion.identity) as GameObject;
		childObject.transform.parent = gameObject.transform;
	}
}

function addVelociy() {
	// Debug.Log("moving");
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


/*
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
*/

function Update() {
//	addVelociy();
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
        
        gameObject.GetComponent(GameManagerScript).numOfEnemies--;
		explodeSound = Resources.Load("explodeSoundv2", typeof(AudioClip)) as AudioClip;
		AudioSource.PlayClipAtPoint(explodeSound, transform.position);
    }
}

// Gets called when the object goes out of the screen
function OnBecameInvisible() {  
    // Destroy the bullet 
    Destroy(gameObject);
}
