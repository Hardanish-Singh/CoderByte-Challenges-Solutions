/*****************************************************************************************************************************************
*        In this MySQL challenge,                                                                                                        *
*                                                                                                                                        *
*        your query should return the vendor information along with the values from the table cb_vendorinformation.                      *
*        You should combine the values of the two tables based on the GroupID column.                                                    *
*        The final query should consolidate the rows to be grouped by FirstName,                                                         *
         and a Count column should be added at the end that adds up the number of times that person shows up in the table.               *
*        The output table should be sorted by the Count column in ascending order and then sorted by CompanyName in alphabetical order.  *
*                                                                                                                                        *
*        Your output should look like the                                                                                                *
*                                                                                                                                        *
*                     +---------+------------+-----------+------------+--------------+---------------------+--------+                    *
*                     | GroupID | FirstName  | LastName  | Job        | ExternalID   | CompanyNane         | Count  |                    *
*                     +---------+------------+-----------+------------+--------------+---------------------+--------+                    *
*                     |       6 |     Larry  |     Weis  | Contractor | 4219         | Alloy LLC           |     2  |                    *
*                     +---------+------------+-----------+------------+--------------+---------------------+--------+                    *
*                     |      39 |     Mary   |     Dial  | Manager    | 1860         | News Corp.          |     2  |                    *
*                     +---------+------------+-----------+------------+--------------+---------------------+--------+                    *
*                     |       5 |    Dennis  |       S   | Contractor | 24122        | WaterBus Enterprise |     2  |                    *
*                     +---------+------------+-----------+------------+--------------+---------------------+--------+                    *
*                     |      39 |    Lisa    | Roberts   | Manager    | 1860         | News Corp.          |     3  |                    *
*                     +---------+------------+-----------+------------+--------------+---------------------+--------+                    *
*                     |      35 |    Daniel  | Knolle    | Manager    | 39765        | Shipping & Co.      |     6  |                    *
*                     +---------+------------+-----------+------------+--------------+---------------------+--------+                    *
*                     |      35 |    Arnold  | Sully     | Manager    | 48507        | Shipping & Co.      |     6  |                    *
*                     +---------+------------+-----------+------------+--------------+---------------------+--------+                    *
*****************************************************************************************************************************************/

SELECT 
        * 
FROM 
(
        SELECT 
                main_table.GroupID,
                main_table.FirstName,
                main_table.LastName,
                main_table.Job,
                main_table.ExternalID,
                cb_vendorinformation.CompanyName,
        ( SELECT COUNT(*) FROM maintable_J22DJ AS sub_table WHERE main_table.FirstName = sub_table.FirstName ) AS Count
        FROM 
                maintable_J22DJ AS main_table
        JOIN cb_vendorinformation ON cb_vendorinformation.GroupID = main_table.GroupID
        GROUP by FirstName, LastName
) AS SubQuery
ORDER BY SubQuery.COUNT, SubQuery.CompanyName, SubQuery.FirstName DESC