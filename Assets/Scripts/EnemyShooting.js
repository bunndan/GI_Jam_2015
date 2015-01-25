#pragma strict

// Variable to store the bullet prefab
public var bullet : GameObject;

// Variable to know how fast we should shoot
public var shootTime : float = 5;

function Start () {
    InvokeRepeating("addEnemy", shootTime, shootTime);
}

function Update () {

}
