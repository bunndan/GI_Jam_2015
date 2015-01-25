#pragma strict

function Start () {

}

function Update () {
	if (transform.position.y >= Camera.main.gameObject.transform.position.y) {
	    rigidbody2D.velocity.y = 0;
	}
}

function gameOver() {
	Debug.Log("game over 123");
	rigidbody2D.velocity.y = 50;
}
