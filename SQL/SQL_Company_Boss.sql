/*****************************************************************************************************************
*                                               SQL COMPANY BOSS                                                 *
*                                                                                                                *
*        Your table: maintable_WD9RV                                                                             *
*        MySQL version: 5.5.56-log                                                                               *
*                                                                                                                *
*        In this MySQL challenge, your query should return all the people who report to either Jenny Richards    *
*        or have a NULL value in ReportsTo. The rows should be ordered by Age. Your query should also add a      *
*        column at the end with a title of Boss Title where the value is either None or CEO.                     *
*                                                                                                                *
*        +-----------+----------+----------------+---------------+-----+-----------+                             *
*        | FirstName | LastName | ReportsTo      | Position      | Age | BossTitle |                             *
*        +-----------+----------+----------------+---------------+-----+-----------+                             *
*        | Ashley    | Johnson  | null           | Intern        | 25  | None      |                             *
*        +-----------+----------+----------------+---------------+-----+-----------+                             *
*        | Noah      | Fritz    | Jenny Richards | Assistant	 | 30  | CEO       |                             *
*        +-----------+----------+----------------+---------------+-----+-----------+                             *
*        | David     | S        | Jenny Richards | Director	     | 32  | CEO       |                             *
*        +-----------+----------+----------------+---------------+-----+-----------+                             *
*        | Jenny     | Richards | null           | CEO           | 45  | None      |                             *
*        +-----------+----------+----------------+---------------+-----+-----------+                             *
*                                                                                                                *
*****************************************************************************************************************/

SELECT 
    FirstName,
    LastName,
    ReportsTo,
    Position,
    Age,
    CASE WHEN ReportsTo = 'Jenny Richards' THEN 'CEO' ELSE 'None' END AS BossTitle
FROM 
    maintable_WD9RV
WHERE ReportsTo = 'Jenny Richards' OR ReportsTo IS NULL
ORDER BY Age;