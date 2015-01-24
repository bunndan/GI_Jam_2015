﻿#pragma strict

var startPoint : Vector3;
var endPoint : Vector3;
var speed : float;
private var increment:float;
var isMoving : boolean;
var currentDirection : float;

function Start () {
	startPoint = transform.position;
	endPoint = transform.position;
}

function Update () {
	if (increment <=1 && isMoving == true) {
		increment += speed/100;
		Debug.Log("Moving");
	}
	else {
		isMoving = false;
		//Debug.Log("Stopped");
	}
	
	if (isMoving) {
		transform.position = Vector3.Lerp(startPoint, endPoint, increment);
	}
	
	if (Input.GetKey("w") && isMoving == false) {
		increment = 0;
		isMoving = true;
		startPoint = transform.position;
		endPoint = new Vector3(transform.position.x, transform.position.y + 1, transform.position.z);
		
		currentDirection = 1;
	}
	
	if (Input.GetKey("s") && isMoving == false) {
		increment = 0;
		isMoving = true;
		startPoint = transform.position;
		endPoint = new Vector3(transform.position.x, transform.position.y - 1, transform.position.z);
		
		currentDirection = 3;
	}
	
	if (Input.GetKey("a") && isMoving == false) {
		increment = 0;
		isMoving = true;
		startPoint = transform.position;
		endPoint = new Vector3(transform.position.x - 1, transform.position.y, transform.position.z);
		
		currentDirection = 2;
	}
	
	if (Input.GetKey("d") && isMoving == false) {
		increment = 0;
		isMoving = true;
		startPoint = transform.position;
		endPoint = new Vector3(transform.position.x + 1, transform.position.y, transform.position.z);
		
		currentDirection = 4;
	}
}