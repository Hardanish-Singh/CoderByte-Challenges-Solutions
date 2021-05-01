/****************************************************************
 *              CODERBYTE SQL MEMBER COUNT CHALLENGE            *
 *                                                              *
 * Your table: maintable_L99ON                                  *
 * MySQL version: 5.5.56-log                                    *
 *                                                              *
 * Problem Statement                                            *
 * In this MySQL challenge, your query should return the names  *
 * of the people who are reported to (excluding null values),   *
 * the number of members that report to them, and the average   *
 * age of those members as an integer.                          *
 *                                                              *
 * The rows should be ordered by the names in alphabetical      *
 * order. Your output should look like the following table.     *
 *                                                              *
 ***************************************************************/

SELECT 
        ReportsTo,
        COUNT(ReportsTo) AS Members,
        CEIL(AVG(AGE)) AS `Average Age`
FROM
        maintable_L99ON
WHERE ReportsTo IS NOT NULL
GROUP BY ReportsTo