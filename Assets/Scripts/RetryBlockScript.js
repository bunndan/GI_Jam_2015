#pragma strict

function OnTriggerEnter2D(obj : Collider2D) {
    var name = obj.gameObject.name.ToLower();
    // If it collided with a bullet
    if (name.Contains("bullet")) {
        Application.LoadLevel("Menu");
        Destroy(obj.gameObject);
        
        gameObject.GetComponent(PlayerStats2D).lives = 3;
        gameObject.GetComponent(PlayerStats2D).baseAlive = true;
        gameObject.GetComponent(SpawnPlayerGameOverScript).continueSpawning = true;
        gameObject.GetComponent(GameManagerScript).score = 0;

    }
}
