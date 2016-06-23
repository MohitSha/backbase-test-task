##Search and Pagination

###Prerequisites
* Around 20-30 computers should be created

|#|Test Step | Expected result|
|:-:|:------------: | :-------------|
|1 | Go to `http://computer-database.herokuapp.com/computers` | Main page is displayed. User should be able to :<ul><li>Open any existing computer details</li><li>Search for computer by it's name</li><li>Add new computer</li></ul>|
|2 |Verify that `Previous` button is disabled|On the first page `Previous` button should be disabled |
|3 |Click `Next` button |Next 10 computers should be displayed on the list . `Previous` button should become available |
|4 | Scroll to the end of the list by clicking `Next` button |At the end of the list `Next` button should become disabled|
|5 | Verify that paging counter displays correct information on every page turn |Page counter adds +10 to every `Next` or and -10 to every `Previous` button click |
|6 |Click on `Computer name` tab | Paging should be dropped to the first page and all computers should be sorted by name in ascending order|
|7 |Click on `Computer name` tab one more time |Computers should be sorted by name in descending order|
|8 |Repeat steps `6-7`with `Introduced`, `Discontinued` and `Company` columnds|Results should be same. It should be possible to sort only by one column at a time **NOTE: sorting doesn't work on this page** |
|9 |Click `Filter by name` button| All computers should be displayed|
|10 | Enter `ab` into search field and click `Filter by name` button| All computers that contain `ab` in their name should be displayed|
|11 |Click on `Computer name` column| `Filter by name` results should remain on the page and all computers should be sorted by name in ascending order |
|12 |Verify that sorting by each of the columns works as expected and doesn't deactivates filtering by name| Results are same as with sorting without filtering|
|13 |Click on one of the computers names | `Edit computer` screen is displayed|
|14 |Try to modify some data and save it| User should be navigated back to his `Filter by name` result. If new computer is still can be displayed with current filter query, then it should be visible on the screen. If name was changed in a way that doesn't match to filter query, then it shouldn't be displayed any more. **NOTE: right now i just get redirected back to the first page and filtering is reset**|

