using UnityEngine;
using System.Collections;

public class GameOverScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Vector3 Velocity = new Vector3(0, 5 ,0);
		rigidbody2D.velocity = (Vector3) (Velocity);
	}
	
	// Update is called once per frame
	void Update () {
		if (transform.position.y >= Camera.main.gameObject.transform.position.y) {
			rigidbody2D.velocity = (Vector3) (new Vector3(0,0,0));
		}
	}
}
