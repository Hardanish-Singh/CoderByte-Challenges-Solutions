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