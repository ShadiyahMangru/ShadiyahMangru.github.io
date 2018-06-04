package ALLCAPS;
/**
* The Player class provides a template for each player object.  This class includes the variables that
* are unlikely to change during a player's contract with the Washington Capitals.  We will treat these
* variables as constants; as a result, no setter methods are available in this class.
*
* @author  Shadiyah Mangru
* @version 1.0
* @since   June 2018
*/


public class Player{
	//fields
	private String firstName;
	private String lastName;
	private int jerseyNumber;
	private String position;
	
	/**
	* Comprehensive constructor with four parameters that initialize all player variables. 
	* @param fn player's first name
	* @param ln player's last name
	* @param jn player's jersey number
	* @param p player's position
	*/
	public Player(String fn, String ln, int jn, String p){
		firstName = fn;
		lastName = ln;
		jerseyNumber = jn;
		position = p;
	}

	/**
	* Comprehensive constructor with one Player parameter that initializes all player variables
	* @param player an instance of the Player class
	*/
	public Player(Player player){
		firstName = player.getFirstName();
		lastName = player.getLastName();
		jerseyNumber = player.getJerseyNumber();
		position = player.getPosition();
	}
	
	//getters
	/**
	* returns the player's first name
	* @return String player's first name 
	*/
	public String getFirstName(){
		return firstName;	
	}
	
	/**
	* returns the player's last name
	* @return String player's last name 
	*/
	public String getLastName(){
		return lastName;	
	}

	/**
	* returns the player's jersey number
	* @return int player's jersey number 
	*/
	public int getJerseyNumber(){
		return jerseyNumber;	
	}

	/**
	* returns the player's position
	* @return String player's position 
	*/
	public String getPosition(){
		return position;	
	}
}