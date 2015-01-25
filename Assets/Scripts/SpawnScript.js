#pragma strict

// Variable to store the enemy prefab
public var enemy : GameObject;

// Variable to know how fast we should create new enemies
public var spawnTime : float = 6;
public var totalNumberOfEnemies = 10;

function Start() {  
    // Call the 'addEnemy' function every 'spawnTime' seconds
    InvokeRepeating("addEnemy", spawnTime, spawnTime);
    // addEnemy();
}

// New function to spawn an enemy
function addEnemy() {
	var nums = gameObject.GetComponent(GameManagerScript).numOfEnemies;
	if (nums <= totalNumberOfEnemies) {
	    var spawnPoint = transform.position;
		gameObject.GetComponent(GameManagerScript).numOfEnemies++;
		
	    // Create an enemy at the 'spawnPoint' position
	    Instantiate(enemy, spawnPoint, Quaternion.identity);
	}
}
