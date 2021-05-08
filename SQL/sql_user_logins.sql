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