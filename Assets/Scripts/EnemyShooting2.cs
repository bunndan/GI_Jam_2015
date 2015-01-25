using UnityEngine;
using System.Collections;

public class EnemyShooting : MonoBehaviour {
	
	public Rigidbody bulletPrefab;
	float attackSpeed = .5f;
	float coolDown;
	
	float yValue = 0; // 3/4 up from the center of player
	
	// Update is called once per frame
	void Update () {
		InvokeRepeating("Fire", 3, attackSpeed);
	}
	
	void Fire() {
		Rigidbody bPrefab = Instantiate (bulletPrefab, new Vector3 (transform.position.x, transform.position.y + yValue, transform.position.z), Quaternion.identity) as Rigidbody;
		
		bPrefab.rigidbody.AddForce (Vector3.up * 500);
		
		coolDown = Time.time + attackSpeed;
	}
}
