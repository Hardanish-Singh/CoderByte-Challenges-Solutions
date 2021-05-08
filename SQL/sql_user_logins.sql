/*
        SOLUTION ONE WITHOUT LAG FUNCTION
*/
SELECT
        MONTHNAME(STR_TO_DATE(MONTH(DateJoined), '%m')) AS Month,
        date1 - previous AS MonthToMonthChange
FROM
(
        SELECT
                date1,
                DateJoined,
                @prev previous, 
                @prev := date1 AS prev
        FROM 
        (
                SELECT 
                        COUNT(DateJoined) AS date1,
                        DateJoined,
                        (SELECT @prev := '') r
                FROM 
                        maintable_O9AAP
                GROUP BY MONTH(DateJoined)
                ORDER BY DateJoined
        )AS SubQuery1
) AS SubQuery2
WHERE previous > 0

/*
        SOLUTION 2 WITH LAG FUNCTION
*/

SELECT
        MONTHNAME(STR_TO_DATE(MONTH(DateJoined), '%m')) AS Month,
        date1 - date2 AS MonthToMonthChange
FROM
(
        SELECT
                date1,
                LAG(date1, 1) OVER ( )AS date2,
                DateJoined
        FROM 
        (
                SELECT 
                        COUNT(DateJoined) AS date1,
                        DateJoined
                FROM 
                        leetcode.user_login
                GROUP BY MONTH(DateJoined)
                ORDER BY DateJoined
        )AS SubQuery1
) AS SubQuery2
WHERE SubQuery2.date2 IS NOT NULL;
