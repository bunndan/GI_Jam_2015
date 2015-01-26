#pragma strict

// Variable to store the enemy prefab
public var enemy : GameObject;

// Variable to know how fast we should create new enemies
public var spawnTime : float = 6;
public var totalNumberOfEnemies = 3;

function Start() {  
    // Call the 'addEnemy' function every 'spawnTime' seconds
    InvokeRepeating("addEnemy", spawnTime, spawnTime);
    // addEnemy();
}

// New function to spawn an enemy
function addEnemy() {
	
	var randomNum = Mathf.Floor(Random.Range(1,5));
	var nums = gameObject.GetComponent(GameManagerScript).numOfEnemies;
	if (randomNum <= 3 && nums < totalNumberOfEnemies) {
		var spawnPoint = transform.position;
		
	    // Create an enemy at the 'spawnPoint' position
	    Instantiate(enemy, spawnPoint, Quaternion.identity);
		gameObject.GetComponent(GameManagerScript).numOfEnemies++;
	}
}
