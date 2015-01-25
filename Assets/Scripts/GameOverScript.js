#pragma strict

function Start () {

}

function Update () {
	if (transform.position.y >= Camera.main.gameObject.transform.position.y) {
	    rigidbody2D.velocity.y = 0;
	}
}

function gameOver() {
	rigidbody2D.velocity.y = 10;
}
