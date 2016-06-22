##New computer creation

|#|Test Step | Expected result|
|:-:|:------------: | :-------------|
|1 | Go to `http://computer-database.herokuapp.com/computers` | Main page is displayed. User should be able to :<ul><li>Open any existing computer details</li><li>Search for computer by it's name</li><li>Add new computer</li></ul>|
|2 |Click `Add a new computer` button |`Add computer` screen should be displayed |
|3 |Click `Create this computer` button |'Computer name' field should be marked with red and saving should not be allowed |
|4 |Enter empty space into computer name and click `Create this computer` butoon | `Computer name` field should be marked with red and user should not be allowed to store computer with such name|
|5 |Enter into `computer name` field 1000 length string|User is allowed to enter no more then 750 characters. Everything that is evered or copypasted after 750 character is ignored. _**I think that this is too much for computer name. I would suggest to limit it with 100 characters or maybe even less**_ |
|6 |Click `Create this computer` button |Main page is displayed with `Done ! Computer {computer_name} has been created` . Created computer should be displayed in the list of all computers |
|7 |Click `Add a new computer` button |`Add computer` screen should be displayed |
|8 |Enter valid `Computer name` |Name was entered |
|9 |Enter empty space into `Introduced date` field and click `Create this computer` button |`Introduced date` field should be marked with red and user should not be allowed to save this computer . **Note: Fields validation should trigger on focus change, not on buttonClick - this way is more interactive and less frustrating with a user. Aspecially when there are a lot of fields** |
|10 |Enter next values into `Introduced date` field and click `Create this computer ` button : <ul><li></li><li>22-22-2222</li><li>10-24-1986</li><li>24-10-1985</li><li>1985/12/24</li><li>10 Mar 1985</li><li>03.04.1985</li><li>1982.03.04</li><li>Some date</li><li>1234</li><li>!@#)(!@*&*@!#)!@#_</li></ul>| User should not be allowed to save computer with such `Introduced date` and the field should be marked with red. **Note: it is still possible to enter years like *1850* or earlier which doesn't make much sence. I would add to validation also check that `Intoroduced year` should not be less then `February 15, 1946` - that's when the first computer was invented** |
|11 |Repeat step 10 for `Discontinued date` | Expected result should be same |
|12 |Enter `Introduced date` with valid format| Date was entered|
|13 |Enter `Discontinued date` with valid format | Date was entered |
|14 |Select random `Company` | Company was selected|
|15 |Click `Create this computer`  button| Main page is displayed with `Done ! Computer {computer_name} has been created` . Created computer should be displayed in the list of all computers with all details that were entered previously.  |
|16 |Click `Add a new computer` button |`Add computer` screen should be displayed |
|17 |Enter valid `Computer name`, `Introduced date`, `Discontinued date`, select existing `Company` |All fields contain entered data |
|18 |Click `Cancel` button | Main page is displayed with all existing computers. Computer with data that was just entered is not present in the screen and cannot be found using search|
|19 |Click `Add a new computer` button  |`Add a computer` screen is displayed. All fields should be empty and not containt last entered data from step 17  |
|20 |Verify that use can navigate through all elements on the screen using keyboard | User should be able to move between edit fields and drop-down list by using `TAB` and `SHIFT+TAB` combinations. Also, user should be able to save form with an `ENTER` button push, and cancel his actions with `ESC` button push.  |
|20 |Verify that it's impossible to create 2 computers with the same name | If user tries to save computer with a name that is already in Database, then `Computer name` field should be marked with red and `Computer with such name already exists` tooltip should be displayed next to this field **NOTE: this is not how it's implemented right now, but i would log this into JIRA as a suggestion**|

