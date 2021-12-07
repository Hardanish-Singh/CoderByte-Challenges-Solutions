/*********************************************************************************************
 *                            CODERBYTE SQL EMPLOYEE SALARIES CHALLENGE                      *
 *                                                                                           *
 * Your table: maintable_M3LJZ                                                               *
 * MySQL version: 5.5.56-log                                                                 *
 *                                                                                           *
 *        +-------+---------------+------------+------------------+---------------+          *
 *        | ID    | Name          | DivisionID |    ManagerID     | Salary        |          *
 *        +-------+---------------+------------+------------------+---------------+          *
 *        | 356	| Daniel Smith  | 100	     |    133	        | 40000 	  |          *
 *        | 122	| Arnold Sully  | 101	     |    null    	| 60000 	  |          *
 *        | 467	| Lisa Roberts  | 100        |	  null	        | 80000	          |          *
 *        | 112	| Mary Dial     | 105	     |    467   	| 65000	          |          *
 *        | 775	| Dennis Front  | 103	     |    null  	| 90000 	  |          *
 *        | 111	| Larry Weis    | 104	     |    35534 	| 75000 	  |          *
 *        | 222	| Mark Red      | 102	     |    133	        | 86000 	  |          *
 *        | 577	| Robert Night  | 105        |    12353	        | 76000 	  |          *
 *        | 133	| Susan Wall    | 105        |    577	        | 110000	  |          *
 *        +-------+---------------+------------+------------------+---------------+          *
 *                                                                                           *
 * Problem Statement                                                                         *
 * In this MySQL challenge, your query should return the information for the employee with   *
 * the third highest salary. Write a query that will find this employee and return that row, *
 * but then replace the DivisionID column with the corresponding DivisionName from the table *
 * cb_companydivisions. You should also replace the ManagerID column with the ManagerName if *
 * the ID exists in the table and is not NULL.                                               *
 *                                                                                           *
 * Your output should look like the following table.                                         *
 *                                                                                           *
 *       +-------+---------------+--------------+--------------------+---------------+       *
 *       | ID    | Name          | DivisionName |    ManagerName     | Salary        |       *
 *       +-------+---------------+--------------+--------------------+---------------+       *
 *       | 222	| Mark Red      | Sales	       |    Susan Wall	    | 86000 	     |       *
 *       +-------+---------------+--------------+--------------------+---------------+       *
 *                                                                                           *
 ********************************************************************************************/

SELECT 
        maintable_M3LJZ.ID, 
        maintable_M3LJZ.Name, 
        cb_companydivisions.DivisionName AS DivisionName,
        t.Name AS ManagerName,
        maintable_M3LJZ.Salary 
FROM maintable_M3LJZ

JOIN cb_companydivisions ON cb_companydivisions.id = maintable_M3LJZ.DivisionID

JOIN 
(
        SELECT 
                Name, 
                ID
        FROM    
                maintable_M3LJZ
)AS t ON t.ID = maintable_M3LJZ.ManagerID

WHERE Salary = (
                  SELECT 
                        MIN(Salary) 
                  FROM (
                            SELECT  
                                        * 
                            FROM 
                                        maintable_M3LJZ 
                            ORDER BY salary DESC 
                            LIMIT 3
                       ) AS x
               )