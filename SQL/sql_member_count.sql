SELECT 
        DISTINCT
                t2.*
FROM 
        maintable_BQH7X AS t1
JOIN 
(
        SELECT 
                ReportsTo,
                COUNT(ReportsTo) AS Members,
                CEIL(AVG(AGE)) AS `Average Age`
        FROM
                maintable_BQH7X
        WHERE ReportsTo IS NOT NULL
        GROUP BY ReportsTo
)AS t2