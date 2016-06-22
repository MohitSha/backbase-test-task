##Editing and Deleting Computer

###Prerequisites
* At least one computer should be present in the system

|#|Test Step | Expected result|
|:-:|:------------: | :-------------|
|1 | Go to `http://computer-database.herokuapp.com/computers` | Main page is displayed. User should be able to :<ul><li>Open any existing computer details</li><li>Search for computer by it's name</li><li>Add new computer</li></ul>|
|2 |Click on one of the existing computers|`Edit computer` screen should be displayed |
|3 |Change computer name |'Computer name' field now contains new name |
|4 | Change `Introduced date` |`Introduced date` field contains new date|
|5 |  Change `Discontinued date` |`Discontinued date` field contains new date|
|6 |Select another `Company` from drop down list| `Company` drop down list shows a new selected value|
|7 |Click `Cancel` button |Main screen is displayed. Original computer is still present on the list and it's data was not modified|
|8 |Search for a computer with a new name that we just tried to enter but didn't submit |Computer with such name should not exist.  |
|9 |Repeat steps `2-6` and click `Save this computer` button| Main page with `Done! Computer {modified name}} has been updated` message is displayed. Newly updated computer is present on the list with updated data. "Old" computer does not exists in the system any more|
|10 | Click on random computer| `Edit computer` screen is displayed|
|11 |Enter name of the computer that already exists in the database | Name was entered |
|12 |Click `Save this computer` button|Main screen is displayed with `Done! Computer {modified name}} has been updated` message. **Note. I would suggest that : User should not be allowed to save his changes because computer with such name already exists. `Computer name` field should be marked with red and `Computer with such name already exists` tooltip should be displayed next to the name field**|
|13 |Open computer details one more time and click `Delete this computer` button | Main screen is displayed with `Done! Computer has been deleted` message . **Note: Usually i would suggest to add confirmation dialog for deleting action, but in this case i can understand why it's not there - the button  is far from other fields and therefore chances that it will be clicked by accident are small**|
|14 |Try to search for deleteed computer | Deleted computer should not be found|

