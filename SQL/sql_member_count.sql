/******************************************************************************************
 *              CODERBYTE SQL MEMBER COUNT CHALLENGE                                      *
 *                                                                                        *
 * Your table: maintable_L99ON                                                            *
 * MySQL version: 5.5.56-log                                                              *
 *                                                                                        *
 *      +-------+---------------+----------+--------------------+---------------+-----+   *
 *      | ID    | FirstName     | LastName |    ReportsTo       | Position      | Age |   *
 *      +-------+---------------+----------+--------------------+---------------+-----+   *
 *      | 1	| Daniel        | Smith	   |    Bob Boss	| Engineer	| 25  |   *
 *      | 2	| Mike          | White	   |    Bob Boss	| Contractor	| 22  |   *
 *      | 3	| Jenny         | Richards |	null	        | CEO	        | 45  |   *
 *      | 4	| Robert        | Black	   |    Daniel Smith	| Sales	        | 22  |   *
 *      | 5	| Noah          | Fritz	   |    Jenny Richards	| Assistant	| 30  |   *
 *      | 6	| David         | S	   |    Jenny Richards	| Director	| 32  |   *
 *      | 7	| Ashley        | Wells	   |    David S	        | Assistant	| 25  |   *
 *      | 8	| Ashley        | Johnson  |    null	        | Intern	| 25  |   *
 *      +-------+---------------+----------+--------------------+---------------+-----+   *
 *                                                                                        *
 * Problem Statement                                                                      *
 * In this MySQL challenge, your query should return the names of the people who are      *
 * reported to (excluding null values) the number of members that report to them, and     *
 * the average the number of members that report to them, and the average age of those    *
 * members as an integer                                                                  *
 *                                                              *
 * The rows should be ordered by the names in alphabetical order. Your output should look *
 * like the following table.                                                              *
 *                                                                                        *
 *                      +-----------------+------------+------------+                     *
 *                      | ReportsTo       | Members    | Average Age|                     *
 *                      +-----------------+------------+------------+                     *
 *                      | Bob Boss        | 2          | 24         |                     *
 *                      | Daniel Smith    | 1          | 22         |                     *
 *                      | David S         | 1          | 25         |                     *
 *                      | Jenny Richards  | 2          | 31         |                     *
 *                      +-----------------+------------+------------+                     *
 *                                                                                        *
 *****************************************************************************************/

SELECT 
        ReportsTo,
        COUNT(ReportsTo) AS Members,
        CEIL(AVG(AGE)) AS `Average Age`
FROM
        maintable_L99ON        
WHERE ReportsTo IS NOT NULL
GROUP BY ReportsTo
ORDER BY ReportsTo