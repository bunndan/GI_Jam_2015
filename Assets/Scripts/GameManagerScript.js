#pragma strict

public static var numOfEnemies : float = 0;
public static var score : int = 0;


public static var startTime : float; private var restSeconds : int; private var roundedRestSeconds : int; private var displaySeconds : int; private var displayMinutes : int;

var countDownSeconds : int;
public var text : String;

function Start() { 
	startTime = Time.fixedTime;
	Debug.Log("start " + startTime);
}

function OnGUI () {

	//make sure that your time is based on when this script was first called 
	//instead of when your game started 
	//var guiTime = Time.deltaTime;
	var guiTime = Time.time - startTime;
	//restSeconds = countDownSeconds - (guiTime);
	restSeconds = guiTime;

	//display messages or whatever here --&gt;do stuff based on your timer
	if (restSeconds == 60) {
		print ("One Minute Left");
	}
	if (restSeconds == 0) {
		print ("Time is Over");
	//do stuff here
	}

	//display the timer
	roundedRestSeconds = Mathf.CeilToInt(restSeconds);
	displaySeconds = roundedRestSeconds % 60;
	displayMinutes = roundedRestSeconds / 60; 

	text = String.Format ("{0:00}:{1:00}", displayMinutes, displaySeconds); 
	var score = gameObject.GetComponent(GameManagerScript).score;
	GUI.Label (Rect (400, 25, 100, 30), text + "  -  " + score);
}
