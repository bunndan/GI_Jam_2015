﻿#pragma strict

var startPoint : Vector3;
var endPoint : Vector3;
var speed : float;
private var increment:float;
var isMoving : boolean;
public static var currentDirection : float = 1;

function Start () {
	startPoint = transform.position;
	endPoint = transform.position;
}

function Update () {
	if (increment <=1 && isMoving == true) {
		increment += speed/100;
		// Debug.Log("Moving");
	}
	else {
		isMoving = false;
		//Debug.Log("Stopped");
	}
	
	if (isMoving) {
		transform.position = Vector3.Lerp(startPoint, endPoint, increment);
	}
	
	if (Input.GetKey("w") && isMoving == false) {
		// Cast a ray.
		var hit: RaycastHit2D = Physics2D.Raycast(new Vector3 (transform.position.x, transform.position.y + 1.0001, transform.position.z), Vector2.up);
		
		// If it hits something...
		if (hit.collider != null) {
			// Calculate the distance from the surface and the "error" relative
			// to the floating height.
			var distance = Mathf.Abs(hit.point.y - transform.position.y);
			Debug.Log("raycasting - distance " + distance);
			
			// Allow movement only if a collision wall is not beside the unit
			if (distance > 1.25) {
				increment = 0;
				isMoving = true;
				startPoint = transform.position;
				endPoint = new Vector3(transform.position.x, transform.position.y + 1, transform.position.z);
			}
		}
		currentDirection = 1;
	}
	
	if (Input.GetKey("s") && isMoving == false) {
		// Cast a ray.
		var hit2: RaycastHit2D = Physics2D.Raycast(new Vector3 (transform.position.x, transform.position.y - 1.0001, transform.position.z), -Vector2.up);
		
		// If it hits something...
		if (hit2.collider != null) {
			// Calculate the distance from the surface and the "error" relative
			// to the floating height.
			distance = Mathf.Abs(-hit2.point.y + transform.position.y);
			Debug.Log("raycasting - distance " + distance);
			
			// Allow movement only if a collision wall is not beside the unit
			if (distance > 1.25) {
				increment = 0;
				isMoving = true;
				startPoint = transform.position;
				endPoint = new Vector3(transform.position.x, transform.position.y - 1, transform.position.z);
			}
		}
		currentDirection = 3;
	}
	
	if (Input.GetKey("a") && isMoving == false) {
		// Cast a ray.
		var hit3: RaycastHit2D = Physics2D.Raycast(new Vector3 (transform.position.x - 1.0001, transform.position.y, transform.position.z), -Vector2.right);
		
		// If it hits something...
		if (hit3.collider != null) {
			// Calculate the distance from the surface and the "error" relative
			// to the floating height.
			distance = Mathf.Abs(-hit3.point.x + transform.position.x);
			Debug.Log("raycasting - distance " + distance);
			
			// Allow movement only if a collision wall is not beside the unit
			if (distance > 1.25) {
				increment = 0;
				isMoving = true;
				startPoint = transform.position;
				endPoint = new Vector3(transform.position.x - 1, transform.position.y, transform.position.z);
			}
		}
		currentDirection = 2;
	}
	
	if (Input.GetKey("d") && isMoving == false) {
		// Cast a ray.
		var hit4: RaycastHit2D = Physics2D.Raycast(new Vector3 (transform.position.x + 1.0001, transform.position.y, transform.position.z), Vector2.right);
		
		// If it hits something...
		if (hit4.collider != null) {
			// Calculate the distance from the surface and the "error" relative
			// to the floating height.
			distance = Mathf.Abs(hit4.point.x - transform.position.x);
			Debug.Log("raycasting - distance " + distance);
			
			// Allow movement only if a collision wall is not beside the unit
			if (distance > 1.25) {
				increment = 0;
				isMoving = true;
				startPoint = transform.position;
				endPoint = new Vector3(transform.position.x + 1, transform.position.y, transform.position.z);
			}
		}
		currentDirection = 4;
	}
}

// Function called when the bullet collides with another object
function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name.ToLower();
	
    // If it collided with a wall
    if (name.Contains("wall")) {
        Debug.Log("wallhit");
    }
}
