#pragma strict

public class SpriteCollection
{
	var sprites : Sprite[];
	var names : String[];

	public function SpriteCollection(spritesheet : String)
	{
		sprites = Resources.LoadAll.<Sprite>(spritesheet);
		names = new String[sprites.Length];

		for(var i = 0; i < names.Length; i++)
		{
			names[i] = sprites[i].name;
		}
	}
	
	public function GetSprite(name : String) : Sprite
	{
		return sprites[System.Array.IndexOf(names, name)];
	}
}