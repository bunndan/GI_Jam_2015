#pragma strict

// Variable to store the enemy prefab
public var player : GameObject;

// Variable to know how fast we should create new enemies
public var spawnTime : float = 2;

function Start() {  
    // Call the 'addPlayer' function every 'spawnTime' seconds
    InvokeRepeating("spawnPlayer", spawnTime, spawnTime);
}

// New function to spawn the player when they die
function spawnPlayer() {
	// Check that the player can spawn (has more lives)
	                  gameObject.GetComponent(GameManagerScript).numOfEnemies--;

	var lives       = gameObject.GetComponent(PlayerStats2D).lives;
	var playerAlive = gameObject.GetComponent(PlayerStats2D).playerAlive;
	if (playerAlive == false) {
		Debug.Log("lives = " + lives);
		if (lives > 0) {
		    var spawnPoint = transform.position;
			gameObject.GetComponent(PlayerStats2D).lives--;
			
		    // Create a player at the 'spawnPoint' position
		    Instantiate(player, spawnPoint, Quaternion.identity);
		    gameObject.GetComponent(PlayerStats2D).playerAlive = true;
		} else {
			Debug.Log("Invoke GAME OVER sequence");
		}
	}
}
