#pragma strict

// Variable to store the enemy prefab
public var player : GameObject;

// Variable to know how fast we should create new enemies
public var spawnTime : float = 6;

function Start() {
    InvokeRepeating("spawnPlayer", spawnTime, spawnTime);
}

// New function to spawn the player when they die
function spawnPlayer() {
	// Check that the player can spawn (has more lives)
	                  gameObject.GetComponent(GameManagerScript).numOfEnemies--;

	var lives       = gameObject.GetComponent(PlayerStats2D).lives;
	var baseAlive   = gameObject.GetComponent(PlayerStats2D).baseAlive;
	
	//Debug.Log("playerAlive = " + playerAlive + "  |  base = "+baseAlive);
	
	if (baseAlive != true || lives == 0) {
		    var spawnPoint = transform.position;
			
		    // Create a player at the 'spawnPoint' position
		    Instantiate(player, spawnPoint, Quaternion.identity);
		    gameObject.GetComponent(PlayerStats2D).playerAlive = true;
		
	}
}
