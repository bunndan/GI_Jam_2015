using UnityEngine;
using System.Collections;

public class EnemyShooting2 : MonoBehaviour {
	
	public Rigidbody bulletPrefab;
	float attackSpeed = .5f;
	float coolDown;

	float yValue = 0; // 3/4 up from the center of player

	// Update is called once per frame
	void Start () {
		InvokeRepeating("Fire", 3, 3);
	}

	void Fire() {
		Instantiate (bulletPrefab, new Vector3 (transform.position.x, transform.position.y + yValue, transform.position.z), Quaternion.identity);

		coolDown = Time.time + attackSpeed;
	}
}
