#pragma strict

function OnTriggerEnter2D(obj : Collider2D) {
    var name = obj.gameObject.name.ToLower();
    // If it collided with a bullet
    if (name.Contains("bullet")) {
        Application.LoadLevel("Level3");
        Destroy(obj.gameObject);
    }
}
