#pragma strict

function Start () {

}

function Update () {

}

// Function called when the enemy collides with another object
function OnTriggerEnter2D(obj : Collider2D) {
    var name = obj.gameObject.name.ToLower();

    // If it collided with a bullet
    if (name.Contains("wall") || name.Contains("enemy") || name.Contains("player")) {
    	// Debug.Log("hit wall");
        
        // Temporarily reset collider
       	var boxCollider = GetComponent(BoxCollider2D) as BoxCollider2D;
		boxCollider.size = Vector2(2, 2);
		
        this.transform.parent.GetComponent(EnemyScript).randomizeDirection(this.transform.parent.gameObject.GetComponent(EnemyScript).currentDirection);
        this.transform.parent.rigidbody2D.velocity.x = 0;
		this.transform.parent.rigidbody2D.velocity.y = 0;
		
        // Change box collider depending on direction of movement
        colliderChange();
    }
}

function colliderChange() {
	var boxCollider = GetComponent(BoxCollider2D) as BoxCollider2D;
	
	var bulletDirection = this.transform.parent.gameObject.GetComponent(EnemyScript).currentDirection;
	
	// Debug.Log("direction = " + bulletDirection);
	
	if (bulletDirection == 1) {
		boxCollider.size = Vector2(1.85, 1.9);
		boxCollider.center = Vector2(0, 0.05);
	} else if (bulletDirection == 3) {
		boxCollider.size = Vector2(1.85, 1.9);
		boxCollider.center = Vector2(0, -0.05);
	} else if (bulletDirection == 2) {
		boxCollider.size = Vector2(1.9, 1.85);
		boxCollider.center = Vector2(-0.05, 0);
	} else if (bulletDirection == 4) {
		boxCollider.size = Vector2(1.9, 1.85);
		boxCollider.center = Vector2(0.05, 0);
	}
}
